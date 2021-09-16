module.exports = {
	name: "products",
	execute(message, args, client, Discord){
		if(client.config["module_control"].products_command == 'true'){

			if(message.author.id == client.config["store_information"].banned_users) return message.channel.send(`<@${message.author.id}> (${message.author.username}) You are banned from using any store commands!`)


		const prod = client.config["store_information"].products_list

		if(client.config["store_information"].active_discount == 'true'){
			message.channel.send(`There is currently a ${client.config["store_information"].discount_amount} discount on the following items: **${client.config["store_information"].items_discounted}**!`)
		}

		const embed = new Discord.MessageEmbed()
		.setAuthor(`Here you can view ${client.config["custom_config"].server_name} Products!`)
		.setColor(client.config["custom_config"].store_color)
		.setThumbnail(client.config["custom_config"].server_icon)
		.setDescription(prod)
		.setFooter(client.config["custom_config"].copyright + ' | H4r1eyDevelopment', client.config["custom_config"].server_icon)
		message.channel.send(embed)
		message.delete().catch(O_o=>{});

		if(client.config["store_information"].out_of_stock_tracking == 'true'){
			message.channel.send(`The Following Items are out of stock, please check back later! **${client.config["store_information"].out_of_stock_items}**`)
		}

		}else{
			message.channel.send("ERROR: Possible Error Creators, No Products for Sale, Please Come Back Soon!")
		}
	}
}