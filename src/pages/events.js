import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const EventsPage = () => (
    <Layout>
        <SEO title="WEDIG STUDIOS | About" />
        <h2 style={{ background: `#2A2B2E` }} className="make-music">Exciting events happening at WEDIG STUDIOS</h2>
        <p>Calendar Insert</p>
        <Link to="/">Go back home</Link>
    </Layout>
)

export default EventsPage
