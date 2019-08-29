import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
    <Layout>
        <SEO title="Page two" />
        <h2>We'd love to help you with your project!</h2>
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default ContactPage
