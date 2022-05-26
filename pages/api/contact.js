require('dotenv').config();
let nodemailer = require('nodemailer');

const PASSWORD = process.env.PASSWORD;

/* eslint-disable */
export default async function (req, res) {
    console.log(req.body);
    const transporter = nodemailer.createTransport({
        port: 587,
        host: 'smtp.simply.com',
        auth: {
            user: 'mailbot@simaaps.dk',
            pass: PASSWORD.toString()
        },
        secure: false
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
        <p>${req.body.message}</p>
    `;

    const mailData = {
        from: 'mailbot@simaaps.dk',
        to: ['sigfred@simaaps.dk', 'mads@simaaps.dk'],
        subject: `Tilbudsanmodning (${req.body.name})`,
        text: text,
        html: html
    };

    transporter.sendMail(mailData, function (err, info) {
        if (err)
            res.status(500).json({
                status: 'failed',
                message:
                    'Vi kunne desværre ikke sende beskeden. Kontakt os venligst telefonisk'
            });
        else
            res.status(200).json({
                status: 'success',
                message: 'Beskeden er sendt'
            });
    });

    res.status(200);
}
