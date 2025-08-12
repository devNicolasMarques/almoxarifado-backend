import express from 'express';
import initRoutes from './routes/routes.ts';
import cors from 'cors';

const app = express();

app.use(cors());

initRoutes(app);

const port = 8080;

app.listen(port, () => console.log(`Acesse: http://localhost:${port}/`));