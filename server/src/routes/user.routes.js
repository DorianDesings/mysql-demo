//Utilizar express
import { Router } from 'express';
import controller from '../controllers/user.controller.js';
const userRouter = Router();

const { getAllUsers, addUser, updateUser, deleteUser } = controller;

//GET
userRouter.get('/', getAllUsers);

//POST
userRouter.post('/add-user', addUser);

//PUT
userRouter.put('/update-user/:userId', updateUser);

//DELETE
userRouter.delete('/delete-user/:userId', deleteUser);

export default userRouter;
