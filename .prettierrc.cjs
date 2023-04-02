module.exports = {
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
