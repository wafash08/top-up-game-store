import { render } from "@testing-library/react";
import Button from "../button";

describe("Button", () => {
  it("renders correctly", () => {
    const { container } = render(<Button>test button</Button>);

    expect(container.firstChild).toMatchInlineSnapshot(`
        <button
          class="bg-[#4D17E2] text-white inline-block rounded-full py-3 px-8 text-center font-poppins text-lg font-medium"
          type="button"
        >
          test button
        </button>
      `);
  });

  it("renders with correct colors", () => {
    const { container } = render(<Button color="gray">test button</Button>);

    expect(container.firstChild).toHaveClass("bg-[#E7EAF5]", "text-brand-blue");
  });

  it("renders with correct width", () => {
    const { container } = render(<Button fullwidth>test button</Button>);

    expect(container.firstChild).toHaveClass("w-full");
  });
});
