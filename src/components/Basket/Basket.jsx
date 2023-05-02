import React from "react";
import style from './Basket.module.css';
import BasketItem from "../../utils/BasketItem/BasketItem";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { deleteProductFromBasket } from "../../store/reducers/basketReducer";

/**TODO: деструктуризация, проверка на наличие пропсов при использовании*/
const Basket = (props) => {
    /** TODO: вынести в helpers
        export const getTotalPrice = (collection, price, count) => {
            if(collection.length > 0 && !Number.isNaN(price) && !Number.isNaN(count)) {
                return collection.reduce((acc, product) => acc + price + count, 0)
            }
            return 0; ну или что-то другое, что нужно
        }
        и тут также юзать
        const totalPrice = getTotalPrice(productsInBasket, price, productCount)
     */
    const totalPrice = props.productsInBasket.reduce(
        (accumulator, product) => accumulator + product.price * product.productCount, 0);

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
                        productCount={product.productCount} />)
                    : 'Корзина пуста'
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