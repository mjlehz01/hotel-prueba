import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import Navegacion from "./Navegacion"
import { Link } from "gatsby"

const Logo = styled(Link)`
  color: #fff;
  text-align: center;
  text-decoration: none;
`

const Header = () => {
  return (
    <header
      css={css`
        background-color: rgba(44, 62, 80);
        padding: 1rem;
      `}
    >
      <div
        css={css`
          max-width: 1200px;
          margin: 0 auto;

          @media (min-width: 768px) {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        `}
      >
        <Logo to="/">
          <h1>Hotel de MeleM</h1>
        </Logo>
        <Navegacion />
      </div>
    </header>
  )
}

export default Header
