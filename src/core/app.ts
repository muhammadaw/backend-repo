import express, { Request, Response, NextFunction } from 'express';
import userRoutes from '../routes/userRoutes';
import { ApiError } from '../entities/ApiError';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use('/api', userRoutes);
app.use(cors({origin: '*' }));

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof ApiError) {
    res.status(err.statusCode).json({ message: err.message });
  } else {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

export default app;