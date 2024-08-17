import React from "react";
import styles from "./hamburguer.module.scss";
import { ReactComponent as BurgerIcon } from "../../assets/burguer.svg";

interface HamburguerProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Hamburguer({ open, setOpen }: HamburguerProps) {
  return (
    <button 
      className={`${styles.botao__burguer} ${open ? styles["botao__burguer--ativo"] : ""}`} 
      onClick={() => setOpen(!open)}
    >
      <BurgerIcon width={24} height={24} />
    </button>
  );
}
