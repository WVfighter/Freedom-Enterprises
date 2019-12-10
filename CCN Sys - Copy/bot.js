const Discord = require("discord.js")
const config = require("./config.json");
const bot = new Discord.Client({disableEveryone: false});

bot.on("ready", async () => {
    bot.user.setActivity("Prefix is '!'",{type: "WATCHING"});
    console.log(`${bot.user.username} is online`);
});

bot.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type == "dm") return;

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd == `${prefix}ping`){
        return message.channel.send("Pong!");
    };
});

bot.login(config.token);