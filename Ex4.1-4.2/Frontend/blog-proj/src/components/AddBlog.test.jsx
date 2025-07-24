import { render, screen } from "@testing-library/react";
import CreateBlog from "./CreateBlog";
import userEvent from "@testing-library/user-event";
import { expect, test, vi } from "vitest";

test('Adding a new blog', async () => {
    // creating a mock function
    window.alert = vi.fn()
    const blog = userEvent.setup()
    render(<CreateBlog id={'685572bf87a37f6f03049426'} />)
    // console.log(createBlog)
    // console.log(blog)
    // for multiple input text
    const input = screen.getAllByRole('textbox')
    const createBtn = screen.getByText('Submit')
    await blog.type(input[0], 'testing a form...')
    await blog.type(input[1], "Author 1")
    await blog.type(input[2], "http://myauthor.com")
    await blog.click(createBtn)

    expect(window.alert).toHaveBeenCalledWith('Successfully added')
})