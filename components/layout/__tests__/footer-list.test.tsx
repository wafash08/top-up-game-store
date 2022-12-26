import { screen, render, within } from "@testing-library/react";
import { FooterItem, FooterList, FOOTER_ITEMS } from "../footer";

describe("FooterList", () => {
  it("should render list of five FeaturedGameItem components", () => {
    render(<FooterList category="company" />);

    const footerList = screen.getByRole("list");

    const { getAllByRole } = within(footerList);
    const footerItems = getAllByRole("listitem");

    expect(footerItems).toHaveLength(4);
  });

  it("renders the FooterItem component with correct label", () => {
    FOOTER_ITEMS.map(({ category_item, data }) => {
      return (
        category_item === "category" &&
        data.map(({ href, label }) => {
          render(<FooterItem key={label} href={href} label={label} />);

          expect(screen.getByText(label)).toBeVisible();
        })
      );
    });
  });
});
