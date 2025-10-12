import React from 'react';
import styles from "./StartSection.module.css";

const StartSection = () => {
  return (
    <div>
        <div className={`${styles.layered} top-[85vh] w-1/2 max-w-[450px] opacity-30`} />
        <div className={`${styles.layered} top-[87.5vh] w-7/12 max-w-[525px] opacity-50`} />
        <div className={`${styles.layered} ${styles.mainSection} top-[90vh] w-2/3 max-w-[600px] text-center`}>
            <div>
                <p className="text-xl md:text-3xl font-[outfit] font-bold">Welcome to</p>
                <p className="text-4xl md:text-5xl font-[outfit] font-semibold">Algulus Line.</p>
            </div>
            <p className="text-base md:text-xl font-[outfit] font-normal">
                Join me on my <strong>personal exploration</strong> of coding.
            </p>
        </div>
    </div>
  )
};

export default StartSection;