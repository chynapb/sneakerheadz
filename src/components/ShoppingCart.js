import {
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  OffcanvasTitle,
  Stack,
} from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { CartItem } from './CartItem';
import { formatCurrency } from '../utils/formatCurrency';
import items from '../data/items.json';

export const ShoppingCart = ({ isOpen }) => {
  const { closeCart, cartItems } = useCart();

  return (
    <Offcanvas show={isOpen} placement='end' onHide={closeCart}>
      <OffcanvasHeader closeButton>
        <OffcanvasTitle>Cart</OffcanvasTitle>
      </OffcanvasHeader>
      <OffcanvasBody>
        <Stack gap='3'>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className='ms-auto fw-bold'>
            Total:{' '}
            {formatCurrency(
              cartItems.reduce((acc, curr) => {
                const shopItem = items.find((item) => item.id === curr.id);
                return acc + (shopItem?.price || 0) * curr.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </OffcanvasBody>
    </Offcanvas>
  );
};
