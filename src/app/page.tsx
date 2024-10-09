import Link from "next/link";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.phoneScreen}>
          <h1>Home Page</h1>
          <p>Welcome to the home page!</p>
        </div>
        <Link href="/">Back to Main</Link>
      </main>
    </div>
  );
}
