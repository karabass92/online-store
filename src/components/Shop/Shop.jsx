import React, { useEffect, useState } from "react";
import style from './Shop.module.css';
import ProductCard from "../../utils/ProductCard/ProductCard";
import axios from "axios";


const Shop = () => {

    const [products, setProducts] = useState([])

    useEffect( () => {
        const promise = axios.get(`http://localhost:5000/api/product`)
        promise.then((res) => {
            setProducts(res.data.rows)
    })}, [])

    const [type, setType] = useState(null);
    
    const showProducts = products
    .filter(product => product.type === (type ?? product.type))
    .map(product => <ProductCard 
        key={product.id}
        id={product.id}
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
                <div className={`${style.sortButtonItem} ${type === 'tshirt' && style.sortButtonItemActive}`} 
                    onClick={()=>setType('tshirt')}>
                    Футболки
                </div>
                <div className={`${style.sortButtonItem} ${type === 'sweetShot' && style.sortButtonItemActive}`} 
                    onClick={()=>setType('sweetShot')}>
                    Свитшоты
                </div>
                <div className={`${style.sortButtonItem} ${type === 'cardigan' && style.sortButtonItemActive}`} 
                    onClick={()=>setType('cardigan')}>
                    Кардиганы
                </div>
                <div className={`${style.sortButtonItem} ${type === 'smock' && style.sortButtonItemActive}`} 
                    onClick={()=>setType('smock')}>
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