import React from "react";
import style from './Footer.module.css';
import logo from '../../assets/images/footerLogo.svg';
import instagram from '../../assets/images/instagramIcon.png';
import facebook from '../../assets/images/facebookIcon.png';
import twiter from '../../assets/images/twiterIcon.png';
import visa from '../../assets/images/visaIcon.png';


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
                    <div className={style.item}>Главная</div>
                    <div className={style.item}>
                        <div className={style.shop}>
                            <p>Магазин</p>
                            <span>Пальто</span>
                            <span>Свитшоты</span>
                            <span>Кардиганы</span>
                            <span>Толстовки</span>
                        </div>
                    </div>
                    <div className={style.item}>О бренде</div>
                    <div className={style.item}>Контакты</div>
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