const util = require('../../util');
const config = require('../../../config.json')
const Discord = require("discord.js");
const DEL = require('@zerotwobot/del.js') // importing del
const del = new DEL(config.DELtoken, "889197952994791434") // initializing it

module.exports = {
    name: 'post',

    description: 'Post to DEL',


    async execute(message, args, client) {

        if (!client.application.owner)
            await client.application.fetch()

        if (client.application.owner.id !== message.author.id) {
            return message.reply('This command is restricted to my developers.')
        }

        try {
            del.post(client.guilds.cache.size, 0)
            return message.reply(`Successfully posted ${client.guilds.cache.size} guilds to DEL.`)
        } catch (e) {
            return message.reply(`Failed to post:\n\`${e}\``)
        }
    },
};