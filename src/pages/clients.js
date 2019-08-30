import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ClientsPage = () => (
    <Layout>
        <SEO title="WEDIG STUDIOS | About" />
        <h2 className="make-music">Here is a sample of the great talent we've worked with at WEDIG STUDIOS</h2>
        <p>Coming soon</p>
        <Link to="/">Go back home</Link>
    </Layout>
)

export default ClientsPage
