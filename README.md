
<h1 align="center">
 Portfolio Website
</h1>

<p>
  I wanted to make a portfolio that I could use for job applications and displaying some of my projects. At the same time I thought it would be a good opportunity to learn something new. In this instance that new thing was Gatsby and by extension GraphQL.
</p>

<p>
  I am already somewhat familiar with React as I have used it in a couple of projects so far but I wanted it to be relitivelly lightweight and beable to host and update it easily. When thinking about adding new projects to the porfolio I wanted to be able to do that without manually updating the code. Usually this would require a database with a back end but after doing some research I found there were a few different options I could use as a sudo database.
</p>

<p>
  The solution I chose was Airtable for a few reasons:

   - Gatsby already has a plugin to connect with Airtable's API
   - Its a straightforward software to use with nice interface
   - Threre are scripting and automation options.
   - Has a free plan.

   The drawback of using Airtabele are:

   - The best features are under the paid tiers.
   - The data on the site will not be live and will only update when a new build is deployed.


   The drawbacks here don't have a very large effect as this isn't a database that will ever be updated very frequently at all and redeploying for each new record added is not a huge cost
</p>

