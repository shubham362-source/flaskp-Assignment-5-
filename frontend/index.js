const express = require('express');
const axios = require('axios');
const app = express();
const port = 8085;

app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

app.get('/', (req, res) => {
    res.send(`
        <form method="POST" action="/submit">
            <input type="text" name="data"/>
            <button type="submit">Submit</button>
        </form>
    `);
});

app.post('/submit', async (req, res) => {
    try {
        const response = await axios.post('http://127.0.0.1:5000/submit', req.body);
        res.send(`<p>${response.data.message}</p><p>Data: ${JSON.stringify(response.data.data)}</p>`);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Error submitting data to backend.');
    }
});

app.listen(port, '127.0.0.1', () => {
  console.log(`Frontend running on http://127.0.0.1:${port}`);
});
