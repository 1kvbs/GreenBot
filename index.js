const { Client, MessageEmbed, Message, Guild, ReactionCollector } = require("discord.js")
const chalk = require("chalk")

const { token, prefix } = require("./config.js")

const client = new Client()

const log = console.log

const emoji = Guild.emojis.cache.first();
msg.reply('Hello! ${emoji}');

ReactionCollector.message.channel.send('The emoji used was: ${reaction.emoji}');

client.on("ready", () => {
  log(chalk.red(`Pomyślnie uruchomiono: ${client.user.tag}!`))
  client.user.setStatus(`dnd`)
})

client.on("message", (msg) => {
  const { author, guild, channel } = msg

  // Sprawdza czy użytkownik jest botem
  if (author.bot || !guild) {
    return
  }

  // Ignoruje wiadomości bez prefixu ">"
  if (!msg.content.startsWith(prefix)) return

  const args = msg.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g)

  const cmd = args.shift().toLowerCase()

  if (cmd === "ping") {
    msg.reply("Pong!")
  }

  if (cmd === "info") {
    const botAuthor = "1kvbs_"
    const botVersion = "v1.0.0"
    const botName = "GreenBot"
    const botDescription =
      "**GreenBot został stworzony w celach humorystycznych**"
    const grafik = "Kayovskyy"

    const embed = new MessageEmbed()
      .setTitle(botName)
      .setColor(0xb348ff)
      .setDescription(botDescription)
      .addField("Autor", botAuthor, true)
      .addField("Wersja", botVersion, true)
      .addField("Grafik", grafik, true)

    channel.send(embed)
  }

  if (cmd === "server") {
    const autor = "Informacje o serwerze"

    const infoe = new MessageEmbed()
    .setColor("0x2c6db6")
    .setTitle(autor)
    .addField("ID serwera:", msg.guild.id,true)
    .addField("ID kanału AFK:", msg.guild.afkChannelID, true)
    .addField("Utworzony:", msg.guild.createdAt)
    .addField("Właściciel:", msg.guild.owner)
    .addField("Ilość członków:", msg.guild.memberCount)

    channel.send(infoe)
  }

  if(cmd === "komendy") {
    const kom = "Nasze komendy"
    const s = "Informacje o serwerze"
    const i = "Informacje o bocie"

    const kome = new MessageEmbed()
    .setColor("0x1e2640")
    .setTitle(kom)
    .addField(">server", s,)
    .addField(">info", i,)

    channel.send(kome)
  }

  if(cmd === "wspolprace") {

    const wspolprace = new MessageEmbed()
    .setColor("#555555")
    .setTitle("**Współprace**")
    .addField("👉 50+ osób", "Nie mniej")
    .addField("👉 Ping @here lub @everyone | Zależy od wielkości serwera", "Z waszej i naszej strony")
    .addField("👉 Nasza reklama na kanale #współprace", "Z waszej i naszej strony")




    .addField("Wszelkie prośby podjęcia współpracy zapraszam do zgłaszania się do:", "@KinderkowyXD lub @1kvbs_")

    channel.send(wspolprace)
  }

})

client.login(token)