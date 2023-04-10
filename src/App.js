import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Main from './components/Main/Main';


const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <div className='contentWrapper'>
                    <Routes>
                        <Route path='/' element={<Main />} />
                        <Route path='/shop' element={<div>shop</div>} />
                        <Route path='/about' element={<About />} />
                        <Route path='/contacts'element={<Contacts />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
};


export default App;