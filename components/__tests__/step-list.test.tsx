import { screen, render, within } from "@testing-library/react";
import StepList, { STEP_ITEMS } from "@/components/step-list";

describe("StepList", () => {
  it("should render list of three step item components", () => {
    render(<StepList />);

    const stepList = screen.getByRole("list", {
      name: /Langkah-langkah untuk melakukan top up/i,
    });

    const { getAllByRole } = within(stepList);
    const stepItems = getAllByRole("listitem");
    expect(stepItems).toHaveLength(3);
  });

  it("renders the step item component with correct title, description, and icon element", () => {
    const { container } = render(<StepList />);

    const stepList = screen.getByRole("list", {
      name: /Langkah-langkah untuk melakukan top up/i,
    });

    const { getAllByRole } = within(stepList);
    const stepItems = getAllByRole("listitem");
    expect(stepItems).toHaveLength(3);

    stepItems.forEach((item, idx) => {
      const { getByText } = within(item);

      const { description, title, icon } = STEP_ITEMS[idx];

      expect(getByText(title)).toBeInTheDocument();
      expect(getByText(description)).toBeInTheDocument();
      expect(container.querySelector("svg")).toBeInTheDocument();
    });
  });
});
