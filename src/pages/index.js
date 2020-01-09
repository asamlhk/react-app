import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
 

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello</h1>
    <iframe
    allow="microphone;"
    width="350"
    height="430"
    src="https://console.dialogflow.com/api-client/demo/embedded/d2e88bcd-bac8-4c39-8b26-a296d4b07a4c">
    </iframe>
    <Link to="/page-2/">page2</Link>
  </Layout>
)

export default IndexPage
