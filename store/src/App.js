import './App.css';
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Shop } from './pages/Shop';
import { Success } from './pages/Success';
import { Cancel } from './pages/Cancel';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Navbar />
      <Header />
      <Container className='mb-5'>
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='success' element={<Success />} />
          <Route path='cancel' element={<Cancel />} />
        </Routes>
      </Container>
    </CartProvider>
  );
}

export default App;
