import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import { Container } from "react-bootstrap"
import SEO from "../components/seo"

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
						}
					}
				}
			}
		`)

		return (
			<Layout siteTitle={siteTitle} pageInfo={{ pageName: "blog" }}>
			<SEO title="Blog" />
			<Container>
				<h1>Contentful 準備中</h1>
				{/* <ol>
					{data.allContentfulBlogPost.edges.map((edge) => {
						return (
							<li>
								<Link to={`/blog/${edge.node.slug}`}>
									<h2>{edge.node.title}</h2>
									<p>{edge.node.publishedDate}</p>
								</Link>
							</li>
						)
					})}
				</ol> */}
			</Container>
			</Layout>
		)

}

export default BlogPage