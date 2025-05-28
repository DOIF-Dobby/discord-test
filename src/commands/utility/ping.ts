import {
  CacheType,
  ChatInputCommandInteraction,
  SlashCommandBuilder,
} from 'discord.js'

export const commandPing = new SlashCommandBuilder()
  .setName('ping')
  .setDescription('Replies with Pong!')

export async function execute(
  interaction: ChatInputCommandInteraction<CacheType>,
) {
  await interaction.reply('Pong!')
}
