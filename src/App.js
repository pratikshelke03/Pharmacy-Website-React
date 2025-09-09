import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Create_account from './Pages/Create_account';
import Login from './Pages/Login';
import Medicines from './Pages/Medicines';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Product_Details from './Pages/Product_Details';
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';
import Profile from './Pages/Profile';
import EditProfile from './Pages/EditProfile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create_account' element={<Create_account />} />
        <Route path='/login' element={<Login />} />
        <Route path='/medicines' element={<Medicines />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product_details/:product_id' element={<Product_Details />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/editprofile' element={<EditProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
