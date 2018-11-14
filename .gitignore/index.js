const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = ("?");



bot.on('ready', function () {
    console.log("Je suis prêt à être utilisé.")
    bot.user.setActivity('rien').catch(console.error)
});

bot.on('message', message => {
    if (message.content === 'ping') {
      message.reply('pong !')
    }
  })

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send('Bienvenue sur le serveur de Alexpgm' + member.displayName)
        console.log(`${member.displayName} à rejoint le serveur.`)
    }).catch(console.error)
});



bot.on('message', msg => {
    if (msg.content === "bonjour"){
        msg.reply("Heureux de te revoir parmis nous.")
    }
    if (msg.content.match(/salut/i)) {
            msg.reply('Je suis d\'accord avec toi.')
    }
    if (msg.content === prefix + "site"){
        msg.channel.send("www.google.com")
        console.log("Une personne a demandé pour aller sur ton site.")
    }

});

bot.login(process.env.TOKEN);
