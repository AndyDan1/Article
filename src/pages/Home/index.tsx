import { FC, useState } from "react";
import { useAppSelector } from "../../app/hooks";

import Container from "../../components/layouts/Container";
import Form from "./components/Form";
import Articles from "./components/Articles";
import TextField from "../../components/ui/TextField/TextField";

import styles from "./styles.module.scss";

interface IHomeProps {}

const Home: FC<IHomeProps> = () => {
  const articles = useAppSelector((state) => state.articles.articles);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  
  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
