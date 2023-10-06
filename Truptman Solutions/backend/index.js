const express = require('express');
require('dotenv').config()
const cors = require('cors');

const app = express();
const port = process.env.PORT || 7000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

const userRouter = require("./src/routes/user.routes")

app.use(userRouter)

app.get('/', (req, res) => {
    res.json({success: true, message: "hello world"})
});


app.listen(port, () => console.log(`listening on http://localhost:${port}`));
require('./src/db/connection')