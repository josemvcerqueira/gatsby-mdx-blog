import React, { FC } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"

interface Props {}

const Home: FC<Props> = () => (
  <Layout>
    <div>
      <Link to="/post">go to posts</Link>
    </div>
    i am andrea
  </Layout>
)

export default Home
