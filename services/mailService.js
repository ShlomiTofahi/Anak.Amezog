const nodemailer = require('nodemailer');
// const sendmail = require('sendmail')();

module.exports = {
    sendMail: function (recipients, from, name, phone, output ) {
        try {
            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true, // true for 465, false for other ports,
                requireTLS: true,
                auth: {
                    user: "mr.chaplin.oded@gmail.com", // generated ethereal user
                    pass: 'Oded2212'  // generated ethereal password
                },
                tls: {
                    rejectUnauthorized: false
                }
            });
            // setup email data with unicode symbols
            let mailOptions = {
                from: `<${from}>`, // sender address
                to: recipients, // list of receivers
                subject: `${name} - ${phone}`, // Subject line
                text: 'יצירת קשר חדשה', // plain text body
                html: output // html body
            };

            // send mail with defined transport object
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error);
                    // return res.status(500).json({ msg: 'Failed to send email' })
                }
                console.log('Message sent: %s', info.messageId);
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

            });
        } catch (e) {
            console.log(e);
            // res.status(400).json({ msg: "error" });
        }
    }
}