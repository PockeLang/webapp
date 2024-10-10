import React from "react";
import styles from "./speak.module.css";

interface ConversationBubbleProps {
  text: string;
  isUser: boolean;
}

const ConversationBubble: React.FC<ConversationBubbleProps> = ({
  text,
  isUser,
}) => {
  return (
    <div
      className={`${styles.bubble} ${
        isUser ? styles.userBubble : styles.botBubble
      }`}
    >
      {text}
    </div>
  );
};

export default ConversationBubble;
