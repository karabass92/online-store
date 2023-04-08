import React from "react";
import { NavLink } from "react-router-dom";
import style from './Footer.module.css';
import logo from '../../assets/images/mainLogo.svg';
import instagram from '../../assets/images/instagramIcon.png';
import facebook from '../../assets/images/facebookIcon.svg';
import twiter from '../../assets/images/twiterIcon.svg';
import visa from '../../assets/images/visaIcon.svg';


const Footer = () => {
    return (
        <footer className={style.main}>
            <section className={style.leftSide}>
                <div>
                    <div className={style.brandName}>
                        <img src={logo} alt="logo" />
                        <span>Womazing</span>
                    </div>
                    <div className={style.generalInfo}>
                        <p>© Все права защищены</p>
                        <p>Политика конфиденциальности</p>
                        <p>Публичная оферта</p>
                    </div>
                </div>
                <div className={style.navigation}>
                    <div className={style.item}>
                        <NavLink to='/'className={(linkClass) => linkClass.isActive ? style.active : style.item}>Главная</NavLink>
                    </div>
                    <div className={style.item}>
                        <div className={style.shop}>
                            <p>
                                <NavLink to='/shop'className={(linkClass) => linkClass.isActive ? style.active : style.item}>Магазин</NavLink>
                            </p>
                            <span>Пальто</span>
                            <span>Свитшоты</span>
                            <span>Кардиганы</span>
                            <span>Толстовки</span>
                        </div>
                    </div>
                    <div className={style.item}>
                        <NavLink to='/about'className={(linkClass) => linkClass.isActive ? style.active : style.item}>О бренде</NavLink>
                    </div>
                    <div className={style.item}>
                        <NavLink to='/contacts'className={(linkClass) => linkClass.isActive ? style.active : style.item}>Контакты</NavLink>
                    </div>
                </div>
            </section>
            <section>
                <p className={style.telephone}>+7 (495) 823-54-12</p>
                <p className={style.email}>hello@womazing.com</p>
                <div className={style.socials}>
                    <img src={instagram} alt="instagram" className={style.instagram} />
                    <img src={facebook} alt="facebook" className={style.facebook} />
                    <img src={twiter} alt="twiter" className={style.twiter} />
                </div>
                <div className={style.visa}>
                    <img src={visa} alt="visa" />
                </div>
            </section>
        </footer>
    );
};


export default Footer;