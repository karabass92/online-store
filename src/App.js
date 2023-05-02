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

/**
 * TODO: Ко всему проекту: раз не используется TS, то будет большим плюсом использование propTypes, очень много
 * где используется, где до сих пор нет TS, а если их нет, то дебажить и масштабировать код можно будет охуеть.
 */

/**
 * TODO: Также комментарий по assets тут прикреплю:
 * Микродоеб совсем, но может на руку сыграть, если будешь знать: все JPG нужно предварительно сжимать, средний размер
 * JPG - это много, до меня на одном месте работы доебались когда оптимизировать начали)
 *
 * По SVG: можно сразу делать не просто вставку свг, а делать tsx/jsx компонент, например как у тебя есть SVG "close":
 * export const Close = ({ width, height, color, ...}) => {
 *     return (
 *         <svg width={width} height={height} viewBox=`0 0 ${width} ${height}` fill="none" xmlns="http://www.w3.org/2000/svg">
 *              <path d="M1 1L15.5 15.5M15.5 1L1 15.5" stroke={color}/>
 *         </svg>
 *     )
 * }
 * Тогда можно будет удобно и менять размер, и цвет менять, и еще чего-то, если прокинешь куда-то.
 */

/**
 * Также рекомендую в проект подтянуть если не ESLint, то prettier, чтобы он форматировал код, будет удобнее читать.
 * Но ESLint тоже хорошая штука, рекомендую
 */
const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                {
                    /**
                     * TODO: Если представить, что у тебя пулл страниц будет разрастаться,
                     * то имеет смысл в const/routes.(ts/js) положить массив типа:
                     * const routes = [
                     *  {
                     *      path: '/',
                     *      element: <Main />
                     *  },
                     *  {
                     *      path: '/shop',
                     *      element: <About />
                     *  },
                     *  ...
                     * ]
                     * Затем здесь его мапать как <Routes>{routes.map(route => <Route ... />)}</Routes>
                     */
                }
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/shop' element={<Shop />} />
                    <Route path='/about' element={<About />} />
                    {/** TODO: Орфографическая, пробел */}
                    <Route path='/contacts'element={<Contacts />} />
                    <Route path='/basket' element={<Basket />} />
                    <Route path='/checkout' element={<Checkout />} />
                    {/** TODO: Орфографическая, Success*/}
                    <Route path='/succescheckout' element={<SuccesCheckout />} />
                    <Route path='/product/:productId' element={<Product />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
};


export default App;