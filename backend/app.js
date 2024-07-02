const express = require('express');
const connectDB = require('./db');
const cors = require("cors");
const bodyParser = require("body-parser");
// origin and credentials options
const routes = require("./routes/book");
const app = express();
require('dotenv').config();
app.use(cors({ origin: true, credentials: true }));

// use the body-parser middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect Database
connectDB();
app.use("/api/books", routes);


app.get('/', (req, res) => res.send('Hello world!'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));