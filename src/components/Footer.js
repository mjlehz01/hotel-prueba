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

const Footer = ({title}) => {
  const year = new Date().getFullYear()
  return (
    <>
      <footer
        css={css`
          background-color: rgba(44, 62, 80);
          margin-top: 5rem;
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
          <Navegacion />
          <Logo to="/">
            <h1>Hotel de MeleM</h1>
          </Logo>
        </div>
      </footer>
      <p
        css={css`
          color: #fff;
          text-align: center;
          background-color: rgb(33, 44, 55);
          margin: 0;
          padding: 1rem;
        `}
      >
       {title}. Todos los derechos Revervados {year} &copy;
      </p>
    </>
  )
}

export default Footer
