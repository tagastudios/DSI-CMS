import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEOdata from "../../components/seo"

const ServicesIndex = () => (
  <Layout>
    <SEOdata title="Services" />
    <h1>Services</h1>
    <h2>
      <Link to="/services/maintenance">Maintenance</Link>
    </h2>
    <h2>
      <Link to="/services/human">Social Interactions</Link>
    </h2>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ServicesIndex
