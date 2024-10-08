import express from 'express';
import initRoutes from '../startup/routes.ts';
import cors from 'cors';

const app = express();

app.use(cors());

initRoutes(app);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Acesse: http://localhost:${port}/`));