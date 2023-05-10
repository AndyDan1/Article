import { FC } from "react";
import { NavLink } from "react-router-dom";
import { books } from "../../../assets/constants/books";

import Container from "../Container";

import styles from "./styles.module.scss";

interface IHeaderProps {}

const Header: FC<IHeaderProps> = ({}) => {
  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <nav>
          <NavLink to={books.home}>home</NavLink>
          <NavLink to={books.homeServ}>homeServ</NavLink>
          <NavLink to={books.secondPage}>secondPage</NavLink>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
