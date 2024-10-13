import Link from "next/link";
import styles from "./progress.module.css";
import TopicCard from "./TopicCard";

const topics = [
  {
    name: "Transportation",
    level: 1,
    description: "Learn about different modes of transportation.",
  },
  // Add more topics as needed
];

export default function ProgressPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Topics learned</h1>
        <div className={styles.topicsList}>
          {topics.map((topic, index) => (
            <TopicCard
              key={index}
              name={topic.name}
              level={topic.level}
              description={topic.description}
            />
          ))}
        </div>
        <h2>Upcoming lessons...</h2>
        <TopicCard
          name={topics[0].name}
          level={topics[0].level}
          description={topics[0].description}
        />
        <Link href="/">Back to Main</Link>
      </main>
    </div>
  );
}