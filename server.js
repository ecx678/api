const express = require('express');
const app = express();
const PORT = 3000;

// Middleware för att servern ska förstå JSON-data i inkommande anrop
app.use(express.json());

// Exempel på data (simulerad databas)
let users = [
    { id: 1, name: 'Anna' },
    { id: 2, name: 'Erik' }
];

// GET-endpoint: Hämta alla användare
app.get('/api/users', (req, res) => {
    res.json(users);
});

// POST-endpoint: Lägg till en ny användare
app.post('/api/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

// Starta servern
app.listen(PORT, () => {
    console.log(`API:et körs på http://localhost:${PORT}`);
});
