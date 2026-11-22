import type { ProductType } from '../../types/types';
import styles from './Product.module.css';

interface ProductProps {
  product: ProductType,
  additional?: React.ReactElement | null,
}

function Product ({ product, additional = null }: ProductProps) {
  return (
    <div className={styles.container}>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <div className={styles.info}>
        <div className={styles.numbersWrapper}>
          <div className={styles.price}>{product.price}грн</div>
          <div className={styles.quantity}>Кількість: {product.stockQuantity}</div>
        </div>
        <div className={styles.status}>{product.status}</div>
      </div>
      {additional}
    </div>
  );
}

export default Product;