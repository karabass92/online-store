import React, { useState } from "react";
import style from './Contacts.module.css';
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

/* TODO: создать папку const, там хранить вот такие штучки */
const mapData = {
    center: [55.576569, 37.116807],
    zoom: 16,
};


const Contacts = () => {

    {/* TODO: убрать, если не используется */}
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [messageText, setMessageText] = useState('');


    return (
        <main className={style.main}>
            <h1 className={style.header}>Контакты</h1>
            <div className={style.path}>Главная — Контакты</div>
            <div className={style.mapContainer}>
                <YMaps>
                    <Map defaultState={mapData} className={style.map}>
                        <Placemark geometry={[55.576569, 37.116807]} />
                    </Map>
                </YMaps>
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
                <input type="text" placeholder="Имя" className={style.formInput} />
                <input type="email" placeholder="E-mail" className={style.formInput} />
                <input type="text" placeholder="Телефон" className={style.formInput} />
                <input type="textarea" placeholder="Сообщение" className={style.messageTextInput} />
                <button className={style.formButton}>Отправить</button>
            </form>
        </main>
    );
};


export default Contacts;