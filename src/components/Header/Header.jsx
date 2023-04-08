import React from "react";
import style from './Header.module.css';
import logo from '../../assets/images/mainLogo.svg';
import basket from '../../assets/images/basket/basket.svg';
import basketDot from '../../assets/images/basket/basketDot.svg';
import telephone from '../../assets/images/telephone/telephone.svg';
import telephoneSmallWave from '../../assets/images/telephone/telephoneWaveSmallr.svg';
import telephoneBigWave from '../../assets/images/telephone/telephoneWaveBig.svg';


const Header = () => {
    return (
        <header className={style.main}>
            <section className={style.brandName}>
                <img src={logo} alt="logo" />
                <span>Womazing</span>
            </section>
            <section className={style.navigation}>
                <div className={style.item}>
                    Главная
                </div>
                <div className={style.item}>
                    Магазин
                </div>
                <div className={style.item}>
                    О бренде
                </div>
                <div className={style.item}>
                    Контакты
                </div>
            </section>
            <section className={style.rightSide}>
                <div className={style.callMakeBlock}>
                    <div className={style.telephoneContainer}>
                        <img src={telephone} alt="telephone" className={style.telephone}/>
                        <img src={telephoneSmallWave} alt="telephone" className={style.telephoneSmallWave}/>
                        <img src={telephoneBigWave} alt="telephone" className={style.telephoneBigWave}/>
                    </div>
                    <span>+7 (495) 823-54-12</span>
                </div>
                <div className={style.basketContainer}>
                    <img src={basket} alt="basket" className={style.basket}/>
                    <img src={basketDot} alt="basket" className={style.basketLeftDot}/>
                    <img src={basketDot} alt="basket" className={style.basketrightDot}/>
                </div>
            </section>
        </header>
    );
};


export default Header;