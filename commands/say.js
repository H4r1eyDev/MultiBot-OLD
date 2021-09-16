module.exports = {
    name: "say",
    execute(message, args, client, Discord){
        if(message.member.roles.cache.has(client.config["main_config"].moderator_role)){
        const m = args.join(" ")
        message.channel.send(m)
        message.delete().catch(O_o=>{});
        }else{
            message.channel.send(`No Permissions to use the say command. ${message.author.tag}`)
        }
    }
}