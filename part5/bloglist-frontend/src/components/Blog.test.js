import React from "react";
import Blog from "./Blog";
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'

test('render blog title and author', () => {
    const blog = {
        title: "Blah",
        author: "H.J.",
        url: "www",
        likes: 5
    }

    const component = render(<Blog blog={blog}/>)

    expect(component.container).toHaveTextContent('Blah H.J.')
})
