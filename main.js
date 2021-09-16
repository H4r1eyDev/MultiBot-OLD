const Discord = require('discord.js');

const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});
client.config = require("./config.json");

const color = require("colors")

const fs = require('fs');

const memberCounter = require('./counterfolder/member-counter');

prefix = client.config["main_config"].prefix

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command);
}

client.once('ready', () =>{
	console.log(`${client.user.tag} Is Online! The Prefix Is:`.green + ` ${client.config["main_config"].prefix}`.yellow);
	client.user.setActivity(client.config["main_config"].botstatus, { type: client.config["main_config"].presence })

	memberCounter(client);
});

if(client.config["module_control"].welcome_messages == 'true'){
client.on('guildMemberAdd', async(member) => {
	if(client.config["module_control"].verification == 'true'){
	let welcomeRole = member.guild.roles.cache.find(role => role.name === client.config["verify_config"].unverified_role);
	member.roles.add(welcomeRole)
	}
	const welcomec = member.guild.channels.cache.get(client.config["main_config"].welcome_channel)
	const welcome = new Discord.MessageEmbed()
	.setThumbnail(member.user.displayAvatarURL({ dynamic: true}))
	.setColor(client.config["custom_config"].welcome_color)
	.setTimestamp()
	.setDescription(`User **${member.displayName} (${member.id})** Has Joined! Our New Member Count is ${member.guild.memberCount}`)
	.setFooter(client.config["custom_config"].copyright, client.config["custom_config"].server_icon)
	welcomec.send(welcome)
})
}else{
}

if(client.config["module_control"].leave_messages == 'true'){
	client.on('guildMemberRemove', async(member) => {
		const leavec = member.guild.channels.cache.get(client.config["main_config"].leave_channel)
		const left = new Discord.MessageEmbed()
		.setThumbnail(member.user.displayAvatarURL({ dynamic: true}))
		.setColor(client.config["custom_config"].leave_color)
		.setTimestamp()
		.setDescription(`User **${member.displayName} (${member.id})** Has Left! Our New Member Count is ${member.guild.memberCount}`)
		.setFooter(client.config["custom_config"].copyright, client.config["custom_config"].server_icon)
		leavec.send(left)
	})
	}else{
	}


client.on('message', message =>{
	if(!message.content.startsWith(client.config["main_config"].prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if(command === 'ping'){
        client.commands.get('ping').execute(message, args, client, Discord);
	}else if(command === 'sayem'){
		client.commands.get('sayem').execute(message, args, client, Discord);
	}else if(command === 'give-customer'){
		client.commands.get('give-customer').execute(message, args, client, Discord);
	}else if(command === 'remove-customer'){
		client.commands.get('remove-customer').execute(message, args, client, Discord);
	}else if(command === 'intro'){
		client.commands.get('intro').execute(message, args, client, Discord);
	}else if(command === 'outro'){
		client.commands.get('outro').execute(message, args, client, Discord);
	}else if(command === 'new'){
		client.commands.get('new').execute(message, args, client, Discord);
	}else if(command === 'do-not-type'){
		client.commands.get('do-not-type').execute(message, args, client, Discord);
	}else if(command === 'info'){
		client.commands.get('info').execute(message, args, client, Discord);
	}else if(command === 'suggest'){
		client.commands.get('suggest').execute(message, args, client, Discord);
	}else if(command === 'accept'){
		client.commands.get('accept').execute(message, args, client, Discord);
	}else if(command === 'deny'){
		client.commands.get('deny').execute(message, args, client, Discord);
	}else if(command === 'warn'){
		client.commands.get('warn').execute(message, args, client, Discord);
	}else if(command === 'kick'){
		client.commands.get('kick').execute(message, args, client, Discord);
	}else if(command === 'ban'){
		client.commands.get('ban').execute(message, args, client, Discord);
	}else if(command === 'bug-report'){
		client.commands.get('bug-report').execute(message, args, client, Discord);
	}else if(command === 'commend'){
		client.commands.get('commend').execute(message, args, client, Discord);
	}else if(command === 'website'){
		client.commands.get('website').execute(message, args, client, Discord);
	}else if(command === 'ban-appeal'){
		client.commands.get('ban-appeal').execute(message, args, client, Discord)
	}else if(command === 'mute'){
		client.commands.get('mute').execute(message, args, client, Discord);
	}else if(command === 'help'){
		client.commands.get('help').execute(message, args, client, Discord);
	}else if(command === 'close'){
		client.commands.get('close').execute(message, args, client, Discord);
	}else if(command === 'rename'){
		client.commands.get('rename').execute(message, args, client, Discord);
	}else if(command === 'verify'){
		client.commands.get('verify').execute(message, args, client, Discord);
	}else if(command === 'say'){
		client.commands.get('say').execute(message, args, client, Discord);
	}else if(command === 'ticket-panel'){
		client.commands.get('ticket-panel').execute(message, args, client, Discord);
	}else if(command === 'products'){
		client.commands.get('products').execute(message, args, client, Discord);
	}else if(command === 'product-check'){
		client.commands.get('product-check').execute(message, args, client, Discord);
	}else if(command === 'team'){
		client.commands.get('team').execute(message, args, client, Discord);
	}else if(command === 'playerlist'){
		client.commands.get('playerlist').execute(message, args, client, Discord);
	}else if(command === 'server-stats'){
		client.commands.get('server-stats').execute(message, args, client, Discord);
	}
});

client.login(client.config["main_config"].token);