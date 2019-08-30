import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
    <Layout>
        <SEO title="Page two" />
        <h2 className="make-music">We'd love to help you with your project!</h2>
        <div className="book-button-container"><a className="book-now" href="#">CALL US: 555-555-5555</a></div>

        <h3>...or tell us a little bit about what you're working on:</h3>
        <div className="contact-container"><form className="contact-form" method="post" action="#">
            <label>
                Name
    <input type="text" name="name" id="name" />
            </label>
            <label>
                Email
    <input type="email" name="email" id="email" />
            </label>
            <label>
                Message
    <textarea name="message" id="message" rows="5" />
            </label>
            <button type="submit">Send</button>
            <input id="clear" type="reset" value="Clear" />
        </form></div>

        <Link to="/">Go back home</Link>
    </Layout>
)

export default ContactPage
