module.exports = {
    name: "bug-report",
    execute(message, args, client, Discord){
        if(client.config["module_control"].bug_reporting == 'true'){
        const guild = client.guilds.cache.get(client.config["main_config"].guild_id);
        const channel = guild.channels.cache.get(client.config["logging_channels"].bug_report_channel)


        const bugreport = new Discord.MessageEmbed()
        .setAuthor(`New Bug Report From ${message.author.tag}`)
        .setThumbnail(client.config["custom_config"].server_icon)
        .setColor(client.config["custom_config"].bug_report_color)
        .setDescription(args.join(" "))
        .setFooter(client.config["custom_config"].copyright + ' | H4r1eyDevelopment')
        channel.send(bugreport)
        message.delete().catch(O_o=>{});



        const notify = new Discord.MessageEmbed()
        .setAuthor('Thanks for the Bug Report!')
        .setColor(client.config["custom_config"].bug_report_color)
        .setThumbnail(client.config["custom_config"].server_icon)
        .setFooter(client.config["custom_config"].copyright + ' | H4r1eyDevelopment')
        message.channel.send(notify).then(msg => {
            msg.delete({ timeout: 5000 })
        })
        }else{
            message.channel.send("Bug-Report Module Disabled Via Config!")
        }
    }
}