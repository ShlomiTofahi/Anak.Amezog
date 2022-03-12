// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mailService = require('../../services/mailService');

export default function handler(req, res) {
 try {
    const { name, phone, email, message, livingArea } = req.body;
    let output = `
    <div align='center'>
    <h2 style="color:white;
               background-color:#eba235;
               text-align:center;
               border: solid 1px #af6900;
               letter-spacing: 8px;">
               יש לך בקשה ליצירת קשר חדשה  
    </h2><br />
    <hr />
    <span style="font-family: Arial, Helvetica, sans-serif;
    font-size:16px;
    letter-spacing: .1rem;">
    <h3>פרטי קשר:</h3>
    <div>  
      <div>שם: ${name}</div>
      <div>אימייל: ${email}</div>
      <div>טלפון: ${phone}</div>
    </div>
    <h3>הודעה:</h3>
    <p>${message}</p>
    <hr style="color:black" />
    <div>
`
    console.log(livingArea)
    if (livingArea) {
      output = `
    <div align='center'>
    <h2 style="color:white;
              background-color:#eba235;
              text-align:center;
              border: solid 1px #af6900;
              letter-spacing: 8px;">
              יש לך בקשה ליצירת קשר חדשה  
    </h2><br />
    <hr />
    <span style="font-family: Arial, Helvetica, sans-serif;
    font-size:16px;
    letter-spacing: .1rem;">
    <h3>פרטי קשר:</h3>
    <div>  
      <div>שם: ${name}</div>
      <div>טלפון: ${phone}</div>
      <div>אזור מגורים: ${livingArea}</div>
    </div>
    <hr style="color:black" />
    <div>
  `
    }

    mailService.sendMail("mr.chaplin.oded@gmail.com", email, name, phone, output)
  
  return res.status(200).json({ success: true })
} catch (err) {
  return res.status(500).send(err);
}
}
