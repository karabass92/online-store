import React from "react";
import style from './Basket.module.css';
import BasketItem from "../../utils/BasketItem/BasketItem";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { deleteProductFromBasket } from "../../store/reducers/basketReducer";


const Basket = (props) => {
    const totalPrice = props.productsInBasket.reduce(
        (accumulator, product) => accumulator + product.price * 1, 0);

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
                {
                    props.productsInBasket.length >= 1
                    ? props.productsInBasket
                    .map(product => <BasketItem
                        key={product.id}
                        deleteProductFromBasket={props.deleteProductFromBasket}
                        productId={product.id}
                        productImg={product.img}
                        productName={product.name}
                        productPrice={product.price}
                        productCount={1} />)
                    : 'Basket is empty'
                }
            </section>
            <div className={style.totalBlock}>
                <div className={style.totalPrice}>
                    <span>Итого:</span>
                    <span>${totalPrice}</span>
                </div>
                <div className={style.checkoutButton}>
                    <NavLink to='/checkout' className={style.checkoutButton}>
                        Оформить заказ
                    </NavLink>
                </div>
            </div>
        </main>
    );
};


const mapStateToProps = (state) => {
    return {
        productsInBasket: state.basket.productsInBasket
    }
};


export default connect(mapStateToProps, {deleteProductFromBasket})(Basket);