import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      grey: string
    }
    font: {
      size: {
        normal: string
        big: string
      }
      weight: {
        bold: string
      }
    }
  }
}

const theme: DefaultTheme = {
  color: {
    grey: '#676767',
  },
  font: {
    size: {
      normal: '14px',
      big: '36px',
    },
    weight: {
      bold: '700',
    },
  },
}

export { theme }
