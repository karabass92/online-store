import React from "react";
import style from './BasketItem.module.css';
import cross from '../../assets/images/cross.svg';

/**
    TODO: Props - в соседнем компоненте (ProductCard) ты использовал деструктуризацию,
    здесь же - просто используешь пропс,
    я бы предложил везде использовать деструктуризацию.
    Когда будешь использовать TS - будет нагляднее что за пропы какой тип юзают, без дополнительных кликов
    И шанс проебать что-то - меньше.
**/
/**
    TODO: Это ведь компоненты (BasketItem и ProductCard), так что, на мой взгляд,
    целесообразнее их располагать в components,
    а в utils хранятся всякие хэлперы, функции которые считают что-то,
    преобразовывают, и подобные вещи
 **/
const BasketItem = (props) => {
    /** TODO: Не учитываются кейсы, если нету чего-то в пропсах. Например, если deleteProductFromBasket
         будет undefined, то тебе в консоль насрёт за это дело, а то и вообще эксепшн вылетит какой-нить лютый,
        или логика проебется.
        В целом в текущем компоненте и других рекомендую, если у тебя длинные названия методов, как здесь,
        которые прокидываешь сверху, или несколько действий нужно сделать в функции, то рекомендую
        выносить это, типа
        const handleDelete = (productId) => {
            if(productId && deleteProductFromBasket) {
                deleteProductFromBasket(productId)
            }
        }
        ...
         <div
            className={style.deleteProductButton}
            onClick={handleDelete}
         >
         ...
      */
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