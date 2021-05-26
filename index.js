const Discord = require('discord.js');
const BigNumber = require('bignumber.js')
const client = new Discord.Client();
const config = require("./config");

const prefix = config.prefix;

client.once('ready', () => {
    console.log("Bot is ready");
})

client.on('message', message => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();

    if (command === 'hex') {
        if (!args.length) {
            const randomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
            const color = [
                randomBetween(0, 255),
                randomBetween(0, 255),
                randomBetween(0, 255),
            ];
            let Embed = new Discord.MessageEmbed()
                .setTitle(`:x:｜請輸入Steam ID`)
                .setColor(color)
            message.channel.send(Embed);
        } else {
            var x = new BigNumber(args, 10);
            var y = x.toString(16);
        }

        const randomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
        const color = [
            randomBetween(0, 255),
            randomBetween(0, 255),
            randomBetween(0, 255),
        ];
        let Embed = new Discord.MessageEmbed()
            .setTitle(`您的16進制碼`)
            .setDescription(y)
            .setColor(color)
            .setFooter(`使用者:${message.author}`)
        message.channel.send(Embed);
    }
})

client.login(config.token);