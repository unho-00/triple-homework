import { DefaultTheme } from 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    font: {
      size: {
        big: string
        normal: string
      }
      weight: {
        bold: string
      }
    }
  }
}

const theme: DefaultTheme = {
  font: {
    size: {
      big: '2rem',
      normal: '1rem',
    },
    weight: {
      bold: '700',
    },
  },
}

export { theme }
