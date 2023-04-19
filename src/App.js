import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Main from './components/Main/Main';
import Shop from './components/Shop/Shop';
import Basket from './components/Basket/Basket';


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
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
};


export default App;