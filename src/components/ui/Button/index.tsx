import { FC, PropsWithChildren } from "react";

import styles from "./styles.module.scss";

interface IButtonProps {
  onClick?: () => void;
  type: "submit" | "button";
}

const Button: FC<PropsWithChildren<IButtonProps>> = ({ children, onClick }) => {
  return (
    <button className={styles.myButton} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
