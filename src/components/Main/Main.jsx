import React, { useEffect, useState } from "react";
import style from './Main.module.css';
import img1 from '../../assets/images/main_page/importantForUsBlock/img1.jpg';
import img2 from '../../assets/images/main_page/importantForUsBlock/img2.svg';
import img3 from '../../assets/images/main_page/importantForUsBlock/img3.jpg';
import adam_winger from '../../assets/images/main_page/adam_winger.jpg';
import { NavLink, useNavigate } from "react-router-dom";
import About from "../About/About";
import allef_vinicius from '../../assets/images/main_page/allef_vinicius.jpg';
import dmitriy from '../../assets/images/main_page/dmitriy.jpg';
import ionut_comanici from '../../assets/images/main_page/ionut_comanici.jpg';
import ProductCard from "../../utils/ProductCard/ProductCard";
import Slider from "./Slider/Slider";
import axios from "axios";


const Main = () => {

    const [newCollection, setNewCollection] = useState([]);

    useEffect( () => {
        const promise = axios.get(`http://localhost:5000/api/product`)
        promise.then((res) => {
            setNewCollection(res.data.rows)
    })}, []);

    const products = newCollection.slice(0, 3).map(product => <ProductCard 
        key={product.id}
        id={product.id}
        productImg={product.img} 
        productName={product.name} 
        productPrice={product.price} />);

    return (
        <main className={style.main}>
            <section className={style.carouselContainer}>
                <div className={style.carousel}>
                    <Slider />
                </div>
                <div className={style.imgContainer}>
                    <img src={dmitriy} alt="dmitriy" className={style.dmitriy} />
                    <img src={allef_vinicius} alt="allef_vinicius" className={style.allef_vinicius} />
                    <img src={ionut_comanici} alt="ionut_comanici" className={style.ionut_comanici} />
                </div>
            </section>
            <h2>Новая коллекция</h2>
            <section className={style.newCollectionBlock}>
                {products}
            </section>
            <NavLink to='/shop' className={style.newCollectionBlockButton}>
                <div>
                    Открыть магазин
                </div>
            </NavLink>
            <h2>Что для нас важно</h2>
            <section className={style.importantForUsInfo}>
                <article className={style.importantForUsInfoItem}>
                    <div>
                        <img src={img1} alt="img" />
                    </div>
                    <h3>Качество</h3>
                    <p>
                        Наши профессионалы работают на лучшем оборудовании для пошива одежды
                        беспрецедентного качества
                    </p>
                </article>
                <article className={style.importantForUsInfoItem}>
                    <div>
                        <img src={img2} alt='img' />
                    </div>
                    <h3>Скорость</h3>
                    <p>
                        Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти единиц
                        продукции в наших собственных цехах
                    </p>
                </article>
                <article className={style.importantForUsInfoItem}>
                    <div>
                        <img src={img3} alt="img" />
                    </div>
                    <h3>Ответственность</h3>
                    <p>
                        Мы заботимся о людях и планете. Безотходное производство и комфортные
                        условия труда - все это Womazing
                    </p>
                </article>
            </section>
            <h2>Команда мечты Womazing</h2>
            <section className={style.dreamTeamBlock}>
                <div className={style.carouselContainer}>
                    <img src={adam_winger} alt="adam_winger" />
                </div>
                <article className={style.dreamTeamArticle}>
                    <h3>Для каждой</h3>
                    <p>
                        Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.
                    </p>
                    <p>
                        Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно
                        подчеркивают достоинства каждой девушки.
                    </p>
                    <div className={style.dreamTeamBlockLink}>
                        <NavLink to='/about' element={<About />}>Подробнее о бренде</NavLink>
                    </div>
                </article>
            </section>
        </main>
    );
};


export default Main;