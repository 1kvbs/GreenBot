const chalk = require('chalk')
const { Client, MessageEmbed } = require('discord.js');


const { token, prefix } = require("./config/config.js")

const commandHandler = require("./handlers/command.handler")

const client = new Client()

const log = console.log

// Iniciujemy command Handler
commandHandler(client)

client.on('ready', () => {
  log(chalk.red(`Zalogowano jako ${client.user.tag}!`))
})

client.on('message', msg => {
  const { author, guild, channel } = msg

  // Sprawdza czy użytkownik jest botem
  if (author.bot || !guild) {
    return
  }
  // Ignoruje wiadomości bez prefixu ">"
  if (!msg.content.startsWith(prefix)) return

  const args = msg.content.slice(prefix.length).trim().split(/ +/g)

  const cmd = args.shift().toLowerCase()

  if (cmd === 'ping') {
    msg.reply('pong')
  }

  if (cmd === 'info'){
    const botAuthor = "1kvbs_"
    const botVersion = "v1.0.0"
    const botName = "GreenBot"
    const botDescription = 
    "Bot 4FUN"

    const embed = new MessageEmbed()
      // Set the title of the field
      .setTitle(botName)
      // Set the color of the embed
      .setColor(0xd41f1f)
      // Set the main content of the embed
      .setDescription(botDescription)
      .addField("Autor", botAuthor, true)
      .addField("Wersja", botVersion, true)

    channel.send(embed)

    msg.delete()
  }
})

client.login(token)

// Error Handler

client.on("debug", () => {})
client.on("warn", () => {})
client.on("error", () => {})