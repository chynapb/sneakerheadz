import {
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  OffcanvasTitle,
  Stack,
} from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { CartItem } from './CartItem';

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
        </Stack>
      </OffcanvasBody>
    </Offcanvas>
  );
};
