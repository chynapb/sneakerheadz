import items from '../data/items.json';
import { ItemCard } from '../components/ItemCard';
import { Row, Col } from 'react-bootstrap';

// Map through each item and render to page

export const Shop = () => {
  return (
    <Row xs={1} md={2} lg={3} className='g-4'>
      {items.map((item) => (
        <Col key={item.id}>
          <ItemCard {...item} />
        </Col>
      ))}
    </Row>
  );
};
