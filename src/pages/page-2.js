import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>THE TWO KINDS OF INDIAN STUDENTS</h1>
    <br></br>
    <p><i>This page is still under development, sorry for the inconvenience.</i></p>
    <br></br>
    <StaticImage
      src="https://cdn.discordapp.com/attachments/916339247059959889/916619594628726804/unknown.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}git 
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
  
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
