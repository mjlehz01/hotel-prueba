import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"

const ImageBackground = styled(BackgroundImage)`
  height: 700px;
`
const TextImagen = styled.div`
  background-image: linear-gradient(
    to top,
    rgba(34, 49, 63, 0.8),
    rgba(34, 49, 63, 0.8)
  );
  color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 3rem;
    margin: 0;
    @media (min-width: 768px) {
      font-size: 5.6rem;
    }
  }
  p {
    font-size: 2rem;
    @media (min-width: 768px) {
      font-size: 2.6rem;
    }
  }
`

const ImagenHotel = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "2.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  //console.log(image.sharp.fluid)

  return (
    <ImageBackground tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <TextImagen>
        <h1>Bienvenido a Hotel Pruebas</h1>
        <p>El mejor hotel para tus vacaciones</p>
      </TextImagen>
    </ImageBackground>
  )
}

export default ImagenHotel
