import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../entities/ApiError';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        throw new ApiError(401, 'Unauthorized: No token provided');
    }

    if (typeof token !== 'string' || token.length === 0) {
        throw new ApiError(401, 'Unauthorized: Invalid token');
    }

    next();
};