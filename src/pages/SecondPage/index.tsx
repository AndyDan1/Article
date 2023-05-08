import { FC, useState } from "react";
import { useGetCurrentQuery } from "../../services/apiSliceArticle";

import Container from "../../components/layouts/Container";
import Button from "../../components/ui/Button";
import ArticleItem from "./components/ArticleItem";

import { IArticle } from "../../services/interfacesForArticle";
import styles from "./styles.module.scss";

interface ISecondPageProps {}

const SecondPage: FC<ISecondPageProps> = ({}) => {
  const [click, setClick] = useState(10);
  const { data = [], isLoading, isError } = useGetCurrentQuery(click);

  const addArticle = () => {
    setClick((prev) => prev + 10);
  };

  if (isLoading) {
    return <h1 className={styles.title}>Loading...</h1>;
  }
  return (
    <div className={styles.root}>
      <Container>
        {isError && <h1 className={styles.title}>Something went wrong...</h1>}
        {!isError && (
          <>
            <Button type="button" onClick={() => addArticle()}>
              add article
            </Button>

            <ul>
              {data.map((item: IArticle, i: number) => (
                <ArticleItem
                  key={i}
                  title={item.title}
                  author={item.author}
                  description={item.description}
                  urlToImage={item.urlToImage}
                />
              ))}
            </ul>
          </>
        )}
      </Container>
    </div>
  );
};

export default SecondPage;
