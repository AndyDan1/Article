import { FC } from "react";
import clsx from "clsx";

import styles from "./styles.module.scss";

interface ITextFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className?: string;
}

const TextField: FC<ITextFieldProps> = ({
  value,
  onChange,
  placeholder,
  className,
}) => {
  return (
    <input
      className={clsx(styles.myInput, className)}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default TextField;
