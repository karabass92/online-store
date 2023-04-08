import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';


const App = () => {
    return (
        <div className="App">
            <Header />
            <div className='content'>content</div>
            <Footer />
        </div>
    );
};


export default App;