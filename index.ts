import { Bot } from "grammy";
import { Menu } from "@grammyjs/menu";

import dotenv from 'dotenv';
import { plus } from "./src/replyController";
import { GemBox } from "./src/domain/gembox";
dotenv.config();

const token = process.env.API_TOKEN as string;

const bot = new Bot(token);
const gemBox = new GemBox(100);

const menu = new Menu("mainMenu")
  .text("report", (ctx) => ctx.reply(gemBox.getReport())).row()
    .text("add", (ctx) => {
        gemBox.addGem(1);
        ctx.reply('gem was added.')}).row()
    .text("remove", (ctx) => {
        gemBox.remove(1)
        ctx.reply('gem was removed');
    }).row()

bot.use(menu);

bot.command("start", async (ctx) => {
  // Send the menu.
  await ctx.reply("Check out this menu:", { reply_markup: menu });
});
bot.start();
