import { FC, PropsWithChildren } from 'react'
import { styled } from '@linaria/atomic'

interface AppProps {
  count: number
}

export const App: FC<PropsWithChildren<AppProps>> = ({ children, count }) => {
  return (
    <Heading>
      {children} - {count}
    </Heading>
  )
}

const Heading = styled.h1`
  color: blue;
  font-family: system;
`
