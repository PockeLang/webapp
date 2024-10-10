import Link from "next/link";
import styles from "./speak.module.css";
import TopBar from "./TopBar";

export default function HomePage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.phoneScreen}>
          <TopBar topic="Greetings" level="1"/>
        </div>
      </main>
    </div>
  );
}
