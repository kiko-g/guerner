exports.onCreatePage = ({ page, actions }) => {
  const { createRedirect } = actions

  if (page.path === '/') {
    createRedirect({
      fromPath: '/',
      toPath: '/pt',
      isPermanent: true,
      redirectInBrowser: true,
    })
  }
}
