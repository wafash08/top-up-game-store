import { screen, render, within } from "@testing-library/react";
import Navbar, { NavItem, NAV_ITEMS } from "../navbar";

jest.mock("next/router", () => require("next-router-mock"));

describe("Navbar", () => {
  it("should have five list items", () => {
    render(<Navbar />);

    const navList = screen.getByRole("list", {
      name: /Navigation Menu/i,
    });

    const { getAllByRole } = within(navList);
    const navItems = getAllByRole("listitem");
    expect(navItems).toHaveLength(5);
  });

  it("renders the NavItem component with correct href and label", () => {
    NAV_ITEMS.map(({ href, label }) => {
      render(<NavItem key={label} href={href} label={label} />);

      const navItem = screen.getByTestId(`next-link-${label}`);

      expect(screen.getByText(label)).toBeVisible();
      expect(navItem).toBeVisible();
      expect(navItem).toHaveAttribute("href", href);
    });
  });
});
