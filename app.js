const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

// Ruta principal
app.get('/', (req, res) => {
    res.send('Mi Ecommerce funcionando 🚀');
});

// USERS
app.get('/users', (req, res) => {
    res.json([
        { id: 1, nombre: 'José' },
        { id: 2, nombre: 'Carlos' }
    ]);
});

// PRODUCTS
app.get('/products', (req, res) => {
    res.json([
        { id: 1, producto: 'Laptop', precio: 3500 },
        { id: 2, producto: 'Mouse', precio: 150 }
    ]);
});

// ORDERS
app.get('/orders', (req, res) => {
    res.json([
        { id: 1, producto: 'Laptop', estado: 'Enviado' },
        { id: 2, producto: 'Mouse', estado: 'Pendiente' }
    ]);
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
