import { ReactNode } from "react";
import styles from "./articleFilme.module.css";

interface ArticleFilmeProps {
  children: ReactNode;
}

const ArticleFilme: React.FC<ArticleFilmeProps> = ({ children }) => {
  return <article className={styles.article}>{children}</article>;
};

export default ArticleFilme;

//Não está sendo utilizado, apenas
