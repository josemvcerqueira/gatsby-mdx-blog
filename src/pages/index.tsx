import React, { FC } from "react"
import { graphql } from "gatsby"
import { FluidObject } from "gatsby-image"

import { Layout, PostList } from "../components"

interface Props {
  data: AllMDX
}

const Home: FC<Props> = ({
  data: {
    allMdx: { edges },
  },
}) => {
  return (
    <Layout>
      <PostList posts={edges} />
    </Layout>
  )
}
export default Home

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            slug
            date(formatString: "MMMM Do, YYYY")
            author
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`

interface Fluid {
  fluid: FluidObject
}

export interface Frontmatter {
  author: string
  date: string
  slug: string
  title: string
  image: { childImageSharp: Fluid }
}

export interface Node {
  node: {
    excerpt: string
    frontmatter: Frontmatter
  }
}

interface AllMDX {
  allMdx: { edges: Array<Node> }
}
