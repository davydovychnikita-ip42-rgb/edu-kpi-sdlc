import styles from './Product.module.css';

interface ProductProps {
  id: string,
  ownerId: string,
  title: string,
  description: string,
  price: number,
  stockQuantity: number,
  status: string, // create ProductStatus type
  createdAt: EpochTimeStamp,
}

function Product (props: ProductProps) {
  return (
    <div className={styles.container}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <div className={styles.info}>
        <div className={styles.price}>{props.price}грн</div>
        <div className={styles.status}>{props.status}</div>
        <div className={styles.quantity}>Кількість: {props.stockQuantity}</div>
      </div>
    </div>
  );
}

export default Product;