import { Button, Card, CardImg } from 'react-bootstrap';
import { CardBody, CardTitle } from 'reactstrap';
import { formatCurrency } from '../utils/formatCurrency';

export const ItemCard = ({ id, brand, name, color, price, imgUrl }) => {
  return (
    <Card style={{ border: 'none' }} className='shadow-sm'>
      <CardImg
        variant='top'
        src={imgUrl}
        height='300px'
        style={{ objectFit: 'cover' }}
      ></CardImg>
      <CardBody className='d-flex flex-column'>
        <CardTitle className='d-flex justify-content-between align-items-baseline mb-4'>
          <h5>{name}</h5>
          <span className='ms-2 text-muted' style={{ fontSize: '1rem' }}>
            {formatCurrency(price)}
          </span>
        </CardTitle>
        <Button className='btn btn-dark' style={{ border: 'none' }}>
          Add to cart
        </Button>
      </CardBody>
    </Card>
  );
};
