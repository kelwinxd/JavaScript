import express from 'express'
import router from './router.js'

const app = express()
const port = 5000

app.use(express.json())
app.use(router)


// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
})

