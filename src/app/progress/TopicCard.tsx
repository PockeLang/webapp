"use client";
import React, { useState } from "react";
import styles from "./progress.module.css";

interface TopicCardProps {
  name: string;
  level: number;
  description: string;
}

const TopicCard: React.FC<TopicCardProps> = ({ name, level, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={styles.topicCard} onClick={toggleDescription}>
      <div>
        <p>{name}</p>
        <p>Level: {level}</p>
      </div>
      {isExpanded && <p className={styles.description}>{description}</p>}
    </div>
  );
};

export default TopicCard;

