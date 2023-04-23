import React from "react";
import style from './Product.module.css';
import brooke_cagle from '../../assets/images/main_page/brooke-cagle.jpg';


const product = {
    id: 1,
    name: 'Футболка USA',
    price: 129,
    img: brooke_cagle,
    type: 'Футболки'
};


const Product = () => {
    return (
        <main className={style.main}>
            <h1 className={style.header}>{product.name}</h1>
            <div className={style.path}>Главная — {product.type} — {product.name}</div>
            <section className={style.productInfoContainer}>
                <img src={product.img} alt={product.img} className={style.productImg} />
                <div>
                    <span className={style.productPrice}>
                        ${product.price}
                    </span>
                    <form>
                        <h3 className={style.chooseSize}>Выберите размер</h3>
                        <input type="radio" name="size" id="sSize" 
                            className={`${style.sizeRadioButton} ${style.sSize}`} />
                        <label htmlFor="sSize"></label>
                        <input type="radio" name="size" id="mSize" 
                            className={`${style.sizeRadioButton} ${style.mSize}`}/>
                        <label htmlFor="mSize"></label>
                        <input type="radio" name="size" id="lSize" 
                            className={`${style.sizeRadioButton} ${style.lSize}`}/>
                        <label htmlFor="lSize"></label>
                        <input type="radio" name="size" id="xlSize" 
                            className={`${style.sizeRadioButton} ${style.xlSize}`}/>
                        <label htmlFor="xlSize"></label>
                        <div className={style.addProductToBasketButtonContainer}>
                            <input type="number" className={style.productCount}/>
                            <button className={style.formButton}>Добавить в корзину</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
};


export default Product;