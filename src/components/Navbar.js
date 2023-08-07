import { Button, Container, Nav, Navbar as NavbarBs } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
  return (
    <NavbarBs sticky='top' className='bg-dark shadow-sm mb-3'>
      <Container>
        <Button
          style={{
            width: '3rem',
            height: '3rem',
            position: 'relative',
            border: 'none',
          }}
          variant='outline-primary'
          className='rounded-circle'
        >
          <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
        </Button>
      </Container>
    </NavbarBs>
  );
};
