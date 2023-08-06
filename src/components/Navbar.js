import { Button, Container, Nav, Navbar as NavbarBs } from 'reactstrap';

export const Navbar = () => {
  return (
    <NavbarBs sticky='top' className='bg-dark shadow-sm mb-3'>
      <Container>
        <Button>Cart</Button>
      </Container>
    </NavbarBs>
  );
};
