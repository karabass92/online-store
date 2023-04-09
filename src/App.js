import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import About from './components/About/About';


const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <div className='contentWrapper'>
                    <Routes>
                        <Route path='/' element={<div>main</div>} />
                        <Route path='/shop' element={<div>shop</div>} />
                        <Route path='/about' element={<About />} />
                        <Route path='/contacts'element={<div>contacts</div>} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
};


export default App;