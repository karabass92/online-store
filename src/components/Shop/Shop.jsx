import React, { useEffect, useState } from "react";
import style from './Shop.module.css';
import ProductCard from "../../utils/ProductCard/ProductCard";
import axios from "axios";


const Shop = () => {

    const [products, setProducts] = useState([]);
    const [type, setType] = useState(null);
    const [page, setPage] = useState(1);

    const productsPerPage = 6;
    const lastIndex = page * productsPerPage;
    const startIndex = lastIndex - productsPerPage;

    useEffect(() => {
        const promise = axios.get(`http://localhost:5000/api/product`);
        promise.then((res) => {
            setProducts(res.data.rows);
        })
    }, []);

    const filteredProducts = products
        .filter(product => 
            product.type === (type ?? product.type));
    
    const productsOnPage = filteredProducts.slice(startIndex, lastIndex);

    const showProducts = productsOnPage
        .map(product => <ProductCard
            key={product.id}
            id={product.id}
            productImg={product.img}
            productName={product.name}
            productPrice={product.price} />);
    
    let pagesCount = Math.ceil(filteredProducts.length / productsPerPage);
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
                    onClick={() => {
                        setType(null)
                        setPage(1)
                        }}>
                    Все
                </div>
                <div className={`${style.sortButtonItem} ${type === 'tshirt' && style.sortButtonItemActive}`}
                    onClick={() => {
                        setType('tshirt')
                        setPage(1)
                        }}>
                    Футболки
                </div>
                <div className={`${style.sortButtonItem} ${type === 'sweetShot' && style.sortButtonItemActive}`}
                    onClick={() => {
                        setType('sweetShot')
                        setPage(1)
                        }}>
                    Свитшоты
                </div>
                <div className={`${style.sortButtonItem} ${type === 'cardigan' && style.sortButtonItemActive}`}
                    onClick={() => {
                        setType('cardigan')
                        setPage(1)
                        }}>
                    Кардиганы
                </div>
                <div className={`${style.sortButtonItem} ${type === 'smock' && style.sortButtonItemActive}`}
                    onClick={() => {
                        setType('smock')
                        setPage(1)
                        }}>
                    Толстовки
                </div>
            </div>

            <div className={style.countOfShownProducts}>
                Показано: {showProducts.length} из {filteredProducts.length} товаров
            </div>

            <div className={style.productsContainer}>
                {showProducts}
            </div>

            <div className={style.countOfShownProducts}>
                Показано: {showProducts.length} из {filteredProducts.length} товаров
            </div>
            
            <div className={style.paginationBlock}>
                {pages.map((p) => {
                    return (
                        <button 
                            className={`${style.paginationButton} ${p === page && style.activePaginationButton}` } 
                            onClick={ () => setPage(p)}
                            key={p}>
                                {p}
                        </button>
                    )
                })}
            </div>

        </main>
    );
};


export default Shop;