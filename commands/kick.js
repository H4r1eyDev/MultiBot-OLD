module.exports = {
    name: "kick",
    execute(message, args, client, Discord){
        if(client.config["module_control"].kick == 'true'){
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!user) return message.channel.send("You must @ someone!")

        const kickmessage = new Discord.MessageEmbed()
        .setAuthor(`New Kick`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor(client.config["custom_config"].kick_color)
        .setTimestamp()
        .setDescription(`Information About Kick: \n
        > Moderator: **${message.author.tag}**\n
        > User: **${user.user.tag}**\n
        > Reason: **${args.splice(1).join(' ')}**`)
        .setFooter(client.config["custom_config"].copyright + ' | H4r1eyDevelopment')
        user.kick();
        message.channel.send(kickmessage)


        if(client.config["module_control"].kick_logging == 'true'){
        const guild = client.guilds.cache.get(client.config["main_config"].guild_id);
        const channel = guild.channels.cache.get(client.config["logging_channels"].kick_logging_channel)
        const logger = new Discord.MessageEmbed()
        .setAuthor(`New Kick`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor(client.config["custom_config"].kick_color)
        .setTimestamp()
        .setDescription(`Information About Kick: \n
        > Moderator: **${message.author.tag}**\n
        > User: **${user.user.tag}**\n
        > Reason: **${args.splice(1).join(' ')}**`)
        .setFooter(client.config["custom_config"].copyright + ' | H4r1eyDevelopment')
        channel.send(logger)
        }

        }else{
            message.channel.send("Kick Module Disabled Via Config")
        }
    }
}