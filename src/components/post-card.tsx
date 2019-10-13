import React, { FC } from "react"
import styled from "styled-components"
import GatsbyImage from "gatsby-image"
import { Link } from "gatsby"

import { Frontmatter } from "../pages"

const PostCardWrapper = styled.article`
  margin-bottom: 2rem;
  background: ${props => props.theme.mainWhite};
  padding: 1rem;
  text-align: center;
  .info {
    padding: 1rem 0;
  }
  .info h2 {
    font-size: 30px;
    text-transform: capitalize;
    margin-bottom: 10px;
  }
  .info h6 {
    color: ${props => props.theme.darkGrey};
    text-transform: capitalize;
  }
  .info p {
    padding: 20px 0 30px 0;
    text-align: left;
  }
  .link {
    border: 1px solid ${props => props.theme.mainBlack};
    padding: 4px 8px;
    display: inline-block;
    color: ${props => props.theme.mainBlack};
    text-decoration: none;
    text-transform: capitalize;
    transition: all 0.3s ease-in-out;
    :hover {
      background: ${props => props.theme.mainBlack};
      color: ${props => props.theme.mainWhite};
    }
  }

  /* .image > div {
  height: 250px;
} */
  @media screen and (min-width: 776px) {
    display: grid;
    grid-template-columns: 350px 1fr;

    .info {
      display: flex;
      align-items: center;
      padding: 0 1.5rem;
    }
    .image > div {
      height: 250px;
    }
  }
`

interface Props {
  post: {
    frontmatter: Frontmatter
    excerpt: string
  }
}

const PostCard: FC<Props> = ({
  post: {
    excerpt,
    frontmatter: {
      title,
      author,
      slug,
      date,
      image: {
        childImageSharp: { fluid },
      },
    },
  },
}) => {
  return (
    <PostCardWrapper>
      <div className="image">
        <GatsbyImage fluid={fluid} />
      </div>
      <div className="info">
        <div>
          <h2>{title}</h2>
          <h6>
            <span>by {author}</span> / <span>{date}</span>
          </h6>
          <p>{excerpt}</p>
          <Link to={slug} className="link">
            read more
          </Link>
        </div>
      </div>
    </PostCardWrapper>
  )
}

export default PostCard
