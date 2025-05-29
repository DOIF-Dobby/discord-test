import { Client, REST, Routes } from 'discord.js'
import { SlashCommand } from './types'
import { ping } from './utility/ping'

const applicationId = '1377097259228991569'
const serverId = '1354471288290279585'
const token = process.env.DISCORD_BOT_TOKEN

const slashCommands = [ping] satisfies SlashCommand[]

export async function registerCommands(client: Client<boolean>) {
  if (!token) {
    return
  }

  const rest = new REST().setToken(token)
  await rest.put(Routes.applicationGuildCommands(applicationId, serverId), {
    body: slashCommands.map((command) => command.builder.toJSON()),
  })

  slashCommands.forEach((command) => {
    client.commands.set(command.builder.name, command)
  })
}
