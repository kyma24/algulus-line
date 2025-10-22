import React from 'react';
import styles from "../depot.module.css";

import MainNav from '@/components/MainNav';

const page = () => {
  return (
    <div className={styles.container}>
      <MainNav />
      
      <div className="w-1/1 h-20" />
    </div>
  )
}

export default page