const color = require("colors")

module.exports = async (client) =>{
    if(client.config["module_control"].member_counting == true){
    const guild = client.guilds.cache.get(client.config["main_config"].guild_id);
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get(client.config["main_config"].member_counter_vc_id);
        channel.setName(`Member Count: ${memberCount.toLocaleString()}`);
    }, 5000);
}

if(client.config["module_control"].member_counting == 'false'){
    console.log("Member Counting Disabled Via Conifg".red)
}

}