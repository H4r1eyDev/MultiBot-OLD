module.exports = {
    name: "ban-appeal",
    execute(message, args, client, Discord){
        if(client.config["module_control"].ban_appeal == 'true'){
        const banappeal = new Discord.MessageEmbed()
        .setAuthor(`Ban Appeal Given By ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor(client.config["custom_config"].ban_appeal_color)
        .setDescription(`${client.config["custom_config"].appeal_question_1} \n
        ${client.config["custom_config"].appeal_question_2} \n
        ${client.config["custom_config"].appeal_question_3} \n
        ${client.config["custom_config"].appeal_question_4} \n
        ${client.config["custom_config"].appeal_question_5}`)
        .setFooter(client.config["custom_config"].copyright + ' | H4r1eyDevelopment', client.config["custom_config"].server_icon)
        message.channel.send(banappeal)

        }else{
            message.channel.send("Ban Appeal Command Disabled Via Config")
        }
    }
}