import React from "react";
import style from './Contacts.module.css';


const Contacts = () => {
    return (
        <main className={style.main}>
            <h1 className={style.header}>Контакты</h1>
            <div className={style.path}>Главная — Контакты</div>
            <div className={style.map}>
                Карта с любой точкой
            </div>
            <section className={style.contactInfo}>
                <div>
                    <h3>Телефон</h3>
                    <p>+7 (495) 823-54-12</p>
                </div>
                <div>
                    <h3>E-mail</h3>
                    <p>info@sitename.com</p>
                </div>
                <div>
                    <h3>Адрес</h3>
                    <p>г. Москва, 3-я улица Строителей, 25</p>
                </div>
            </section>
            <h2 className={style.formHeader}>Напишите нам</h2>
            <form action="#" className={style.sendMessageForm}>
                <input type="text" placeholder="Имя" className={style.formInput}/>
                <input type="email" placeholder="E-mail" className={style.formInput}/>
                <input type="text" placeholder="Телефон" className={style.formInput}/>
                <input type="textarea" placeholder="Сообщение" className={style.messageTextInput}/>
                <button className={style.formButton}>Отправить</button>
            </form>
        </main>
    );
};


export default Contacts;