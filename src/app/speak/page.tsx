import styles from "./speak.module.css";
import TopBar from "./TopBar";
import ConversationBubble from "./ConversationBubble";
import MicrophoneButton from "./MicrophoneButton";

export default function HomePage() {
  let conversations = [
    { text: "Hello! How are you?", isUser: false },
    { text: "I'm doing well, thanks for asking!", isUser: true },
    {
      text: "That's great to hear. What are your plans for today?",
      isUser: false,
    },
    { text: "I'm planning to go for a walk in the park.", isUser: true },
    { text: "That sounds lovely. Enjoy your walk!", isUser: false },
  ];
  conversations = conversations.concat(conversations);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.phoneScreen}>
          <TopBar topic="Greetings" level="1" />
          <div className={styles.conversationContainer}>
            {conversations.map((conv, index) => (
              <ConversationBubble
                key={index}
                text={conv.text}
                isUser={conv.isUser}
              />
            ))}
          </div>
          <MicrophoneButton />
        </div>
      </main>
    </div>
  );
}
