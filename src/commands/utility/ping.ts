import {
  CacheType,
  ChatInputCommandInteraction,
  SlashCommandBuilder,
} from 'discord.js'
import { SlashCommand } from '../types'

export const ping: SlashCommand = {
  builder: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('ping desc'),
  async execute(interaction: ChatInputCommandInteraction<CacheType>) {
    await interaction.reply('Pong Pong!@#@#')
  },
}
