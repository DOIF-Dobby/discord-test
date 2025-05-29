import {
  CacheType,
  ChatInputCommandInteraction,
  SlashCommandBuilder,
} from 'discord.js'

export interface SlashCommand {
  builder: SlashCommandBuilder
  execute: (
    interaction: ChatInputCommandInteraction<CacheType>,
  ) => Promise<void>
}
