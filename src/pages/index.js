import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2 className="make-music" style={{ fontWeight: `900` }}>Let's Make Some Music</h2>
    <h3 className="affordable">West Nashville's premier tracking room</h3>
    <div className="book-button-container"><a className="book-now" href="tel:615-669-6649">BOOK NOW: 615-669-6649</a></div>
    <div className="blues-banner-img" style={{ maxWidth: `900px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <p>Check back shortly! Lots more coming soon</p>
    {/*<Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
