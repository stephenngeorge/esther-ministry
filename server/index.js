require ('ignore-styles')

require('@babel/register')({
  ignore: [],
  presets: [
    '@babel/preset-env',
    '@babel/preset-react'
  ]
})

require('./server')