import React from "react";
import style from './BasketItem.module.css';
import cross from '../../assets/images/cross.svg';


const BasketItem = (props) => {
    return (
        <section className={style.main}>
            <div className={style.firstCol}>
                <div className={style.deleteProductButton}
                    onClick={ () => props.deleteProductFromBasket(props.productId) }>
                    <img src={cross} alt="delete" />
                </div>
                <img src={'./static/' + props.productImg} alt="" className={style.productImg}/>
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