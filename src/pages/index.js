import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi👋</h1>
    <p>
      <p><h2><u>POSTS</u></h2></p>
      <Link to="/page-2/">1.The two kinds of indian students</Link> <br />
    </p>
    <br></br>
    ------------------------------------------------------
    <p><i>Contact me: its.abhinavthottunkal.tech</i></p>
  </Layout>
)

export default IndexPage
