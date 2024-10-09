import Link from "next/link";
import styles from "../page.module.css";

export default function SpeakPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Speak Page</h1>
        <p>This is where you can practice speaking.</p>
        <Link href="/">Back to Main</Link>
      </main>
    </div>
  );
}
