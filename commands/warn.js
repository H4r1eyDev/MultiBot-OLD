module.exports = {
    name: "warn",
    execute(message, args, client, Discord){
        if(client.config["module_control"].warning == 'true'){
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(message.member.roles.cache.has(client.config["important_config"].moderator_role)){

        if(!user) return message.channel.send("You must @ someone!")


        const embed = new Discord.MessageEmbed()
        .setAuthor(`New Warning!`, message.author.displayAvatarURL({ dynamic: true }))
        .setThumbnail(client.config["custom_config"].server_icon)
        .setTimestamp()
        .setDescription(`Warning Information: \n
        > Moderator: **${message.author.tag}**\n
        > User: **${user.user.tag}**\n
        > Reason: **${args.splice(1).join(' ')}**`)
        .setColor(client.config["custom_config"].warn_color)
        .setFooter(client.config["custom_config"].copyright + ' | H4r1eyDevelopment', user.user.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
        message.delete().catch(O_o=>{});



        if(client.config["module_control"].warning_logging == 'true'){

            const guild = client.guilds.cache.get(client.config["main_config"].guild_id);
            const channel = guild.channels.cache.get(client.config["logging_channels"].warning_logging_channel)
            const embed2 = new Discord.MessageEmbed()
            .setAuthor(`New Warning!`, message.author.displayAvatarURL({ dynamic: true }))
            .setThumbnail(client.config["custom_config"].server_icon)
            .setTimestamp()
            .setDescription(`Warning Information: \n
            > Moderator: **${message.author.tag}**\n
            > User: **${user.user.tag}**\n
            > Reason: **${args.splice(1).join(' ')}**`)
            .setColor(client.config["custom_config"].warn_color)
            .setFooter(client.config["custom_config"].copyright + ' | H4r1eyDevelopment', user.user.displayAvatarURL({ dynamic: true }))
            channel.send(embed2)

        }else{  
            message.author.send("Logging is DISABLED via the Config")
        }

        if(client.config["module_control"].warning_logging_dm == 'true'){
        const embed3 = new Discord.MessageEmbed()
        .setAuthor(`New Warning!`, message.author.displayAvatarURL({ dynamic: true }))
        .setThumbnail(client.config["custom_config"].server_icon)
        .setTimestamp()
        .setDescription(`Warning Information: \n
        > Moderator: **${message.author.tag}**\n
        > User: **${user.user.tag}**\n
        > Reason: **${args.splice(1).join(' ')}**`)
        .setColor(client.config["custom_config"].warn_color)
        .setFooter(client.config["custom_config"].copyright + ' | H4r1eyDevelopment', user.user.displayAvatarURL({ dynamic: true }))
        user.user.send(embed3)

        }else{
            message.author.send("DM Warning is DISABLED via the config!")
        }


        }else{
            message.channel.send("No Perms Too Warn People!")
        }
        }else{
            message.channel.send("Warn Module Disabled Via Config")
        }
    }
}