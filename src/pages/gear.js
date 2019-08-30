import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const GearPage = () => (
    <Layout>
        <SEO title="WEDIG STUDIOS | About" />
        <h2 className="make-music">Gear List</h2>
        <h3 className="affordable">At WEDIG STUDIOS we believe in mixing the warmth of tried-and-true recording techniques with the best modern recording technology has to offer:</h3>
        <p>Gear List Insert</p>

        <Link to="/">Go back home</Link>
    </Layout>
)

export default GearPage
