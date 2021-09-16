module.exports = {
    name: "product-check",
    execute(message, args, client, Discord){
        if(client.config["store_information"].product_check_command == 'true'){

        if(message.member.roles.cache.has(client.config["store_information"].customer_role)){
            message.channel.send("Fantastic, You are a customer!")
        }else{
            message.channel.send("Damn, You are NOT a customer!")
        }


        const versions2 = client.config["store_information"].product_versions

        const versions = new Discord.MessageEmbed()
        .setAuthor(`Version Check for the ${client.config["custom_config"].server_name}`, message.author.displayAvatarURL({ dynamic: true }))
        .setThumbnail(client.config["custom_config"].server_icon)
        .setDescription(versions2)
        .setColor(client.config["custom_config"].store_color)
        .setFooter(client.config["custom_config"].copyright + ' | H4r1eyDevelopment', client.config["custom_config"].server_icon)
        message.channel.send(versions)
        message.delete().catch(O_o=>{});
        }else{
        message.channel.send("Command Disabled Via Config.")
        }
    }
}