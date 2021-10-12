const nodemailer = require('nodemailer');


async function sender(req, res){
let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
    user: "luisestuardo-bolanosgonzalez@cunoc.edu.gt", // generated ethereal user
    pass: "dshq glnx pcju jtpk", // generated ethereal password
  },
});    

transporter.verify().then(() => {
  console.log('Ready for send emails');
})

console.log(req.body.email);

let send = await transporter.sendMail( {
    from: '"Verification email 👻"',
    to: req.body.email, 
    subject: "Verification email",
    html: `<h1>Verification email</h1>
            <ul>
                <li>Correo de prueba</li>
            </ul>`,
  });


  console.log('mensaje enviado');
}

module.exports = { sender }