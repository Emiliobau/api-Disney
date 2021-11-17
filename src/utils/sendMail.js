const nodemailer = require("nodemailer");


async function main(email) {
  let transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  });
  console.log(email, "veo el email que cargo el usuario");
  let info = await transporter.sendMail({
    from: 'Baudracco Emilio',
    to: email,
    subject: "Bienvenido",
    html: "<b>Bienvenido al sistema de Disney Api</b>",
  });
}
module.exports = main