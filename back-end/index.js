const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
require('dotenv').config();
const port = 4000;

require('./db/connect');
require('./passport-strategies/bearer')

const app = express();
app.use(cors());
app.use(morgan("tiny"));
app.use(bodyParser.json());

app.use('/users', require('./Routes/user'));
app.use('/types_logements', require('./Routes/typeLogement'));
app.use('/types_contrats', require('./Routes/typeContrat'));
app.use('/installations', require('./Routes/installation'));
app.use('/safety_items', require('./Routes/safetyItem'));

app.listen(port, function () { 
  console.log("app working on port:", port);
});
