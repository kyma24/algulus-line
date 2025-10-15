'use client';

import React from 'react';
import styles from "./MainNav.module.css";
import Link from 'next/link';
import TitleHero from './TitleHero';

import { pages } from "../constants/pages";
import { usePathname } from 'next/navigation';

const MainNav = () => {
  const path = usePathname();
  return (
    <div className={`${styles.container}`}>
        <div className={`${styles.logo} ${styles.glassTicket}`}>
            <div className={`${styles.face}`} />
        </div>
        <div className={`${styles.hideable} ${styles.glassTicket} h-1/1`}>
            <TitleHero />
        </div>
        <div className={`${styles.menu} ${styles.glassTicket}`}>
            {[0,1,2].map(i => (
              <Link key={i} 
                    className={`${(pages[i].href==path) ? styles.currentLink : ''} ${styles.link}`} 
                    href={pages[i].href}>
                {pages[i].name}
              </Link>
            ))}
        </div>
    </div>
  );
};

export default MainNav;