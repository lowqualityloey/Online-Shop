# Set up Stripe API server

Watch the tutorial on [Setting up a Stripe API server on Begin.com](https://www.loom.com/share/42028701a940476d953dd210a341ca9c)

1. Create an account at [Begin.com](http://begin.com/), using GitHub to authenticate
2. Go to the [Begin with Stripe](https://github.com/lwcooper/begin-with-stripe) GitHub Repository. It is a template for setting up an API that will talk to Stripe.
3. Click the "Deploy to Begin" button, and follow the prompts to set the app up in your account.
4. Once your app is deployed, add the following environment variables to the Staging application:
   - `REDIRECT_TO` set to `http://localhost:3000`
   - `STRIPE_SECRET_KEY` set to the secret key provided by Stripe. **Important:** treat this key like a password to your Facebook account. **DO NOT SHARE IT IN SLACK, OR PUT IT IN GITHUB.**. It's called a secret on purpose!
5. Verify your app works, by clicking on the Staging link, and adding `/products` to the end. You should see a list of your products from Stripe.
6. Take your app URL, and add it to the `.env` file in this repository, under the `REACT_APP_API_URL` variable.

## Acceptance criteria

- The _Begin with Stripe_ application is deployed and accessible with a URL
- The following environment variables for staging are configured in the Begin app:
  - `REDIRECT_TO`
  - `STRIPE_SECRET_KEY`
- The staging URL from the Begin application is added to the `REACT_APP_API_URL` variable in the `.env` file
