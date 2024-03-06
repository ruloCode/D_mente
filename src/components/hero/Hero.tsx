import React from "react";
import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <main className={styles.main}>
      <div className={styles.contents}>
        <h1>{`Agencia D'mente`}</h1>
        <p>Tu marca, nuestra misión más importante.</p>
        <div className={styles.buttons}>
          <a
            href="https://wa.me/573202696826?text=Estoy%20interesado,%20me%20podr%C3%ADan%20dar%20más%20información"
            rel="noopener noreferrer"
            className="button button--secondary "
            target="_blank"
          >
            Comenzar
          </a>
        </div>
      </div>
      {/* <video
        src={require("../../../videos/video.mp4")}
        autoPlay
        muted
        
        loop
        className={styles.video}
    /> */}
    </main>
  );
};

export default Hero;
