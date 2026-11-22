import { useAppDispatch, useAppSelector } from '../../app/hooks';
import Product from '../../components/Product/Product';
import styles from './Cart.module.css';
import CartItemQuantity from './CartItemQuantity/CartItemQuantity';
import { removeProduct, setProductQuantity } from './cartSlice';

function Cart () {
  const cartIndices = useAppSelector((state) => state.cart.cartItemsId);
  const cart = useAppSelector((state) => state.cart.cartItems);

  const dispatch = useAppDispatch();

  return (
    <main className={styles.main}>
      <h2 className={styles.title}>Кошик</h2>
      <div className={styles.cart}>
            {cartIndices.map((index) => {
              return (
                <div className={styles.itemWrapper}>
                  <Product 
                    product={cart[index].product}
                    additional={
                      <CartItemQuantity
                        initialQuantity={cart[index].quantity}
                        handleChangeQuantity={(newQuantity: number) => {dispatch(setProductQuantity({ productId: index, newQuantity }))}}
                        handleRemoveFromCart={() => {dispatch(removeProduct({ productId: index }))}}
                        maxQuantity={cart[index].product.stockQuantity}
                      />
                    }
                    key={index}
                  />
                </div>
              );
            })}
      </div>
    </main>
  );
}

export default Cart;