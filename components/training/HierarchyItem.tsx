import React, { ReactNode, useState } from 'react';
import styles from "./HierarchyItem.module.css";
import Link from 'next/link';

interface DropdownProps {
  name: string;
  slug: string;
  children?: ReactNode;
  isSelected: boolean;
  onClick?: () => void;
}

const HierarchyItem = ({name, slug, children, isSelected, onClick}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(true&&(!isOpen));
  };

  if(React.Children.count(children)>0) {
    return (
      <div className={styles.container}>
        <div className={`${styles.row}`}>
          <Link 
            href={`/training/${slug}`}
            className={`${styles.bar} ${(isSelected)?styles.selected:""}`} 
            onClick={onClick}>
            <p className="text-base text-[#bdc2cb] font-[outfit] font-medium">{name}</p>
          </Link>
          <div 
            className={`${styles.caret}`}
            onClick={toggle} />
        </div>
        <div className={`${styles.menu} ${(isOpen)?"block":"hidden"}`}>
          {children}
        </div>
      </div>
    );
  } 
  else {
    return (
      <div className={styles.container}>
        <Link 
          href={`/training/${slug}`}
          className={`${styles.bar} ${(isSelected)?styles.selected:""}`} 
          onClick={onClick}>
          <p className="text-base text-[#bdc2cb] font-[outfit] font-medium">{name}</p>
        </Link>
      </div>
    );
  }
};

export default HierarchyItem;