import express from 'express';
import routes from './API/Routes/RSSRoutes.js';
import { getPaths } from "./Utils/paths.js";
import path from 'path';

const { __dirname } = getPaths(import.meta.url);
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use('/api', routes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
