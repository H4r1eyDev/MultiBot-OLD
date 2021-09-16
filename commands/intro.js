module.exports = {
    name: "intro",
    execute(message, args, client, Discord){
        if(client.config["module_control"].intro_command == 'true'){
        const intro = new Discord.MessageEmbed()
        .setAuthor(`Hello! I am ${message.author.username} With ` + client.config["custom_config"].server_name + ' !', message.author.display)
        .setColor(client.config["custom_config"].intro_color)
        .setThumbnail(client.config["custom_config"].server_icon)
        .setFooter(client.config["custom_config"].copyright + ' | H4r1eyDevelopment')
        message.channel.send(intro)
        message.delete().catch(O_o=>{});



        if(client.config["module_control"].intro_logging_module == 'true'){
        const guild = client.guilds.cache.get(client.config["main_config"].guild_id);
        const logger = guild.channels.cache.get(client.config["logging_channels"].intro_logging)
        const introlog = new Discord.MessageEmbed()
        .setAuthor('User Introduced Themeselves!')
        .setTimestamp()
        .setThumbnail(client.config["custom_config"].server_icon)
        .setColor(client.config["custom_config"].intro_color)
        .addFields(
            {
                name: "User Introducing Themselves",
                value: `${message.author.username}`,
                inline: true
            },
            {
                name: "In",
                value: `${message.channel.name}`,
                inline: true
            }
        )
        .setFooter(client.config["custom_config"].copyright + ' | H4r1eyDevelopment')
        logger.send(introlog)



        }else{
            const guild = client.guilds.cache.get(client.config["main_config"].guild_id);
            const channel = guild.channels.cache.get(client.config["logging_channels"].disabled_important_config)
            channel.send("Intro Module Disabled via Config! - Logged the Message as we Don't want too Clog the Channel/Ticket.")
        }


        }else{
            message.channel.send("Intro Moduled Disabled Via Config!")
        }
    }
}