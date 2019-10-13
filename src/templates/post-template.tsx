import React, { FC } from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import GatsbyImage from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"

import { Layout } from "../components"
import { Frontmatter } from "../pages"

const PostTemplateSection = styled.section`
  width: 80vw;
  margin: 4rem auto;
  max-width: 750px;
  padding: 2rem;
  background: ${props => props.theme.mainWhite};

  .link {
    border: 1px solid ${props => props.theme.mainBlack};
    padding: 4px 8px;
    display: inline-block;
    color: ${props => props.theme.mainBlack};
    text-decoration: none;
    text-transform: capitalize;
    transition: all 0.3s ease-in-out;
    margin-bottom: 2rem;
    :hover {
      background: ${props => props.theme.mainBlack};
      color: ${props => props.theme.mainWhite};
    }
  }

  .info {
    text-align: center;
    h1 {
      letter-spacing: 5px;
      margin-bottom: 0.5rem;
      text-transform: capitalize;
      font-size: 48px;
    }
    h4 {
      letter-spacing: 5px;
      text-transform: capitalize;
      font-size: 14px;
      text-align: center;
      margin-bottom: 3rem;
    }
  }

  .content {
    margin: 2rem 0;
    h1 {
      text-transform: capitalize;
      margin-bottom: 1rem;
    }
    p {
      line-height: 1.5;
      margin-bottom: 1rem;
    }
  }
`

interface Props {
  data: { mdx: { frontmatter: Frontmatter; body: string } }
}

const PostTemplate: FC<Props> = ({ data }) => {
  const {
    title,
    date,
    author,
    image: {
      childImageSharp: { fluid },
    },
  } = data.mdx.frontmatter
  const { body } = data.mdx
  return (
    <Layout>
      <PostTemplateSection>
        <Link to="/" className="link">
          back to all posts
        </Link>
        <div className="info">
          <h1>{title}</h1>
          <h4>
            <span>by {author}</span> / <span>{date}</span>
          </h4>
        </div>
        <GatsbyImage fluid={fluid} />
        <div className="content">
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </PostTemplateSection>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
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
      body
    }
  }
`

export default PostTemplate
