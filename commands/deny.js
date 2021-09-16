module.exports = {
    name: "deny",
    execute(message, args, client, Discord){
        if(message.member.roles.cache.has(client.config["important_config"].allowed_too_deny)){
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!user) return message.channel.send("You must @ someone")

        const denied = new Discord.MessageEmbed()
        .setAuthor('Application Denied!')
        .setColor(client.config["custom_config"].denied_embed_color)
        .setDescription(`<@${user.user.id}> You're Application Has Been Denied!`)
        .setFooter(client.config["custom_config"].copyright + ' | H4r1eyDevelopment')
        message.channel.send(denied)
        message.delete().catch(O_o=>{});
        }else{
            message.channel.send("No Permissions Too Deny People!")
        }
    }
}