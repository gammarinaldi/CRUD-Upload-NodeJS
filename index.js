const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 1997;

var app = express({defaultErrorHandler:false});

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req,res) => {
    res.send('<h1>Selamat Datang di Node.js Mysql!</h1>');
});

const {
    brandRouter
} = require('./routers');

app.use('/brand', brandRouter);

app.listen(PORT, () => console.log('Node is running, API active at port: ' + PORT));