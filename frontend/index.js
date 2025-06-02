const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('<form method="POST" action="/submit"><input type="text" name="data"/><button type="submit">Submit</button></form>');
});

app.post('/submit', async (req, res) => {
    const response = await axios.post('http://backend:5000/submit', req.body);
    res.send(`<p>${response.data.message}</p><p>Data: ${JSON.stringify(response.data.data)}</p>`);
});

app.listen(port, () => {
    console.log(`Frontend listening at http://localhost:${port}`);
});
