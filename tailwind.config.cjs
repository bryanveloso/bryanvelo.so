/** @type {import('tailwindcss').Config} */

const { fontFamily, colors } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000000',
      white: '#FFFFFF',
      cool: {
        50: '#F1F2F3',
        100: '#E3E5E8',
        200: '#CACED3',
        300: '#AFB4BB',
        400: '#969DA6',
        500: '#7A838F',
        600: '#626A74',
        700: '#4D545B',
        800: '#363A40',
        900: '#202326',
        950: '#101213'
      },
      midnight: {
        50: '#EFF1F6',
        100: '#DFE4EC',
        200: '#BFC8D9',
        300: '#9FAEC6',
        400: '#8296B5',
        500: '#627DA2',
        600: '#4D6584',
        700: '#3B4D64',
        800: '#283544',
        900: '#151B23',
        950: '#090C10'
      },
      slate: {
        50: '#F0F2F5',
        100: '#DDE3E9',
        200: '#BECBD5',
        300: '#9CB0BF',
        400: '#7D98AB',
        500: '#5E7D91',
        600: '#4A6372',
        700: '#384A57',
        800: '#243038',
        900: '#12181C',
        950: '#0A0D0F'
      },
      aqua: {
        50: '#F6FDFD',
        100: '#E9FBFA',
        200: '#CFF7F5',
        300: '#B4F3EF',
        400: '#90EEE7',
        500: '#64EADD',
        600: '#20D5C6',
        700: '#1FBDB2',
        800: '#1B9D97',
        900: '#14706D',
        950: '#115554'
      },
      cloud: {
        50: '#F5F8FA',
        100: '#EEF3F6',
        200: '#DDE7EE',
        300: '#C7D8E2',
        400: '#B5CBD9',
        500: '#9EBACD',
        600: '#83A6BF',
        700: '#6891B1',
        800: '#4D7494',
        900: '#31495E',
        950: '#111A22'
      },
      mint: {
        50: '#EFFAF9',
        100: '#D8F4F0',
        200: '#BCEBE5',
        300: '#9EE0D9',
        400: '#7CD5CC',
        500: '#58C6BD',
        600: '#41B4AC',
        700: '#3A9893',
        800: '#327B79',
        900: '#204B4A',
        950: '#0D1C1C'
      },
      yellow: {
        50: '#FEFFF5',
        100: '#FEFED8',
        200: '#FDFDC3',
        300: '#FDFAA5',
        400: '#FEF88B',
        500: '#FFF467',
        600: '#E8DD02',
        700: '#C3BD04',
        800: '#9A9804',
        900: '#626204',
        950: '#1D1D01'
      },
      watermelon: {
        50: '#FDF2F5',
        100: '#FBE9EE',
        200: '#F7CFDA',
        300: '#F3AFC4',
        400: '#EF8BAA',
        500: '#E8487E',
        600: '#E1235F',
        700: '#C31E4F',
        800: '#9A183D',
        900: '#601026',
        950: '#340A14'
      },
      skyblue: {
        50: '#F3FAFC',
        100: '#E2F3F9',
        200: '#C4E8F3',
        300: '#9DDBEC',
        400: '#6DCCE4',
        500: '#27B9DA',
        600: '#25A6C6',
        700: '#2390AE',
        800: '#1D728C',
        900: '#144A5C',
        950: '#081A21'
      },
      apple: {
        50: '#F5FAF5',
        100: '#EDF7EE',
        200: '#D4EDD6',
        300: '#BBE2BD',
        400: '#A0D9A2',
        500: '#7ACC7C',
        600: '#54BA57',
        700: '#46A54A',
        800: '#37803C',
        900: '#26542A',
        950: '#0D1C0F'
      }
    },
    extend: {
      fontFamily: {
        sans: ['Sofia Pro', ...fontFamily.sans],
        serif: ['Rooney Pro', ...fontFamily.serif]
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
