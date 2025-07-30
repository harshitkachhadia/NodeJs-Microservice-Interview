import express from 'express';
import companyRoutes from './routes/companyRoutes';

const app = express();

app.use(express.json());

app.use('/companies',companyRoutes);

export default app;