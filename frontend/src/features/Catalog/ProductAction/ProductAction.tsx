import styles from './ProductAction.module.css';

interface ProductActionProps {
  handleAddToCart: () => void,
  isInCart: boolean,
}

function ProductAction ({ handleAddToCart, isInCart }: ProductActionProps) {
  return (
    <div className={styles.wrapper}>
      {isInCart ? (
        <button disabled>В кошику</button>
      ) : (
        <button onClick={handleAddToCart}>Додати до кошика</button>
      )}
    </div>
  );
}

export default ProductAction;