const Gamedig = require('gamedig')
const ms = require('ms')
module.exports = {
    name: "playerlist",
    execute(message, args, client, Discord){
        if(client.config["module_control"].fivem_commands == 'true'){
            Gamedig.query({
              type: 'fivem',
              host: client.config["fivem_config"].server_ip, // This needs to be a string
              port: client.config["fivem_config"].server_port // This needs to be a number & is optional, unless you're not using the default port for that gameserver type
            }).then((state) => {
              let liste = '';
              let i = 0;
              while (i < state.raw.clients) {
                liste = `${liste}` + `- ${state.players[i].name}` + `\n`
                i++;
              }
              message.channel.send(`**Here is the Player List for ${client.config["fivem_config"].server_name}**\n\n` + liste, {
                split: true
              })
            }).catch((error) => {
              message.channel.send(`Server offline or not found.`);
            });
        }
    }
}