import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';


const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    <Route path='/' element={<div className='content'>main</div>} />
                    <Route path='/shop' element={<div className='content'>shop</div>} />
                    <Route path='/about' element={<div className='content'>about</div>} />
                    <Route path='/contacts' element={<div className='content'>contacts</div>} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
};


export default App;