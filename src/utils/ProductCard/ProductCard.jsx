import React from "react";
import style from './ProductCard.module.css';
import { useState } from "react";
import arrow from '../../assets/images/main_page/arrow.svg'
import { useNavigate } from "react-router-dom";


const ProductCard = ({productImg, productName, productPrice, id}) => {
    
    const [show, setShow] = useState(false);

    const navigate = useNavigate()

    const navigateToProductHadler = (id) => {
        navigate(`../product/${id}`)
    }

    return (
        <div className={style.productCard} >
            <div className={style.productCardImgContainer} onMouseOver={() => setShow(true)}>
                <img src={'./static/' + productImg} alt={productName} className={style.productImg}/>
                <div className={`${style.productCardImgContainerHover} ${show && style.show}`} 
                    onClick={()=>navigateToProductHadler(id)}
                    onMouseOut={() => setShow(false)}>
                    <img src={arrow} alt="arrow" />
                </div>
            </div>
            <p className={style.productName}>{productName}</p>
            <p className={style.productPrice}>${productPrice}</p>
        </div>
    );
};


export default ProductCard;



