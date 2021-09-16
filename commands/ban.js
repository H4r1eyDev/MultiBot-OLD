module.exports = {
    name: "ban",
    execute(message, args, client, Discord){
        if(client.config["module_control"].ban == 'true'){
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(message.member.roles.cache.has(client.config["important_config"].moderator_role)){



            const m = args.splice(1).join(' ')
            if(!m) return message.channel.send("Error Banning User. Possible Errors: No Reasion Provided, Possible Internal Error.")

            if(message.author.id == user) return message.channel.send("You cannot ban yourself.")

        if(!user) return message.channel.send("You must @ someone!")

        const banmessage = new Discord.MessageEmbed()
        .setAuthor(`New Ban`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor(client.config["custom_config"].ban_color)
        .setTimestamp()
        .setDescription(`Information About Ban: \n
        > Moderator: **${message.author.tag}**\n
        > User: **${user.user.tag}**\n
        > Reason: **${m}**`)
        .setFooter(client.config["custom_config"].copyright + ' | H4r1eyDevelopment')
        user.ban();
        message.channel.send(banmessage)


    }else{
        message.channel.send("No Perms too Ban Users!")
        }
    }else{
        message.channel.send("Ban Module Disabled Via Config")
    }
    }
}
