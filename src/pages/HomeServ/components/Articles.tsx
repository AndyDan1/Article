import { FC } from "react";

import Button from "../../../components/ui/Button";

import { IArticleServDb } from "../../../services/apiSliceArticleDb/interfacesForArticleDb";
import styles from "../styles.module.scss";
import {
  usePinnedProductMutation,
  useRemoveArticleMutation,
} from "../../../services/apiSliceArticleDb/apiSliceArticleDb";

interface IArticlesProps {
  data: IArticleServDb[];
  itemTrue: number;
  setItemTrue: (itemTrue: number) => void;
}

const Articles: FC<IArticlesProps> = ({ data, itemTrue, setItemTrue }) => {
  const [removeArticle] = useRemoveArticleMutation();
  const [pinnedProduct] = usePinnedProductMutation();
  const handlePin = (
    arr: IArticleServDb[],
    { title, id, description }: IArticleServDb
  ) => {
    arr.forEach((item: IArticleServDb) => {
      if (item.id === itemTrue) {
        pinnedProduct({
          title: item.title,
          id: itemTrue,
          pinned: false,
          description: item.description,
        });
      }
    });

    setItemTrue(id);

    pinnedProduct({
      title,
      pinned: true,
      description,
      id,
    });
  };
  const unHandlePin = ({ title, id, description }: IArticleServDb) => {
    pinnedProduct({
      title,
      id: id,
      pinned: false,
      description,
    });
  };
  const deleteHandler = (id: number) => {
    removeArticle(id);
  };

  return (
    <>
      {data.length ? (
        <ul>
          {data.map((item, i, arr) => (
            <li key={item.id} className={item.pinned ? "pinned" : ""}>
              <h3>{item.title}</h3>

              <div className={styles.lineUp}>
                <Button type="button" onClick={() => handlePin(arr, item)}>
                  Pin
                </Button>
                {item.pinned && (
                  <Button type="button" onClick={() => unHandlePin(item)}>
                    UnPin
                  </Button>
                )}
              </div>
              <p>{item.description}</p>
              <Button type="button" onClick={() => deleteHandler(item.id)}>
                Delete
              </Button>
            </li>
          ))}
        </ul>
      ) : (
        <p style={{ fontSize: "2rem", textAlign: "center" }}>NOTHING</p>
      )}
    </>
  );
};

export default Articles;
