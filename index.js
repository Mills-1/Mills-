const express = require("express");
const server = express();

server.all("/", (req, res) => {
  res.send("Your account is alive!");
});

function keepAlive() {
  server.listen(3000, () => {
    console.log("Server is Ready!");
  });
}

module.exports = keepAlive;

const app = express()
const Database = require("@replit/database")
const db = require("quick.db")
const disbut = require("discord.js")
let Discord = require("discord.js");
let client = new Discord.Client();
const math = require('mathjs');

client.on('message', async message => {
  if (message.content === ".join") {
    message.reply("Make sure your **in a** voice channel.")
	if (message.member.voice.channel) {
		const connection = await message.member.voice.channel.join();
	}
}});

client.on('message', async message => {
  if (message.content === ".leave") {
  message.reply("I have left the voice call.")
	if (message.member.voice.channel) {
		const connection = await message.member.voice.channel.leave();
	}
}});



app.get("/", (req, res) => {
  res.send("SatOS L.1 Ready and running!")
})

app.listen(3000, () => {
  console.log("Mills is working")
})

app.listen(2500, () => {
  console.log("Mills: Legacy - Booted up.")
})

app.listen(1000, () => {
  console.log("BetterUptime has received service")
})

const activities_list =
  [
    "Mills: Legacy",
    "Voice Commands [BETA]",
    ".cmds for needs/help",
    "Responding to database...",
    "Voice Commands [BETA]",
    "Mills: Legacy"
  ];

client.on('ready', () => {
  setInterval(() => {
    const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); 
    client.user.setActivity(activities_list[index], { type: 'LISTENING' });
  }, 2000); 
});
client.on("message", async message => {
  if (message.content === ".owner") {
    message.channel.send(`The server owner is: ${message.guild.owner}`)
  }
  if (message.content === ".info") {
    message.channel.send("The Discord bot that makes economy, moderation, fun and utility usage a breeze. Huge revamp, starting now.")
  }
  if (message.content === '.cookie') {
    message.react("🍪");
  }
  if (message.content === '.cmds') {
    message.react("👍");
  }
  const prefix = ".";
if (message.content.startsWith(prefix + 'say')) return message.reply(message.content.substring(prefix.length + 3)) 
  if (message.content === '.hug') {
    message.react("🤗");
  }
  if (message.content === '.status') {
    message.react("🔋");
  }
  if(message.content === ".status") {
    message.reply("https://mills.betteruptime.com/")
  }
if (message.content.toLowerCase().startsWith('.give') || message.content.toLowerCase().startsWith('.share')) {
    let arg = message.content.split(" ")
    let member = message.mentions.users.first()
    if (!member) return message.channel.send('Who do you want to give money to?')
    let clear = arg[2];
    if (!clear) return message.reply(":x: || Incorrect usage of command you need to provide an amount of money you wanted to give. You need at least 7500 money to give.")
    if (isNaN(clear)) {
      let balance = await db.get(`wallet_${message.author.id}`)
      let membal = await db.get(`wallet_${member.id}`)

      if (clear == 'all' || clear == 'max') {
        if (balance === null || balance === 7500) {
          message.channel.send('You dont have any money')
        } else {
          db.set(`wallet_${message.author.id}`, 0)
          db.set(`wallet_${member.id}`, balance + membal)
          message.channel.send(` You Gave all of your money away! So kind.`)
        }
      } else {
        message.channel.send(":x: | ``please put a valid number to give``")
      }
    } else {
      let test = parseInt(clear)
      let balance = await db.get(`wallet_${message.author.id}`)
      let membal = await db.get(`wallet_${member.id}`)
      if (balance === null || balance == 0) {
        message.channel.send('You don`t have the money requested!')
      } else if (clear > balance) { 
        message.channel.send('You don`t have that much money. 50 coins is worth 2 dollars.')
      } else {
        let sub = balance - clear
        let toadd = membal + test
        db.set(`wallet_${message.author.id}`, sub)
        db.set(`wallet_${member.id}`, toadd)
        message.channel.send(`You gave ${test} to ${member}`)
      }
    }
  }
  if(message.content.toLowerCase().startsWith(".math")) {
 const args = message.content.split(" ").slice(1)
 if(!args[0]) return message.channel.send('Please enter a **math question.**');
 let resp;
 try {
 resp = math.evaluate(args.join(" "))
 } catch (e) {
 return message.channel.send('Please provide a **valid** question. (Use * for multiplication and / for division.')
 }
 const embed = new Discord.MessageEmbed()
 .setColor("RANDOM")
 .setTitle('AstroCalc')
 .setDescription("**PLEASE** do not use this for real life purposes. This is a Discord Bot. Not a dedicated calculator. **Once again, the developer strongly advises you to use your brain, not an API, to do your work.**")
 .addField('Your Question', `\`\`\`css\n${args.join(' ')}\`\`\``)
 .addField('The Answer', `\`\`\`css\n${resp}\`\`\``)
    .setTimestamp()
 message.channel.send(embed);
 } 
  if (message.content === '.kill') {
    message.react("🔪");
  }
  if (message.content === '.math') {
    message.react("➗")
  }
  if (message.content === '.kick') {
    message.react("🦵");
  }
  if (message.content === '.ban') {
    message.react("🔨");
  }
  if (message.content === '.updates') {
    message.react("📈");
  }
  if (message.content === '.ping') {
    message.react("📢");
  }
  if (message.content === '.uptime') {
    message.react("☀️")
  }
  if (message.content.startsWith(".guess")) {
    let args = message.content.split(" ").slice(1)
    let guess = args[0]
    let num = Math.floor((Math.random() * 100) + 1)
    if (!guess) return message.channel.send(`:x: | You need to choose 1 - 100`)
    if (guess == num) return message.channel.send(`Congrats, ${message.author}! You got the number right!:tada:`)
    if (guess !== num) return message.channel.send(`Wrong guess! the answer is **${num}**... try again :pensive:`)
  }
  if (message.content === ".feedback") {
    message.channel.send("Want to make Mills better? You can! Take the form to share your opinion: https://forms.gle/gNYWiQg3eU9vsq52A")
  }
  if (message.content === (".dice")) {
    let dice = Math.round(Math.random() * 6)
    if (dice === 0) {
      message.reply(" Huh. looks like you got 0. Today could be unlucky for you.")
    } else {
      message.reply(`Nice, You rolled  :game_die:**${dice}**!`)
    }
  }
  if (message.content.toLowerCase().startsWith(".choose")) {
    const args = message.content.slice(prefix.length).trim().split(" ");
    const command = args.shift().toLowerCase();
    if (!args.length) return message.channel.send(`:x:You didn't provide any arguments ${message.author}!`)
    else {
      message.channel.send(`I choose **${args[Math.floor(Math.random() * args.length)]}**`)
    }
  }
  if (message.content.toLowerCase().startsWith(".slowmode")) {
    if (message.member.hasPermission("MANAGE_CHANNELS")) {
      let sentence = message.content.split(" ");
      sentence.shift();
      sentence = sentence.join(" ");
      if (sentence != null) {
        message.channel.setRateLimitPerUser(sentence);
      }

      message.reply(`This chat now has a slow-mode of **${sentence} seconds!**`)
    } else {
      message.reply(":x: || You don't have perms to do that. Sad.")
    }
  }
  if (message.content.startsWith(".unmute")) {
    if (message.member.hasPermission("ADMINISTRATOR")) {
      let member = message.mentions.members.first()
      if (!member) message.channel.send("Mention someone to unmute! (Make sure the role is named Muted!")
      else {
        let role = message.guild.roles.cache.find(role => role.name === "Muted")
        member.roles.remove(role)
        message.channel.send("Member has been succesfully unmuted.")
      }

    } else {
      message.reply("You don't have permission to do that!")
    }
  }
  if (message.content.startsWith(".hack")) {
    const user = message.mentions.users.first();
    if (!user) return message.channel.send("Mention someone to hack. Hope the FBI doesn't catch us :eyes:")
    message.channel.send("***[28%]*** Finding IP address...").then(m => {
      setTimeout(() => {
        m.edit("**[63%]** IP located. Contacting service provider").then(m2 => {
          setTimeout(() => {
            m2.edit(`**[89%]** DONE! email: ${user.username}@please-try-to.send-me-an-email-if-you-can-possibly-begin-to-remember-this-coz-deez-nuts.com
`).then(m3 => {
              setTimeout(() => {
                m3.edit("**[100%]** Retrieving all accounts and social media ").then(m4 => {
                  setTimeout(() => {
                    m4.edit(`${user} was leaked. All info was sent online to DoxBin`)
                  }, 1500);
                });
              }, 2000);
            });
          }, 2500);
        });
      }, 2300);
    });
  };
  if (message.content === ".count") {
    let serversEmbed = new Discord.MessageEmbed()
      .setTitle(`Mills's Server Count`)
      .setDescription(` I am active and is ready to help and assist in **${client.guilds.cache.size}** Servers!`)
      .setColor(`RANDOM`)
      .setFooter(
        `Command Used by ${message.author.username}`,
        message.author.displayAvatarURL()
      );
    message.channel.send(serversEmbed);
  }
  if (message.content.startsWith(".hitman")) {
    const user = message.mentions.users.first();
    if (!user) return message.channel.send("Mention someone to kill. Hope the police doesn't catch us :eyes:")
    message.channel.send("***[28%]*** Hiring Hitty the Hitman...").then(m => {
      setTimeout(() => {
        m.edit("**[63%]** Giving Hitty the target and info...").then(m2 => {
          setTimeout(() => {
            m2.edit(`**[89%]** Hitty is sneaking up on target..`).then(m3 => {
              setTimeout(() => {
                m3.edit("**[100%]** Hitty Killed target!").then(m4 => {
                  setTimeout(() => {
                    m4.edit(`Hitty killed ${user} and was brutally wiped them off the planet!`)
                  }, 1500);
                });
              }, 2000);
            });
          }, 2500);
        });
      }, 2300);
    });
  };
  if (message.content === ".news") {
    let serversEmbed = new Discord.MessageEmbed()
      .setTitle(`News on Mills!`)
      .setDescription("Want to know the latest news and commands on Mills? Follow @MadrieZ's for news updates on our bot: https://twitter.com/DreadedMills")
      .setColor(`RANDOM`)
      .setFooter(
        `Command Used by ${message.author.username}`,
        message.author.displayAvatarURL()
      );
    message.channel.send(serversEmbed);
  }
  if (message.content.startsWith(".stats")) {
    let embed = new
      Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Bot info")
      .setDescription(`Mills's Statistics `)
      .addFields({ name: "ID", value: client.user.id },
        { name: "Created On", value: client.user.createdAt },
        { name: "Active Servers", value: client.guilds.cache.size },
        { name: "Library", value: "Discord.js v12 (JavaScript)" },
        { name: "Current Latency", value: client.ws.ping })
      .setFooter(`Command Used by ${message.author.username}`)
    message.channel.send(embed)
    .setTimestamp()
  }
  if (message.content.toLowerCase().startsWith(".work")) {
    const check = await db.get(`workCheck_${message.author.id}`)
    const timeout = 15000
    if (check !== null && timeout - (Date.now() - check) > 0) {
      const ms = require("pretty-ms")
      const timeLeft = ms(timeout - (Date.now() - check))
      message.channel.send(`You have already worked! Come back after ${timeLeft}`)
    } else {
      let currency = ":moneybag:"
      let money = Math.round(Math.random() * 9500) || Math.round(Math.random() * 0) || Math.round(Math.random() * 525)
      let worked = [`You got a job and worked 40 hours. Here's your pay - **${money}.**`, `You got a side job for someone in Discord. They paid you **${money}.**`, `Working your ass off day and night, you came home with **${money}.**`, `You earned **${money}** by taking a random survey.`, `Someone left a letter with a check worth ${money}.`, `Just because you got this command, here's some free money - **${money}**`, `You donated your blood for **${money}**. Such a hero!`, `You started a stream and earned **${money}** in 3 months.`]
      let currentWallet = await db.get(`wallet_${message.author.id}`)
      let currentBank = await db.get(`bank_${message.author.id}`)
      await db.set(`wallet_${message.author.id}`, currentWallet + money)
      await db.set(`workCheck_${message.author.id}`, Date.now())
      let embed = new Discord.MessageEmbed()
        .setTitle("You worked!")
        .setColor("RANDOM")
        .setFooter(`Command Used by ${message.author.tag}`)
        .setTimestamp()
        .setDescription(worked[Math.floor(Math.random() * worked.length)])
      message.channel.send(embed)
    }
  }
  if (message.content.toLowerCase().startsWith(`.dep`)) {
const args = message.content.split(" ").slice()
const currentWallet = await db.get(`wallet_${message.author.id}`) 
const currentBank = await db.get(`bank_${message.author.id}`)
if(args[1] > currentWallet) {
  return message.channel.send("You are to broke to do that.")
}
db.subtract(`wallet_${message.author.id}`, args[1])
db.add(`bank_${message.author.id}`, args[1])
message.channel.send("You deposited your money. Use .bal to check it.")
}
if (message.content.toLowerCase().startsWith(`.with`)) {
const args = message.content.split(" ").slice()
const currentWallet = await db.get(`wallet_${message.author.id}`) 
const currentBank = await db.get(`bank_${message.author.id}`)
if(args[1] > currentBank) {
  return message.channel.send("You are to broke to do that")
}
db.add(`wallet_${message.author.id}`, args[1])
db.subtract(`bank_${message.author.id}`, args[1])
message.channel.send("You have withdrawn your money. Use .bal to check it.")
}
     if (message.content.toLowerCase().startsWith(".beg")) {
    const check = await db.get(`begCheck_${message.author.id}`)
    const timeout = 15000
    if (check !== null && timeout - (Date.now() - check) > 0) {
      const ms = require("pretty-ms")
      const timeLeft = ms(timeout - (Date.now() - check))
      message.channel.send(`Your that broke? Wait **${timeLeft}** for more free cash. You know, getting a job is much easier.`)
    } else {
      let currency = ":dollar:"
      let money = Math.round(Math.random() * 1000) || Math.round(Math.random() * 0) || Math.round(Math.random() * 250)
      let begger = [`Scott Bakula saw you crying and tipped **${money}**`, `Dank Memer gave you **${money}** just for the fun of it.`, `Bill Gates sent you a worthless NFT worth **${money}** and 0.4 Ethereum. How did you get a phone?`, `Will Smith slapped you. He then tipped **${money}**`, `A streamer gave you **${money}** and said "Keep it real."`, `You buy a phone and got **${money}** cash back. Not begging but it's a steal!`, `Someone in Discord gave you **${money}** because they pity you. >:)`]
      let currentWallet = await db.get(`wallet_${message.author.id}`)
      let currentBank = await db.get(`bank_${message.author.id}`)
      await db.set(`wallet_${message.author.id}`, currentWallet + money)
      await db.set(`begCheck_${message.author.id}`, Date.now())
      let embed = new Discord.MessageEmbed()
        .setTitle("You begged! 💸")
        .setColor("RANDOM")
        .setFooter(`Command Used by ${message.author.tag}`)
        .setTimestamp()
        .setDescription(begger[Math.floor(Math.random() * begger.length)])
      message.channel.send(embed)
    }
  }
  if (message.content === ".tableflip") {
    message.reply("(╯°□°）╯︵ ┻━┻")
  }
  if (message.content === "fuck") {
    message.reply("Do you kiss your mother with that mouth?")
  }
  let days = Math.floor(client.uptime / 86400000);
  let hours = Math.floor(client.uptime / 3600000) % 24;
  let minutes = Math.floor(client.uptime / 60000) % 60;
  let seconds = Math.floor(client.uptime / 1000) % 60;
  let milliseconds = Math.floor (client.uptime / 500) % 30;
  if (message.content === ".uptime") {
    let embed = new Discord.MessageEmbed()
      .setTitle("Mills's Uptime")
      .setDescription(`**Mills's Uptime:** **${days}** days **${hours}** hours **${minutes}** minutes **${seconds}** seconds **${milliseconds}** ms`)
      .setColor("RANDOM")
      .setFooter(`Command Used by ${message.author.tag}.`)
      .setTimestamp()
    message.channel.send(embed)
  }
  if (message.content.startsWith(".dm")) {
    const whattosend = message.content.slice("".length).trim().split(/ +/);
    whattosend.shift().toLowerCase().split(" ")[1]
    const member = message.mentions.members.first() || message.guild.members.cache.get(whattosend[0])
    if (!member) return message.channel.send('Provide a user!')
    if (!whattosend[1]) return message.channel.send('What do you want to send to them?')
    member.send(whattosend.slice(1).join(" "))
  }
  if (message.content.startsWith(".purge")) {
    let arg = message.content.split(" ")
    if (message.member.hasPermission("MANAGE_MESSAGES")) {
      let clear = arg[1];
      if (!clear) return message.channel.send(`:x: || \Incorrect usage of command you need to provide an amount of messages to clear.\ 
**Example:** \.purge 50\ `)
      if (isNaN(clear)) return message.channel.send(":x: | Please put a valid number to clear messages.")
      if (clear > 100) return message.channel.send(":x: | I can't clear more than 100 messages.")
      if (clear < 1) return message.channel.send(":x: | You cannot clear less than 0 messages.")

      message.channel.bulkDelete(clear)
      message.channel.send(`:white_check_mark: | \Succesfully cleared ${clear} messages! | If purge fails, please make sure I have the correct perms.\ `)
        .then(message =>
          message.delete({ timeout: 10000 })
        )
    } else {
      message.reply("You dont have permission to use purge. Sad stuff.")
    }
  }
  if (message.content.startsWith(".suggest")) {
    let args = message.content
      .split(" ")
      .slice(1)
    if (!args[0]) return message.channel.send("Wait a minute! To suggest something you need to send something. Everyone knows that.")
    const reportlog = new Discord.MessageEmbed()
      .setTitle(`A suggestion made by ${message.author.username}!`)
      .setColor('RANDOM')
      .setDescription(args.join(" "))
      .setFooter(`Suggested by ${message.author.username}`)
      .setTimestamp()
    client.channels.cache.get('1055657281460637710').send(reportlog).then(sentMessage => {
      sentMessage.react("👍")
      sentMessage.react("👎")
    })
    message.channel.send("Your suggestion has been sent. Check it out!")
  }
  if (message.content === ".members") {
    let embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Member Count.")
      .setDescription(`**Total:** ${message.guild.members.cache.size}\n **Humans:** ${message.guild.members.cache.filter(member => !member.user.bot).size}**\nBots:** ${message.guild.members.cache.filter(member => member.user.bot).size}`, true)
      .setFooter(`Command Used by ${message.author.username}`)
      .setTimestamp()

    message.channel.send(embed)
  }
  if (message.content.startsWith(".hug")) {
    let hug = ["https://c.tenor.com/OXCV_qL-V60AAAAC/mochi-peachcat-mochi.gif", "https://c.tenor.com/GdJRGf60YN4AAAAC/hugs-sending-virtual-hugs.gif", "https://c.tenor.com/lZ14N0YmIjMAAAAC/happy-birthday.gif"]
    let victim = message.mentions.users.first()
    if (!victim) return message.reply("**It's sad to hug yourself**. Very sad...");
    let embed = new Discord.MessageEmbed()
      .setTitle(`${message.author.username} hugged ${victim.tag}`)
      .setImage(`${hug[Math.floor(Math.random() * hug.length)]}`)
      .setColor("RANDOM")
      .setFooter(`Aw....`)
    .setTimestamp()

    message.channel.send(embed)

  }
  if (message.content.startsWith(".mute")) {
    if (message.member.hasPermission("ADMINISTRATOR")) {
      let member = message.mentions.members.first()
      if (!member) message.channel.send("Mention someone to mute! (Make sure the role is named Muted!")
      else {
        let role = message.guild.roles.cache.find(role => role.name === "Muted")
        member.roles.add(role)
        message.channel.send("Member has been succesfully muted.")
      }

    } else {
      message.reply("You don't have permission to do that!")
    }
  }
  if (message.content.includes(`${client.user.id}`)) {
    let embed = new Discord.MessageEmbed()
      .setTitle(`${client.user.username}`)
      .setDescription("My prefix is . start out by doing .cmds!")
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter(`Command Used by ${message.author.username}`, message.author.displayAvatarURL())
      .setColor("RANDOM")
      .setTimestamp()
    message.channel.send(embed)
  }
  if (message.content === ".darkjoke") {
    let replies = ["I for one want Donald Trump back in the office. Been too long for a presidential assassination!", "Bully: STAND UP FOR YOURSELF! - Disabled Kid: ...how?", "A store owner named a puppy Chinese Food", "Can I have my teddy bear? It helps me kill at night."]
    message.channel.send(replies[Math.floor(Math.random() * replies.length)])
  }
  if (message.content.toLowerCase().startsWith(".balance") || message.content.toLowerCase().startsWith(".bal")) {
    let balance = await db.get(`wallet_${message.author.id}`)
    let bank = await db.get(`bank_${message.author.id}`)

    if (balance === null) balance = 0
    if (bank === null) bank = 0
    const currency = ":moneybag:"
    let moneyEmbed = new Discord.MessageEmbed()
      .setTitle(`${currency} ${message.author.username}'s Balance`)
      .setDescription(`**${currency} Wallet:** ${balance}\n${currency} **Bank: ${bank}**`)
      .setColor("RANDOM")
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
    message.channel.send(moneyEmbed)
  }
  if (message.content.toLowerCase().startsWith(".daily")) {
    let currency = ":dollar:"
    const check = await db.get(`dailyCheck_${message.author.id}`)
    const timeout = 86400000;
    if (check !== null && timeout - (Date.now() - check) > 0) {
      const ms = require("pretty-ms")
      const timeLeft = ms(timeout - (Date.now() - check))
      let fail = new Discord.MessageEmbed()
        .setTitle("You've already had your daily! :x:")
        .setColor("RED")
        .setDescription(`**Nice try!** You already claimed your daily for today!\nCome back after ${timeLeft} for your next daily payout.`)
        .setTimestamp()
      message.channel.send(fail)
    } else {
      let reward = 2500
      let currentBalance = await db.get(`wallet_${message.author.id}`)
      let success = new Discord.MessageEmbed()
        .setTitle("You claimed your daily! :white_check_mark:")
        .setColor("RANDOM")
        .setDescription(`**Nice job**! You claimed ${currency} ${reward.toLocaleString()}!\nCome back tomorrow for another payout!`)
        .setTimestamp()
      message.channel.send(success)
      await db.set(`wallet_${message.author.id}`, currentBalance + reward)
      await db.set(`dailyCheck_${message.author.id}`, Date.now())
    }
  }
  if (message.content.toLowerCase().startsWith(".weekly")) {
    let currency = ":moneybag:"
    const check = await db.get(`weeklyCheck_${message.author.id}`)
    const timeout = 604800000;
    if (check !== null && timeout - (Date.now() - check) > 0) {
      const ms = require("pretty-ms")
      const timeLeft = ms(timeout - (Date.now() - check))
      let fail = new Discord.MessageEmbed()
        .setTitle("You've already had your weekly! :x:")
        .setColor("RED")
        .setDescription(`**Nice try!** You already claimed your weekly for today!\nCome back after ${timeLeft} for your next daily payout.`)
        .setTimestamp()
      message.channel.send(fail)
    } else {
      let reward = 10000
      let currentBalance = await db.get(`wallet_${message.author.id}`)
      let success = new Discord.MessageEmbed()
        .setTitle("You claimed your weekly! :white_check_mark:")
        .setColor("RANDOM")
        .setDescription(`**Nice job**! You claimed ${currency} ${reward.toLocaleString()}!\nCome back next week for another payout!`)
        .setTimestamp()
      message.channel.send(success)
      await db.set(`wallet_${message.author.id}`, currentBalance + reward)
      await db.set(`weeklyCheck_${message.author.id}`, Date.now())
    }
  }
  if (message.content.startsWith(".create")) {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send('You have no perms')
    }
    message.channel.clone({ position: message.channel.rawPosition }).then(ch => { ch.send('Channel been added type .(name channel) to add'); })
    let args = message.content
      .toLowerCase()
      .split(" ")
      .slice(1);
    message.channel.setName(args.join(" "))
  }
  if (message.content === ".joke") {
    let replies = ["How does a rabbi make his tea? Hebrews it!", "What is a dog that is cocky? A Cocker Spaniel!", "What spy can hang on a ceiling? Snyderman!", "Someone threw their clock away. Why? They wanted to see time fly!", "I feel bad for the calendars. Its days are numbered.", "If you enter the void, you'll become voidblind", 'NEVER GONNA GIVE YOU UP']
    message.channel.send(replies[Math.floor(Math.random() * replies.length)])
  }
  if (message.content === ".code") {
    let embed = new Discord.MessageEmbed()
      .setTitle("Wanna Learn To Code Your Own Bot?")
      .setDescription("You want to code/make a bot? Discord.js is where you start! https://discord.js.org/#/")
      .setColor("RANDOM")
      .setFooter("Programmed by Mills#2470 - prefix is (.)")
    .setTimestamp()
    message.channel.send(embed)
  }
  if (message.content === ".biology") {
    let replies = ["👁 - Eye", "👃 - Nose", "👄 - Mouth", "👂 - Ear", "🧑 - Head", "🦶 - Foot", "🧠 - Brain", "🤚 - Hand"] //you can continue it like this, "another reply", "one more reply"]
    message.channel.send(replies[Math.floor(Math.random() * replies.length)])
  }
  if (message.content.startsWith(".userinfo")) {
    let user = message.mentions.users.first() || message.author;
    let member =
      message.mentions.members.first() || message.member;
    let embed = new
      Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`${user.username}'s Info.`)
      .setThumbnail(user.displayAvatarURL({ dynamic: true }))
      .setDescription(`**User and Tag:** ${user.tag}\n**ID:** ${user.id}\n** Account Created At:** ${user.createdAt}\n**Joined Server At:** ${member.joinedAt}\n**Nickname in server:** ${member.displayName}`)
      .setFooter(`Command Used by ${message.author.username}`)
    message.channel.send(embed)
    .setTimestamp()
  }
  if (message.content.toLowerCase().startsWith(".gay")) {
    let gayrate = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "deez nuts", "MEGA GAY", "102", "101", "110"]
    let victim = message.mentions.users.first()
    if (!victim) message.reply("Mention someone first to calculate homo probability.")
    else {
      message.lineReplyNoMention
      let embed = new Discord.MessageEmbed()
        .setTitle(`Gay Probability Calculator (GPC)`)
        .setDescription((`${victim} is ${gayrate[Math.floor(Math.random() * gayrate.length)]}% gay! :rainbow_flag:`))
        .setFooter("Programmed by Mills#2470")
        .setColor("RANDOM")
        .setTimestamp()
      message.channel.send(embed)
    }
  }
  if (message.content.toLowerCase().startsWith(".trans")) {
    let gayrate = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "deezus", "MEGA TRANS"]
    let victim = message.mentions.users.first()
    if (!victim) message.reply("Mention someone first to calculate transgender probability.")
    else {
      message.lineReplyNoMention
      let embed = new Discord.MessageEmbed()
        .setTitle(`Trans Probability Caculator (TPC)`)
        .setDescription((`${victim} is ${gayrate[Math.floor(Math.random() * gayrate.length)]}% trans! :transgender_flag:`))
        .setFooter("Programmed by Mills#2470")
        .setColor("#F5A9B8")
        .setTimestamp()
      message.channel.send(embed)
    }
  }
  if (message.content.toLowerCase().startsWith(".bi")) {
    let gayrate = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "100", "deezus", "Straight but is secretly gay"]
    let victim = message.mentions.users.first()
    if (!victim) message.reply("Mention someone first to calculate bisexual probability.")
    else {
      message.lineReplyNoMention
      let embed = new Discord.MessageEmbed()
        .setTitle(`Bisexual Probability Calculator (BPC)`)
        .setDescription((`${victim} is ${gayrate[Math.floor(Math.random() * gayrate.length)]}% bisexual!`))
        .setFooter("Programmed by Mills#2470")
        .setColor("#9B4F96")
        .setTimestamp()
      message.channel.send(embed)
    }
  }
  if (message.content.startsWith(".credits")) {
    let embed = new
      Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Credits")
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setDescription("People who created Mills are listed here:")
      .addFields({ name: "Editing and Coding", value: "By Mills" },
        { name: "***Visual*** Design and Picture", value: "By Boe and Mills :snowflake:" },
        { name: "Alpha Testing", value: "By Mills" },
        { name: "Software", value: " By Node.js and Discord.js and 12.5.3" },
        { name: "Service", value: "Repl.it and UptimeRobot" },
        { name: "Beta Testers", value: " By bptay, Boe and MIlls" },
        { name: "SatOS L internals and works", value: "By Mills" })
      .setFooter(`Command Used by ${message.author.tag}`)
    message.channel.send(embed)
  }
  if (message.content.startsWith(".cmds")) {
    let embed = new
      Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTimestamp()
      .setTitle("Commands for Mills")
      .setDescription("The central hub for all commands. Learn and master them here. The prefix is `.`")
      .addFields({ name: "***Moderation Commands***", value: " ban, warn, kick, (un)mute, purge, warnings and slowmode." },
        { name: "***Fun Commands***", value: "kill, (dark)joke, dice, minesweeper, 8ball, gay, trans, tableflip, hug, hack, cookie, hitman, biology, coinflip, and say " },
        { name: "***Utility Commands***", value: "ping, serverinfo, membercount, av, uptime, suggest, userinfo, stats and join/leave (voice commands) " },
        { name: "***Assorted Commands***", value: "feedback, invite, news, dm, timer, code, create, (makes channels) and status" },
        { name: "***Economy Commands***", value: "bal, daily, beg, give/share, work, top/lb (wallets and bank) and weekly" })
      .setFooter(`Command Used by ${message.author.tag}`)
    message.channel.send(embed)
  }
  if (message.content === `.serverinfo`) {
    let server = new Discord.MessageEmbed()
      .setTitle("Server Information")
      .setFooter(`Command Used by ${message.author.tag}`)
      .setTimestamp()
      .setAuthor(`${message.guild.name}`)
      .setColor("RANDOM")
      .addField("> Statistics", `\`\`\`rb\n Server name : ${message.guild.name} \n Server Id : ${message.guild.id} \n Server Owner : ${message.guild.owner} \n Server Region : ${message.guild.region} \n Total Members : ${message.guild.members.cache.size} \n Total Dnd Users : ${message.guild.members.cache.filter(m => m.user.presence.status == "dnd").size} \n Total Online Users : ${message.guild.members.cache.filter(m => m.user.presence.status == "online").size} \n Total offline users : ${message.guild.members.cache.filter(m => m.user.presence.status == "offline").size} \n Total Idle Users : ${message.guild.members.cache.filter(m => m.user.presence.status == "idle").size} \n Total Bots : ${message.guild.members.cache.filter(member => member.user.bot).size} \n Total Emojis : ${message.guild.emojis.cache.size} \n Total Animated Emojis : ${message.guild.emojis.cache.filter(emoji => emoji.animated).size} \n Total Text Channels : ${message.guild.channels.cache.filter(channel => channel.type === 'text').size} \n Total Voice Channels : ${message.guild.channels.cache.filter(channel => channel.type === 'voice').size} \n Verification Level : ${message.guild.verificationLevel} \n Created At : ${message.guild.createdAt.toDateString()} \n Total Roles : ${message.guild.roles.cache.size} \n Total Boosters : ${message.guild.premiumSubscriptionCount}\`\`\``)
    message.channel.send(server)
  }
  if (message.content.toLowerCase().startsWith('.timer')) {
    const args = message.content.split(' ').splice(1);
    if (!args[0]) return message.channel.send('Please include a valid time. [TIP] **10s = 10s, 100s = 1.6m, 500s = 8.3m, 1000s = 16.3m**');
    if (isNaN(args[0])) return message.channel.send('please include a valid number');
    if (!args[1]) return message.channel.send('You must have included something for me to remind you with, so I can ping you. [TIP] **If I dont reply if you correctly set the command, the timer is live!**')
    setTimeout(() => {
      const msg = args.splice(1).join(' ');
      message.channel.send(`${message.author}, ${msg}`)
    }, parseInt(args[0], 10) * 1000)
  }
  if (message.content.startsWith(".8ball")) {
    let replies = ["Yes.", "No.", "Could happen.", "Maybe.", "Totally.", "Signs lead to no.", "Signs lead to yes.", "Yes. Wait no. Ummm...No.", "Reply hazy. Try again.", "You found hidden text...", "c://no", "c://yes", "Sure.", "Why not?", "No way that is possible.", "Not.", "Without a doubt.", "NEVER GONNA GIVE YOU UP", "8-ball is confused.", "50/50 chance", "Signs leads to no.", "Reply is mixed. Try your horoscope.", "Why are you using me-"]

    let embed = new Discord.MessageEmbed()
      .setTitle("8ball's Answer")
      .setDescription(`8ball's Answer: ${replies[Math.floor(Math.random() * replies.length)]}`)
      .setColor("RANDOM")
      .setFooter(`Command Used By ${message.author.username}`)
    message.channel.send(embed)
    .setTimestamp()
  }
  if (message.content.startsWith(".web")) {
    let replies = ["You googled how to make ice cream and saw things...", "No. Just no.", "YouTube takes down your video because it had 18+ material.", "PackGod the Streamer ratio's you because you are 8 years old using a Discord bot.", "You google testis and you buy bleach", "You make a sexy story on DaaPad and make 5000 dollars but the FBI took it down.", "You found rule36 and it said `Rule36 - Your favorite gaming hub!`", "You worked for Joogle, a smartphone company but your application was phony!", "You watch Bluey and reflect how you have no **bitches**", "You meet someone on Tinder but it was some weird 9-year-olds looking for a man/bitch", "Someone called you the r-word and did nothing. Days later, karma caught them.", "You download ROBLOX and 1st thing you see is Copy and Pasters and exploits banding together to take down the server. Neat!"]

    let embed = new Discord.MessageEmbed()
      .setTitle("Explore the World-Wide-Web!")
      .setDescription(`${replies[Math.floor(Math.random() * replies.length)]}`)
      .setColor("RANDOM")
      .setFooter(`Command Used By ${message.author.username}`)
    message.channel.send(embed)
    .setTimestamp()
  }
  if (message.content.startsWith(".kill")) {
    let victim = message.mentions.users.first()
    if (!victim) message.reply("Mention someone to ~~***mercilessly***~~ murder.")
    else {
      let replies = [(`${victim} has been shot by a ***hitman***.`), (`${victim} has been stabbed by a ***hitman***`), (`${victim} was at the beach, drinking ***saltwater like a f*cking idiot then chocked and died on salt.*** Hmm...`),
      (`${victim} has been ***electrified by wires.***`), (`A ***goose pucked at ${victim} to death.***`),
      (`Some crazed guy shot ${victim} with their ***P90***`),
      (`${victim} ate a poisonous ***fruit and died from Cardiac Arrest.***`), (`${victim} got in a ***car accident.***`),
      (`${victim} was ***run over by car***`), (`${victim} was pushed in ***liquid nitrogen and freeze***.`), (`${victim} was banned by the ***server owner.***`),
      (`${victim} was found ***dead in a dumpster. Sad stuff, man.***`),
      (`Someone named Brian was found ***chewing on ${victim}'s leg.***`), (`${victim} got drunk and ***fell in the water***`),
      (`${victim} made a deal with the ***devil and failed to cooperate.***`), (`${victim} ***was texting randomly on the road and got hit.***`), (`An alien named ***MEE7*** abducted ${victim} in their sleep`),]

      message.channel.send(`${replies[Math.floor(Math.random() * replies.length)]}`)
    }
  }
  if (message.content === '.ping') {
    let pingEmbed = new Discord.MessageEmbed()
      .setTitle("Server Ping :loudspeaker:")
      .setDescription(`**Lag for User (Your Wi-Fi):** ${Date.now() - message.createdTimestamp}ms. 
**Lag for API (Repel.it Servers):** ${Math.round(client.ws.ping)}ms`)
      .setColor("RANDOM")
    .setTimestamp()
    message.channel.send(pingEmbed);
  }
  if (message.content === ".minesweeper ez") {
    let minesweeper = [`**Minesweeper** *(5x5 with 5 bombs)*
||:two:||||:three:||||:two:||||:one:||||:zero:||
||:boom:||||:boom:||||:boom:||||:one:||||:zero:||
||:two:||||:three:||||:two:||||:two:||||:one:||
||:zero:||||:one:||||:one:||||:two:||||:boom:||
||:zero:||||:one:||||:boom:||||:two:||||:one:||`, `**Minesweeper** *(5x5 with 5 bombs)*
||:zero:||||:one:||||:boom:||||:two:||||:one:||
||:one:||||:three:||||:four:||||:boom:||||:one:||
||:one:||||:boom:||||:boom:||||:two:||||:one:||
||:one:||||:two:||||:three:||||:two:||||:one:||
||:zero:||||:zero:||||:one:||||:boom:||||:one:||`, `**Minesweeper** *(5x5 with 5 bombs)*
||:boom:||||:two:||||:boom:||||:boom:||||:two:||
||:one:||||:two:||||:two:||||:three:||||:boom:||
||:zero:||||:zero:||||:zero:||||:one:||||:one:||
||:one:||||:one:||||:zero:||||:zero:||||:zero:||
||:boom:||||:one:||||:zero:||||:zero:||||:zero:||`]
    message.channel.send(`${minesweeper[Math.floor(Math.random() * minesweeper.length)]}`)
  }
  if (message.content.startsWith(".av")) {
 let user = message.mentions.users.first() || message.author;
let member = message.mentions.members.first() || message.member;
let embed = new Discord.MessageEmbed()
.setTitle(`${user.username}'s Avatar.`)
.setColor("RANDOM")
  .setTimestamp()
.setImage(user.displayAvatarURL({ dynamic: true, size: 2048 }))
message.channel.send(embed);
}
  if (message.content === (".coinflip")) {
    let coinflip = ("Tails 🪙", "Heads 😶")
    message.channel.send(coinflip)
  }
  if (message.content.startsWith(".unban")) {
    let args = message.content.split(" ").slice(1)
    if (!args[0]) return message.reply("Please provide ID to unban user.")
    if (isNaN(args[0])) return message.reply("This is an invalid ID.")
    message.guild.members.unban(args[0]);
  }
  if (message.content.startsWith(".warn")) {
    let victim = message.mentions.users.first()
    if (!victim) message.reply("Mention someone to warn.")
    else {
      let embed = new Discord.MessageEmbed()
        .setTitle("Warnings")
        .setDescription(`${victim} got warned by ${message.author}!`)
        .setColor("RANDOM")
        .setFooter(`Command Used By ${message.author.username}`)
        .setTimestamp()

      message.channel.send(embed)
    }
  }
  if (message.content === ".updates") {
    let embed = new Discord.MessageEmbed()
      .setTitle("SatOS L")
      .setDescription("**SatOS L Logs:** Satellite has now entered legacy mode. This means that updates will be slowed down and planned updates will be shelled for later. We are not giving up on this bot just yet. Current commands however will be updated and stylized.")
      .setColor("RANDOM")
      .setFooter("Current Minor is SatOS L.1.2 | Programmed by Mills#2470 - prefix is (.)")
    .setTimestamp()
    message.channel.send(embed)
  }
  if (message.content.toLowerCase().startsWith('.kick')) {
    const member = message.mentions.members.first()
    if (!member) return message.channel.send('You need to mention a user/provide an ID')
    if (!message.member.permissions.has('KICK_MEMBERS')) return message.channel.send('You lack the required permissions! Sad.')
    if (member.permissions.has('KICK_MEMBERS') || member.permissions.has('BAN_MEMBERS')) return message.channel.send('This user seems to be a moderator. ')

    try {
      member.kick().then(() => {
        message.channel.send(`${member}Got owned! `)
      })
    } catch (err) {
      console.log(err)
      message.channel.send('Oops, something went wrong! Try it again.')
    }
  }
  if (message.content.toLowerCase().startsWith('.top bank') || message.content.toLowerCase() === '.lb bank') {
    const collection = new Discord.Collection();
    await Promise.all(
      message.guild.members.cache.map(async (member) => {
        const id = member.id
        const bal = await db.get(`bank_${id}`)
        return bal !== 0
          ? collection.set(id, {
            id,
            bal,
          })
          : null
      })
    )
    const data = collection.sort((a, b) => b.bal - a.bal).first(5);
    message.channel.send(
      new Discord.MessageEmbed()
        .setTitle('Leaderboard for bank accounts.')
        .setFooter(`Command Used by ${message.author.username}`)
        .setColor("RANDOM") 
      .setTimestamp()
        .setDescription(
          data.map((v, i) => {
            return `${i + 1}) ${client.users.cache.get(v.id).tag}: **${v.bal}** :moneybag:`
          }))
    )
  }
  if (message.content.startsWith('.ban')) {
    if (message.member.hasPermission("BAN_MEMBERS")) {
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member
            .ban({
              reason: 'User banned. If this user was banned for nothing, please contact the moderator who executed the command.',
            })
            .then(() => {
              
              message.reply(`Successfully banned ${user.tag}!`);
            })
            .catch(err => {

              message.reply("I was unable to ban the member. Get help from a administrator");

              console.error(err);
            });
        } else {

          message.reply("That user isn't in this server. Try again.");
        }
      } else {

        message.reply("You didn't mention the user to ban!");
      }
    }
  }
  if (message.content.toLowerCase().startsWith('.top wallet') || message.content.toLowerCase() === '.lb wallet') {
    const collection = new Discord.Collection();
    await Promise.all(
      message.guild.members.cache.map(async (member) => {
        const id = member.id
        const bal = await db.get(`wallet_${id}`)
        return bal !== 0
          ? collection.set(id, {
            id,
            bal,
          })
          : null
      })
    )
    const data = collection.sort((a, b) => b.bal - a.bal).first(5);
    message.channel.send(
      new Discord.MessageEmbed()
        .setTitle('Leaderboard for wallets.')
        .setFooter(`Command Used by ${message.author.username}`)
        .setColor("RANDOM")
      .setTimestamp()
        .setDescription(
          data.map((v, i) => {
            return `${i + 1}) ${client.users.cache.get(v.id).tag}: **${v.bal}** :moneybag:`
          }))
    )
  }
  })
  
  client.login(process.env.token)