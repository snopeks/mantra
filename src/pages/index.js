import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import TextBox from '../components/textbox';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>Each family is unique, and we think that's beautiful. Create a printable piece of art that shares your family values and hang it on the wall as a reminder of your bond. </p>
    <TextBox></TextBox>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
  </Layout>
)

export default IndexPage
