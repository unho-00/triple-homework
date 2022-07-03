import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

import ContextProvider from './contexts/context'
import { theme } from './styles/theme'

function App() {
  return (
    <Layout>
      <ContextProvider>
        <div />
      </ContextProvider>
    </Layout>
  )
}

function Layout({ children }: { children: ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default App
