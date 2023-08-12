import { Button, Card, CardImg } from 'react-bootstrap';
import { CardBody, CardTitle } from 'reactstrap';
import { formatCurrency } from '../utils/formatCurrency';

// Render each shopping item as a card element - display image, name, and price

export const ItemCard = ({ id, brand, name, color, price, imgUrl }) => {
  const quantity = 0;

  return (
    <Card style={{ border: 'none' }} className='h-100 shadow-sm'>
      <CardImg
        variant='top'
        src={imgUrl}
        style={{ objectFit: 'cover' }}
      ></CardImg>
      <CardBody className='d-flex flex-column'>
        <CardTitle className='d-flex justify-content-between align-items-baseline mb-4'>
          <h5>{name}</h5>
          <span className='ms-2 text-muted' style={{ fontSize: '1rem' }}>
            {formatCurrency(price)}
          </span>
        </CardTitle>
        <div className='mt-auto'>
          {quantity === 0 ? (
            <Button className='w-100 btn-dark' style={{ border: 'none' }}>
              Add to cart
            </Button>
          ) : (
            <div
              className='d-flex align-items-center flex-column'
              style={{ gap: '.5rem' }}
            >
              <div
                className='d-flex align-items-center justify-content-center'
                style={{ gap: '.5rem' }}
              >
                <Button className='btn-secondary' size='sm'>
                  -
                </Button>
                <div>{quantity} in cart</div>
                <Button className='btn-secondary' size='sm'>
                  +
                </Button>
              </div>
              <Button className='btn-danger' size='sm'>
                Remove
              </Button>
            </div>
          )}
        </div>
      </CardBody>
    </Card>
  );
};
