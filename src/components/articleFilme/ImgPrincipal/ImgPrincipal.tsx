import React from "react";
import imgPrincipal from "./imgPrincipal.module.css";
import IImgPath from "interfaces/IImgPath";
import { Link } from "react-router-dom";

interface ImgPrincipalProps {
  IImgPath: IImgPath;
}

export default function ImgPrincipal({ IImgPath }: ImgPrincipalProps) {
  return (
    <div>
      <Link to={`/filme/${IImgPath.id}`}>
        <img
          className={imgPrincipal.img}
          src={IImgPath.path}
          alt={IImgPath.name}
          id={IImgPath.id?.toString()}
        />
      </Link>
    </div>
  );
}
