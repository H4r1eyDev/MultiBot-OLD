const Gamedig = require('gamedig')
module.exports = { 
    name: "server-stats",
    execute(message, args, client, Discord){
            message.delete();
            Gamedig.query({
              type: 'fivem',
              host: client.config["fivem_config"].server_ip, // This needs to be a string
              port: client.config["fivem_config"].server_port // This needs to be a number & is optional, unless you're not using the default port for that gameserver type
            }).then((state) => {
              let embed = new Discord.MessageEmbed()
                .setTitle(`Server Stats!`)
                .addField('Full Name:', state.name, false)
                .addField('Map', state.map, true)
                .addField('Connected', state.raw.clients, true)
                .addField('Max Players', state.maxplayers, true)
                .addField('Ping', state.ping, true)
                .addField('Command F8', state.connect, true)
                .addField('Server Owners:', client.config["fivem_config"].server_owners, true)
                .setTimestamp()
                .setColor(client.config["fivem_config"].server_main_colour)
              message.channel.send(embed)
            }).catch((error) => {
              message.channel.send(`Server offline or not found.`);
            });
    }
}