import { Router } from "express";
import { UsersController } from "../controllers/users.js";

const UsersRoute = Router()

// LOGIN
UsersRoute.get('/', UsersController.getUsers)

// SIGNIN
UsersRoute.get('/', UsersController.postUsers)

export default UsersRoute