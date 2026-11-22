import styles from './ProductAction.module.css';

interface ProductActionProps {
  handleAddToCart: () => void,
  isInCart: boolean,
  isEnoughAtStock: boolean,
}

function ProductAction ({ handleAddToCart, isInCart, isEnoughAtStock }: ProductActionProps) {  
  return (
    <div className={styles.wrapper}>
      {!isEnoughAtStock ? (
        <button disabled>Нема в наявності</button>
      ) : (
        isInCart ? (
          <button disabled>В кошику</button>
        ) : (
          <button onClick={handleAddToCart}>Додати до кошика</button>
        )
      )}
    </div>
  );
}

export default ProductAction;