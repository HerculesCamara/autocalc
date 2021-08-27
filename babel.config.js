module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'styled-components',
      {
        ssr: true,
        fileName: false,
        displayName: false,
        namespace: 'sinalize-css'
      }
    ]
  ]
}
