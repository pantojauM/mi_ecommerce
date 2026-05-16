const express = require('express');
const axios = require('axios');

const app = express();

const PORT = process.env.PORT || 3000;

// Ruta principal
app.get('/', (req, res) => {
    res.send('Gateway Ecommerce funcionando 🚀');
});

// USERS
app.get('/users', async (req, res) => {
    try {
        const response = await axios.get('http://users-service:3001/users');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error en users-service' });
    }
});

// PRODUCTS
app.get('/products', async (req, res) => {
    try {
        const response = await axios.get('http://products-service:3002/products');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error en products-service' });
    }
});

// ORDERS
app.get('/orders', async (req, res) => {
    try {
        const response = await axios.get('http://orders-service:3003/orders');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error en orders-service' });
    }
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Gateway running on port ${PORT}`);
});