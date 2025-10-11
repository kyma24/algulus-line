import React from 'react';
import styles from './TitleHero.module.css';

const TitleHero = () => {
  return (
    <div className={styles.container}>
        <div className={styles.titleBack} />
        <div className={styles.title} />
    </div>
  );
}

export default TitleHero;