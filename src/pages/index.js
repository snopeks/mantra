import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import TextBox from '../components/textbox';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>Your love is unique, and we think that's beautiful. Create a piece of art that shares your values, compose a love note, or write out an inspirational quote that warms your heart. Print it off and give it to your bff, or hang it on the wall as a reminder of what's truly important. </p>
    <TextBox></TextBox>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
  </Layout>
)

export default IndexPage
