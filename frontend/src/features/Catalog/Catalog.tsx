import styles from './Catalog.module.css';

function Catalog () {
  return (
    <main className={styles.main}>
      <div className={styles.toolbarWrapper}>
        <div className={styles.toolbar}>
          Here will be Search
        </div>
      </div>
      <div className={styles.catalog}>
        <h2>Catalog</h2>
      </div>
    </main>
  );
}

export default Catalog;