import express from 'express';
import routes from './API/Routes/RSSRoutes.js';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors({origin: 'http://127.0.0.1:5500',}));

app.use(express.json());
app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
