const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const postcss = require('rollup-plugin-postcss')

const path = require('path')

module.exports = {
  rollup(config, options) {
    options.env = 'production'

    config.plugins.push(
      postcss({
        plugins: [
          autoprefixer(),
          cssnano({
            preset: 'default',
          }),
        ],
        config: {
          path: './postcss.config.js',
        },
        inject: true,
        minimize: true,
        // only write out CSS for the first bundle (avoids pointless extra files):
        extract: path.resolve('dist/chadson.css'),
      })
    )

    config.output = {
      ...config.output,
      preserveModules: true,
      banner: `'use client';`,
    }

    return config
  },
}
