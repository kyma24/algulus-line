import React from 'react';
import styles from "./MainNav.module.css";
import Link from 'next/link';
import TitleHero from './TitleHero';

/*
vertical state, horizontal state
originates from top left corner, recedes in when changing
*/

const MainNav = () => {
  return (
    <div className={`${styles.container}`}>
        <div className={`${styles.logo} ${styles.glassTicket}`}>
            <div className={`${styles.face}`} />
        </div>
        <div className={`${styles.glassTicket} h-1/1`}>
            <TitleHero />
        </div>
        <div className={`${styles.menu} ${styles.glassTicket}`}>
            <Link className={`${styles.link}`} href="/">Hub</Link>
            <Link className={`${styles.link}`} href="/">Training</Link>
            <Link className={`${styles.link}`} href="/">Depot</Link>
        </div>
    </div>
  );
};

export default MainNav;