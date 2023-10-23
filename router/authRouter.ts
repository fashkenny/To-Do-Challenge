import express from "express";
import { createUser, getAllUsers, getOneUser, signInUser } from "../controller/authController";




const router = express.Router()
router.route("/createUser").post(createUser)
router.route("/getAllUsers").get(getAllUsers)
router.route("/:userID/getOneUser").get(getOneUser)
router.route("/signInUsers").post(signInUser)

export default router