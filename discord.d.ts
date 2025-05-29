import { Collection } from 'discord.js'
import { SlashCommand } from './src/commands/types'

declare module 'discord.js' {
  interface Client {
    commands: Collection<string, SlashCommand>
  }
}
