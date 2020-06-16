
// If you don't want to use TypeScript you can delete this file!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <SEO title="Projetosp pessoais" />
    <h1></h1>
    <p>No momento nenhum dos  membros deste grupo  </p>
    <p>está envolvido  em algum projeto pessoal. </p>
   
    <p>mas futuramente estaremos   <a href="https://lh3.googleusercontent.com/proxy/sob4t1Y9PLdZZh2rVfFSkyLTx7gOyWYB0Onoc8lPBhxU4ZsSGWfTTUiGSjM0Nz3cblWnQhLDI9O1B2EpwU64fMqdlfEuTr3OY0UWVLU6yS9cHPB7JApOq2AV8BncV7PUfSul0Wsbrr7Ncy4"> desenvolvendo </a> algo.</p>
    <Link to="/"> Home</Link>
       
       
     


  </Layout>
)

export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`