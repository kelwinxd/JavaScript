import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/clone', async (req, res) => {
    const url = req.query.url;
    try {
        const response = await fetch(url);
        const text = await response.text();
        res.send(text);
    } catch (error) {
        res.status(500).send('Erro ao clonar a página');
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
