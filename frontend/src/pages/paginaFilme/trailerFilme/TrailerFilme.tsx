import React from "react";
import styles from "./trailerFilme.module.scss";

interface TrailerProps {
  videoUrl: string;
}

export default function Trailer({ videoUrl }: TrailerProps) {
  return (
    <div className={styles.container}>
      <iframe
        width="560"
        height="315"
        src={videoUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
