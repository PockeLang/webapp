"use client";

import React from "react";
import styles from "./speak.module.css";

const handlePress = () => {
  console.log("Microphone button pressed");
};

const MicrophoneButton: React.FC = () => {
  return (
    <button className={styles.microphoneButton} onClick={handlePress}>
      🎤
    </button>
  );
};

export default MicrophoneButton;
