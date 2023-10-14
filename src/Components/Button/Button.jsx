import { MdMessage } from "react-icons/md";
import styles from "./Button.module.css";

const Button = ({ children, icon, isOutline }) => {
  return (
    <button
      className={isOutline === true ? styles.outline_btn : styles.primary_btn}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;
