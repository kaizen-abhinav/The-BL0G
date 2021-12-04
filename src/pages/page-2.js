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
    <p><h3><u>The First type</u></h3></p>
    <br></br>
    <StaticImage
      src="https://cdn.discordapp.com/attachments/746619203628564480/916329685728780288/unknown.png"
      width={500}
      quality={100}
      formats={["auto", "webp", "avif"]}git 
      alt="math dudes"
      style={{ marginBottom: `1.45rem` }}
    />
  <p><h3><u>Then there are these OG chads</u></h3></p>
  <StaticImage
      src="https://cdn.discordapp.com/attachments/746619203628564480/916329733078257734/unknown.png"
      width={500}
      quality={100}
      formats={["auto", "webp", "avif"]}git 
      alt="meth dudes"
      style={{ marginBottom: `1.45rem` }}
    />
    <br></br>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
