import React, { ReactNode, useState } from 'react';
import styles from "./HierarchyItem.module.css";

interface DropdownProps {
  name: string;
  children?: ReactNode;
  isSelected: boolean;
  onClick?: () => void;
}

const HierarchyDrop = ({name, children, isSelected, onClick}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(true&&(!isOpen));
  };

  if(React.Children.count(children)>0) {
    return (
      <div className={styles.container}>
        <div className={`${styles.row}`}>
          <div className={`${styles.bar} ${(isSelected)?styles.selected:""}`} onClick={onClick}>
            <p className="text-base text-[#bdc2cb] font-[outfit] font-medium">{name}</p>
          </div>
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
        <div className={`${styles.bar} ${(isSelected)?styles.selected:""}`} onClick={onClick}>
          <p className="text-base text-[#bdc2cb] font-[outfit] font-medium">{name}</p>
        </div>
      </div>
    );
  }
};

export default HierarchyDrop;