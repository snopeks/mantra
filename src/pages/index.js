import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import TextBox from '../components/textbox';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <TextBox></TextBox>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
  </Layout>
)

export default IndexPage
