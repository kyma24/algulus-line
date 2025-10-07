'use client';

import Link from "next/link";
import React, { useState, useRef, useEffect } from 'react';
import styles from './TicketNav.module.css';

const TicketNav = () => {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("1vh");

  useEffect(() => {
    setHeight(expanded ? "60vh" : "1vh");
  }, [expanded]);

  return (
    <div className={styles.container}>
        <div className={`${styles.navMark} ${styles.part}`}/>
        <div className={`${styles.dispenserTop} ${styles.part}`} />
        <div className={`${styles.ticketContainer}`}>
          <div 
            className={`${styles.ticket}`}
            style={{ height }}>
              <div ref={contentRef} className={`${styles.content}`}>
                <Link href="/">
                  <div className="w-[50px] h-[50px] bg-amber-700 text-center">Home</div>
                </Link>
                <Link href="/">
                  <div className="w-[50px] h-[50px] bg-amber-700 text-center">Training</div>
                </Link>
                <Link href="/">
                  <div className="w-[50px] h-[50px] bg-amber-700 text-center">Depot</div>
                </Link>
              </div>
          </div>
          <div className={`${styles.ticketEnd}`} />
          <div
            onClick={() => setExpanded(!expanded)}
            className={`${styles.button} ${expanded ? `${styles.buttonDown} ${styles.expanded}` : ''}`} />
        </div>
        <div className={`${styles.dispenserBottom} ${styles.part}`} />
    </div>
  );
}

export default TicketNav;