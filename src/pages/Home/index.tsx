import { FC, useEffect, useState } from "react";
import { useAppSelector } from "../../app/hooks";

import Container from "../../components/layouts/Container";
import Form from "./components/Form";
import Articles from "./components/Articles";
import TextField from "../../components/ui/TextField/TextField";

import styles from "./styles.module.scss";
import { articleItem } from "../../features/sliceArticle/articleState";

interface IHomeProps {}

const Home: FC<IHomeProps> = () => {
  const articles = useAppSelector((state) => state.articles.articles);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const [arr, setArr] = useState<articleItem[]>([]);

  const filteredArticles = arr.filter(
    (article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const pinned = articles.filter((article) => article.pinned);
    const notPinned = articles
      .filter((article) => !article.pinned)
      .sort((a, b) => a.id - b.id);
    notPinned.unshift(...pinned);
    setArr([...notPinned]);
  }, [articles]);

  return (
    <div className={styles.home}>
      <Container>
        <Form />
        <TextField
          className={styles.search}
          placeholder="search..."
          value={searchQuery}
          onChange={(e) => handleSearch(e)}
        />
        <Articles filteredArticles={filteredArticles} />
      </Container>
    </div>
  );
};

export default Home;
