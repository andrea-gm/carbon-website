module.exports = {
  siteMetadata: {
    title: 'Carbon Design System',
    description:
      'Carbon is the design system for IBM web and product. It is a series of individual styles, components, and guidelines used for creating unified UI.',
    keywords:
      'IBM, design, system, Carbon, design system, Bluemix, styleguide, style, guide, components, library, pattern, kit, component, cloud',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        mdxExtensions: ['.mdx'],
        repository: {
          baseUrl: 'https://github.com/carbon-design-system/carbon-www',
          subDirectory: '',
        },
      },
    },
  ],
};