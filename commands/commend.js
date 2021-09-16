module.exports = {
    name: "commend",
    execute(message, args, client, Discord){
        if(client.config["module_control"].commend == 'true'){
        if(message.member.roles.cache.has(client.config["important_config"].commend_perms)){
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!user) return message.channel.send("You must @ Someone!")

        const commend = new Discord.MessageEmbed()
        .setAuthor(`${user.user.username} Has Been Commended By ${message.author.username}`)
        .setColor(client.config["custom_config"].commend_color)
        .setTimestamp()
        .setThumbnail(client.config["custom_config"].server_icon)
        .setDescription(`${args.splice(1).join(' ')}`)
        .setFooter(client.config["custom_config"].copyright + ' | H4r1eyDevelopment')
        message.channel.send(commend)
        message.delete().catch(O_o=>{});




        if(client.config["module_control"].commend_logging_m == 'true'){
        const guild = client.guilds.cache.get(client.config["main_config"].guild_id);
        const logger = guild.channels.cache.get(client.config["logging_channels"].commend_log_channel)
        const commendlog = new Discord.MessageEmbed()
        .setAuthor(`${user.user.username} Commened By ${message.author.username}`)
        .setColor(client.config["custom_config"].commend_color)
        .setTimestamp()
        .setThumbnail(client.config["custom_config"].server_icon)
        .setDescription(`In Channel <#${message.channel.id}>`)
        .setFooter(client.config["custom_config"].copyright + ' | H4r1eyDevelopment')
        logger.send(commendlog)

        }else{
            const guild = client.guilds.cache.get(client.config["main_config"].guild_id);
            const logger = guild.channels.cache.get(client.config["logging_channels"].disabled_commend_logging)
            logger.send("Commend Logging Disabled! Sent it into the logger channel to stop clogging the channels.")
        }





        }else{
            message.channel.send("No Permissions To Commend People!")
        }
        }else{
            message.channel.send("Commend Module Disabled Via Config")
        }
    }
}