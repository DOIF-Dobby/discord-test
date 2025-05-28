import { REST, Routes } from 'discord.js'
import { commandPing } from './utility/ping'

const applicationId = '1377097259228991569'
const serverId = '1354471288290279585'
const token = ''

const commands = [commandPing.toJSON()]

export async function registerCommands() {
  const rest = new REST().setToken(token)
  await rest.put(Routes.applicationGuildCommands(applicationId, serverId), {
    body: commands,
  })
}
