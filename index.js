//This code is a test and ONLY a test.Do not do an error like let that code if the bot is finished.
//Right now,the bot is not ready to be a real bot.If he become a real bot,NIGGERBOT will be here for the tests.
//Spikan was there
const Discord = require("discord.js"); //No need to explain.We just require discord.js.
const PREFIX = "/"
const YTDL = require("ytdl-core");
const BotOwner = "442793696497369089"

function play(connection, message) {
    var server = servers[message.guild.id];

    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter : "audioonly"}));

    server.queue.shift();

    server.dispatcher.on("end", function() {
        if(server.queue[0]) play(connection, message);
        else connection.disconnect();
    });
}

var hug = [
    "",
    "",
    "",

];
var fortunes = [
    "Yeah.I think.",
    "No.I don't think so.",
    "Maybe.I don't really know.",
    "What the fuck.No.",
    "...Hell no."
];

var bot = new Discord.Client();

var servers = {};

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
        break;
        case "test" :
            message.channel.sendmessage("Only working for Akawashii.")
            break; 
            //Info?
            case "invite" :
            message.channel.send("Put some chill vibes in your server.")
            case "userinfo" :

            //Music
        case "play" :
            message.channel.sendMessage("Can't play music.")
        case "stop":
        message.channel.sendMessage("Can't play music.")


        //Mod commands
        case "ban":
        var mem = message.mentions.members.first();
        if (!message.member.hasPermission("BAN_MEMBERS"))
            send.message.sendmmessage("You can't use that."); 
            if(!mem)
            return message.channel.send({"embed": { 
                "color": 12358387,
                "footer": {
                "icon_url": "https://cdn.discordapp.com/avatars/442793696497369089/af45a442037f034aa99644e322939718.png?size=2048",
                "text": "Ban command | ChillBot | Created by Akawashii."
                },
                 
                "author": {
                "name": "Ban command"
               },
               "fields": [
                {
                  "name": "Usage:",
                  "value": "/ban @user"
                },
                {
                    "name": "Example:",
                    "value": "/ban @ChillBot#8803 deviant"
                  },
                  {
                    "name": "Permissions required:",
                    "value": "Ban members."
                  }
                ]
              }
            });
        

            if (message.member.hasPermission("BAN_MEMBERS"))
        var mem = message.mentions.members.first();
        var mc = message.content.split(" ")[30];
       mem.ban(mc).then (() => {
           message.channel.sendMessage("**" + mem.displayName + "** is succesfully banned from the server.Reason:`` " + mc +"``. Byebye.")
       }).catch(e => {
           message.channel.sendMessage("I can't ban this guy,please verify if I can ban before retrying.[ban members permission]If I can,you have to dm my creator. ``/info`` for know how contact her.")
       });
            break;

        case "kick": 
        if (!message.member.hasPermission("KICK_MEMBERS"))
           return message.channel.send("You can't use that.");
           var mem = message.mentions.members.first();
           if(!mem)
           return message.channel.send({"embed": { 
               "color": 12358387,
               "footer": {
               "icon_url": "https://cdn.discordapp.com/avatars/442793696497369089/af45a442037f034aa99644e322939718.png?size=2048",
               "text": "Kick command | ChillBot | Created by Akawashii."
               },
                
               "author": {
               "name": "Kick command"
              },
              "fields": [
               {
                 "name": "Usage:",
                 "value": "/kick @user"
               },
               {
                   "name": "Example:",
                   "value": "/kick @ChillBot#8803 deviant"
                 },
                 {
                   "name": "Permissions required:",
                   "value": "Kick members."
                 }
               ]
             }
           });
        if (message.member.hasPermission("KICK_MEMBERS"))

        var mem = message.mentions.members.first();
       mem.kick().then (() => {
           message.channel.sendMessage("**" + mem.displayName + "** is succesfully kicked from the server.Byebye.")
       }).catch(e => {
           message.channel.sendMessage("I can't kick this guy,please verify if I can kick before retrying.[kick members permission]If I can,you have to dm my creator. ``/info`` for know how contact her.")
       });
            break;
           
            case "mute":
            if (!message.member.hasPermission("MANAGE_ROLES"))
            return message.channel.sendMessage("You can't use that.");
            var mem = message.mentions.members.first();
           if(!mem)
           return message.channel.send({"embed": { 
               "color": 12358387,
               "footer": {
               "icon_url": "https://cdn.discordapp.com/avatars/442793696497369089/af45a442037f034aa99644e322939718.png?size=2048",
               "text": "Mute command | ChillBot | Created by Akawashii."
               },
                
               "author": {
               "name": "Mute command"
              },
              "fields": [
               {
                 "name": "Usage:",
                 "value": "/mute @user"
               },
               {
                   "name": "Example:",
                   "value": "/mute @ChillBot#8803 spam"
                 },
                 {
                   "name": "Permissions required:",
                   "value": "Manage roles."
                 }
               ]
             }
           });
            if (message.member.hasPermission("MANAGE_ROLES"))
        var mem = message.mentions.members.first();
        if(message.guild.roles.find("name", "mute")) {
            mem.addRole(message.guild.roles.find("name", 'mute'));
            message.channel.sendMessage(mem.displayName + " is now muted.").then(() => {

            }).catch(e => {
                message.channel.send("I can't mute this guy,please verify if I can mute before retrying.[manage roles permisson]If I can,you have to dm my creator. ``/info`` for know how contact her.")
            })
        }
            break;
            case "unmute":
            if (!message.member.hasPermission("MANAGE_ROLES"))
           return send.message.sendMessage("You can't use that.");
           var mem = message.mentions.members.first();
           if(!mem)
           return message.channel.send({"embed": { 
               "color": 12358387,
               "footer": {
               "icon_url": "https://cdn.discordapp.com/avatars/442793696497369089/af45a442037f034aa99644e322939718.png?size=2048",
               "text": "Unmute command | ChillBot | Created by Akawashii."
               },
                
               "author": {
               "name": "Unmute command"
              },
              "fields": [
               {
                 "name": "Usage:",
                 "value": "/unmute @user"
               },
               {
                   "name": "Example:",
                   "value": "/unmute @ChillBot#8803 now he's nice."
                 },
                 {
                   "name": "Permissions required:",
                   "value": "Manage roles."
                 }
               ]
             }
           });

            
            if(message.guild.roles.find("name", "mute")) {
                var mem = message.mentions.members.first();
                mem.removeRole(message.guild.roles.find("name", 'mute'));
                message.channel.sendMessage(mem.displayName + " is now unmuted.").then(() => {
    
                }).catch(e => {
                    message.channel.send("I can't unmute this guy,please verify if I can unmute before retrying.[Manage roles permisson].If I can,you have to dm my creator. ``/info`` for know how contact her.")
                });
            };
            
                break;

            case "purge":
            //if the user can't
            if (message.author.missingPermissions("DELETE_MESSAGES")) {
                message.channel.sendMessage("You can't use that.");
            };
            return;
            break;
            //if the user can
            if (message.member.hasPermission("BAN_MEMBERS")) {
           
                var mc = message.content.split(" ")[1];
                message.channel.bulkDelete(mc);
                break;

            };
                //Other commands

              case "avatar":
		    const member = message.mentions.members.first();
			if (!member) return message.channel.send("Here,your beautiful avatar,like you asked. " + message.author.avatarURL);
				
			  message.channel.send("Here,**" + member.displayName + "**'s avatar." + member.user.avatarURL);
            break; 
            
        case "bae": 
        message.channel.sendMessage("That's bae. https://www.youtube.com/watch?v=Woorod1gJ_w")
        break;
        case "info": 
        message.channel.send({"embed": { 
            "description": "My creator,Akawashii,own a [Nitro Discord server](https://discord.gg/uucWDrP).She have a [Youtube Channel](https://www.youtube.com/channel/UCLewV8AA2hLpti5QiqbgKZg?view_as=subscriber) too.  For some support,dm her [here](https://twitter.com/akawashii).",
            "color": 14393835,
            "footer": {
              "icon_url": "",
              "text": "ChillBot | Created by Akawashii."
            },
            "image": {
              "url": "https://cdn.discordapp.com/attachments/442795664632446978/506492319466520587/unknown.png"
            },
            "author": {
              "name": "Asked for infos?",
              "icon_url": ""
            },
            "fields": [
              {
                "name": "Who is ChillBot? Why **ChillBot**?",
                "value": "ChillBot is a Chill Bot.He can ban and kick you,without any doubts.Why ChillBot?Because Chill music>all music."
              },
              {
                "name": "Who is Akawashii?",
                "value": "Akawashii is a person who is the dev of the bot."
              },
              {
                "name": "Who helped Akawashii to dev this bot?",
                "value": "[Spikan](https://www.twitch.tv/spikan26) helped Akawashii to dev ChillBot.Also,[Discord.js](https://discord.js.org/#/docs/main/stable/general/welcome) documentation helped her a lot too."
              },
              {
                "name": "Want to help me?",
                "value": "Dm me [here](https://twitter.com/akawashii).",
                "inline": false
              },
              {
                "name": "Want to let me know some ideas ?",
                "value": "Watch the 'Want to help me?' section. ",
                "inline": false
              }
            ]
        
        }});
        break;
        case "8ball":
        if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
        else message.channel.sendMessage("Can't read that.")
       break;
   case "hug":
       message.channel.sendMessage("*hugs you* I like you ! ");
       break;
   case "chill" :
       message.channel.sendMessage("Here,some good music.https://www.youtube.com/playlist?list=PLPdz_b9o4gwWvB7q3E9-OvtaalZHVa3jM");
       break; 
        case "marry" :
        message.channel.sendMessage("Chill.I can't marry you now.");
        break;
        case "invite" : 
        case "emotelist" :
        var server = servers[message.guild.id];
        message.channel.sendMessage("There is a list of the emotes for this server.Enjoy.");
        message.channel.sendMessage(server.emojis);
        break;
        //audit log
        case "auditlog" :
        message.channel.sendMessage("-Upgraded the ``info`` and the ``help`` command. ")
        message.channel.sendMessage("-Added ``mute``,``ban`` ``purge`` and ``kick`` command.Bugs fixed.")
        message.channel.sendMessage("Bot **renamed** ! After many doubts and reflection,**ChillBot** is born.")
        break;

        //default
        default:
        message.channel.sendMessage("It's not a command.Maybe try ``/help``?")


    };

});
bot.login(bot.login(process.env.BOT_TOKEN));
