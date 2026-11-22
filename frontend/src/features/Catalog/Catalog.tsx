import Product from '../../components/Product/Product';
import styles from './Catalog.module.css';
import searchIcon from '../../assets/search-icon.png';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { addProduct } from '../Cart/cartSlice';
import ProductAction from './ProductAction/ProductAction';

function Catalog () {
  const products = useAppSelector((state) => state.catalog.products);
  const cart = useAppSelector((state) => state.cart.cartItems);
  
  const dispatch = useAppDispatch();

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
                    additional={
                      <ProductAction
                        handleAddToCart={() => {dispatch(addProduct({ product: product, quantity: 1 }))}}
                        isInCart={cart[product.id] !== undefined}
                      />
                    }
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