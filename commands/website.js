module.exports = {
    name: "website",
    execute(message, args, client, Discord){
        if(client.config["module_control"].website == 'true'){
        const web = new Discord.MessageEmbed()
        .setTitle(client.config["custom_config"].server_name + ' Website')
        .setURL(client.config["custom_config"].website_link)
        .setColor(client.config["custom_config"].website_color)
        message.channel.send(web)
        }else{
            message.channel.send("Website Module Command Disabled Via Config")
        }
    }
}