import React, { useState } from "react";
import style from './Shop.module.css';
import ProductCard from "../../utils/ProductCard/ProductCard";
import brooke_cagle from '../../assets/images/main_page/brooke-cagle.jpg';
import christopher_campbell from '../../assets/images/main_page/christopher-campbell.jpg';
import ben_eaton from '../../assets/images/main_page/ben-eaton.jpg';


const Shop = () => {

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
    {
        id: 4,
        name: 'Футболка USA',
        price: 129,
        img: brooke_cagle,
        type: 1
    },
    {
        id: 5,
        name: 'Купальник Glow',
        price: 129,
        img: christopher_campbell,
        type: 2
    },
    {
        id: 6,
        name: 'Свитшот Sweet Shot',
        price: 129,
        img: ben_eaton,
        type: 3
    },
    {
        id: 7,
        name: 'Футболка USA',
        price: 129,
        img: brooke_cagle,
        type: 1
    },
    {
        id: 8,
        name: 'Купальник Glow',
        price: 129,
        img: christopher_campbell,
        type: 2
    },
    {
        id: 9,
        name: 'Свитшот Sweet Shot',
        price: 129,
        img: ben_eaton,
        type: 3
    },
    {
        id: 10,
        name: 'Футболка USA',
        price: 129,
        img: brooke_cagle,
        type: 1
    },
    {
        id: 11,
        name: 'Купальник Glow',
        price: 129,
        img: christopher_campbell,
        type: 2
    },
    {
        id: 12,
        name: 'Свитшот Sweet Shot',
        price: 129,
        img: ben_eaton,
        type: 3
    },
];
    
    const [type, setType] = useState(null);
    
    const showProducts = products
    .filter(product => product.type === (type ?? product.type))
    .map(product => <ProductCard 
        key={product.id}
        productImg={product.img} 
        productName={product.name} 
        productPrice={product.price} />);

    let pagesCount = Math.ceil(showProducts.length / 9);
    
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    };

    return (
        <main className={style.main}>

            <h1 className={style.header}>
                Магазин
            </h1>

            <div className={style.path}>
                Главная — Магазин
            </div>

            <div className={style.sortButtonContainer}>
                <div className={`${style.sortButtonItem} ${type === null && style.sortButtonItemActive}`} 
                    onClick={()=>setType(null)}>
                    Все
                </div>
                <div className={`${style.sortButtonItem} ${type === 1 && style.sortButtonItemActive}`} 
                    onClick={()=>setType(1)}>
                    Пальто
                </div>
                <div className={`${style.sortButtonItem} ${type === 2 && style.sortButtonItemActive}`} 
                    onClick={()=>setType(2)}>
                    Свитшоты
                </div>
                <div className={`${style.sortButtonItem} ${type === 3 && style.sortButtonItemActive}`} 
                    onClick={()=>setType(3)}>
                    Кардиганы
                </div>
                <div className={`${style.sortButtonItem} ${type === 4 && style.sortButtonItemActive}`} 
                    onClick={()=>setType(4)}>
                    Толстовки
                </div>
            </div>

            <div className={style.countOfShownProducts}>
                Показано: {showProducts.length} из {showProducts.length} товаров
            </div>

            <div className={style.productsContainer}>
                {showProducts}
            </div>

            <div className={style.countOfShownProducts}>
                Показано: {showProducts.length} из {showProducts.length} товаров
            </div>

            <div className={style.paginationBlock}>
                {pages.map((p) => {
                    return (
                        <button className={style.paginationButton}>{p}</button>
                    )
                })}
            </div>

        </main>
    );
};


export default Shop;