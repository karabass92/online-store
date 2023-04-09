import React, { useState } from "react";
import style from './Header.module.css';
import logo from '../../assets/images/mainLogo.svg';
import basket from '../../assets/images/basket/basket.svg';
import basketDot from '../../assets/images/basket/basketDot.svg';
import telephone from '../../assets/images/telephone/telephone.svg';
import telephoneSmallWave from '../../assets/images/telephone/telephoneWaveSmallr.svg';
import telephoneBigWave from '../../assets/images/telephone/telephoneWaveBig.svg';
import close from '../../assets/images/close.svg';
import { NavLink } from "react-router-dom";


const Header = () => {

    const [open, setOpen] = useState(false);

    return (
        <header className={style.main}>
            <section className={style.brandName}>
                <img src={logo} alt="logo" />
                <span>Womazing</span>
            </section>
            <nav className={style.navigation}>
                <div className={style.item}>
                    <NavLink to='/' className={(linkClass) => linkClass.isActive
                        ? style.active
                        : style.item}>Главная</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/shop' className={(linkClass) => linkClass.isActive
                        ? style.active
                        : style.item}>Магазин</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/about' className={(linkClass) => linkClass.isActive
                        ? style.active
                        : style.item}>О бренде</NavLink>
                </div>
                <div className={style.item}>
                    <NavLink to='/contacts' className={(linkClass) => linkClass.isActive
                        ? style.active
                        : style.item}>Контакты</NavLink>
                </div>
            </nav>
            <section className={style.rightSide}>
                <div className={style.callMakeBlock}>
                    <button className={style.telephoneContainer} onClick={() => setOpen(true)}>
                        <img src={telephone} alt="telephone" className={style.telephone} />
                        <img src={telephoneSmallWave} alt="telephone" className={style.telephoneSmallWave} />
                        <img src={telephoneBigWave} alt="telephone" className={style.telephoneBigWave} />
                    </button>
                    <span>+7 (495) 823-54-12</span>
                </div>
                <div className={style.basketContainer}>
                    <img src={basket} alt="basket" className={style.basket} />
                    <img src={basketDot} alt="basket" className={style.basketLeftDot} />
                    <img src={basketDot} alt="basket" className={style.basketrightDot} />
                </div>
            </section>
            <div className={`${style.overlay} ${open && style.visible}`} onClick={() => setOpen(false)}></div>
            <div className={`${style.modal} ${open && style.visible}`}>
                <img src={close} alt="close" onClick={() => setOpen(false)} />
                <h2>Заказать обратный звонок</h2>
                <form action="#">
                    <input type="text" placeholder="Имя" />
                    <input type="email" placeholder="E-mail" />
                    <input type="text" placeholder="Телефон" />
                    <button>Заказать звонок</button>
                </form>
            </div>
        </header>
    );
};


export default Header;