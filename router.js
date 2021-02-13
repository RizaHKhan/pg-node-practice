import express from "express";
import userController from "./userController.js";
const { Router } = express;
const router = Router();

router.route("/").get(userController.getUsers);
router.route("/register").post(userController.registerUser);
router.route("/:email").delete(userController.deleteUserByEmail);
export default router;
