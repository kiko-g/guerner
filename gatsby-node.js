const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  // Add slug field to MarkdownRemark nodes
  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent)
    const slug = node.frontmatter.slug // Use the slug field from frontmatter
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
    createNodeField({
      node,
      name: 'language',
      value: fileNode.name.split('.')[1], // Extract the language from the filename
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Query MarkdownRemark nodes for products/agriculture and products/construction
  const result = await graphql(`
    query {
      agriculture: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/agriculture/" } }) {
        nodes {
          id
          frontmatter {
            slug
            lang
          }
        }
      }
      construction: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/construction/" } }) {
        nodes {
          id
          frontmatter {
            slug
            lang
          }
        }
      }
      others: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/others/" } }) {
        nodes {
          id
          frontmatter {
            slug
            lang
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw result.errors
  }

  // Create pages for each MarkdownRemark node in agriculture category
  const agricultureTemplatePath = path.resolve('./src/template/product.tsx')
  result.data.agriculture.nodes
    .sort((a, b) => (a.frontmatter.lang < b.frontmatter.lang ? 1 : -1))
    .forEach(node => {
      const { id, frontmatter } = node

      createPage({
        path: `/products/agriculture/${frontmatter.lang}-${frontmatter.slug}`,
        component: agricultureTemplatePath,
        context: {
          id,
        },
      })
    })

  // Create pages for each MarkdownRemark node in construction category
  const constructionTemplatePath = path.resolve('./src/template/product.tsx')
  result.data.construction.nodes
    .sort((a, b) => (a.frontmatter.lang < b.frontmatter.lang ? 1 : -1))
    .forEach(node => {
      const { id, frontmatter } = node

      createPage({
        path: `/products/construction/${frontmatter.lang}-${frontmatter.slug}`,
        component: constructionTemplatePath,
        context: {
          id,
        },
      })
    })

  // Create pages for each MarkdownRemark node in others category
  const othersTemplatePath = path.resolve('./src/template/product.tsx')
  result.data.others.nodes
    .sort((a, b) => (a.frontmatter.lang < b.frontmatter.lang ? 1 : -1))
    .forEach(node => {
      const { id, frontmatter } = node

      createPage({
        path: `/products/others/${frontmatter.lang}-${frontmatter.slug}`,
        component: othersTemplatePath,
        context: {
          id,
        },
      })
    })
}
