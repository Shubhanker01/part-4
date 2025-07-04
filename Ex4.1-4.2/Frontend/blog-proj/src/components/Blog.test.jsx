import { afterEach, test, expect } from "vitest";
import { cleanup } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/vitest'
import Blog from "./src/components/Blog";

test('renders content', () => {
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
    render(<Blog title={blogs[0].title} blogs={blogs} author={blogs[0].author} createrId={blogs[0].user} url={blogs[0].url} likes={blogs[0].likes} />)

    const element = screen.getByText('Component testing is done with react-testing-library')
    expect(element).toBeDefined()
})