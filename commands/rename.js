module.exports = {
    name: "rename",
    execute(message, args, client, Discord){
        if(message.channel.parentID == client.config["ticket_config"].ticket_catergory){
            if(message.member.roles.cache.has(client.config["ticket_config"].support_role)){

        const new_name = args.join("-")
        const tick_name = 'ticket-' + new_name


        const renamed = new Discord.MessageEmbed()
        .setAuthor(`Ticket Renamed`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`Ticket Renamed \n
        **Information:** \n
        *Old Name:* ${message.channel.name} \n
        *Command Ran By:* ${message.author.tag}`)
        .setThumbnail(client.config["custom_config"].server_icon)
        .setColor(client.config["ticket_config"].rename_color)
        .setFooter(client.config["custom_config"].copyright + ' | H4r1ey Development', client.config["custom_config"].server_icon)
        message.channel.send(renamed).then(msg => {
            msg.delete({ timeout: 7000 })
        })
        message.delete().catch(O_o=>{});
        message.channel.setName(tick_name)
        }else{
            message.channel.send("No Permissions to rename tickets!")
        }
        }else{
            message.channel.send("This is not a ticket, please run this command in a ticket!")
        }
    }
}