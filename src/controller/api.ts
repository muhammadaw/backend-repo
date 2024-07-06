import { Request, Response } from 'express';
import { updateUserData, fetchUserData } from '../repository/userCollectiont';
import { ApiError } from '../entities/ApiError';

export const updateUserDataController = async (req: Request, res: Response) => {
    try {
        const { userId, ...data } = req.body;
        await updateUserData(userId, data);
        res.status(200).json({ message: 'User data updated successfully' });
    } catch (error) {
        throw new ApiError(500, 'Error updating user data');
    }
};

export const fetchUserDataController = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const userData = await fetchUserData(userId);
        res.status(200).json(userData);
    } catch (error) {
        throw new ApiError(404, 'User not found');
    }
};