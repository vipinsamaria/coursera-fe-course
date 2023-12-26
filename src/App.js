import './App.css';
import Home from './pages/Home';
import Menu from './pages/Menu';
import OrderOnline from './pages/OrderOnline';
import Reservation from './pages/Reservation';
import Login from './pages/Login';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import {Routes, Route} from 'react-router-dom';
import ConfirmedBooking from './components/ConfirmedBooking';


function App() {
  return (
    <>
      <nav>
        <Nav />
      </nav>

      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="menu" element={<Menu />} />
        <Route path="orderonline" element={<OrderOnline />} />
        <Route path='login' element={<Login />} />
        <Route path='reservation' element={<Reservation />} />
        <Route path='bookingconfirmed' element={<ConfirmedBooking />} />
      </Routes>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;