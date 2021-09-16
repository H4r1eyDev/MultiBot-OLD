module.exports = {
    name: "outro",
    execute(message, args, client, Discord){
        if(client.config["module_control"].outro_command == 'true'){
            const embed = new Discord.MessageEmbed()
            .setAuthor(`Thanks for Contacting support for ` + client.config["custom_config"].server_name + ' !')
            .setColor(client.config["custom_config"].outro_color)
            .setThumbnail(client.config["custom_config"].server_icon)
            .setFooter(client.config["custom_config"].copyright + ' | H4r1eyDevelopment')
            message.channel.send(embed)
            message.delete().catch(O_o=>{});
        }else{
            message.channel.send("Outro Command Disabled Via Config")
        }
    }
}