import { render, cleanup, fireEvent, screen } from "@testing-library/react";
import FeaturedProducts from "../FeaturedProducts";

afterEach(cleanup);

test("calls the setSortBy callback function on change", () => {
  const setIsFeaturedDisplayedMock = jest.fn();

  render(
    <FeaturedProducts
      products={[]}
      setIsFeaturedDisplayed={setIsFeaturedDisplayedMock}
    />
  );

  const button = screen.getByTestId("close-button");

  fireEvent.click(button);

  expect(setIsFeaturedDisplayedMock).toHaveBeenCalledTimes(1);
  expect(setIsFeaturedDisplayedMock).toHaveBeenCalledWith(false);
});
