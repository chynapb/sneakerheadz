import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { ItemCard } from './components/ItemCard';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Shop } from './pages/Shop';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Container className='mb-3'>
        <Routes>
          <Route path='/' element={<Shop />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
