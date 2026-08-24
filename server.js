const express = require('express');
const path = require('path')

const app = express();
const PORT = 9348;

app.use(express.static('app'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'app', 'index.html'));
});

app.listen(PORT, () => {
    console.log('http://localhost:9348');
});