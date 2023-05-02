import React, { useRef, useState } from "react";
import style from './Contacts.module.css';
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import axios from "axios";


const mapData = {
    center: [55.576569, 37.116807],
    zoom: 16,
};


const Contacts = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [message, setMessage] = useState('');
    const [messageSent, setMessageSent] = useState(false);

    const nameText = useRef(name);
    const emailText = useRef(email);
    const telephoneText = useRef(telephone);
    const messageText = useRef(message);

    /*--------------------------------*/
    const onSendFeedBack = () => {
        axios.post('http://localhost:5000/api/feedback', {
            "name": `${name}`,
            "email": `${email}`,
            "telephone": `${telephone}`,
            "text": `${message}`
        }).then(response => (response.status === 200 && setMessageSent(true)))
    };
    /*--------------------------------*/

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
                <input type="text" placeholder="Имя" 
                    className={style.formInput} 
                    ref={nameText} 
                    onChange={() => setName(nameText.current.value)} />
                <input type="email" placeholder="E-mail" 
                    className={style.formInput} 
                    ref={emailText} 
                    onChange={() => setEmail(emailText.current.value)}/>
                <input type="text" placeholder="Телефон" 
                    className={style.formInput} 
                    ref={telephoneText} 
                    onChange={() => setTelephone(telephoneText.current.value)} />
                <input type="textarea" placeholder="Сообщение" 
                    className={style.messageTextInput} 
                    ref={messageText} 
                    onChange={() => setMessage(messageText.current.value)} />
                <button className={style.formButton}
                    onClick={onSendFeedBack} >
                        Отправить
                </button>
            </form>
            <div className={`${style.messageSent} ${messageSent && style.show}`}>Сообщение успешно отправлено</div>
        </main>
    );
};


export default Contacts;