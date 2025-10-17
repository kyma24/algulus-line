import React, { ReactNode } from 'react';
import { Components } from 'react-markdown';
import styles from './markdownComponents.module.css';

const markdownComponents : Components = {
  h1: (props) => (<h1 className={styles.h1} {...props} />),
  h2: (props) => (<h2 className={styles.h2} {...props} />),
  h3: (props) => (<h3 className={styles.h3} {...props} />),
  h4: (props) => (<h4 className={styles.h4} {...props} />),
  h5: (props) => (<h5 className={styles.h5} {...props} />),
  h6: (props) => (<h6 className={styles.h6} {...props} />),
  p: (props) => (<p className={styles.p} {...props} />),
  strong: (props) => (<strong className={styles.strong} {...props} />),
  em: (props) => (<em className={styles.em} {...props} />),
  br: () => (<br className={styles.br} />),
  blockquote: (props) => (<blockquote className={styles.blockquote} {...props} />),
  ul: (props) => (<ul className={styles.ul} {...props} />),
  ol: (props) => (<ol className={styles.ol} {...props} />),
};

export default markdownComponents;