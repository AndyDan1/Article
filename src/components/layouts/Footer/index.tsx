import { FC } from "react";

import Container from "../Container";

interface IFooterProps {}

const Footer: FC<IFooterProps> = ({}) => {
  return (
    <Container>
      <h4 style={{ fontSize: "4rem", textAlign: "center" }}>I am Footer</h4>
    </Container>
  );
};

export default Footer;
