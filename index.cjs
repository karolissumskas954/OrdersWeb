require('@babel/register')({
    presets: ['@babel/preset-env', '@babel/preset-react'],
});

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config({ path: './.env.local' });

const { Email } = require('./src/emails/Email.jsx');

const { Resend } = require('resend');
const resend = new Resend(process.env.VITE_RESEND_API_KEY);

const port = process.env.VITE_PORT;
const corsOptions = {
    origin: process.env.VITE_LOCALHOST,
    optionsSuccessStatus: 200,
};
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.get(process.env.VITE_API, (req, res) => {
    res.json({ hello: "world" });
    console.log("Hello")
});

app.post(process.env.VITE_API, (req, res) => {
    const data = req.body;
    console.log(data.name);
    // sendEmail();
    res.send();
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});


async function sendEmail() {
    try {
      const data = await resend.emails.send({
        from: 'x@x.dev', //need change
        to: 'x@gmail.com', //change this
        subject: 'Hello World', //change
        react: Email(),
      });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
