import { afterEach, test, expect, vi, beforeEach, describe } from "vitest";
import { cleanup } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/vitest'
import Blog from "../components/Blog";
import userEvent from '@testing-library/user-event'

describe(('my-test-component'), () => {
    let container
    const blogs = [
        {
            _id: "6855740887a37f6f03049428",
            title: "my title5",
            author: "author5",
            url: "http://author1blogs",
            likes: 1,
            user: "685572bf87a37f6f03049426"
        },
        {
            _id: "685ac87b0d51c3789096ef81",
            title: "my title5",
            author: "author5",
            url: "http://author1blogs",
            likes: 1,
            user: "685572bf87a37f6f03049426"
        }
    ]

    beforeEach(() => {
        container = render(
            <Blog title={blogs[0].title} blogs={blogs} author={blogs[0].author} createrId={blogs[0].user} url={blogs[0].url} likes={blogs[0].likes} />
        ).container
    })

    test('check for toggleable content', () => {
        const toggleAbleDiv = container.querySelector('.toggleableContent')
        expect(toggleAbleDiv).toHaveStyle('display:none')
    })

    test('simulate the button is clicked and the info is shown', async () => {
        const user = userEvent.setup()
        const toggleAbleDiv = container.querySelector('.toggleableContent')
        const button = screen.getByText('view')
        await user.click(button)
        expect(toggleAbleDiv).toHaveStyle('display:block')
    })

    // test("check if the mock func is called one time", async () => {
    //     const blog = vi.fn()
    //     const user = userEvent.setup()
    //     render(<Blog title={blogs[0].title} blogs={blogs} author={blogs[0].author} createrId={blogs[0].user} url={blogs[0].url} likes={blogs[0].likes}></Blog>)
    //     const toggleAbleDiv = container.querySelector('.toggleableContent')
    //     const button = screen.getAllByText('view')
    //     await user.click(button[0])
    //     expect(likes.mock.calls).toHaveLength(1)
    // })

})
afterEach(() => {
    cleanup()
})