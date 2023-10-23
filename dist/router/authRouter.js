"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = require("../controller/authController");
const router = express_1.default.Router();
router.route("/createUser").post(authController_1.createUser);
router.route("/getAllUsers").get(authController_1.getAllUsers);
router.route("/:userID/getOneUser").get(authController_1.getOneUser);
router.route("/signInUsers").post(authController_1.signInUser);
exports.default = router;
