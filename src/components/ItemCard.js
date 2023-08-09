import {
  Button,
  Card,
  CardBody,
  CardGroup,
  CardImg,
  CardTitle,
  Col,
  Row,
  Container,
} from 'reactstrap';

export const ItemCard = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm='3'>
          <Card>
            <CardImg src='https://cdn.flightclub.com/2200/TEMPLATE/253215/1.jpg'></CardImg>
            <CardBody>
              <CardTitle tag='h5'>Nike</CardTitle>
              <Button>Add to cart</Button>
            </CardBody>
          </Card>
        </Col>
        <Col sm='3'>
          <Card>
            <CardImg src='https://cdn.flightclub.com/2200/TEMPLATE/253215/1.jpg'></CardImg>
            <CardBody>
              <CardTitle tag='h5'>Nike</CardTitle>
              <Button>Add to cart</Button>
            </CardBody>
          </Card>
        </Col>
        <Col sm='3'>
          <Card>
            <CardImg src='https://cdn.flightclub.com/2200/TEMPLATE/253215/1.jpg'></CardImg>
            <CardBody>
              <CardTitle tag='h5'>Nike</CardTitle>
              <Button>Add to cart</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
