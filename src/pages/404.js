import * as React from "react"

import Layout from "../components/layout"
import SEOdata from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEOdata title="Page not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
