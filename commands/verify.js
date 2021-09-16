module.exports = {
    name: "verify",
    execute(message, args, client, Discord){
        if(client.config["module_control"].verification == 'true'){
        if(message.channel.id == client.config["verify_config"].verifications_channel){
        const embed = new Discord.MessageEmbed()
        .setAuthor(client.config["verify_config"].verify_title)
        .setColor(client.config["verify_config"].verify_color)
        .setDescription(`Verification Completed By <@${message.author.id}> (${message.author.id})`)
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setFooter(client.config["custom_config"].copyright + ' | H4r1eyDev', client.config["custom_config"].server_icon)
        message.channel.send(embed).then(msg => {
            msg.delete({ timeout: 5000 })
        })
        if(client.config["verify_config"].delete_command == 'true'){
            message.delete().catch(O_o=>{});
        }
        message.member.roles.add(client.config["verify_config"].verified_role).catch(console.error);
        message.member.roles.remove(client.config["verify_config"].unverified_role_id).catch(console.error);
     }else{
        message.channel.send(`This command can not be ran here, please use this command Here: <#${client.config["verify_config"].verifications_channel}>`)
     }
    }
    }
}