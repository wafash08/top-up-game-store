import { screen, render, within } from "@testing-library/react";
import FeaturedGameItem from "../featured-game-item";
import FeaturedGameList, { FEATURED_GAMES } from "../featured-game-list";

describe("FeaturedGameList", () => {
  it("should render list of five FeaturedGameItem components", () => {
    render(<FeaturedGameList />);

    const featuredGameList = screen.getByRole("list", {
      name: /Featured Games/i,
    });

    const { getAllByRole } = within(featuredGameList);
    const featuredGameItems = getAllByRole("listitem");
    expect(featuredGameItems).toHaveLength(5);
  });

  it("renders the FeaturedGameItem component with correct name, category, and src image", () => {
    FEATURED_GAMES.map(({ category, name, thumbnail }) => {
      render(
        <FeaturedGameItem
          key={name}
          name={name}
          category={category}
          thumbnail={thumbnail}
        />
      );

      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });
});
