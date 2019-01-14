---
id: 1001
title: Express.js y Nodemailer
date: 2018-03-21T17:35:45+00:00
tags:
template: development-post
---
<span style="font-weight: 400">Enviar correos electrónicos a los usuarios de su aplicación es una necesidad muy común estos días. Hoy te mostraré cómo usar el módulo Nodemailer para enviar correos electrónicos desde tu aplicación Express.js.</span>

<span style="font-weight: 400">Vamos a utilizar el SMTP de Nodemailer para enviar correos electrónicos, necesitas un correo electrónico real configurado para enviar correos electrónicos a través de SMTP; si no tienes uno, puedes probar el código con la función createTestAccount de Nodemailer para generar el servicio SMTP con una cuenta de prueba desde ethereal.email.</span>

<span style="font-weight: 400">Empieza por descargar el módulo Nodemailer con npm:</span><span style="font-weight: 400"><br /> </span><span style="font-weight: 400"><!--?prettify linenums=true?--></span>

<pre class="prettyprint">npm install nodemailer --save</pre>

<span style="font-weight: 400">Luego, crea un archivo para la configuración de Nodemailer. Comencemos con un ejemplo básico con la función createTestAccount solo para verificar si todo funciona correctamente.</span>

**// nodemailer.js   
** 

<pre class="prettyprint">const nodemailer = require('nodemailer');

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
nodemailer.createTestAccount((err, account) =&gt; {

const transporter = nodemailer.createTransport({
&nbsp;host: 'smtp.ethereal.email',
&nbsp;port: 587,
&nbsp;secure: false, // true for 465, false for other ports
&nbsp;auth: {
&nbsp;&nbsp;&nbsp;user: process.env.EMAIL,
&nbsp;&nbsp;&nbsp;pass: process.env.EMAIL_PASS
&nbsp;}
});

function sendEmail() {
&nbsp;const mailOptions = {
&nbsp;&nbsp;&nbsp;from: ‘youremail@example.com’,
&nbsp;&nbsp;&nbsp;to: `anyemail@example.com`,
&nbsp;&nbsp;&nbsp;subject: `Nodemailer test`,
&nbsp;&nbsp;&nbsp;text: `Nodemailer & Express.js email test`,
&nbsp;};

transporter.sendMail(mailOptions, (err, info) =&gt; {
&nbsp;&nbsp;&nbsp;if (err) console.log(err);

&nbsp;&nbsp;&nbsp;console.log(info);
&nbsp;});
}
});</pre>

<span style="font-weight: 400">Para probarlo solo necesitas requerir (require), el archivo nodemailer.js en su app.js / server.js, el archivo principal de su aplicación Express y deberías ver en la consola si hubo un error o si el correo electrónico fue enviado correctamente. por supuesto, querrás hacer una función para usarla en sus rutas Express.js, es bastante fácil de hacer, hagamos un ejemplo.</span>

<span style="font-weight: 400">En el siguiente ejemplo, tendremos una ruta Express.js para manejar una solicitud “POST”, el usuario enviará su correo electrónico y un mensaje para contactarlo, enviaremos la información al correo electrónico de nuestra aplicación. También tendremos un ciclo de respuesta de solicitud, por lo que necesitamos pasar el objeto “res”, y la función “next” a la función sendEmail.</span><span style="font-weight: 400"><br /> </span><span style="font-weight: 400"><br /> </span><span style="font-weight: 400">Primero crearemos la configuración de Nodemailer y la función sendEmail:</span>****

**// nodemailer.js****   
** 

<pre class="prettyprint">const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
&nbsp;host: 'smtp.gmail.com',
&nbsp;port: 25, // your port here
&nbsp;secure: false, // true for 465, false for other ports
&nbsp;auth: {
&nbsp;&nbsp;&nbsp;user: ‘yourEmail’,
&nbsp;&nbsp;&nbsp;pass: ‘yourPasword’
&nbsp;}
});

function sendEmail(email, message, res, next) {
&nbsp;const mailOptions = {
&nbsp;&nbsp;&nbsp;from: email,
&nbsp;&nbsp;&nbsp;to: `anyemail@example.com`,
&nbsp;&nbsp;&nbsp;subject: `Nodemailer test`,
&nbsp;&nbsp;&nbsp;text: message,
&nbsp;};

transporter.sendMail(mailOptions, (err, info) =&gt; {
&nbsp;&nbsp;&nbsp;if (err) return next(err);

&nbsp;&nbsp;&nbsp;res.status(200).json({
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;message: 'Email sent'
&nbsp;&nbsp;&nbsp;});
});
}

module.exports = {
&nbsp;sendEmail: sendEmail,
}</pre>

<span style="font-weight: 400">Observa que exportamos la función sendEmail para poder usarla en nuestra ruta, puedes exportar el “transport” y utilizarlo también, pero prefiero mantener la lógica de Nodemailer allí, y hacer la lógica de DB en las rutas con mongoose, secualize, etc.</span>

<span style="font-weight: 400">Finalmente, necesitaremos la función sendEmail para usarla en nuestra ruta en el siguiente archivo:</span><span style="font-weight: 400"><br /> </span>

**// contact-us.routes.js**

<pre class="prettyprint">const express = require('express');
const router = express.Router();

const sendEmail = require('../route-to-the-file/nodemailer').sendEmail;

router
&nbsp;.route('/contact-us/')
&nbsp;.post(contactUs);

function contactUs(req, res, next) {
&nbsp;// take the email and message sent by the frontend
&nbsp;const email = req.body.email;
&nbsp;const message = req.body.message;

&nbsp;sendEmail(message, email, res, next);
}</pre>

<span style="font-weight: 400">Hemos terminado, la función sendEmail tomará los datos para enviar el correo electrónico por nosotros, luego utilizaremos el objeto “res” para hacer la respuesta a la interfaz (Frontend).</span>

<span style="font-weight: 400">Si necesitas más información, puede visitar el </span>[<span style="font-weight: 400">sitio web oficial de Nodemailer</span>](https://www.nodemailer.com/) <span style="font-weight: 400">para obtener una documentación más detallada de las capacidades de este módulo. Mantente en contacto para más publicaciones!</span>