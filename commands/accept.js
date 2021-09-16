module.exports = {
    name: "accept",
    execute(message, args, client, Discord){
        if(message.member.roles.cache.has(client.config["important_config"].allowed_too_accept)){
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!user) return message.channel.send("You must @ Someone")

        const embed = new Discord.MessageEmbed()
        .setTitle("🥳     You Have Been Accepted!     🥳")
        .setColor(client.config["custom_config"].accept_color)
        .setDescription(`<@${user.user.id}> You're Application Has Been Accepted!`)
        .setFooter(client.config["custom_config"].copyright + ' | H4r1eyDevelopment')
        message.channel.send(embed)
        message.delete().catch(O_o=>{});
        }else{
            message.channel.send("No Permissions Too Accept People!")
        }
    }
}