import React from "react";
import style from './BasketItem.module.css';
import cross from '../../assets/images/cross.svg';


const BasketItem = (props) => {
    return (
        <section className={style.main}>
            <div className={style.firstCol}>
                <img src={cross} alt="delete" />
                <img src={props.productImg} alt="" className={style.productImg}/>
                <span>{props.productName}</span>
            </div>
            <div className={style.secondtCol}>
                ${props.productPrice}
            </div>
            <div className={style.thirdCol}>
                {props.productCount}
            </div>
            <div className={style.fourthCol}>
                ${props.productPrice*props.productCount}
            </div>
        </section>
    );
};


export default BasketItem;