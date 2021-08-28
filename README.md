
<h1 align="center">
<a href="https://portfolio.jdoyle.ie"> Portfolio Website</a>
</h1>

<p>
  I wanted to make a portfolio that I could use for job applications and displaying some of my projects. At the same time I thought it would be a good opportunity to learn something new. In this instance that new thing was Gatsby and by extension GraphQL.
</p>

<h2>Tech</h2>

<p>
  I am already somewhat familiar with React as I have used it in a couple of projects so far but I wanted it to be relitivelly lightweight and beable to host and update it easily. When thinking about adding new projects to the porfolio I wanted to be able to do that without manually updating the code. Usually this would require a database with a back end but after doing some research I found there were a few different options I could use as a sudo database.
</p>

<h3>Backend</h3>
<p>
  The data solution I chose was <b>Airtable</b> for a few reasons:

   - Gatsby already has a plugin to connect with Airtable's API
   - Its a straightforward software to use with nice interface
   - Threre are scripting and automation options.
   - Has a free plan.

   The drawback of using Airtabele are:

   - The best features are under the paid tiers.
   - The data on the site will not be live and will only update when a new build is deployed.


   The drawbacks here don't have a very large effect as this isn't a database that will ever be updated very frequently at all and redeploying for each new record added is not a huge cost meaning the semi-static nature of it suits the application.

   Here is what the data looks like in Airtable:
   <img src="./src/images/readmeImg/reacords.png">

</p>

<h3>Deployment</h3>
<p>
  These days there's quite a few different options for deployment depending on what you're looking for. I wanted to try something I hadn't before an <b>Netifly</b> boasted a quick and painless deployment process with support for Gatsby projects out of the box with very little extra configuration so I decided to try it.

  It was relatively quick and easy to set up by linking the github repo of the site it began the build process. After a few deployment hurdles like environment variables the site was live.

  One feature of Netlify I am grateful for are Build Hooks. These all you to create a new deployment from a POST request this gives more flexibily for Continuous Deployment and Intergration.

  I was able to make the deployment proccess smoother by using this build hook with Airtables scripting API 

   <img src="./src/images/readmeImg/reacords.png">


  Literally one line of code just to make the post request to tell Netlify to make a new build. 

  This script is run just by clicking a button in the Airtable UI making it easier to update the site if any new rows are added. It could automatically run the script when a record is added to the table but that is only available to the paid tiers.

  Unfortunately as of Sept 2021 scripting will only be availble for higher paid tiers so I will be left to clicking the redeploy button in Netlify's control panel. It nothing major, just more clicks, so I may look into  another "sudo databse" in the future.
</p>

