import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import {router as indexRouter} from './routes/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Configurar o diretório para arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Usar o roteador para as rotas principais
app.use('/', indexRouter);

// Configurar a porta
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
