import { Client, Events, GatewayIntentBits } from 'discord.js'
import { registerCommands } from './commands/register'

const token = ''

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
})

registerCommands()

client.once(Events.ClientReady, (readyClient) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`)
})

client.on(Events.MessageCreate, (message) => {
  console.log(`message.content: ${message.content}`)
  if (message.content === 'ping') {
    message.reply('pong@@')
  }
})

client.on(Events.InteractionCreate, (interaction) => {
  console.log(interaction)
  if (!interaction.isChatInputCommand()) {
    return
  }

  interaction.reply('pong pong')
})

client.login(token)
