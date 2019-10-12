import React, { FC } from "react"

import { Layout } from "../components"

interface Props {}

const Error: FC<Props> = () => {
  return (
    <Layout>
      <h1>This is our Error Page</h1>
    </Layout>
  )
}

export default Error
