import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import { Container, Card, Row, Col } from "react-bootstrap"
import SEO from "../components/seo"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import  "../styles/blog_page.scss"

const BlogPage = () => {
		const siteTitle = "Blog"
		const data = useStaticQuery(graphql`
			query {
				allContentfulBlogPost ( sort: {fields: publishedDate, order: DESC } ) {
					edges {
						node {
							title
							slug
              publishedDate(formatString:"MMMM Do, YYYY")
              image {
                file {
                  url
                }
              }
              body {
                json
              }
						}
					}
				}
			}
		`)

		return (
			<Layout siteTitle={siteTitle} pageInfo={{ pageName: "blog" }}>
			<SEO title="Blog" />
			<Container>
				<Row><h1>準備中</h1>
          {/* {data.allContentfulBlogPost.edges.map((edge) => {
            return (
              <Col md={4}>
                <Link to={`/blog/${edge.node.slug}`}>
                  <Card className="post-card">
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body className="cardbody">
                      <Card.Title>{edge.node.title}</Card.Title>
                      <Card.Text>
                        {documentToReactComponents(edge.node.body.json)}
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">{edge.node.publishedDate}</small>
                    </Card.Footer>
                  </Card>
                </Link>
              </Col>
            )
          })} */}
				</Row>
			</Container>
			</Layout>
		)

}

export default BlogPage