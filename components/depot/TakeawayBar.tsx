'use client';

import { useState } from "react";
import styles from "./TakeawayBar.module.css";

export default function TakeawayBar({content} : {content: string}) {
    const [noteOpen, setNoteOpen] = useState(false);
  
    return (
        <>
            <div className={styles.takeaways}>
                <p>TAKE AWAYS</p>
            </div>
        </>
    );

}