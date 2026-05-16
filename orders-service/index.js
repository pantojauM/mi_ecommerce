const express = require('express');

const app = express();

app.get('/orders', (req, res) => {
    res.json([
        { id: 1, product: 'Laptop', total: 2500 },
        { id: 2, product: 'Mouse', total: 100 }
    ]);
});

app.listen(3003, '0.0.0.0', () => {
    console.log('Orders Service running on port 3003');
});