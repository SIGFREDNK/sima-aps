require('dotenv').config();
let nodemailer = require('nodemailer');

const PASSWORD = process.env.PASSWORD;

/* eslint-disable */
export default async function (req, res) {
    const transporter = nodemailer.createTransport({
        port: 587,
        host: 'smtp.simply.com',
        auth: {
            user: 'mailbot@simaaps.dk',
            pass: PASSWORD.toString()
        },
        secure: false,
        tls: {
            ciphers: 'SSLv3'
        },
        from: 'mailbot@simaaps.dk'
    });

    const text = `Kundens mail: ${req.body.mail}\n\r Kundens telefonummer: ${req.body.phone}\n\r Kundens addresse: ${req.body.address}\n\r Kundens
    besked: ${req.body.description}`;

    const html = `
        <p>Tilbuds anmodning</p>
        <h3>Kontakt oplysninger</h3>
        <ul>
            <li>Navn: ${req.body.name}</li>
            <li>Adresse: ${req.body.address}</li>
            <li>Mail: ${req.body.email}</li>
            <li>Telefonnummer: ${req.body.phone}</li>
        </ul>
        <h3>Besked</h3>
        <p>${req.body.description}</p>
    `;

    const mailData = {
        from: 'mailbot@simaaps.dk',
        to: 'sigfred00@hotmail.com',
        subject: `Tilbudsanmodning (${req.body.name})`,
        text: text,
        html: html
    };

    transporter.sendMail(mailData, function (err, info) {
        if (err)
            res.status(500).json({
                status: 'failed',
                message: 'Fejl'
            });
        else
            res.status(200).json({
                status: 'success',
                message: 'Beskeden er sendt',
                info
            });
    });

    res.status(200);
}
