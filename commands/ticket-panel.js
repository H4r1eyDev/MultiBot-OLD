module.exports = {
    name: "ticket-panel",
    execute(message, args, client, Discord){
        if(message.member.roles.cache.has(client.config["main_config"].moderator_role)){
        const embed = new Discord.MessageEmbed()
            .setAuthor(`Panel Set By ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
            .setColor(client.config["ticket_config"].panel_color)
            .setDescription(`Want to open a ticket and contact support? Do the following \n
            **${client.config["main_config"].prefix}new**`)
            .setThumbnail(client.config["custom_config"].server_icon)
            .setFooter(client.config["custom_config"].copyright + ' | Made By H4r1ey', client.config["custom_config"].server_icon)
            message.channel.send(embed)
        }else{
            message.channel.send(`No Permissions to set up the ticket Panel ${message.author.tag}`)
        }
    }
}