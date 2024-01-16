import React from "react";
import styles from "./imgPrincipal.module.css";
import IImgPath from "interfaces/IImgPath";

interface ImgPrincipalProps {
  IImgPath: IImgPath;
}

export default function ImgPrincipal({ IImgPath }: ImgPrincipalProps) {
  return (
    <div>
      <img
        className={styles.img}
        src={IImgPath.path}
        alt={IImgPath.name}
        id={IImgPath.id?.toString()}
      />
    </div>
  );
}
