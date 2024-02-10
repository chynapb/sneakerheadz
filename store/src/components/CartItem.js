import { Stack, Button } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import shoes from '../data/shoes.json';
import { formatCurrency } from '../utils/formatCurrency';

// Render item currently in cart -  display image, name, and price

export const CartItem = ({ id, quantity }) => {
  const { removeCartItem } = useCart();
  const shopItem = shoes.find((shoe) => shoe.id === id);

  if (shopItem == null) return null;

  return (
    <Stack className='d-flex align-items-center' direction='horizontal' gap='2'>
      <img
        src={shopItem.imgUrl}
        style={{ width: '125px', height: '100px', objectFit: 'cover' }}
        alt='Product'
      />
      <div className='me-auto'>
        <div>
          {shopItem.name}
          {quantity > 1 && (
            <span className='text-muted' style={{ fontSize: '.75rem' }}>
              {' '}
              x {quantity}
            </span>
          )}
        </div>
        <div className='text-muted' style={{ fontSize: '1rem' }}>
          {formatCurrency(shopItem.price)}
        </div>
      </div>
      <div>{formatCurrency(shopItem.price * quantity)} </div>
      <Button
        variant='outline-danger'
        style={{ borderRadius: '0px' }}
        size='sm'
        onClick={() => removeCartItem(shopItem.id)}
      >
        &times;
      </Button>
    </Stack>
  );
};
