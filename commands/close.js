module.exports = {
    name: "close",
    execute(message, args, client, Discord){
        if(message.channel.parentID == client.config["ticket_config"].ticket_catergory){
            if(message.member.roles.cache.has(client.config["ticket_config"].support_role)){

            const ticket_channel = message.channel.id;
            const channel = message.guild.channels.cache.get(ticket_channel);


        const closing = new Discord.MessageEmbed()
        .setAuthor(`Closure Confirmed, Ticket Closing`, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setThumbnail(client.config["custom_config"].server_icon)
        .setColor(client.config["ticket_config"].closing_color)
        .setFooter(client.config["custom_config"].copyright, client.config["custom_config"].server_icon)
        .setDescription(`Thanks for Contacting Support of ${client.config["custom_config"].server_name} \n
        **Notice:** \n
        > You can always re-open a ticket if you have a issue! \n
        > It can take up to 5-8 seconds for this ticket to close!`)
        message.channel.send(closing)
        setTimeout(() => channel.delete(), 5000);
            }else{
                message.channel.send("No Permissions to close tickets!")
            }
        }else{
            message.channel.send("Command can only be ran in a ticket!")
        }
    }
}