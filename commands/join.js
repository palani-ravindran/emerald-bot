const { MessageEmbed } = require('discord.js');

const execute = (message, args) => {
    // const botInfo = new MessageEmbed().addField(`Hello there! Please click [this](http://localhost:3000/?id=${args.uuid}) link to gain access to Emerald City.`)
    const exampleEmbed = new MessageEmbed()
        .setColor('#5bc595')
        .setTitle('Click here to verify your account')
        .setURL('https://pedantic-darwin-e512ad.netlify.app/?id=' + args.uuid)
        .setAuthor('Emerald City Bot', 'https://i.imgur.com/qjT7cro.png')
        .setDescription('Hey there! Please click the link above if you have 5 EmeraldBeta Tokens and wish to gain access to be given the "Beta Tester" role.')
        .addField("Haven't minted yet?", "You can mint here: https://emerald-city.netlify.app/")
        .setTimestamp()

    message.author.send({ embeds: [exampleEmbed] });
}

module.exports = {
    name: 'join',
    description: 'checks to see if a user has enough tokens',
    execute: execute,
}

