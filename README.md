# React vote

This project is started by [Vite](https://vitejs.dev/) using TypeScript.

![Screenshot](https://github.com/user-attachments/assets/743297cf-9ad9-402b-a996-09ecc75f317e)

## File structure

In this project, I group files by features. Each feature has its own folder containing all related files.

```
.
└── src/
    └── feature/
        ├── button
        ├── icon
        ├── storage
        └── vote
```

Because this project is small, I don't make any sub-directories for each feature.
If the project grows, I will consider adding sub-directories for each feature like `components`, `hooks`, `types`, etc.


## Data Management

To manage all upvote lists together, I use [Jotai](https://jotai.org/).

By using a helper function to get and set data from localStorage,
Jotai's state is saved in localStorage and can be persisted when refreshing the page.


## Test

I use vitest and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) for testing.
I added a simple test, `src/feature/button/UpVoteButton.test.tsx`.

Since the requirement is `Provide one test for selection change based on the click event`, I added a one test to check if the `onClick` function is called when the button is clicked and the `data-selected` attribute is changed correctly.

In real projects, I would add simple tests for each state to check if the component is rendered correctly and the props are passed correctly like this:


```tsx
test.each([
  [true, "true"],
  [false, "false"],
])(
  "attribute is same to props - case: selected=%s",
  async (selected, expected) => {
    render(<UpVoteButton selected={selected} onClick={vi.fn()} />);
    expect(screen.getByRole("button").getAttribute("data-selected")).toBe(
      expected
    );
  }
);

test.each([[true], [false]])(
  "props function is called when button is clicked - case: selected=%s",
  async (selected) => {
    const onClick = vi.fn();
    render(<UpVoteButton selected={selected} onClick={onClick} />);
    await userEvent.click(screen.getByRole("button"));
    expect(onClick.mock.calls.length).toBe(1);
  }
);
```

## Others

I added additional buttons under the list to increment and reset upvote list for debug purpose.

![Screenshot](https://github.com/user-attachments/assets/4751f03c-525d-4e4e-8736-abf317520f86)