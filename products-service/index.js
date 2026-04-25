const express = require('express');
const app = express();

const products = [
    { id: 1, name: "Laptop", price: 2500 },
    { id: 2, name: "Mouse", price: 50 }
];

app.get('/products', (req, res) => {
    res.json(products);
});

app.listen(3002, () => {
    console.log("Products Service running on port 3002");
});