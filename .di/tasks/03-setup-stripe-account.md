# Setup Stripe Account

Follow the tutorial for setting up a new Stripe account: [Setup a Stripe account](https://www.loom.com/share/0fec179f030f464788784035d37b8f2a)

1. Sign up for an account on [Stripe.com](https://stripe.com/nz). Use your Developers Institute email address.
2. Verify your email address
3. Create a test store, and ensure you can see the API Keys
4. Invite your team to the Stripe account. Verify each person has access before closing this ticket.

## Acceptance criteria

- A Stripe account is created, and every team member can access it with their own email addresses
- The Stripe public key is added to the `REACT_APP_STRIPE_PUBLIC_KEY` variable in the `.env` file
