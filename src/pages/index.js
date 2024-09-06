import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"



const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const techPosts = data.techPosts.edges
  const personalPosts = data.personalPosts.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <p>
        Hello, I'm <a href="/about">Vallari Agrawal</a>! <br />

        I'm currently working at Ceph IBM as a Software Engineer. 
        <br />
      </p>
      <hr />
      <a href="/tech"><h1>Programming</h1></a>
      <p>Here are the latest posts. Checkout all tech posts <a href="/tech">here</a>.</p>
      {techPosts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug} >
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                  // fontFamily: "Verdana",
                }}
              >
                <Link style={{ boxShadow: `none`, color: 'black' }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })}
      <hr />
      <a href="/personal"><h1>Personal</h1></a>
      <p>Here are the latest posts. Checkout all personal blog posts <a href="/personal">here</a>.</p>
      {personalPosts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug} >
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                  // fontFamily: "Verdana",
                }}
              >
                <Link style={{ boxShadow: `none`, color: 'black' }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
query {
  site {
    siteMetadata {
      title
    }
  }
  techPosts: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }
    filter: { fields: { slug: { regex: "/^\\/tech-/" } } }
    limit: 3
  ) {
    edges {
      node {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
  personalPosts: allMarkdownRemark(
    sort: { fields: [frontmatter___date], order: DESC }
    filter: { fields: { slug: { regex: "/^\\/personal-/" } } }
    limit: 3
  ) {
    edges {
      node {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
}
`