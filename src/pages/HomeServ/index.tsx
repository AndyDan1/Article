import { FC, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Container from "../../components/layouts/Container";
import Form from "./components/Form";
import TextField from "../../components/ui/TextField/TextField";
import Articles from "./components/Articles";
import { useGetArticleDbQuery } from "../../services/apiSliceArticleDb/apiSliceArticleDb";

interface IHomeServProps {}

const HomeServ: FC<IHomeServProps> = ({}) => {
  const { data = [], error, isLoading, isSuccess } = useGetArticleDbQuery("");
  const [itemTrue, setItemTrue] = useState<number>(-1);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredArticles = data.filter(
    (article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    isSuccess &&
      data.forEach((item) => {
        if (item.pinned) {
          setItemTrue(item.id);
        }
      });
  }, [data]);
  if (isLoading)
    return (
      <Container>
        <h1 style={{ fontSize: "2rem", textAlign: "center", margin: "2rem 0" }}>
          Loading...
        </h1>
      </Container>
    );
  if (error)
    return (
      <Container>
        <h1 style={{ fontSize: "2rem", textAlign: "center", margin: "2rem 0" }}>
          Error
        </h1>
      </Container>
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
        <Articles
          data={filteredArticles}
          itemTrue={itemTrue}
          setItemTrue={setItemTrue}
        />
      </Container>
    </div>
  );
};

export default HomeServ;
