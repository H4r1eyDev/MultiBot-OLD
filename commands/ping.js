module.exports = {
    name: "ping",
    execute(message, args, client, Discord){
        const ping = new Discord.MessageEmbed()
        .setTitle('PONG!')
		.setColor(client.config["custom_config"].ping_color)
		.setFooter(client.config["custom_config"].copyright + ' | H4r1eyDevelopment!')
		message.channel.send(ping)
        message.delete().catch(O_o=>{});
    }
}