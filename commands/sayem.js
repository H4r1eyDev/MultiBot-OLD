module.exports = {
    name: "sayem",
    execute(message, args, client, Discord){
        const announce  = new Discord.MessageEmbed()
        .setAuthor(`Notification From ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor(client.config["custom_config"].sayem_color)
        .setThumbnail(client.config["custom_config"].server_icon)
        .setDescription(args.join(" "))
        .setFooter(client.config["custom_config"].copyright + ' | H4r1eyDevelopment', client.config["custom_config"].server_icon)
        message.channel.send(announce)
        message.delete().catch(O_o=>{});
    }
}