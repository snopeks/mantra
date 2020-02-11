import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import TextBox from '../components/textbox';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>Your love is unique, and we think that's beautiful. Create a printable piece of art that shares your values, a love note, or anything that warms your heart and hang it on the wall as a reminder of what's truly important. </p>
    <TextBox></TextBox>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
  </Layout>
)

export default IndexPage
