const Discord = require('discord.js');
const bot = new Discord.Client();
const settings = require('./settings.json');
const prefix = settings.prefix;
const ms = require("ms");
const fs = require('fs');
const warns = JSON.parse(fs.readFileSync("./warns.json", "utf8"));

bot.on('ready', () => {
<<<<<<< HEAD
  bot.user.setStatus("idle");
  bot.user.setActivity(settings.prefix + "help | residing on " + bot.guilds.size + " servers ");
  console.log("The Demon Is On");
  bot.channels.get("459850809002164234").send("Bot is now online!");
=======
	bot.user.setStatus("idle");
	bot.user.setActivity(settings.prefix + "help | residing on " + bot.guilds.size + " servers ");
		console.log("The Demon Is On");
		bot.channels.get("459850809002164234").send("Bot is now online!");

>>>>>>> 94549b908b8bd38564e87388ff288e65abc764fb
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
      .addField("Game:", `${user.presence.game ? user.presence.game.name : 'None'}`, true)
      .addField('Joined Discord On', `${user.createdAt}`)
      .addField('Joined Server On', `${message.member.joinedAt}`);
    message.channel.send({
      embed
    })
  }
  /*
  if (message.content.startsWith(prefix + 'eval\n```js\n') && message.author.id == settings.owner) {
    var code = message.content.split(prefix + "eval\n```js\n")[1];
    var code = code.split("\n```")[0];
    try {
      message.channel.send("Trying it...");
      eval(code);
    } catch (e) {
      var error = "Error Name : **" + e.name + "**\nError Message : **" + e.message + "**";
      if (e instanceof EvalError) {
        message.channel.send(error)
      } else if (e instanceof SyntaxError) {
        message.channel.send(error)
      } else if (e instanceof TypeError) {
        message.channel.send(error)
      } else if (e instanceof ReferenceError) {
        message.channel.send(error)
      } else if (e instanceof URIError) {
        message.channel.send(error)
      } else if (e instanceof RangeError) {
        message.channel.send(error)
      } else if (e instanceof InternalError) {
        message.channel.send(error)
      } else {
        message.channel.send("Failed")
        console.log("Unhandled Error : IDFK!!! Killing myself to be safe!");
        process.exit(1);
      }
    }
  } //This is added by Juny
  */
  if (command === `help`) {
    let embed = new Discord.RichEmbed()
      .setTitle('Help')
      .addField('help', '``gives you this current information``')
      .setColor('#ba0505')
      .addField('userinfo', '``gives you info about a user``')
      .addField('serverinfo', '``gives you info about a server``')
      .addField('botinfo', '``gives you information on the bot``')
      .addField("warn", "``Warns a person``")
      .addField('invite link for bot', 'https://discordapp.com/api/oauth2/authorize?client_id=449983742224760853&permissions=84993&scope=bot');
    message.channel.send({
      embed
    });
  }
  if (command === `serverinfo`) {
    let embed = new Discord.RichEmbed()
      .setColor('#ba0505')
      .addField('Server Name', `${message.guild.name}`)
      .setImage(message.guild.iconURL)
      .addField(' Server Owner', `${message.guild.owner.user}`)
      .addField('Server ID', message.guild.id)
      .addField('User Count', `${ message.guild.members.filter(m => m.presence.status !== 'offline').size } / ${message.guild.memberCount}`)
      .addField('Roles', `${message.guild.roles.size}`)
      .addField('Triggered by', `${message.author.username}`)
      .addField('is available', `${message.guild.available}`)
      .addField('created at', `${message.guild.createdAt}`);
    message.channel.send(embed);
  }
  if (command === `botinfo`) {
    let embed = new Discord.RichEmbed()
      .setColor('#ba0505')
      .setTitle('Bot Information')
      .setThumbnail('https://images-ext-1.discordapp.net/external/LJoYMoWmRfbdNbtP4JBj322JeG3S4X4QyR_hpX0QA54/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/449983742224760853/88a6fe289c46630341310ca8a6968fe4.png?width=423&height=423')
      .addField('Bot Owner', "Luci#0666 \nadamski234#6369")
      .addField('Total Guilds', bot.guilds.size.toLocaleString(), true)
      .addField('Total Users', bot.users.size.toLocaleString(), true)
      .addField('Ready At', bot.readyAt.toLocaleString(), true)
      .addField('Heart Beat', bot.ping.toLocaleString(), true);
    message.channel.send({
      embed
    });
  }
  if (command === 'shutdown') {
    if (message.author.id != settings.owner) return message.channel.send("you can't use this!");
    console.log(user.username + " shut down the bot"); //Logs to the console window who shut down the bot
    message.channel.send('Shutting Down!');
    bot.destroy();
  }
  if (command === 'uptime') {

<<<<<<< HEAD
    function time() {
      var time;
      var de = Math.round(new Date(bot.uptime) / 1000.00)
      var w = Math.floor(de / 604800);
      var d = Math.floor(de % 604800 / 86400);
      var h = Math.floor(de % 604800 % 86400 / 3600);
      var m = Math.floor(de % 604800 % 86400 % 3600 / 60);
      var s = Math.floor(de % 604800 % 86400 % 3600 % 60);

      var wDisplay = w > 0 ? w + (w == 1 ? " Week, " : " Weeks, ") : "";
      var dDisplay = d > 0 ? d + (d == 1 ? " Day, " : " Days, ") : "";
      var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
      var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
      var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "0 seconds";

      time = (wDisplay + dDisplay + hDisplay + mDisplay + sDisplay) + " online.";
      return time;
    }
    message.channel.send(time())
  }
  if (command === "warn") {
    if (user == message.author) return message.channel.send("Don't warn yourself, mention someone");
    let UnusedVariable = args.shift();
    let reason = args.join(" ");
    if (reason != "") {
      message.channel.send("User has been warned");
      let personId = warns[user.id];
      if (!warns.hasOwnProperty(user.id)) {
        reason = "\n" + reason;
        warns[user.id] = {
          reasons: [reason],
          giverIDs: [message.author.id],
          giverNames: [message.author.username],
          amount: 1,
        };
      } else {
        reason = "\n" + reason;
        personId["reasons"].push(reason);
        personId["giverIDs"].push(message.author.id);
        personId["giverNames"].push(message.author.username);
        personId["amount"]++;
      }
      fs.writeFile("./warns.json", JSON.stringify(warns, null, 4), (err) => {
        if (err) console.log(err)
      });
    } else {
      message.channel.send("You need to provide a reason");
    }
  }
  if (command === "warnings") {
    let personId = warns[user.id];
    if (warns.hasOwnProperty(user.id)) {
      message.channel.send("Here are warnings for " + user.username + "#" + user.discriminator);
      message.channel.send("```" + personId.reasons + "\n```");
    } else {
      message.channel.send("User hasn't been warned. *Yet.*");
    }
  }
  if (command === "eval") {
      if (message.author.id !== settings.owner) return;
      console.log("ran eval");
      message.channel.send("Testing...")



      const clean = text => {
      if (typeof (text) === "string")
        return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
      else
        return text;
    }
    try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.send(clean(evaled), {
        code: "xl"
      });
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
=======
	if (message.content.startsWith(prefix + 'eval\n```js\n') && message.author.id == settings.owner) {
		var code = message.content.split(prefix + "eval\n```js\n")[1];
		var code = code.split("\n```")[0];
		try {
		  message.channel.send("Trying it...");
		  eval(code);
		} catch (e) {
		  var error = "Error Name : **" + e.name + "**\nError Message : **" + e.message + "**";
		  if (e instanceof EvalError) {
			message.channel.send(error)
		  } else if (e instanceof SyntaxError) {
			message.channel.send(error)
		  } else if (e instanceof TypeError) {
			message.channel.send(error)
		  } else if (e instanceof ReferenceError) {
			message.channel.send(error)
		  } else if (e instanceof URIError) {
			message.channel.send(error)
		  } else if (e instanceof RangeError) {
			message.channel.send(error)
		  } else if (e instanceof InternalError) {
			message.channel.send(error)
		  } else {
			message.channel.send("Failed")
			console.log("Unhandled Error : IDFK!!! Killing myself to be safe!");
			process.exit(1);
		  }
		}
	}	//This is added by Juny

	if (command === `help`) {
		let embed = new Discord.RichEmbed()
			.setTitle('Help')
			.addField('help', '``gives you this current information``')
			.setColor('#ba0505')
			.addField('userinfo','``gives you info about a user``')
			.addField('serverinfo','``gives you info about a server``')
			.addField('botinfo','``gives you information on the bot``')
			.addField("warn","``Warns a person``" )
			.addField('invite link for bot','https://discordapp.com/api/oauth2/authorize?client_id=449983742224760853&permissions=84993&scope=bot'  );
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
			message.channel.send(embed);
		}
		 if (command === `botinfo`) {
			 let embed = new Discord.RichEmbed()
				 .setColor('#ba0505')
				 .setTitle('Bot Information')
				 .setThumbnail('https://images-ext-1.discordapp.net/external/LJoYMoWmRfbdNbtP4JBj322JeG3S4X4QyR_hpX0QA54/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/449983742224760853/88a6fe289c46630341310ca8a6968fe4.png?width=423&height=423')
				 .addField('Bot Owner', "Luci#0666 \nadamski234#6369")
				 .addField('Total Guilds', bot.guilds.size.toLocaleString(), true)
				 .addField('Total Users', bot.users.size.toLocaleString(), true)
				 .addField('Ready At', bot.readyAt.toLocaleString(), true)
				 .addField('Uptime' , `${bot.uptime}`)
				 .addField('Heart Beat', bot.ping.toLocaleString(), true);
				 message.channel.send({ embed });
		 }
		 if (command === 'shutdown') {
			if(message.author.id != settings.owner) return message.channel.send("you can't use this!");
			console.log(user.username + " shut down the bot"); //Logs to the console window who shut down the bot
			message.channel.send('Shutting Down!');
			bot.destroy();

	}
	if (command === `Uptime`) {
		 message.channel.send(ms(bot.uptime));
	}
	if (command === "warn") {
		if (user == message.author) return message.channel.send("Don't warn yourself, mention someone");
		let index = args.indexOf("<@!" + /([0-9]{18})/ + ">");
		argument = args.splice(index, 1);
		let reason = argument.join(" ");
		if (reason != "") {
		message.channel.send("User has been warned");
			let personId = warns[user.id];
			if (!warns.hasOwnProperty(user.id)) {
				reason = "\n" + reason;
				warns[user.id] = {
					reasons: [reason],
					giverIDs: [message.author.id],
					giverNames: [message.author.username],
					amount: 1,
				};
			} else {
				reason = "\n" + reason;
				personId["reasons"].push(reason);
				personId["giverIDs"].push(message.author.id);
				personId["giverNames"].push(message.author.username);
				personId["amount"]++;
			}
			fs.writeFile("./warns.json", JSON.stringify(warns, null, 4), (err) => {
				if (err) console.log(err)
			});
		} else {
			message.channel.send("You need to provide a reason");
		}
	}
	if (command === "warnings") {
		let personId = warns[user.id];
		if (warns.hasOwnProperty(user.id)) {
			message.channel.send("Here are warnings for " + user.username + "#" + user.discriminator);
			message.channel.send("```" + personId.reasons + "\n```");
		} else {
			message.channel.send("User hasn't been warned. *Yet.*");
		}
	}
	if (command === "delwarn") {
		if (user == message.author) return message.channel.send("You can't delete your own warnings");
		let index = args.indexOf("<@!" + /([0-9]{18})/ + ">");
		args.splice(index, 1);
		let personId = warns[user.id];
		if (args == "") {
			personId.reasons = [];
			personId.giverIDs = [];
			personId.giverNames = [];
			personId.amount = 0;
			message.channel.send("Removed all warnings for " + user.username); //Works good till here
		} else if (args[0] > personId.amount) {
			message.channel.send("That user doesn't have that many warnings, chill");
		} else {
			let number = args[0] + 1;
			personId.reasons.splice(number, 1);
			personId.giverIDs.splice(number, 1);
			personId.giverNames.splice(number, 1);
			personId.amount--;
			message.channel.send("Deleted warning with number `" + number + "`");
		}
		fs.writeFile("./warns.json", JSON.stringify(warns, null, 4), (err) => {
			if (err) console.log(err)
		});
	}
	});
bot.login(settings.token).catch((error) =>{
	console.log("Could't log in. Error while connecting");
	console.log( "Error Name: " + error.name + "\nError Message: " + error.message);
	process.exit(1);
>>>>>>> 94549b908b8bd38564e87388ff288e65abc764fb
});
bot.login(settings.token).catch((error) => {
  console.log("Could't log in. Error while connecting");
  console.log("Error Name: " + error.name + "\nError Message: " + error.message);
  process.exit(1);
});