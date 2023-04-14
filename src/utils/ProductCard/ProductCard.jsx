import React from "react";
import style from './ProductCard.module.css';
import { useState } from "react";
import arrow from '../../assets/images/main_page/arrow.svg'


const ProductCard = (props) => {

    const [show, setShow] = useState(false);

    return (
        <div className={style.productCard} >
            <div className={style.productCardImgContainer} onMouseOver={() => setShow(true)}>
                <img src={props.productImg} alt={`${props.productImg}`} />
                <div className={`${style.productCardImgContainerHover} ${show && style.show}`} 
                    onMouseOut={() => setShow(false)}>
                    <img src={arrow} alt="arrow" />
                </div>
            </div>
            <p className={style.productName}>{props.productName}</p>
            <p className={style.productPrice}>${props.productPrice}</p>
        </div>
    );
};


export default ProductCard;



