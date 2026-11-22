import Product from '../../components/Product/Product';
import styles from './Catalog.module.css';
import searchIcon from '../../assets/search-icon.png';
import { useAppSelector } from '../../app/hooks';

function Catalog () {
  const products = useAppSelector((state) => state.catalog.products);

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
            {products.map((product) => {
              return (
                <div className={styles.productWrapper}>
                  <Product 
                    product={product}
                    key={product.id}
                  />
                </div>
              );
            })}
      </div>
    </main>
  );
}

export default Catalog;