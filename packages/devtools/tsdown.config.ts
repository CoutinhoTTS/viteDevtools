import { defineConfig } from 'tsdown'

export default defineConfig([
  {
    entry: [
      'src/index.ts',
    ],
    clean: true,
    fixedExtension: true,
    dts: true,
  },
])
