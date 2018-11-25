//test code
const Discord = require("discord.js"); //No need to explain.We just require discord.js.
const PREFIX = "/"
var bot = new Discord.Client();

bot.on("ready",function() {
	console.log("Let's listen to chill songs...together.")
	bot.user.setActivity("listening to chill songs. /help.") ;
	bot.user.setStatus("idle");
});

bot.on("message", function(message) {
    if (message.author .equals(bot.user)) return;

    if(!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {

//tests

        case "ping":
             message.channel.sendMessage("PoOoOOoOoOOoOonNnnNnNgGgGGgGgG");
        default:
        message.channel.sendMessage("It's not a command.Maybe try ``/help``?")


    };

});
bot.login(bot.login(process.env.BOT_TOKEN));
//if you use a local bot,follow these steps.
//at the beggining of the code
const token = "YourSuperSecretToken"
//remove (bot.login(process.env.BOT_TOKEN)); at bot.login
//remplace it by:
bot.login(TOKEN);
