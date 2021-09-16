module.exports = {
    name: "info",
    execute(message, args, client, Discord){
        if(client.config["module_control"].info == 'true'){
        const embed = new Discord.MessageEmbed()
        .setAuthor('Here is the Information For ' + client.config["custom_config"].server_name)
        .setColor(client.config["custom_config"].info_color)
        .setThumbnail(client.config["custom_config"].server_icon)
        .setDescription(`Here is Some of the Information For ` + client.config["custom_config"].server_name + ` ! \n
        [PayPal](${client.config["info_config"].paypal}) \n
        [Instagram](${client.config["info_config"].instagram})\n
        [YouTube](${client.config["info_config"].youtube})\n
        [Twitch](${client.config["info_config"].twitch})\n
        [TikTok](${client.config["info_config"].tiktok})\n
        Discord: ${client.config["info_config"].discord}
        \n
        Hello I am ${client.config["info_config"].name}! Above are my socials, come and visit!`)
        message.channel.send(embed)
        }else{
            message.channel.send("Information Module Disabled Via Config!")
        }
    }
}