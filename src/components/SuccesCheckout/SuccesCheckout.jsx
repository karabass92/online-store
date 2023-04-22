import React from "react";
import style from './SuccesCheckout.module.css';
import { NavLink } from "react-router-dom";
import border from '../../assets/images/succesCheckout_page/border.svg';
import marker from '../../assets/images/succesCheckout_page/marker.svg';


const SuccesCheckout = () => {
    return (
        <main className={style.main}>
            <h1 className={style.header}>Заказ получен</h1>
            <div className={style.path}>Главная — Оформление заказа — Заказ получен</div>
            <section className={style.content}>
                <div className={style.leftSide}>
                    <div className={style.imageContainer}>
                        <img src={border} alt="" className={style.borderImg}/>
                        <img src={marker} alt="" className={style.innerImg}/>
                    </div>
                    <div className={style.succesMessageContainer}>
                        <p>Заказ успешно оформлен</p>
                        <span>Мы свяжемся с вами в ближайшее время!</span>
                    </div>
                </div>
                <NavLink to='/' className={style.toMainPageLink}>
                    <div>
                        Перейти на главную
                    </div>
                </NavLink>
            </section>
        </main>
    );
};


export default SuccesCheckout;