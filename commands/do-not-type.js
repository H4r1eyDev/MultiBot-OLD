module.exports = {
    name: "do-not-type",
    execute(message, args, client, Discord){
        const notype = new Discord.MessageEmbed()
        .setTitle(`⚠️     Do Not Type     ⚠️`)
        .setColor(client.config["custom_config"].do_not_type_color)
        .setDescription(`User ${message.author.username} Has Informed Everyone Not Too Type In <#${message.channel.id}>`)
        .setThumbnail(client.config["custom_config"].server_icon)
        .setFooter(client.config["custom_config"].copyright + ' | H4r1eyDevelopment', client.config["custom_config"].server_icon)
        message.channel.send(notype)
        message.delete().catch(O_o=>{});
    }
}