import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi👋</h1>
    <p>Hello reader, welcome to my blog,
      <br></br>
      <br>
     </br> Head over to the next page to see some funny content.<br></br>
<br></br>
      The reason this blog exists is to make your boringly tedious and stupidly hard day better.
      if i was able to make your day, please consider sharing this blog with others so i can help
      make their day as well

    </p>
    <p><b>DONT FORGOR💀 TO SHARE</b>.
    </p>

    <p>quote of the day- "you better scramble like an egg 'fore I fold you like an omlette" -burrito san 2021</p>
    <br></br>
    <p>------------------------------------------------------------------------------------------------------</p>

    
    <p>
      <p><h2><u>POSTS</u></h2></p>
      <Link to="/page-2/">1.The two kinds of indian students</Link> <br />
    </p>
    <br></br>
    ------------------------------------------------------------------------------------------------------
    <p><i>pls note that this blog is currently under development so pls forgive me for the crappy CSS, layout and fonts</i></p>
    ------------------------------------------------------------------------------------------------------
    <p><i>Contact me: its.abhinav69@gmail.com</i></p>
  </Layout>
)

export default IndexPage
