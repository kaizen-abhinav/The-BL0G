import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>THE TWO KINDS OF INDIAN STUDENTS</h1>
    <br></br>
    <p><b>THIS PAGE IS UNDER THE WATER, PLS HALP</b></p>
    
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
