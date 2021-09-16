module.exports = {
    name: "new",
    description: "open a ticket!",
    async execute(message, args, client, Discord) {
        if(client.config["module_control"].tickets == 'true'){
      const channel = await message.guild.channels.create(`ticket-${message.author.tag}`);
      const supportrole = client.config["ticket_config"].support_role
      
  
      channel.setParent(client.config["ticket_config"].ticket_catergory);
  
      channel.updateOverwrite(message.guild.id, {
        SEND_MESSAGE: false,
        VIEW_CHANNEL: false,
      });
      channel.updateOverwrite(message.author.id, {
        SEND_MESSAGE: true,
        VIEW_CHANNEL: true,
      });
      channel.updateOverwrite(supportrole, {
        SEND_MESSAGE: true,
        VIEW_CHANNEL: true,
      });


      const open = new Discord.MessageEmbed()
      .setAuthor(client.config["ticket_config"].ticket_message)
      .setColor(client.config["ticket_config"].ticket_message_color)
      .setThumbnail(client.config["custom_config"].server_icon)
      .setDescription(client.config["ticket_config"].ticket_message_small)
      .setFooter(client.config["custom_config"].copyright + ' | Made By H4r1ey', message.author.displayAvatarURL({ dynamic: true }))
      channel.send(open)

        const opened = new Discord.MessageEmbed()
        .setAuthor(`Ticket Opened!`, message.author.displayAvatarURL({ dynamic: true }))
        .setColor(client.config["ticket_config"].ticket_message_color)
        .setThumbnail(client.config["custom_config"].server_icon)
        .setDescription(`You can find your new ticket here ${channel}.`)
        .setFooter(client.config["custom_config"].copyright + ' | Made By H4r1ey', client.config["custom_config"].server_icon)
        message.channel.send(opened).then(msg => {
          msg.delete({ timeout: 5000 })
        })
        message.delete().catch(O_o=>{});



    }else{
        message.channel.send("Ticket Module Disabled Via Config!")
    }
    },
  };
  