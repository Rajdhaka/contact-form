import styles from "./Navigation.module.css";

export default function Navigation() {
  // console.log(styles);
  return (
    // container
    <nav className={`${styles.navigation}`}>
      <div className={styles.logo}>
        <img src="./public/images/logo.png" alt="logo" />
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
