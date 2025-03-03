import express, { Application, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';


import productRoutes from './routes/productRoutes';
import categoryRoutes from './routes/categoryRoutes';
import logisticsRoutes from './routes/logisticsRoutes';
import chartsRoutes from './routes/chartsRoutes';

import swaggerJSDoc from 'swagger-jsdoc';
import { swaggerOptions } from './utils/swaggerOptions';

// Carregar variáveis de ambiente
dotenv.config();

const app: Application = express();

// Middlewares globais
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(cors()); // Habilitar CORS para requisições externas

// Swagger Docs
const swaggerSpec = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


// Rotas
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/logistics', logisticsRoutes);
app.use('/api/charts', chartsRoutes);

// Rota inicial para verificar se o servidor está funcionando
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'API is running 🚀' });
});

// Middleware para tratamento de erros
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error', message: err.message });
});

export default app;
