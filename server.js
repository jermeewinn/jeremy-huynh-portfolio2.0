const express = require('express');
const router = express.Router();
const cors = require('cors');
const nodemailer = require('nodemailer');

//Setup the server that'll run on port 5000
const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(5000, () => console.log('Server Running'));