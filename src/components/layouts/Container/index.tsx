import { FC, PropsWithChildren } from "react";
import clsx from "clsx";

import styles from "./styles.module.scss";

interface IContainerProps {
  className?: string;
}

const Container: FC<PropsWithChildren<IContainerProps>> = ({
  children,
  className,
}) => {
  return <div className={clsx(styles.container, className)}>{children}</div>;
};

export default Container;
