import { ReactNode } from 'react'
import styled, { ThemeProvider } from 'styled-components'

import Achieve from './containers/Achieve'
import ContextProvider from './contexts/context'
import { theme } from './styles/theme'

const Container = styled.main`
  margin-top: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
`

function App() {
  return (
    <Layout>
      <ContextProvider>
        <Achieve />
      </ContextProvider>
    </Layout>
  )
}

function Layout({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <Container>{children}</Container>
    </ThemeProvider>
  )
}

export default App
