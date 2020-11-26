import React from "react"

import { Layout, SEO, Header, Projects } from "../components"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />

    <main>
      <Projects />
    </main>
  </Layout>
)

export default IndexPage
