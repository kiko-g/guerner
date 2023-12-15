# Guerner & Irmãos S.A.

![Vercel](https://vercelbadge.vercel.app/api/kiko-g/guerner)

## About

Website repository for [Guerner & Irmãos S.A.](https://guerner.vercel.app), a company focused on distributing High-performance technical textiles and fabrics for agriculture and construction, based in Gaia, Porto, Portugal. Built with Gatsby 5 employing React with Typescript.

## Products

The product line is split into 2 main categories: **agricultural** and **construction**. However, all products are mapped in the same manner, through the use of **markdown files with typed frontmatter**. To change the content of the products, make sure you have the correct permissions to do so and head over to the [src/markdown/agriculture](src/markdown/agriculture) or the [src/markdown/construction](src/markdown/construction). Inside you will see files for the available languages (english and portuguese as of August 8th, 2023). Each file contains the following segregated information:

- **lang**: the language of the product
- **pinned**: whether the product should be pinned in the product list
- **slug**: the slug of the product
- **name**: the name of the product
- **sector**: the sector of the product
- **sample**: the sample ID of the product
- **description**: the description of the product
- **color**: the color of the product
- **category**: the category of the product
- **featuredImage**: relative path to the featured image of the product
- **characteristics**: array of characteristics of the product
- **dimensions**: array of arrays displaying the available dimensions of the product
- **customizable**: whether the product is customizable
- **customizableText**: the text to display if the product is customizable
- **benefits**: array of benefits of the product
- **specifications**: the specifications of the product
- **comp**: array of facts related to the composition and nature of the product

## Using Analytics

The deployment of the website is done on Vercel, which provides the service of a maximum of one website with free analytics per team in account. These are important for the company to understand the traffic and the usage of the website. To use the analytics, make sure you have the correct permissions to do so and head over to the [Vercel Analytics Dashboard for Guener](https://vercel.com/kiko-g-s-team/guerner/analytics). Inside you will see the website and the analytics tab. There you can see the analytics of the website. You can also find a link to this dashboard in the settings popover on the header of the website.

## Developer Support

If you are a content manager of this website and need developer support, you can [open issues on GitHub](https://github.com/kiko-g/guerner/issues) where the repository of the website is hosted. You can also find a link to this resource in the settings popover on the header of the website.

For more information on development and technical matters read the [development notes](dev.md) file.
