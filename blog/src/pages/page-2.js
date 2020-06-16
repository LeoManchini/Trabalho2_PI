import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Tech Stack" />
    <h1>Tech Stack</h1>
    <p>Ghabriel Ramondini: HTML , Java, JS, CSS básicos<br></br><br></br>

Leonardo Manchini: HTML, Java, JS, CSS básicos<br></br><br></br>

Leonardo Yudi: HTML, Java, JS, CSS básicos<br></br><br></br>
</p>
    <Link to="/">Home</Link>
  </Layout>
)

export default SecondPage
