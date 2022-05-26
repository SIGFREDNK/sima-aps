import React, { useState } from 'react';

import Layout from 'components/Layout';

import { motion } from 'framer-motion';

const IndhentTilbud = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [mail, setMail] = useState('');
    const [phone, setPhone] = useState('');
    const [description, setDescription] = useState('');

    const [message, setMessage] = useState('');
    const [type, setType] = useState('');
    const [alertState, setAlertState] = useState(false);

    const display = (displayMessage, displayType, duration) => {
        setMessage(displayMessage);
        setType(displayType);

        setAlertState(true);

        setTimeout(() => {
            setAlertState(false);
            setMessage('');
            setType('');
        }, duration);
    };

    const handleSubmit = event => {
        event.preventDefault();

        const data = {
            name,
            address,
            mail,
            phone,
            description
        };

        fetch('/api/contact', {
            method: 'POST',
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(async res => {
            const data = await res.json();
            if (res.status === 200) {
                setName('');
                setAddress('');
                setMail('');
                setPhone('');
                setDescription('');
                console.log(data);
                display(data.message, 'SUCCESS', 6000);
            } else {
                display(data.message, 'ERROR', 6000);
            }
        });
    };

    return (
        <Layout>
            <div className="page">
                <form className="form" onSubmit={event => handleSubmit(event)}>
                    <div className="form-group">
                        <label htmlFor="name">Navn</label>
                        <input
                            type="text"
                            name="name"
                            onChange={event => setName(event.target.value)}
                            value={name}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Adresse</label>
                        <input
                            type="text"
                            name="address"
                            onChange={event => setAddress(event.target.value)}
                            value={address}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mail">Mail</label>
                        <input
                            type="text"
                            name="mail"
                            onChange={event => setMail(event.target.value)}
                            value={mail}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Telefonnummer</label>
                        <input
                            type="text"
                            name="phone"
                            onChange={event => setPhone(event.target.value)}
                            value={phone}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Beskriv opgaven</label>
                        <textarea
                            name="description"
                            onChange={event =>
                                setDescription(event.target.value)
                            }
                            value={description}
                        />
                    </div>
                    <motion.button
                        className="submit-button"
                        whileHover={{ scale: 1.035 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ duration: 0.05 }}
                    >
                        Send
                    </motion.button>
                </form>
                <span
                    className="alert"
                    style={{
                        opacity: alertState ? 1 : 0,
                        backgroundColor:
                            type === 'SUCCESS' ? '#4d9a51' : '#d84646'
                    }}
                >
                    {message}
                </span>
            </div>
        </Layout>
    );
};

export default IndhentTilbud;
