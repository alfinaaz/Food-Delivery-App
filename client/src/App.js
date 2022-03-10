import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import  './App.css';
import {BrowserRouter , Route , Routes } from "react-router-dom";
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import Home from './Screen/Home';
import CartScreen from './Screen/CartScreen';

function App() {
  return (
    <div className="App">
    <Navbar />  
    <Carousel />
    <BrowserRouter>
    <Routes>
    <Route  path="/" element={<Home/>} />
    <Route exact path="/cart" element={<CartScreen/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
