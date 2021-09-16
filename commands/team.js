module.exports = {
    name: "team",
    execute(message, args, client, Discord){
        if(client.config["module_control"].team_command == 'true'){
        const team = client.config["custom_config"].team_members
        const embed = new Discord.MessageEmbed()
        .setAuthor(`Hello ${message.author.username}, Here is ${client.config["custom_config"].server_name}'s Team!`)
        .setColor(client.config["custom_config"].team_colour)
        .setDescription(`Here is My **Team!**\n${team}\n\nWant to Join the Team? You can apply here: ${client.config["custom_config"].team_app_link}`)
        .setFooter(client.config["custom_config"].copyright + ' | H4r1eyDev', client.config["custom_config"].server_icon)
        message.channel.send(embed)
        }
    }
}