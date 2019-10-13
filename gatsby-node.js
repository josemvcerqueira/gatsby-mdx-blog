exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const {
    data: {
      allMdx: { edges: posts },
    },
  } = await graphql(`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  posts.forEach(({ node: { frontmatter: { slug } } }) => {
    createPage({
      path: slug,
      component: require.resolve("./src/templates/post-template.tsx"),
      context: {
        slug,
      },
    })
  })
}
