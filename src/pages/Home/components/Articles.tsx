import { FC } from "react";
import { useAppDispatch } from "../../../app/hooks";
import {
  sliceHandlePin,
  sliceHandleUnPin,
} from "../../../features/sliceArticle";

import Button from "../../../components/ui/Button";

import { articleItem } from "../../../features/sliceArticle/articleState";
import styles from "../styles.module.scss";

interface IArticlesProps {
  filteredArticles: articleItem[];
}

const Articles: FC<IArticlesProps> = ({ filteredArticles }) => {
  const dispatch = useAppDispatch();
  const handlePin = (id: number) => {
    dispatch(sliceHandlePin(id));
  };
  const unHandlePin = (id: number) => {
    dispatch(sliceHandleUnPin(id));
  };

  return (
    <>
      {filteredArticles.length ? (
        <ul>
          {filteredArticles.map((item) => (
            <li key={item.id} className={item.pinned ? "pinned" : ""}>
              <h3>{item.title}</h3>

              <div className={styles.lineUp}>
                <Button type="button" onClick={() => handlePin(item.id)}>
                  Pin
                </Button>
                {item.pinned && (
                  <Button type="button" onClick={() => unHandlePin(item.id)}>
                    UnPin
                  </Button>
                )}
              </div>
              <p>{item.description}</p>
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
