import { screen, render, within } from "@testing-library/react";
import StepList from "@/components/step-list";

it("should render list of three step item components", () => {
  render(<StepList />);

  const stepList = screen.getByRole("list", {
    name: /Langkah-langkah untuk melakukan top up/i,
  });

  const { getAllByRole } = within(stepList);
  const stepItems = getAllByRole("listitem");
  expect(stepItems).toHaveLength(3);
});
