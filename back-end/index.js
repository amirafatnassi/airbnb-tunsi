const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
require('dotenv').config();
const path= require('path');
const port = 4000;

require('./db/connect');
require('./passport-strategies/bearer')

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json({limit: "52428800"}));
app.use(bodyParser.urlencoded({limit: "52428800", extended: true, parameterLimit:50000}));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set('view engine','ejs')
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/qrcodes', express.static(path.join(__dirname, 'qrcodes')));
app.use('/pdf-files', express.static(path.join(__dirname, 'pdf-files')));

app.use('/users', require('./Routes/user'));
app.use('/logements', require('./Routes/logement'));
app.use('/types_logements', require('./Routes/typeLogement'));
app.use('/types_contrats', require('./Routes/typeContrat'));
app.use('/installations', require('./Routes/installation'));
app.use('/safety_items', require('./Routes/safetyItem'));
app.use('/options', require('./Routes/option'));
app.use('/criteres', require('./Routes/critere'));
app.use('/reservations', require('./Routes/reservation'));

app.listen(port, function () { 
  console.log("app working on port:", port);
});
