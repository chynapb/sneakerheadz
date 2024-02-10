import shoes from '../data/shoes.json';
import { ShoeCard } from '../components/ShoeCard';
import { Row, Col } from 'react-bootstrap';

// Map through each item and render to page

export const Home = () => {
  return (
    <Row xs={1} md={2} lg={3} className='g-4'>
      {shoes.map((shoe) => (
        <Col key={shoe.id}>
          <ShoeCard {...shoe} />
        </Col>
      ))}
    </Row>
  );
};
