import React from "react";
import style from './Checkout.module.css';


const productsInBasket = [
    {
        id: 1,
        name: 'Футболка USA',
        price: 129,
        type: 1
    },
    {
        id: 2,
        name: 'Купальник Glow',
        price: 129,
        type: 2
    },
    {
        id: 3,
        name: 'Свитшот Sweet Shot',
        price: 129,
        type: 3
    },
];


const Checkout = () => {
    return (
        <main className={style.main}>
            <h1 className={style.header}>Оформление заказа</h1>
            <div className={style.path}>Главная — Оформление заказа</div>
            <form className={style.checkoutForm}>
                <div>
                    <div>
                        <h2 className={style.sectionHeader}>Данные покупателя</h2>
                        <input type="text" placeholder="Имя" className={style.formInput}/>
                        <input type="text" placeholder="E-mail" className={style.formInput}/>
                        <input type="text" placeholder="Телефон" className={style.formInput}/>
                    </div>
                    <div>
                        <h2 className={style.sectionHeader}>Адрес получателя</h2>
                        <input type="text" placeholder="Страна" className={style.formInput}/>
                        <input type="text" placeholder="Город" className={style.formInput}/>
                        <input type="text" placeholder="Улица" className={style.formInput}/>
                        <input type="text" placeholder="Дом" className={style.formInput}/>
                        <input type="text" placeholder="Квартира" className={style.formInput}/>
                    </div>
                    <div>
                        <h2 className={style.sectionHeader}>Комментарии</h2>
                        <input type="text" placeholder="Комментарии" className={style.messageTextInput}/>
                    </div>
                </div>
                <div>
                    <h2 className={style.sectionHeader}>Ваш заказ</h2>
                    <p className={style.checkoutHeader}>
                        <span>Товар</span>
                        <span>Всего</span>
                    </p>
                    {
                        productsInBasket.map( product => 
                        <p className={style.checkoutItem}>
                            <span>{product.name}</span>
                            <span>{product.price}</span>
                        </p>)  
                    }
                    <p className={style.checkoutFooter}>
                        <span>Итого</span>
                        <span>
                            ${productsInBasket.reduce(
                            (accumulator, product) => accumulator + product.price * 1, 0)}
                        </span>
                    </p>
                    <h2 className={style.sectionHeader}>Способы оплаты</h2>
                    <input type="checkbox" id="payment" name="payment" className={style.paymentCheckBox}/>
                    <label htmlFor="payment">
                        <span className={style.byCash}>Оплата наличными</span>
                    </label>
                    <button className={style.formButton}>Разместить заказ</button>
                </div>
            </form>
        </main>
    );
};


export default Checkout;