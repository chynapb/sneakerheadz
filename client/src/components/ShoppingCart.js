import {
  Button,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  OffcanvasTitle,
  Stack,
} from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { CartItem } from './CartItem';
import { formatCurrency } from '../utils/formatCurrency';
import shoes from '../data/shoes.json';

// Display all items in cart

export const ShoppingCart = ({ isOpen }) => {
  const { closeCart, cartItems, cartQuantity, clearCart } = useCart();

  // Checkout functionality
  const checkout = async () => {
    await fetch('https://sneakerheadz-06fa4353b04d.herokuapp.com/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items: cartItems }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        // Send user to Stripe
        if (response.url) {
          window.location.assign(response.url);
          clearCart();
        }
      });
  };

  return (
    <Offcanvas show={isOpen} placement='end' onHide={closeCart}>
      <OffcanvasHeader closeButton>
        <OffcanvasTitle>Cart</OffcanvasTitle>
      </OffcanvasHeader>
      <OffcanvasBody>
        <Stack gap='3'>
          {cartQuantity === 0 ? (
            <div>
              <h6>Your cart is empty! Let's fix that...</h6>
            </div>
          ) : (
            <>
              {cartItems.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
              <div className='ms-auto fw-bold'>
                Total:{' '}
                {formatCurrency(
                  cartItems.reduce((acc, curr) => {
                    const shopItem = shoes.find((shoe) => shoe.id === curr.id);
                    return acc + (shopItem?.price || 0) * curr.quantity;
                  }, 0)
                )}
              </div>
              <div className='mt-2'>
                {cartQuantity > 0 && (
                  <Button
                    className='w-100 btn-dark'
                    style={{ border: 'none', borderRadius: '0px' }}
                    onClick={checkout}
                  >
                    Checkout
                  </Button>
                )}
              </div>
            </>
          )}
        </Stack>
      </OffcanvasBody>
    </Offcanvas>
  );
};
