import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from "../components/layout"
import { Container } from "react-bootstrap"
import SEO from "../components/seo"

export const query = graphql`
	query($slug: String!) {
		contentfulBlogPost(slug: {eq: $slug}) {
			title
			publishedDate(formatString: "MMMM Do, YYYY")
			body {
				json
			}
		}
	}
`

const Blog = (props) => {
	const siteTitle = props.data.contentfulBlogPost.title
	return (
		<Layout siteTitle={siteTitle} pageInfo={{ pageName: props.data.contentfulBlogPost.title }}>
		<SEO title={props.data.contentfulBlogPost.title} />
		<Container>
			<p>{props.data.contentfulBlogPost.publishedDate}</p>
			{documentToReactComponents(props.data.contentfulBlogPost.body.json)}
		</Container>
		</Layout>
	)
}

export default Blog