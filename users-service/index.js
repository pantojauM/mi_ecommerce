const express = require('express');
const app = express();

app.use(express.json());

const users = [
    { id: 1, name: "Jose", email: "jose@email.com" },
    { id: 2, name: "Maria", email: "maria@email.com" },
    { id: 3, name: "Carlos", email: "carlos@email.com" }
];

app.get('/users', (req, res) => {
    res.json(users);
});

app.listen(3001, () => {
    console.log("Users Service running on port 3001");
});