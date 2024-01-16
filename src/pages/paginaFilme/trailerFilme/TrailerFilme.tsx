import React from "react";
import styles from "./trailerFilme.module.css"

interface TrailerProps {
  videoUrl: string;
}

export default function Trailer({ videoUrl }: TrailerProps) {
  const video = videoUrl.split("v=")[1];
  return (
    <div className={styles.container}>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/watch?/${video}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}
