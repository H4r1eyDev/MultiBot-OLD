const pagination = require('discord.js-pagination')

module.exports = {
    name: 'help',
    execute(message, args, client, Discord){

        const page1 = new Discord.MessageEmbed()
        .setTitle('Bot Created By H4r1eyDevelopment')
        .setTimestamp()
        .setColor(client.config["custom_config"].help_color)
        .setThumbnail('https://images-ext-1.discordapp.net/external/PsM6TnAv5JKQpNMdC6yo-dRFgWHkBS6yL6CIwvTKN4c/https/media.discordapp.net/attachments/850042424423350272/850082023611695124/h44444.png')
        .addFields(
            {
                name: 'Bot Name:',
                value: 'H4r1eyMultiBot',
                inline: true
            },
            {
                name: 'Information:',
                value: `This was bot was made 30/05/2021 and took a little while too create. It has a hug selection of commands! You can purchase it [here](https://discord.gg/ZjgUzaMfry)`
            }
        )
        .setFooter(client.config["custom_config"].copyright + ' | H4r1eyDevelopment')

        const page2 = new Discord.MessageEmbed()
        .setTitle('Page 1')
        .setColor(client.config["custom_config"].help_color)
        .addFields(
            {
                name: '> accept',
                value: 'Accepts people!'
            },
            {
                name: '> ban-appeal',
                value: 'Displays the Ban Appeal'
            },
            {
                name: '> ban',
                value: 'Allows Moderators Too Ban Users!'
            },
            {
                name: '> bug-report',
                value: 'Allows people too report bugs'
            },
            {
                name: '> commend',
                value: 'Allows Moderators too commend people'
            },
            {
                name: '> deny',
                value: 'Allows People too deny others applications'
            },
            {
                name: '> say',
                value: 'Allows people to speak as the bot.'
            }
        )
        .setFooter(client.config["custom_config"].copyright + ' | H4r1eyDevelopment')

        const page3 = new Discord.MessageEmbed()
        .setTitle('Page 2')
        .setColor(client.config["custom_config"].help_color)
        .addFields(
            {
                name: '> do-not-type',
                value: 'Informs people not too type!'
            },
            {
                name: '> give-customer/remove-customer',
                value: 'Allows people too remove and add customer role'
            },
            {
                name: '> info',
                value: 'Displays the main users information'
            },
            {
                name: '> intro',
                value: `Allows people too introduce themselves!`
            },
            {
                name: '> kick',
                value: 'Allows Moderaotd too kick other members!'
            },
            {
                name: '> mute',
                value: 'Allows moderators too mute others.'
            },
            {
                name: '> new',
                value: 'Opens A Ticket'
            },
            {
                name: '> ticket-panel',
                value: 'Sets the Panel for Tickets Up'
            },
            {
                name: '> verify',
                value: 'Allows people to verify themselves.'
            }
        )
        .setFooter(client.config["custom_config"].copyright + ' | H4r1eyDevelopment')


        const page4 = new Discord.MessageEmbed()
        .setTitle('Page 3')
        .setColor(client.config["custom_config"].help_color)
        .addFields(
            {
                name: '> outro',
                value: 'Allows people too outro themselves'
            },
            {
                name: '> ping',
                value: 'Allows people too ping others!'
            },
            {
                name: '> sayem',
                value: 'Allows people too announce via an embed'
            },
            {
                name: '> suggest',
                value: 'Allows people too make a suggestion'
            },
            {
                name: '> warn',
                value: 'Allows moderators too warn other members'
            },
            {
                name: '> website',
                value: 'Allows people too view the website'
            },
            {
                name: '> close',
                value: 'Allows a Certain Role to close the ticket!'
            },
            {
                name: '> rename',
                value: 'Allows a Certain Role too rename their tickets'
            }
        )

        const pages = [
            page1, 
            page2,
            page3,
            page4
        ]
        
        const emoji = ["◀️", "▶️"]

        const timeout = '300000'

        pagination(message, pages, emoji, timeout)
    }
}