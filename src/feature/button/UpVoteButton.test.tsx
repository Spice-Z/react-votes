import { test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import UpVoteButton from "./UpVoteButton";

test("UpVoteButton will call correct function and change selected state according to the props", async () => {
  let selected = true;
  const onClick = vi.fn(() => {
    selected = !selected;
  });
  const { rerender } = render(
    <UpVoteButton selected={selected} onClick={onClick} />
  );
  expect(screen.getByRole("button").getAttribute("data-selected")).toBe("true");
  await userEvent.click(screen.getByRole("button"));
  rerender(<UpVoteButton selected={selected} onClick={onClick} />);
  expect(onClick.mock.calls.length).toBe(1);
  expect(selected).toBe(false);
  expect(screen.getByRole("button").getAttribute("data-selected")).toBe(
    "false"
  );
});
