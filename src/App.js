import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Main from './components/Main/Main';
import Shop from './components/Shop/Shop';
import Basket from './components/Basket/Basket';
import Checkout from './components/Checkout/Checkout';
import SuccesCheckout from './components/SuccesCheckout/SuccesCheckout';
import Product from './components/Product/Product';


const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/shop' element={<Shop />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contacts'element={<Contacts />} />
                    <Route path='/basket' element={<Basket />} />
                    <Route path='/checkout' element={<Checkout />} />
                    <Route path='/succescheckout' element={<SuccesCheckout />} />
                    <Route path='/product/:productId' element={<Product />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
};


export default App;