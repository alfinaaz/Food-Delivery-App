import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import {BrowserRouter , Route , Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './Screen/Home';
import CartScreen from './Screen/CartScreen';
import RegisterScreen from './Screen/RegisterScreen';
import LoginScreen from './Screen/LoginScreen';
import Orders from './Screen/Orders';




function App() {
  return (
    <div className="App">
    <Navbar />  
    <BrowserRouter>
    <Routes>
    <Route  path="/" element={<Home />} />
    <Route  path="/cart" element={<CartScreen />} />
    <Route path="/register" element= {<RegisterScreen />} />
    <Route path="/login" element={<LoginScreen />} />
    <Route path="/orders" element={<Orders />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
