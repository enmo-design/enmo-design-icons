import { series, parallel } from 'gulp'
import { clean, generateIcons, generateEntry } from './tasks'
import { generalConfig } from './plugins/svgo/presets'
import { assignAttrsAtTag } from './plugins/svg2Definition/transforms'
import { readFileSync } from 'fs'
import { resolve } from 'path'
import { getIdentifier } from './utils'

const iconTemplate = readFileSync(
  resolve(__dirname, './templates/icon.ts.ejs'),
  'utf8'
)

export default series(
  // 1. clean
  clean(['src/icons', 'es', 'lib']),

  parallel(
    // 2.1 generate abstract node with the theme "filled"
    generateIcons({
      theme: 'filled',
      from: ['svg/filled/*.svg'],
      toDir: 'src/icons',
      svgoConfig: generalConfig,
      extraNodeTransformFactories: [
        assignAttrsAtTag('svg', { focusable: 'false' })
      ],
      stringify: JSON.stringify,
      template: iconTemplate,
      mapToInterpolate: ({ name, content }) => ({
        identifier: getIdentifier({ name, themeSuffix: 'Filled' }),
        content
      }),
      filename: ({ name }) => getIdentifier({ name, themeSuffix: 'Filled' })
    }),

    // 2.1 generate abstract node with the theme "outlined"
    generateIcons({
      theme: 'outlined',
      from: ['svg/outlined/*.svg'],
      toDir: 'src/icons',
      svgoConfig: generalConfig,
      extraNodeTransformFactories: [
        assignAttrsAtTag('svg', { focusable: 'false' })
      ],
      stringify: JSON.stringify,
      template: iconTemplate,
      mapToInterpolate: ({ name, content }) => ({
        identifier: getIdentifier({ name, themeSuffix: 'Outlined' }),
        content
      }),
      filename: ({ name }) => getIdentifier({ name, themeSuffix: 'Outlined' })
    })
  ),
  parallel(
    // 3.1 generate entry file: src/index.ts
    generateEntry({
      entryName: 'index.ts',
      from: ['src/icons/*.ts'],
      toDir: 'src',
      banner: '// This index.ts file is generated automatically.\n',
      template: 'export { default as <%= identifier %> } from \'<%= path %>\';',
      mapToInterpolate: ({ name: identifier }) => ({
        identifier,
        path: `./icons/${identifier}`
      })
    })
  )
)
