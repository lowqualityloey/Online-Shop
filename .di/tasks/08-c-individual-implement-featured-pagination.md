# Individual task - Implement pagination

Watch the [Getting started with the Pagination component](https://www.loom.com/share/66ed1731f641442ebb9f141670671860) tutorial

When a customer opens your site for the first time, they should see a list of featured products. These products should be marked as featured in Stripe, by updating the product metadata.

You will be working with the files inside `src/components/Pagination`.

First, complete the function inside `getPaginatedProducts.js`. This function should return a sliced array, that includes the correct 'page' of items.

For example, if there are 15 products, the maximum amount of products to display is 5, and the current page is 2, the function should return an array with items indexed 5 to 10.

Then complete the `Pagination.jsx` component, to display a list of pagination links. These are provided to you as the `pageList` property. Map through the `pageList` array and display a button for each of the items in the array.

When the button is clicked, call the `setCurrentPage` property, and pass it the `page` that was clicked: `setCurrentPage(item)`, where `item` is one of the items from the array.

## Acceptance criteria

- The shopping cart should only display 6 products at any one time
- A pagination menu should be displayed under the products, that matches the number of available pages
- When one of the links are clicked from the pagination menu, the next page of products are displayed
- All the unit tests for this component pass
- Your code has been reviewed by one of your team members before it's merged. The code review is recorded using Loom and attached as a comment in this GitHub issue.
