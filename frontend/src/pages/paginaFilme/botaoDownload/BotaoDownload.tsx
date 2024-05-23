import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "./botao.module.css";

interface BotaoProps {
  link: string;
  children: ReactNode;
}

export default function BotaoDownload({ link, children }: BotaoProps) {
  return (
    <div className={styles.container}>
      <Link to={link} target="_blank">
        <button className={styles.botao}>{children}</button>
      </Link>
    </div>
  );
}
