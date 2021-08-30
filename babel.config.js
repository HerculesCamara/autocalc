module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'styled-components',
      {
        ssr: false,
        fileName: false,
        displayName: false
      }
    ]
  ]
}
