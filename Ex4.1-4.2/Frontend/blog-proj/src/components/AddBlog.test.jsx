import { render, screen } from "@testing-library/react";
import CreateBlog from "./CreateBlog";
import userEvent from "@testing-library/user-event";
import { test, vi } from "vitest";

test('Adding a new blog', async () => {
    const createBlog = vi.fn()
    const blog = userEvent.setup()
    render(<CreateBlog id={'685572bf87a37f6f03049426'} />)

    const input = screen.getByRole('textbox')
    const createBtn = screen.getByText('create')

    // await blog.type(input,'testing a form...')
    // await blog.click(createBtn)


})