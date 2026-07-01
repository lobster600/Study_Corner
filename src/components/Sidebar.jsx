import styles from "./Sidebar.module.css";

export default function Sidebar({ activeTab, setActiveTab }) {
  return (
    <aside className={styles.sidebar}>

      <button
        className={`${styles.item} ${activeTab === "shop" ? styles.active : ""}`}
        onClick={() =>
          setActiveTab(activeTab === "shop" ? "none" : "shop")
        }
      >
        Shop
      </button>

      <button
        className={`${styles.item} ${activeTab === "stats" ? styles.active : ""}`}
        onClick={() =>
          setActiveTab(activeTab === "stats" ? "none" : "stats")
        }
      >
        Stats
      </button>

    </aside>
  );
}