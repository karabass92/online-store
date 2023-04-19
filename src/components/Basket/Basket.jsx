import React from "react";
import style from './Basket.module.css';
import brooke_cagle from '../../assets/images/main_page/brooke-cagle.jpg';
import christopher_campbell from '../../assets/images/main_page/christopher-campbell.jpg';
import ben_eaton from  '../../assets/images/main_page/ben-eaton.jpg';
import BasketItem from "../../utils/BasketItem/BasketItem";


const products = [
    {
        id: 1,
        name: 'Футболка USA',
        price: 129,
        img: brooke_cagle,
        type: 1
    },
    {
        id: 2,
        name: 'Купальник Glow',
        price: 129,
        img: christopher_campbell,
        type: 2
    },
    {
        id: 3,
        name: 'Свитшот Sweet Shot',
        price: 129,
        img: ben_eaton,
        type: 3
    },
];


const Basket = () => {

    const productList = products
        .map(product => <BasketItem 
            key={product.id}
            productImg={product.img}
            productName={product.name}
            productPrice={product.price}
            productCount={1}
        />)

    return (
        <main className={style.main}>
            
            <h1 className={style.header}>
                Корзина
            </h1>

            <div className={style.path}>
                Главная — Корзина
            </div>

            <div className={style.tableHeader}>
                <p>Товар</p>
                <p>Цена</p>
                <p>Количество</p>
                <p>Всего</p>
            </div>
            
            <section className={style.basketContent}>
                {productList}
            </section>


            <div className={style.totalBlock}>
                <div className={style.totalPrice}>
                    <span>Итого:</span>
                    <span>$129</span>
                </div>
                <button className={style.checkoutButton}>
                    Оформить заказ
                </button>
            </div>
        </main>
    );
};


export default Basket;