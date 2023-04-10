import React from "react";
import style from './About.module.css';
import { NavLink } from "react-router-dom";
import firstPhoto from '../../assets/images/about_page/sonnie_hiles.jpg';
import secondPhoto from '../../assets/images/about_page/barkz.jpg';


const About = () => {
    return (
        <main className={style.main}>
            <h1 className={style.header}>О бренде</h1>
            <div className={style.path}>Главная — О бренде</div>
            <section className={style.section}>
                <div>
                    <img src={firstPhoto} alt='sonnie hiles' />
                </div>
                <article className={style.firstArticle}>
                    <h3>Идея и женщина</h3>
                    <p>
                        Womazing была основана в 2010-ом и стала одной из самых успешных компаний нашей страны. 
                        Как и многие итальянские фирмы, Womazing остаётся семейной компанией, хотя ни один из 
                        членов семьи не является модельером.
                    </p>
                    <p>
                        Мы действуем по успешной формуле, прибегая к услугам известных модельеров для создания 
                        своих коллекций. Этот метод был описан критиком моды Колином Макдауэллом как форма 
                        дизайнерского со-творчества, характерная для ряда итальянских prêt-a-porter компаний. 
                    </p>
                </article>
            </section>
            <section className={style.section}>
                <article>
                    <h3>Магия в деталях</h3>
                    <p>
                        Первый магазин Womazing был открыт в маленьком городке на севере страны в 2010-ом году. 
                        Первая коллекция состояла из двух пальто и костюма, которые были копиями парижских 
                        моделей.
                    </p>
                    <p>
                        Несмотря на то, что по образованию основательница была адвокатом, ее семья всегда была 
                        тесно связана с шитьём (прабабушка основательницы шила одежду для женщин, а мать 
                        основала профессиональную школу кроя и шитья). Стремление производить одежду для 
                        масс несло в себе большие перспективы, особенно в то время, когда высокая мода 
                        по-прежнему доминировала, а рынка качественного prêt-a-porter попросту не существовало.  
                    </p>
                </article>
                <div>
                    <img src={secondPhoto} alt='barkz' />
                </div>
            </section>
            <div className={style.button}>
                <NavLink to='/shop' className={style.button}>
                    Перейти в магазин
                </NavLink>
            </div>
        </main>
    );
};


export default About;