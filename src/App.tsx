import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

import { theme } from './styles/theme'

function App() {
  return (
    <Layout>
      <div />
    </Layout>
  )
}

function Layout({ children }: { children: ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default App
