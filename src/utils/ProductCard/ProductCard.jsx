import React from "react";
import style from './ProductCard.module.css';
import { useState } from "react";
import arrow from '../../assets/images/main_page/arrow.svg'
import { useNavigate } from "react-router-dom";

/** TODO: Вынести в components */
const ProductCard = ({productImg, productName, productPrice, id}) => {
    
    const [show, setShow] = useState(false);

    const navigate = useNavigate()

    const navigateToProductHadler = (id) => {
        /**  TODO: ../product/ в переменную*/
        navigate(`../product/${id}`)
    }

    return (
        <div className={style.productCard} >
            <div className={style.productCardImgContainer} onMouseOver={() => setShow(true)}>
                {/** TODO: src={`./static/${productImg}`}, рекомендую везде в подобных кейсах использовать
                     шаблонные строки, отказываться от конкатенации
                     и опять же './static/' вынести в константу
                 */}
                <img src={'./static/' + productImg} alt={productName} className={style.productImg}/>
                <div className={`${style.productCardImgContainerHover} ${show && style.show}`}
                     /** TODO: Орфографическая*/
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



