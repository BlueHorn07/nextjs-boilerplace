import React, {ReactNode} from 'react'
import styled from 'styled-components';

export const Mobile  = ({ children, criteria }: {
  children: ReactNode,
  criteria: string
}) => {
  return (
    <MobileWrapper criteria={criteria}>
      {children}
    </MobileWrapper>
  )
}

const MobileWrapper = styled.div<{criteria: string}>`
  @media only screen and (min-width: ${props => props.criteria}) {
    display: none;
  }
`

export const Desktop  = ({ children, criteria }: {
  children: ReactNode
  criteria: string
}) => {
  return (
    <DesktopWrapper criteria={criteria}>
      {children}
    </DesktopWrapper>
  )
}

const DesktopWrapper = styled.div<{criteria: string}>`
  @media only screen and (max-width: ${props => props.criteria}) {
    display: none;
  }
`
