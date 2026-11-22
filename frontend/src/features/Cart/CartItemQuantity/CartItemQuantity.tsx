import { useEffect, useState } from 'react';
import styles from './CartItemQuantity.module.css';

interface CartItemQuantityProps {
  initialQuantity: number,
  handleChangeQuantity: (newQuantity: number) => void,
  handleRemoveFromCart: () => void,
  maxQuantity?: number,
}

function CartItemQuantity({ initialQuantity, handleChangeQuantity, handleRemoveFromCart, maxQuantity }: CartItemQuantityProps) {
  const [quantity, setQuantity] = useState(initialQuantity);
  const [isIncreaseAllowed, setIsIncreaseAllowed] = useState(!(maxQuantity && initialQuantity >= maxQuantity));
  const [isDecreaseAllowed, setIsDecreaseAllowed] = useState(initialQuantity > 1);

  const handleDecrement = () => {
    if (!isDecreaseAllowed) {
      return;
    }
    setQuantity((previous) => previous - 1)
  };
  const handleIncrement = () => {
    if (!isIncreaseAllowed) {
      return;
    }
    setQuantity((previous) => previous + 1)
  };
  const handleSet = (event: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
    const newQuantity = Number(event.target.value);
    if (newQuantity < 1) {
      setQuantity(1);
      return;
    }
    if (maxQuantity && newQuantity > maxQuantity) {
      setQuantity(maxQuantity);
      return;
    }
    setQuantity(newQuantity);
  }

  useEffect(() => {
    handleChangeQuantity(quantity);
    setIsDecreaseAllowed(quantity > 1);
    setIsIncreaseAllowed(!(maxQuantity && quantity >= maxQuantity));
  }, [quantity])

  return (
    <div className={styles.wrapper}>
      <div className={styles.quantityWrapper}>
        <button onClick={handleDecrement} disabled={!isDecreaseAllowed}>-</button>
        <input type='number' value={quantity} onChange={handleSet}></input>
        <button onClick={handleIncrement} disabled={!isIncreaseAllowed}>+</button>
      </div>
      <button onClick={handleRemoveFromCart}>Вилучити з кошика</button>
    </div>
  );
}

export default CartItemQuantity;