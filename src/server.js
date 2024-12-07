const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('coucou kevin');
});

module.exports = app;
