# Deploying to Netlify

Follow these steps to deploy your application to Netlify:

1. Go to [Netlify](https://app.netlify.com/)
2. Sign in or create an account
3. Click on "Add new site" > "Import an existing project"
4. Choose "Deploy manually" option
5. Drag and drop the `dist/public` folder from your local machine to the designated area
6. Wait for the upload to complete
7. Your site will be deployed with a random subdomain (e.g., random-name.netlify.app)
8. You can customize the subdomain in the site settings

## Important Configuration

If you encounter a "Page not found" error, make sure to configure Netlify redirects:

1. Go to Site settings > Build & deploy > Continuous deployment
2. Under "Build settings", make sure the publish directory is set to `dist/public`
3. Go to Site settings > Build & deploy > Post processing > Asset optimization
4. Disable asset optimization if you encounter issues
5. Go to Site settings > Build & deploy > Post processing > Redirects
6. Add a redirect rule: from `/*` to `/index.html` with status code `200`

## Alternative: Connect to GitHub Repository

For continuous deployment:

1. Go to [Netlify](https://app.netlify.com/)
2. Click on "Add new site" > "Import an existing project"
3. Choose "GitHub" as your Git provider
4. Authenticate with GitHub and select your repository: `Ripper25/sonntec`
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

This will set up continuous deployment from your GitHub repository.
