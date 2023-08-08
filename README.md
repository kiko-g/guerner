# Guerner & Irmãos S.A.

Website for [**Guerner & Irmãos S.A**](https://guernerpt.vercel.app).

![Vercel](https://vercelbadge.vercel.app/api/kiko-g/guerner)

## Products

The product line is split into 2 categories: **agricultural** and **construction**. However, all products are mapped in the same manner, through the use of **markdown files with typed frontmatter**. To change the content of the products, make sure you have the correct permissions to do so and head over to the [src/markdown/agriculture](src/markdown/agriculture) or the [src/markdown/construction](src/markdown/construction). Inside you will see files for the available languages (english and portuguese as of August 8th, 2023). Each file contains the following segregated information:

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
