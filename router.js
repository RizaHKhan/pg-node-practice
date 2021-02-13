import express from "express";
import userController from "./userController.js";
const { Router } = express;
const router = Router();

router.route("/").post(userController.addUser).get(userController.getUsers);
router.route("/:email").delete(userController.deleteUserByEmail);
export default router;
