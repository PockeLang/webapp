import React from 'react';
import styles from './speak.module.css';

interface TopBarProps {
  topic: string;
  level: string;
}

const TopBar: React.FC<TopBarProps> = ({ topic, level }) => {
  return (
    <div className={styles.topBar}>
      <div className={styles.menuIcon}>☰</div>
      <div className={styles.modeInfo}>
        <p className={styles.modeLabel}>Level {level}</p>
        <p className={styles.modeName}>{topic}</p>
      </div>
    </div>
  );
};

export default TopBar;