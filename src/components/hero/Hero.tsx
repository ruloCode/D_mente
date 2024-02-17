import React from "react";
import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <main className={styles.main}>
    <div className={styles.contents}>
        <h1>{`Agencia D'mente`}</h1>
        <p>Tu marca, nuestra misión más importante.</p>
        <div className={styles.buttons}>
            <button>Comenzar</button>
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
