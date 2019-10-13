import React, { FC } from "react"
import styled from "styled-components"

import PostCard from "./post-card"
import { Node } from "../pages"

const PostListWrapper = styled.section`
  padding: 4rem 0;
  h1 {
    text-align: center;
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
  .center {
    width: 85vw;
    margin: 0 auto;
    max-width: 750px;
  }
`

interface Props {
  posts: ReadonlyArray<Node>
}

const PostList: FC<Props> = ({ posts }) => {
  return (
    <PostListWrapper>
      <h1>jose cerqueira</h1>
      <h4>personal blog</h4>
      <div className="center">
        {posts.map(({ node }) => (
          <PostCard key={node.frontmatter.slug} post={node} />
        ))}
      </div>
    </PostListWrapper>
  )
}

export default PostList
