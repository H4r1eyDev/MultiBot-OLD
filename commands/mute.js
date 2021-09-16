const ms = require('ms');
module.exports = {
    name: 'mute',
    description: "this is the mute command",
    execute(message, args, client, Discord){
        if(client.config["module_control"].mute == 'true'){
        const target = message.mentions.users.first();
        if(message.member.roles.cache.has(client.config["important_config"].allowed_to_mute)){
        if (target.user.roles.has(mute_role)) return message.channel.send("USER ALREADY MUTED!")
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === client.config["important_config"].normal_role);
            let muteRole = message.guild.roles.cache.find(role => role.name === client.config["important_config"].muted_role);

            let memberTarget = message.guild.members.cache.get(target.id);

            if(!args[1]){
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`${message.author.tag} has Muted <@${memberTarget.user.id}>`);
                message.delete().catch(O_o=>{});
                return  
            }
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`${message.author.tag} has muted <@${memberTarget.user.id}> for ${ms(ms(args[1]))}!`);
            message.delete().catch(O_o=>{});

            setTimeout(function(){
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been unmuted after a timed mute!`)
            }, ms(args[1]));

            const guild = client.guilds.cache.get(client.config["main_config"].guild_id);
            const channel = guild.channels.cache.get(client.config["logging_channels"].muted_logger); 
            const muted = new Discord.MessageEmbed()
            .setDescription(`<@${memberTarget.user.id}> Has Been Muted By Moderator: <@${message.author.id}>`)
            .setColor(client.config["custom_config"].mute_color)
            .setFooter(client.config["custom_config"].copyright +  ' | H4r1eyDevelopment')
            channel.send(muted)

            if(!args) return message.channel.send('Must be a Valid Time!')

        } else{
            message.channel.send(`__${message.author.tag}__ I cannot find that user, did you mention the right ID/Person?`)
            } 
        } else{
            message.channel.send("No Perms To Mute Members")
        }
    }else{
        message.channel.send("Mute Module Disabled Via Config")
    }
  }
}