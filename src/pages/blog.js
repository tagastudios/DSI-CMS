import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEOdata from "../components/seo"

const blog = () => (
  <Layout>
    <SEOdata title="Blog" />
    <h1>Blog</h1>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi quas
      non exercitationem quisquam odio enim rem sequi consequuntur velit, amet
      dolor, consequatur quia, veritatis quibusdam sint natus neque aut labore?
    </p>
    <br />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default blog
