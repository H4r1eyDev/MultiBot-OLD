module.exports = {
    name: "remove-customer",
    execute(message, args, client, Discord){
        if(client.config["module_control"].remove_customer == 'true'){
            if(message.member.roles.cache.has(client.config["important_config"].remove_customer)){
                const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

                if(!user) return message.channel.send("You must @ a user!")

                const embed = new Discord.MessageEmbed()
                .setAuthor('Customer Removed', message.author.displayAvatarURL({ dynamic: true }))
                .setDescription(`${user.user.username} Has been Removed From ` + `${client.config["custom_config"].server_name}` + ' Customer Rank!')
                .setColor(client.config["custom_config"].remove_customer_color)
                .setThumbnail(client.config["custom_config"].server_icon)
                .setFooter(client.config["custom_config"].copyright + ' | H4r1eyDevelopment')
                user.roles.remove(client.config["important_config"].customer_role);
                message.channel.send(embed)
                message.delete().catch(O_o=>{});
            }else{
                message.channel.send("No Permissions Too Remove-Customers.")
            }
        }else{
            message.channel.send("Remove-Role Module Disabled via Config")
        }
    }
}