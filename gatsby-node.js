exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions
  
  if (page.path.match(/^\/account/)) {
    page.matchPath = "/account/*"
    createPage(page)
  }
}