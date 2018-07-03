const Discord = require('discord.js');
const bot = new Discord.Client();
const settings = require("./settings.json");
const prefix = '%';

bot.on('ready', () => {
  bot.user.setStatus("idle");
  bot.user.setActivity( " !help | residing on " + bot.guilds.size + " servers ");
    console.log("The Demon Is On");
});
bot.on('message', async message => {
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (message.author.bot || !message.guild || !message.content.startsWith(prefix)) return;

 let user = message.mentions.users.first();
  if (!user) {
      user = message.author;
  }
  if (command === `userinfo`) {
    let embed = new Discord.RichEmbed()
      .setColor('#ba0505')
      .setThumbnail(`${user.avatarURL}`)
      .addField(
        'Name',
        `${user.username}#${user.discriminator}`
      )
      .addField('ID', user.id)
      .addField('Status', `${user.presence.status}`)
      .addField('Game', `${user.presence.game.name}`)
      .addField('Joined Discord On', `${user.createdAt}`)
      .addField('Joined Server On',`${message.member.joinedAt}`);
      message.channel.send({ embed })
  }

  if (command === `help`) {
    let embed = new Discord.RichEmbed()
      .setTitle('Help')
      .addField('!help', '``gives you this current information``')
      .setColor('#ba0505')
      .addField('!userinfo','``gives you info about a user``')
      .addField('!serverinfo','``gives you info about a server``')
      .addField('!botinfo','``gives you information on the bot``')
      .addField('invite link for bot','https://discordapp.com/api/oauth2/authorize?client_id=449983742224760853&permissions=84993&scope=bot'  );

    message.reply("here's some helpful information and a list of commands that i'm able to do.");
     message.channel.send({ embed });
  }
    if (command === `serverinfo`) {
      let embed = new Discord.RichEmbed()
        .setColor('#ba0505')
        .addField('Server Name', `${message.guild.name}`)
        .setImage(message.guild.iconURL)
        .addField(' Server Owner', `${message.guild.owner.user}`)
        .addField('Server ID', message.guild.id)
        .addField( 'User Count', `${ message.guild.members.filter(m => m.presence.status !== 'offline').size } / ${message.guild.memberCount}`)
        .addField('Roles', `${message.guild.roles.size}`)
        .addField('Triggered by', `${message.author.username}`)
        .addField('is available',`${message.guild.available}`)
        .addField('created at',`${message.guild.createdAt}`);
      message.channel.send({ embed });
    }
     if (command === `botinfo`) {
       let embed = new Discord.RichEmbed()
         .setColor('#ba0505')
         .setTitle('Bot Information')
         .setThumbnail('https://images-ext-1.discordapp.net/external/LJoYMoWmRfbdNbtP4JBj322JeG3S4X4QyR_hpX0QA54/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/449983742224760853/88a6fe289c46630341310ca8a6968fe4.png?width=423&height=423')
         .addField('Bot Owner', `Luci#0666`)
         .addField('Total Guilds', bot.guilds.size.toLocaleString(), true)
         .addField('Total Users', bot.users.size.toLocaleString(), true)
         .addField('Ready At', bot.readyAt.toLocaleString(), true)
         .addField('Uptime', bot.uptime.toLocaleString(), true)
         .addField('Heart Beat', bot.ping.toLocaleString(), true);
         message.channel.send({ embed });

    }
  });

bot.login(settings.token);
