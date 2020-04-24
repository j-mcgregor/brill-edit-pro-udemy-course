# Gatsby Typescript Jest Sass and Bootstrap starter

_Setup_

```bash
yarn # to install dependencies

yarn start # runs gatsby develop
```

_Test_

```bash
yarn test
```

_build_

```bash
yarn build

yarn serve
```

# Prismic notes

## Content

## Custom Types

-   key parts of the site

    -   homepage
    -   navigation
    -   etc

-   key aspects of the site can be split up into tabs
-   eg
    -   Blog post
    -   Metadata
    -   SEO & Social
-   think of a site like a rubix cube

    -   each color is made up of different parts (tabs) and each tab is kind of its own rubix cude

-   appear pluralised in the graphiql browser

    -   allHomepages
    -   allNavigations
    -   allPages

-   very much like arranging divs into JSON sections for API

    -   eg Page
        -   can have title, content, rich text, image etc

-   slices exist within pages for examples such as cards, call to actions etc

-   big difference between this and Netlify is that there's no template??
