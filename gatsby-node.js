exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: `/pt`,
    toPath: `/`,
  })

  createRedirect({
    fromPath: `/pt/*`,
    toPath: `/*`,
  })
}
