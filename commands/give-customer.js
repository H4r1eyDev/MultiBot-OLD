module.exports = {
    name: "give-customer",
    execute(message, args, client, Discord){
        if(client.config["module_control"].give_customer == 'true'){
            if(message.member.roles.cache.has(client.config["important_config"].give_customer)){
            const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

            if(!user) return message.channel.send("You must @ a User!").then(msg =>{
                msg.delete({ timeout: 5000 })
            })

            const embed = new Discord.MessageEmbed()
            .setAuthor(`New Customer!`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`${user.user.username} Is A New ` + `${client.config["custom_config"].server_name}` + ' Customer!')
            .setColor(client.config["custom_config"].give_customer_color)
            .setThumbnail(client.config["custom_config"].server_icon)
            .setFooter(client.config["custom_config"].copyright + ' | H4r1eyDevelopment')
            user.roles.add(client.config["important_config"].customer_role);
            message.channel.send(embed)
            message.delete().catch(O_o=>{});
        }else{
            message.channel.send("No Permissions To Give Customer Role!")
        }
        }else{
            message.channel.send("Give-Customer Command Disabled via Config!")
        }
    }
}