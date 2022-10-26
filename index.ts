import { Bot, InlineKeyboard, Keyboard } from "grammy";
import { Menu } from "@grammyjs/menu";

import dotenv from 'dotenv';
import { plus } from "./src/replyController";
import { GemBox } from "./src/domain/gembox";
dotenv.config();

const token = process.env.API_TOKEN as string;

const bot = new Bot(token);
// const gemBox = new GemBox(100);
const keyboard = new Keyboard().text('location').row()
const menu = new Menu("mainMenu")
  .text("hi", (ctx) => ctx.reply('Hi Jessi!')).row()
  .text("who am i", (ctx) => ctx.reply(`i don't know`)).row()
    // .text("add", (ctx) => {
    //     gemBox.addGem(1);
    //     ctx.reply('gem was added.')}).row()
    // .text("remove", (ctx) => {
    //     gemBox.remove(1)
    //     ctx.reply('gem was removed');
    // }).row()

bot.use(menu);

bot.on('msg:text', ctx => {
  if (ctx.message!.text === 'location') {
    console.log(ctx.message?.location)
    ctx.reply('give me your location!', { reply_markup: keyboard })
  }
})
bot.command("start", async (ctx) => {
  // Send the menu.
  await ctx.reply("Check out this menu:", { reply_markup: menu });
});
bot.hears('location',ctx=>console.log(ctx.msg.location))
bot.on('message',ctx=>console.log(ctx.message))
// bot.command()
bot.start();
