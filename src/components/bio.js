/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            github
            email
            linkedin
            substack
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginTop: rhythm(1),
        color: '#555'
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>

        Contact me at <a href={`${social.email}`}>{social.email}</a>
        {/* <strong>{author.name}</strong> {author.summary} */}
        {` `}
        {/* <a href={`https://twitter.com/${social.twitter}`}>
          Follow her on Twitter!
        </a> */}
        <p>
          <a href={`${social.twitter}`}>Twitter</a>  
          {`  |  `}
          <a href={`${social.github}`}>Github</a>  
          {`  |  `} 
          <a href={`${social.linkedin}`}>LinkedIn</a>  
          {`  |  `}
          <a href={`${social.substack}`}>Substack</a>  
        </p>
      </p>
    </div>
  )
}

export default Bio
