"use client";

import React from "react";
import styles from "./speak.module.css";
import { useState } from "react";

interface ConversationBubbleProps {
  text: string;
  translation: string;
  isUser: boolean;
}

const ConversationBubble: React.FC<ConversationBubbleProps> = ({
  text,
  isUser,
  translation,
}) => {
  const [showTranslation, setShowTranslation] = useState(false);

  const toggleTranslation = () => {
    setShowTranslation(!showTranslation);
  };

  return (
    <div
      className={`${styles.bubble} ${
        isUser ? styles.userBubble : styles.botBubble
      }`}
      onClick={toggleTranslation}
    >
      <p>{text}</p>
      {showTranslation && (
        <p className={styles.translation}>{translation}</p>
      )}
    </div>
  );
};

export default ConversationBubble;
