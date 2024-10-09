import Link from "next/link";
import styles from "../page.module.css";

export default function ProgressPage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Progress Page</h1>
        <p>Track your learning progress here.</p>
        <Link href="/">Back to Main</Link>
      </main>
    </div>
  );
}
