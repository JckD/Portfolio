/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})



module.exports = {
  
  /* Your site config here */

  plugins: [
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_API, // may instead specify via env, see below
        concurrency: 5, // default, see using markdown and attachments for more information
        tables: [
          {
            baseId: process.env.AIRTABLE_ID,
            tableName: 'projects',
            //tableView: `Grid View`, // optional
            mapping: { "image": "fileNode", "icons" : "fileNode" }, // optional, e.g. "text/markdown", "fileNode"
            //tableLinks: [`CASE`, `SENSITIVE`, `COLUMN`, `NAMES`], // optional, for deep linking to records across tables.
          },
         
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
          fonts: [
              `poppins:600`       
          ], display: 'swap'       
      }
    },
    {
      resolve : 'gh-pages',
      options: {
        pathPrefix: "/Portfolio",
      }
    }
   
  ],
}
