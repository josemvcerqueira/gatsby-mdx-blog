import React, { FC, ReactNode } from "react"
import { ThemeProvider } from "styled-components"

import { theme, GlobalStyle } from "./layout.styles"

interface Props {
  children: ReactNode
}

const Layout: FC<Props> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <main>{children}</main>
      <GlobalStyle />
    </>
  </ThemeProvider>
)

export default Layout
