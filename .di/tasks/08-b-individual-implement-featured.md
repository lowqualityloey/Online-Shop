# Individual task - Implement featured products

Watch the [Getting started building featured products](https://www.loom.com/share/c8493e8a019d4a2b9a41ac5f4ff5cf57) tutorial on Loom.

When a customer opens your site for the first time, they should see a list of featured products. These products should be marked as featured in Stripe, by updating the product metadata.

You will be working with the files inside `src/components/FeaturedProducts`.

First, update three products in Stripe to be featured. To do this, you can add a new name and value in the product metadata.

Next, complete the function inside `getFeaturedProducts.js` to return an array that only includes the products that are featured.

Finally, complete the `FeaturedProducts.jsx` component, to include a list of the featured products. You can re-use the existing `<Product>` component if you like. You will need to design the component by adding CSS into `FeaturedProducts.css`. Use `src/components/Products/Products.jsx` for reference. The component should also include a button, that when clicked, hides the featured products component. This can be done by calling the `setIsFeaturedDisplayed` function, passing it in a boolean false: `setIsFeaturedDisplayed(false)`

## Acceptance criteria

- At least three products have their metadata updated in Stripe, to indicate they are featured products
- When the page loads, the featured products are displayed above the regular products
- The featured product section has custom CSS design
- There should be a close button. When it is clicked the featured products should disappear.
- All the unit tests for this component pass
- Your code has been reviewed by one of your team members before it's merged. The code review is recorded using Loom and attached as a comment in this GitHub issue.
