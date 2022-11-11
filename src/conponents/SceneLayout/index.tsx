import { ReactElement } from "react"
import { Container } from '@mui/material'

// src
import Header from "../Header"

interface SceneLayoutProps {
  children?: ReactElement
}

export default function SceneLayout({ children }: SceneLayoutProps): JSX.Element {
  return (
    <Container
      maxWidth={false}
      disableGutters
    >
      <Header />
      <Container sx={{ p: 2 }}>
        {children}
      </Container>
    </Container>
  )
}
