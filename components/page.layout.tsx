import React, { ReactNode } from 'react';
import styled from 'styled-components';
import StyleTheme from '../styles/theme';

const PageLayout = ({ children }: {
  children: ReactNode
}) => {
  return (
    <ContentWrapper>
      <ContentDiv>
        {children}
      </ContentDiv>
    </ContentWrapper>
  )
}

export default PageLayout;

const ContentWrapper = styled.main`
  background-color: ${StyleTheme.background.default};
  max-width: ${StyleTheme.contentWidth};
  min-height: calc(100vh - ${StyleTheme.footerHeight} - ${StyleTheme.navbarHeight});
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ContentDiv = styled.div`
  background-color: ${StyleTheme.foreground.default};
  width: 100%;
  padding: 1rem;
`