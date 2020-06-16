import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Entre os static generator propostos para nós, decidimos que fosse melhor usar o Gatsby,o objetivo desse blog é para servir de portfólio para nós.</h1>
    <p>Montamos o nosso site do zero usando o passo a passo do Gatsby.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Teach stack</Link> <br />
    <Link to="/page-3/">Quem somos?</Link> <br />
    <Link to="/using-typescript/">Projetos pessoais</Link>
  
    
  </Layout>
)

export default IndexPage
