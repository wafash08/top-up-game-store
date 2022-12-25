import { screen, render } from "@testing-library/react";
import Story from "../story";

// TODO
// Ubah button read story menjadi link dengan href "story"

describe("Story", () => {
  it("should correctly render Story components", () => {
    render(<Story />);

    const imageStory = screen.getByRole("img");
    expect(imageStory).toHaveAttribute(
      "alt",
      "Win the battle. Be the Champion."
    );

    const storyTitle = screen.getByTestId("test-story-title");
    const storyParagraph = screen.getByTestId("test-story-paragraph");

    expect(storyTitle).toBeVisible();
    expect(storyParagraph).toBeVisible();
  });
});
