import { FC } from "react";

import photo from "../../../assets/img/lviv.jpg";
import styles from "../styles.module.scss";

interface IArticleItemProps {
  title: string | undefined;
  urlToImage: string | undefined;
  author: string | undefined;
  description: string | undefined;
}

const ArticleItem: FC<IArticleItemProps> = ({
  title,
  urlToImage,
  author,
  description,
}) => {
  return (
    <li>
      <p>
        Title:
        <br />
        {title}
      </p>
      <p>Img:</p>
      <div className={styles.img}>
        <img src={urlToImage === null ? photo : urlToImage} alt="" />
      </div>
      <p>
        Author:
        <br />
        {author}
      </p>
      <p>
        Description: <br />
        {description}
      </p>
    </li>
  );
};

export default ArticleItem;
