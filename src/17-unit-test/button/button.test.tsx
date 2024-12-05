import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./button";

describe("Button", () => {
  it("button render with correct text", () => {
    render(<Button>Click Me!!!</Button>);
    expect(screen.getByText("Click Me!!!")).toBeInTheDocument();
  });

  it("button call onClick when clicked", async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click Me!!!</Button>);

    await userEvent.click(screen.getByTestId("bsc-button"));
    expect(handleClick).toBeCalledTimes(1);
  });

  it("button render with correct className", () => {
    render(<Button className="btn-primary">Click Me!!!</Button>);
    expect(screen.getByTestId("bsc-button")).toHaveClass("btn-primary");
  });

  it("snapshot matches", () => {
    const { asFragment } = render(
      <Button onClick={() => {}} className="btn-primary">
        Click Me!!!
      </Button>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
