import { render, screen, cleanup } from "@testing-library/react";
// for handling user event
import userEvent from "@testing-library/user-event";
import Toggleable from "./Toggleable";
import { beforeEach, describe, expect, test, afterEach } from "vitest";

describe('<Toggleable/>', () => {
    let container
    beforeEach(() => {
        container = render(
            <Toggleable buttonLabel={"show"} visible={false}>
                <div className="content">
                    toggleable content
                </div>
            </Toggleable>
        ).container
    })

    // at starting the children will be hidden
    test('renders its children', async () => {
        // find html content by text
        await screen.findAllByText('toggleable content')
    })

    test('at start the children are not displayed', () => {
        const div = container.querySelector('.toggleableContent')
        expect(div).toHaveStyle('display:none')

    })

    test('after clicking the button the children are displayed', async () => {
        const user = userEvent.setup()
        const button = screen.getByText('show')
        await user.click(button)

        const div = container.querySelector('.toggleableContent')
        expect(div).toHaveStyle('display:none')
    })
})

afterEach(() => {
    cleanup()
})