import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Shop } from './pages/Shop';
import './App.css';
import { Filter } from './components/Filter';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Navbar />
      <Header />
      <Filter />
      <Container className='mb-3'>
        <Routes>
          <Route path='/' element={<Shop />} />
        </Routes>
      </Container>
    </CartProvider>
  );
}

export default App;
