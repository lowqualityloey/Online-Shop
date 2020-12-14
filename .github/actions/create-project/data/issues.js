const issues = [
  {
    title: "Demo",
    body: `Prepare a demonstration of the application you have just built.

This is a common formality in product teams, where they will demo their working software to the Product Manager in order to get feedback.

This will be the intended audience of your demo. There is no need to get into how the code works, focus more on how it works from a customer perspective. Customers in this case include people who create the products in Stripe, as well as customers who buy things from the shop.

Create a Loom account, and record a demo of your app using Loom.

Normally you would demo to an audience, so for this demo you will be posting the final video into the #events channel in Slack. This way other students and instructors can view your work.

## Acceptance criteria

- [ ] Pre-recorded demo is created in Loom, and link is included in this ticket
- [ ] The demo is using the deployed website, NOT a local development server
- [ ] Introduce the app and what it does
- [ ] Showcase all the features of the app:
  - Filter by dropdown
  - Sort by dropdown
  - Search bar
  - Pagination
  - Featured images
- [ ] Demo shows adding a new product in Stripe, and it showing up on the website
- [ ] Post your demo video in the #events channel in Slack.`,
    labels: ["group"],
  },
  {
    title: "Create a README",
    body: `All the projects you work on should have some form of documentation. This helps your team understand what the application is, how it works, and how they can contribute.

Replace the existing \`README.md\` file with your own documentation.

Write Markdown to format your text nicely. Read [Mastering Markdown](https://guides.github.com/features/mastering-markdown/) to see how you can markup your plain text using the markdown syntax.

Ensure your Readme covers all the items in the acceptance criteria.

## Acceptance criteria

- [ ] Overview of what the product is, with a screenshot of how it looks.
- [ ] Lists the dependencies of the app, such as Stripe and Begin
- [ ] Includes instructions for how to use the app for development:
  - What needs to be installed on the developer's computer to run this application
  - What terminal commands need to be run to get the app up and running
- [ ] Includes links to the deployed applications:
  - Begin
  - Netlify`,
    labels: ["group"],
  },
  {
    title: "Deploy Application to Netlify",
    body: `Watch the [Deploying a React App on Netlify](https://www.loom.com/share/5e5dc383d61647c1a2b5a4661e80fcd9) tutorial

## Acceptance criteria

- [ ] Application is deployed to Netlify`,
    labels: ["group"],
  },
  {
    title: "Implement Pagination",
    body: `Watch the [Getting started with the Pagination component](https://www.loom.com/share/66ed1731f641442ebb9f141670671860) tutorial

When a customer opens your site for the first time, they should see a list of featured products. These products should be marked as featured in Stripe, by updating the product metadata.

You will be working with the files inside \`src/components/Pagination\`.

First, complete the function inside \`getPaginatedProducts.js\`. This function should return a sliced array, that includes the correct 'page' of items.

For example, if there are 15 products, the maximum amount of products to display is 5, and the current page is 2, the function should return an array with items indexed 5 to 10.

Then complete the \`Pagination.jsx\` component, to display a list of pagination links. These are provided to you as the \`pageList\` property. Map through the \`pageList\` array and display a button for each of the items in the array.

When the button is clicked, call the \`setCurrentPage\` property, and pass it the \`page\` that was clicked: \`setCurrentPage(item)\`, where \`item\` is one of the items from the array.

## Acceptance criteria

- [ ] The shopping cart should only display 6 products at any one time
- [ ] A pagination menu should be displayed under the products, that matches the number of available pages
- [ ] When one of the links are clicked from the pagination menu, the next page of products are displayed
- [ ] All the unit tests for this component pass
- [ ] Your code has been reviewed by one of your team members before it's merged. The code review is recorded using Loom and attached as a comment in this GitHub issue.`,
    labels: ["individual"],
  },
  {
    title: "Implement Featured Products",
    body: `Watch the [Getting started building featured products](https://www.loom.com/share/c8493e8a019d4a2b9a41ac5f4ff5cf57) tutorial on Loom.

When a customer opens your site for the first time, they should see a list of featured products. These products should be marked as featured in Stripe, by updating the product metadata.

You will be working with the files inside \`src/components/FeaturedProducts\`.

First, update three products in Stripe to be featured. To do this, you can add a new name and value in the product metadata.

Next, complete the function inside \`getFeaturedProducts.js\` to return an array that only includes the products that are featured.

Finally, complete the \`FeaturedProducts.jsx\` component, to include a list of the featured products. You can re-use the existing \`<Product>\` component if you like. You will need to design the component by adding CSS into \`FeaturedProducts.css\`. Use \`src/components/Products/Products.jsx\` for reference. The component should also include a button, that when clicked, hides the featured products component. This can be done by calling the \`setIsFeaturedDisplayed\` function, passing it in a boolean false: \`setIsFeaturedDisplayed(false)\`

## Acceptance criteria

- [ ] At least three products have their metadata updated in Stripe, to indicate they are featured products
- [ ] When the page loads, the featured products are displayed above the regular products
- [ ] The featured product section has custom CSS design
- [ ] There should be a close button. When it is clicked the featured products should disappear.
- [ ] All the unit tests for this component pass
- [ ] Your code has been reviewed by one of your team members before it's merged. The code review is recorded using Loom and attached as a comment in this GitHub issue.`,
    labels: ["individual"],
  },
  {
    title: "Implement Search",
    body: `Watch the [Getting started on the product search component](https://www.loom.com/share/b522853c33764330a63fba34b5151eee) tutorial.

You will be working with the files inside \`src/components/Search/Search\`.

Complete the \`Search.jsx\` component to include a text input, where users can enter search terms. You will need to design the component by adding CSS into \`Search.css\`. Whenever the value of the text input changes, you will need to call the \`setSearchPrefix\` and pass in the value.

You will also need to complete the \`getProductsBySearch\` function. This function has two parameters, a list of products and the search term typed into the box. You need to filter the \`products\` array, to only return products where the name includes the search term.

## Acceptance criteria

- [ ] A text input is added to the page, when a customer enters two or more letters, the product list only displays products whose name includes the characters entered in the search input
- [ ] The text input is displayed nicely on the page, with custom CSS
- [ ] If the text input is cleared, all the products are displayed
- [ ] All the unit tests for this component pass
- [ ] Your code has been reviewed by one of your team members before it's merged. The code review is recorded using Loom and attached as a comment in this GitHub issue.`,
    labels: ["individual"],
  },
  {
    title: "Fetch products and prices from API",
    body: `1. Open \`./src/services/getProducts\`
2. Inside the \`getProducts\` function, make fetch requests to your API server to get the products and prices for your online shop

## Acceptance criteria

- [ ] The products and prices are loaded from the Stripe API, and displayed on your web page
- [ ] The URL is read from the \`REACT_APP_API_URL\` environment variable`,
    labels: ["group"],
  },
  {
    title: "Set up Stripe API server",
    body: `Watch the tutorial on [Setting up a Stripe API server on Begin.com](https://www.loom.com/share/42028701a940476d953dd210a341ca9c)

1. Create an account at [Begin.com](http://begin.com/), using GitHub to authenticate
2. Go to the [Begin with Stripe](https://github.com/lwcooper/begin-with-stripe) GitHub Repository. It is a template for setting up an API that will talk to Stripe.
3. Click the "Deploy to Begin" button, and follow the prompts to set the app up in your account.
4. Once your app is deployed, add the following environment variables to the Staging application:
    - \`REDIRECT_TO\` set to \`http://localhost:3000\`
    - \`STRIPE_SECRET_KEY\` set to the secret key provided by Stripe. **Important:** treat this key like a password to your Facebook account. **DO NOT SHARE IT IN SLACK, OR PUT IT IN GITHUB.**. It's called a secret on purpose!
5. Verify your app works, by clicking on the Staging link, and adding \`/products\` to the end. You should see a list of your products from Stripe.
6. Take your app URL, and add it to the \`.env\` file in this repository, under the \`REACT_APP_API_URL\` variable.

## Acceptance criteria

- [ ] The _Begin with Stripe_ application is deployed and accessible with a URL
- [ ] The following environment variables for staging are configured in the Begin app:
  - \`REDIRECT_TO\` is set to \`http://localhost:3000\`
  - \`STRIPE_SECRET_KEY\`
- [ ] The staging URL from the Begin application is added to the \`REACT_APP_API_URL\` variable in the \`.env\` file`,
    labels: ["group"],
  },
  {
    title: "Create products in Stripe",
    body: `Watch the [Adding products in Stripe](https://www.loom.com/share/16e40fb713554338adeedc72cc3eaefb) tutorial

## Acceptance criteria

- [ ] At least 20 products are created in Stripe
- [ ] Each product has the category set in the \`metadata\`
- [ ] Each product has a one time price associated with it`,
    labels: ["group"],
  },
  {
    title: "Setup Stripe Account",
    body: `Follow the tutorial for setting up a new Stripe account: [Setup a Stripe account](https://www.loom.com/share/0fec179f030f464788784035d37b8f2a)

1. Sign up for an account on [Stripe.com](https://stripe.com/nz). Use your Developers Institute email address.
2. Verify your email address
3. Create a test store, and ensure you can see the API Keys
4. Invite your team to the Stripe account. Verify each person has access before closing this ticket.

## Acceptance criteria

- [ ] A Stripe account is created, and every team member can access it with their own email addresses
- [ ] The Stripe public key is added to the \`REACT_APP_STRIPE_PUBLIC_KEY\` variable in the \`.env\` file`,
    labels: ["group"],
  },
  {
    title: "Shop design and CSS",
    body: `Implement a design for your shop using CSS. You should add your styles into \`src/App.css\`

The shop has a list of example products which you can use until your Stripe account is working correctly.

## Acceptance criteria

- [ ] The shop has a unique design
- [ ] The design is responsive and works across all screen resolutions
- [ ] CSS Grid is used for the page layout`,
    labels: ["group"],
  },
  {
    title: "Group planning",
    body: `## Understanding the project

As a group, read through each of the GitHub issues in the backlog. For every ticket, each person in the group should acknowledge they understand what is being asked of them. It is the team's responsibility to ensure each person understands every ticket.

Feel free to pull in an instructor if the requirements are not clear. It's vital that you understand what is being asked of you.

In particular, identify if any tickets depend on each other. For example, you need to create a Stripe account before you can add products to the Stripe account.

## Assinging issues

### How to assign group issues

Now you know what the project is, and what items you will be selling, it's time to get started.

The backlog is in priority order. You should complete the issues at the top of the column before starting any more issues. Never start a new issue before completing the previous issue. That means you should **never** have more than one issue assigned to you.

When you work as a team, only assign enough issues so that each team member has something to work on. Don't assign all the issues upfront. When you complete an issue, you can come to the backlog and pick up the next issue.

For issues that have the \`group\` label, you can choose to assign issues as individuals, in smaller groups or as the entire group. For example, it's ok if the entire group works on each ticket one at a time together.

In summary:

- You should only ever be assigned to one issue at a time
- Finish an issue before starting a new issue
- Start with the issues at the top of the column first. Do not re-prioritise them.
- You can split up the \`group\` issues however you want

### How to assign individual issues

There are three issues with the label \`individual\`. These issues are to be completed individually. Each team member should have one of these issues assigned to them.

If your team only has two members, then just choose one of the issues each. You can leave the third one not implemented, or come back to it after all the other issues are completed.

As a group, decide who will work on what issue.

### Assign the issues

- As a team, decide if you are going to work together or individually on \`group\` issues.
- For each team member, assign them to a \`group\` issue, and drag it into the* In Progress* column. Stop when each team member has an issue that they are working on.
- Assign a team member to each of the individual issues. These do not need to be dragged to _In Progress_ until all the issues above are completed

## Acceptance criteria

- [ ] The Team has agreed on what products the shop will sell
- [ ] Each person in the team has one of the individual issues assigned to them
- [ ] Each team member has only one issue _In Progress_
- [ ] None of the \`individual\` issues are _In Progress_`,
    labels: ["group"],
  },
  {
    title: "Decide what you will sell",
    body: `As a group, run a brainstorm session on what you will sell. Run a meeting in the following format:

Nominate one person to facilitate the session. They should create a Miro Board and share the link to the team before the meeting

## Brainstorm ideas (5 mins)

The facilitator should set a 5-minute timer, and instruct the team to start adding their ideas to the Miro board as post-its.

There is no limit to the number of ideas you can add.

## Vote (2 mins)

Each person gets 2 votes each. To vote, add a thumbs-up emoji to the post-it you want to vote for. You are allowed to use both of your votes on one idea.

## Choose an idea

The idea with the highest vote wins. If two ideas are equal, have a conversation as a team to decide on which one you will choose.

## Document the outcome

Leave a comment on this GitHub issue with screenshots of your Miro board, and the chosen idea.

## Acceptance criteria

- [ ] The Team has agreed on what products the shop will sell
- [ ] The GitHub issue includes screenshots of the brainstorm session`,
    labels: ["group"],
  },
  {
    title: "Team formation",
    body: `You will be working as part of a team for the rest of the week. It's important to discuss and agree on how you will work together. Part of this team formation exercise will include applying knowledge from the Treaty of Waitangi.

The [Principles of the Treaty of Waitangi – ngā mātāpono o te tiriti](https://teara.govt.nz/en/principles-of-the-treaty-of-waitangi-nga-matapono-o-te-tiriti) should be applied to how your team works together for this project.

### Participation

Acknowledges sovereignty/governance. Ensure there is equal participation for each member of your team. Ensure everyone has input into decisions that directly affect them. Decide how you will ensure that each team member has equal participation. For example, a working agreement that ensures all code is reviewed by all team members before being merged.

### Protection

Acknowledges the protection of rights, benefits and, possessions. Each of your team members should have their Tikanga (culture and protocols) and Taonga (treasures) such as Te Reo Māori respected and given equal footing to the Tikanga and Taonga of other cultures. For example, you might run a morning prayer or Karakia, a standup, or other Tikanga.

### Partnership

Acknowledges sovereignty/governance and working together with the same rights and benefits as subjects of the Crown. This can be applied to your team by working together in partnership. Each team member should have a say in how the team performs. If you are making a decision that affects other people, they should have a say in the decision. For example, you might have a daily planning meeting where you divide up the work, ensuring that each team member has input into the tasks they will be working on.

Run the following workshop to decide on your team working agreements:

## Team Formation Workshop

This workshop is intended to collectively articulate the kind of behaviour that your team can expect from each other. You will be establishing your own team culture that will sit within the larger cohort. Jump on a video call or meet in person, and spend half an hour or so working through the following workshop

### Brainstorm (10mins)

Answer the following question: "What are the rules that we want the whole to abide by? And do you as an individual prefer to work a certain way?". Don't forget to apply the principals above.

Each team member should write down their responses on a sticky note or paper. You can write down multiple responses. You might want to use an online tool such as Google Docs or Miro to collaborate on this part.

Responses might be along the lines of "Be on time", "Listen to each other"

### Group similar ideas

Once you have completed your responses, group similar responses together

### Talk amongst yourselves (10mins)

Look at the groupings to see where there's already a broad agreement, quickly confirm these points. Now discuss where there are contentious or confusing (or contradictory) ideas. Don't gloss over this part. Embrace friction and a bit of healthy debate.

### Bring it to life (5mins)

Spend the final 5 mins of the workshop to discuss how you'll bring this to life. What actions will this take in reality? How will you accommodate the different workstyle preferences you've just uncovered? Do you have to re-schedule the daily stand-up to a more suitable time? etc.

### Document the outcome

Write your agreed actions down in \`WORKING_AGREEMENTS.md\`

## Acceptance Criteria

\`WORKING_AGREEMENTS.md\` file exists in the project, and includes the following:

- [ ] List of at least 5 actions
- [ ] Actions reflect the principals from the Treaty of Waitangi, such as partnership, participation, and protection`,
    labels: ["group"],
  },
];

module.exports = {
  issues,
};
