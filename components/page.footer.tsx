import { FunctionComponent } from 'react';
import styled from "styled-components"
import StyleTheme from '../styles/theme';

const PageFooter: FunctionComponent = () => {
  return (
    <FooterWrapper>
      &copy; Seokyun.Ha (BlueHorn07)
    </FooterWrapper>
  )
}

export default PageFooter

const FooterWrapper = styled.footer`
  width: 100%;
  text-align: center;
  height: ${StyleTheme.footerHeight};
`