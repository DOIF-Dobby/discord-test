import * as dotenv from 'dotenv'
import { defineConfig } from 'tsup'

dotenv.config()

export default defineConfig({
  entry: ['src/index.ts'],
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: false,
  format: 'esm',
  define: {
    'process.env.DISCORD_BOT_TOKEN': JSON.stringify(
      process.env.DISCORD_BOT_TOKEN,
    ),
  },
})
