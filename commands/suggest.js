module.exports = {
    name: 'suggest',
    description: 'allows users to make suggestions',
    execute(message, args, client, Discord){
        if(client.config["module_control"].suggestions == 'true'){
        const guild = client.guilds.cache.get(client.config["main_config"].guild_id);
        const channels = guild.channels.cache.get(client.config["important_config"].suggestion_channel)
        const suggest = new Discord.MessageEmbed()
        .setAuthor(`Suggestion From ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(args.join(" "))
        .setColor(client.config["custom_config"].suggestion_color)
        .setFooter(client.config["custom_config"].copyright + ' | H4r1eyDevelopment')
        channels.send(suggest).then(msg => {
            msg.react("👍"),
            msg.react("👎")
}
           
        )

        const notify = new Discord.MessageEmbed()
        .setAuthor(`Thanks ${message.author.username} For the Suggestion!`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(client.config["custom_config"].suggestion_notification)
        .setColor(client.config["custom_config"].suggestion_color)
        .setFooter(client.config["custom_config"].copyright + ' | H4r1eyDevelopment')
        message.channel.send(notify).then(msg =>{
            msg.delete({ timeout: 5000 })
        })
        message.delete().catch(O_o=>{});
        }else{
            message.channel.send("Suggestion Module Disabled Via Config")
        }
    }
}