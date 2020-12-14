# Individual task - Implement search

Watch the [Getting started on the product search component](https://www.loom.com/share/b522853c33764330a63fba34b5151eee) tutorial.

You will be working with the files inside `src/components/Search/Search`.

Complete the `Search.jsx` component to include a text input, where users can enter search terms. You will need to design the component by adding CSS into `Search.css`. Whenever the value of the text input changes, you will need to call the `setSearchPrefix` and pass in the value.

You will also need to complete the `getProductsBySearch` function. This function has two parameters, a list of products and the search term typed into the box. You need to filter the `products` array, to only return products where the name includes the search term.

## Acceptance criteria

- A text input is added to the page, when a customer enters two or more letters, the product list only displays products whose name includes the characters entered in the search input
- The text input is displayed nicely on the page, with custom CSS
- If the text input is cleared, all the products are displayed
- All the unit tests for this component pass
- Your code has been reviewed by one of your team members before it's merged. The code review is recorded using Loom and attached as a comment in this GitHub issue.
