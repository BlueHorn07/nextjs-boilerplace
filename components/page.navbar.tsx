import { FunctionComponent } from 'react';
import Link from 'next/link';
import styled from 'styled-components'
import StyleTheme from '../styles/theme';

const PageNavbar: FunctionComponent = () => {
  return (
    <NavbarWrapper>
      <div>
        <Link href={"/"}>
          Home
        </Link>
      </div>
    </NavbarWrapper>
  )
}

export default PageNavbar;

const NavbarWrapper = styled.nav`
  text-align: center;
  padding: 16px 0;
  height: ${StyleTheme.navbarHeight};
`