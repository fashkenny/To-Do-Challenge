"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signInUser = exports.deleteUser = exports.getOneUser = exports.getAllUsers = exports.createUser = void 0;
const authModel_1 = __importDefault(require("../model/authModel"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const salt = yield bcrypt_1.default.genSalt(10);
        const hash = yield bcrypt_1.default.hash(password, salt);
        const user = yield authModel_1.default.create({
            email, password: hash
        });
        return res.status(201).json({
            message: "user created",
            data: user
        });
    }
    catch (error) {
        return res.status(404).json({
            error: error.message
        });
    }
});
exports.createUser = createUser;
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield authModel_1.default.find();
        return res.status(200).json({
            message: "users found",
            data: user
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Error creating user",
            error
        });
    }
});
exports.getAllUsers = getAllUsers;
const getOneUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userID } = req.params;
        const user = yield authModel_1.default.findById(userID);
        return res.status(200).json({
            message: "A user gotten successfully",
            data: user
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Unable to get user",
            error
        });
    }
});
exports.getOneUser = getOneUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userID } = req.params;
        const user = yield authModel_1.default.findByIdAndDelete(userID);
        return res.status(201).json({
            message: "User deleted successfully",
            data: user
        });
    }
    catch (error) {
        return res.status(404).json({
            message: "Unable delete user",
            error
        });
    }
});
exports.deleteUser = deleteUser;
const signInUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield authModel_1.default.findOne({ email });
        if (user) {
            const checked = yield bcrypt_1.default.compare(password, user === null || user === void 0 ? void 0 : user.password);
            if (checked) {
                return res.status(201).json({
                    message: `Welcome back!! ${user.userName}`,
                    data: user.id
                });
            }
            else {
                return res.status(401).json({
                    message: "Invalid password",
                });
            }
        }
    }
    catch (error) {
        return res.status(404).json({
            message: "data not found in database ",
            error
        });
    }
});
exports.signInUser = signInUser;
