import React from "react"
import { Form, Button } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/contact.scss"

class ContactPage extends React.Component {
  render() { 
    const siteTitle = "Contact"
    return (
      <Layout siteTitle={siteTitle} pageInfo={{ pageName: "contact" }}>
        <SEO title="Contact" />
        {/* <h1 className="text-center py-5">Get in Touch</h1> */}
        <Form 
        name="contact"
        method="POST" 
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="hidden" name="bot-field" />

          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" required />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" required />
            <Form.Text className="text-muted">
              I'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="message">
            <Form.Label>Message</Form.Label>
            <Form.Control name="message" as="textarea" rows="3" />
          </Form.Group>
          
          <Button className="submitButton" variant="light" type="submit">
            Submit
          </Button>
        </Form>
      </Layout>
    )
  }  
}
export default ContactPage