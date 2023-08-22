import {
  Button,
  Container,
  Nav,
  NavbarBrand,
  Navbar as NavbarBs,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export const Navbar = () => {
  const { openCart, cartQuantity } = useCart();

  return (
    <NavbarBs sticky='top' className='navbar bg-dark shadow-sm mb-3'>
      <Container>
        <Nav className='me-auto'>
          <Nav.Link
            to='/'
            as={NavLink}
            style={{ color: 'white', fontSize: '1.5rem' }}
            className='link'
          >
            SHOP
          </Nav.Link>
        </Nav>
        <Button
          onClick={openCart}
          style={{
            width: '3rem',
            height: '3rem',
            position: 'relative',
            border: 'none',
          }}
          className='btn btn-secondary rounded-circle'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            className='bi bi-cart2'
            viewBox='0 0 16 16'
          >
            <path d='M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z' />
          </svg>
          {cartQuantity > 0 && (
            <div
              className='rounded-circle bg-danger d-flex justify-content-center align-items-center'
              style={{
                width: '1.5rem',
                height: '1.5rem',
                position: 'absolute',
                bottom: 0,
                right: 0,
                transform: 'translate(-30px, 5px)',
              }}
            >
              {cartQuantity}
            </div>
          )}
        </Button>
      </Container>
    </NavbarBs>
  );
};
