"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const grammy_1 = require("grammy");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const token = process.env.API_TOKEN;
const bot = new grammy_1.Bot(token);
console.log(bot.api.config);
bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));
// Reply to any message with "Hi there!".
bot.on("message", (ctx) => ctx.reply("Hi there!"));
bot.start();
