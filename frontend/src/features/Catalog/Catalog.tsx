import Product from '../../components/Product/Product';
import styles from './Catalog.module.css';
import searchIcon from '../../assets/search-icon.png';

function Catalog () {
  return (
    <main className={styles.main}>
      <div className={styles.toolbarWrapper}>
        <div className={styles.toolbar}>
        <h2 className={styles.title}>Каталог</h2>
        <div className={styles.searchWrapper} onClick={() => {document.getElementById('search')?.focus()}}>
          <label htmlFor='search'>
            <img className={styles.searchIcon} src={searchIcon} alt='' />
          </label>
          <input id='search' type='text' placeholder='Пошук'></input>
        </div>
        </div>
      </div>
      <div className={styles.catalog}>
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