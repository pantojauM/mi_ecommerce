const express = require('express');
const app = express();

const orders = [
    { id: 1, userId: 1, productId: 2 }
];

app.get('/orders', (req, res) => {
    res.json(orders);
});

app.listen(3003, () => {
    console.log("Orders Service running on port 3003");
});