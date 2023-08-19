import { Stack, Button } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import items from '../data/items.json';
import { formatCurrency } from '../utils/formatCurrency';

export const CartItem = ({ id, quantity }) => {
  const { removeCartItem } = useCart();
  const shopItem = items.find((item) => item.id === id);

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
        size='sm'
        onClick={() => removeCartItem(shopItem.id)}
      >
        &times;
      </Button>
    </Stack>
  );
};
