import postcssPresetEnv from 'postcss-preset-env'

export default {
    siteMetadata: {
        title: 'Gatsby Default Starter',
        description:
            'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
        author: '@gatsbyjs',
    },
    plugins: [
        'gatsby-plugin-styled-components',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images`,
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'gatsby-starter-default',
                short_name: 'starter',
                start_url: '/',
                background_color: '#663399',
                theme_color: '#663399',
                display: 'minimal-ui',
                icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
            },
        },
        {
            resolve: 'gatsby-plugin-sass',
            options: {
                postCssPlugins: [
                    postcssPresetEnv({
                        browsers: '> 0.5%, last 2 versions, ie 11',
                    }),
                ],
            },
        },
        {
            resolve: 'gatsby-source-prismic-graphql',
            options: {
                repositoryName: 'bep-landing-jjwm', // required
                defaultLang: 'en-us', // optional, but recommended
                path: '/preview', // optional, default: /preview
                previews: true, // optional, default: false,
                pages: [
                    {
                        type: 'Page', // Prissmic custom types, capitalised
                        match: '/:uid', // the slug of the custom type
                        path: '/',
                        component: require.resolve('./src/templates/Page.tsx'),
                    },
                ],
            },
        },
        'gatsby-plugin-typescript',
        {
            resolve: 'gatsby-plugin-typegen',
            options: {
                emitSchema: {
                    'src/__generated__/gatsby-introspection.json': true,
                },
                emitPluginDocuments: {
                    'src/__generated__/gatsby-plugin-documents.graphql': true,
                },
            },
        },

        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // 'gatsby-plugin-offline',
    ],
}
