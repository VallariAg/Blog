import React from "react"
import { Link } from "gatsby"

import Bio from "./bio"
import { rhythm, scale } from "../utils/typography"
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
import "./layout.css"

const Layout = ({ location, title, children }) => {
  deckDeckGoHighlightElement();

  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        // color: 'white',
        // background: '#212121',
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        // fontFamily: "Courier New",
        fontFamily: "Arial",
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer style={{marginTop: rhythm(2)}}>
        <hr />
        <Bio />
        <div style={{margin: "auto"}}>Written by <a href="/about">Vallari Agrawal</a> © {new Date().getFullYear()}</div>
        {/* , Built with {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a> */}
      </footer>
    </div>
  )
}

export default Layout
