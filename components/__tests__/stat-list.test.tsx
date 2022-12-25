import { screen, render, within } from "@testing-library/react";
import StatItem from "../stat-item";
import StatList, { STAT_ITEMS } from "../stat-list";

describe("StatList", () => {
  it("should render list of four StatItem components", () => {
    render(<StatList />);

    const statList = screen.getByRole("list");

    const { getAllByRole } = within(statList);
    const statItems = getAllByRole("listitem");
    expect(statItems).toHaveLength(4);
  });

  it("renders the StatItem component and its content should be visible", () => {
    STAT_ITEMS.map(({ description, numbers }) => {
      render(
        <StatItem
          key={description}
          description={description}
          numbers={numbers}
        />
      );

      expect(screen.getByText(numbers)).toBeVisible();
      expect(screen.getByText(description)).toBeVisible();
    });
  });
});
