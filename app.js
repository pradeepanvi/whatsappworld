const http = require('http');
const express = require('express');

const app = express();

app.use('/add-product', (req, res, next) => {
    console.log('In the middleware!');
    res.send('<h1>Products</h1>')
});

app.use('/', (req, res, next) => {
    console.log('In the middleware!');
    res.send('<h1>Hello Pradeep</h1>')
});


const server = http.createServer(app);
server.listen(3000)