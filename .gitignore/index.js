const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = ("?");


    //-----------------------------------------------------------------------------------------------------------------

//kick
if(command === "kick") {
    
    if(!message.member.roles.some(r=>["Admin", "Modo"].includes(r.name)) )
      return message.reply("Tu n'as pas la permission de faire ceci!");
    
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Merci de spécifier un nom d'utilisateur valide");
    if(!member.kickable) 
      return message.reply("Vous ne pouvez pas expulsez cet utilisateur ! As-t-il un rôle supérieur ? Ai-je les permissions d'expulser un membre?");
    
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Aucune raison spécifiée";
    
    await member.kick(reason)
      .catch(error => message.reply(`Désolé ${message.author} je ne peux pas expulser la personne car : ${error}`));
    message.reply(`${member.user.tag} a été expulsé par ${message.author.tag} car : ${reason}`);

    //-----------------------------------------------------------------------------------------------------------------
    
//ReadyPreset
bot.on('ready', function () {
    console.log("Je suis prêt à être utilisé.")
    bot.user.setActivity('En développement').catch(console.error)
});
    
   
    //-----------------------------------------------------------------------------------------------------------------

//Reboot
bot.on('message', message => {
    if (message.content === 'rebootexec') {
      message.reply('Reboot exécuté ! Le bot va redemarrer !')
       message.reply('Le BOT à redémarré !')
    }
  })
    
    //-----------------------------------------------------------------------------------------------------------------

//Message de bienvenue
bot.on('guildMemberAdd', member => {
  member.createDM().then(channel => {
    return channel.send('Bienvenue sur le serveur Albert de Mun' + member.displayName)
  }).catch(console.error)
    
    //-----------------------------------------------------------------------------------------------------------------

//Musique    
})

bot.on('message', message => {

  if (message.content.startsWith('!play')) {
    // On récupère le premier channel audio du serveur
    let voiceChannel = message.guild.channels
      .filter(function (channel) { return channel.type === 'voice' })
      .first()
    let args = message.content.split(' ')
    // On rejoint le channel audio
    voiceChannel
      .join()
      .then(function (connection) {
        // On démarre un stream à partir de la vidéo youtube
        let stream = YoutubeStream(args[1])
        stream.on('error', function () {
          message.reply("Je n'ai pas réussi à lire cette vidéo :(")
          connection.disconnect()
        })
        
        connection
          .playStream(stream)
          .on('end', function () {
            connection.disconnect()
          })
      })
  }

})
    
    //-----------------------------------------------------------------------------------------------------------------

//Bonjour et site
bot.on('message', msg => {
    if (msg.content === "bonjour"){
        msg.reply("Heureux de te revoir parmis nous.")
    }
    if (msg.content.match(/salut/i)) {
            msg.reply('Je suis d\'accord avec toi.')
    }
    if (msg.content === prefix + "site"){
        msg.channel.send("https://aezioxshop.jimdofree.com")
        console.log("Une personne a demandé pour aller sur ton site.")
    }

});

bot.login(process.env.TOKEN);
