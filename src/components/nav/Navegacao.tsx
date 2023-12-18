import styles from "./index.module.css";

const Navegacao: React.FC = () => {
  return (
    <nav className={styles.alinhamento}>
      <ul className={`${styles.listaStyle} ${styles.alinhamento}`}>
        <li>
          <a href="#">LANÇAMENTOS</a>
        </li>
        <li>
          <a href="#">AÇÃO</a>
        </li>
        <li>
          <a href="#">ANIMAÇÃO</a>
        </li>
        <li>
          <a href="#">SUSPENSE</a>
        </li>
        <li>
          <a href="#">TERROR</a>
        </li>
        <li>
          <a href="#">POLICIAL</a>
        </li>
        <li>
          <a href="#">FANTASIA</a>
        </li>
        <li>
          <a href="#">COMÉDIA</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navegacao;
