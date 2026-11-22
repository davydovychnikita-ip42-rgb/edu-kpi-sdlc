import Product from '../../components/Product/Product';
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
        <div className={styles.productWrapper}>
          <Product
            id='1'
            ownerId='1'
            title='Product Example'
            description='Example prodcut lorem ipsum doloers blablabla'
            price={200}
            stockQuantity={22}
            status='В наявності'
            createdAt={Date.UTC(2026, 11, 22, 12, 30)}
            key={'1'}
          />
        </div>
      </div>
    </main>
  );
}

export default Catalog;