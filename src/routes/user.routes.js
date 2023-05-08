import { Router } from "express";
import { UsersController } from "../controllers/users.js";

const UsersRoute = Router()

// READ Users
UsersRoute.get('/', UsersController.getUsers)


export default UsersRoute