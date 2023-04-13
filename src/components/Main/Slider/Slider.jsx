import React from "react";
import style from './Slider.module.css';
import { useState } from "react";
import { NavLink } from "react-router-dom";


const Slider = () => {


    const [showItem1, setShowItem1] = useState(false);
    const [showItem2, setShowItem2] = useState(false);
    const [showItem3, setShowItem3] = useState(true);

    const onFirstClick = () => {
        setShowItem1(true);
        setShowItem2(false);
        setShowItem3(false);
    }

    const onSecondClick = () => {
        setShowItem1(false);
        setShowItem2(true);
        setShowItem3(false);
    }

    const onThirdClick = () => {
        setShowItem1(false);
        setShowItem2(false);
        setShowItem3(true);
    }

    return (
        <div className={style.carouselWindow}>
            <div className={`${style.item} ${showItem1 ? style.itemShow : style.itemHidden}`}>
                <h1>Что-то новенькое. Мы заждались тебя.</h1>
                <p>
                    Надоело искать себя в сером городе? Настало время новых идей,
                    свежих красок и вдохновения с Womazing!
                </p>
            </div>
            <div className={`${style.item} ${showItem2 ? style.itemShow : style.itemHidden}`}>
                <h1>Включай новый сезон с WOMAZING</h1>
                <p>
                    Мы обновили ассортимент - легендарные коллекции и новинки от отечественных дизайнеров
                </p>

            </div>
            <div className={`${style.item} ${showItem3 ? style.itemShow : style.itemHidden}`}>
                <h1>Новые поступления в этом сезоне</h1>
                <p>
                    Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне.
                    Время исследовать.
                </p>
            </div>
            <div className={style.shopLinkButton}>
                <NavLink to='/shop' className={style.shopLink}>
                    Открыть магазин
                </NavLink>
            </div>

            <div className={style.sliderButtonContainer}>
                <div className={`${style.sliderButton} ${showItem1 && style.sliderButtonActive}`} 
                    onClick={() => { onFirstClick() }}></div>
                <div className={`${style.sliderButton} ${showItem2 && style.sliderButtonActive}`} 
                    onClick={() => { onSecondClick() }}></div>
                <div className={`${style.sliderButton} ${showItem3 && style.sliderButtonActive}`} 
                    onClick={() => { onThirdClick() }}></div>
            </div>
        </div>
    );
};


export default Slider;