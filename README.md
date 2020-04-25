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

-   The using of aa specific 'Custom Type' to create a section-specific template of sorts

-   Creating new 'Content' will, depending on the page, require some inital page data (uid, title etc) but then the creator will have the option to add any custom slices available to that custom type

-   for example, a custom type for a page may include banners, code blocks, images etc, but the content creator will need control over when to add thesee in

-   On the code side, a 'SliceZone' component will take the page - as an array of types - and render the blocks one by one depending on their type

## Custom Types

-   Kind of like the Schema for a page

-   Custom types allow you to define and configure fields for your content

-   A Custom Type would be pages, posts, blogs, authors, recipes, events, products etc

-   Can also apply to navigations (main, side, footer, modal etc) but also more static pages too (FAQ, site map, T&Cs)

-   for example:

    -   a page can be made up of various sections (title, banner, description, call to actions etc)
    -   leaving it at this would make the Custom Type "non-repeatable" meaning that it would have the same static data fed to each page
    -   this is useful for static pages like T&Cs, FAQ etc but less good for pages with dynamic content
    -   enter Slice Zones (and Slice Zone Components):
        -   within the slice zone, users (editors / moderators etc) can combine fields from a huge selection to create slice zones
        -   these can be used across multiple Custom Types (like call-to-action, price blocks)
    -   when a user wants to create a new 'blog', 'service page', 'product page' or whatever, they can choose to include these 'slices' in the 'Content' section when building a page
