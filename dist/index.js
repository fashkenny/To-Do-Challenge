"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./config/db");
const mainApp_1 = require("./mainApp");
const port = 4020;
const app = (0, express_1.default)();
(0, mainApp_1.mainApp)(app);
const server = app.listen(port, () => {
    console.log(' server is now live and listening on port ', port);
    (0, db_1.dbConnect)();
});
process.on("uncaughtException", (error) => {
    console.log("shutting down due to uncaughtException Error");
    process.exit(1);
});
process.on("unhandledRejection", (reason) => {
    console.log("shutting down due to unhandledRejection Error");
    console.log("Error: ", reason);
    server.close(() => {
        process.exit(1);
    });
});