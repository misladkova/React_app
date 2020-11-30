const listHelper = require('../utils/list_helper')

describe('favoriteBlog', ()=>{
    test('when list is empty, result equals none', ()=>{
        const blogs = []
        const result = listHelper.favoriteBlog(blogs)
        expect(result).toEqual([])
    })
    test('when list contains one blog, result equals that blog', ()=>{
        const blogs = [
            {
                _id: '5a422aa71b54a676234d17f8',
                title: 'Go To Statement Considered Harmful',
                author: 'Edsger W. Dijkstra',
                url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
                likes: 5,
                __v: 0
            }
        ]
        const result = listHelper.favoriteBlog(blogs)
        const expected = {title: 'Go To Statement Considered Harmful', author: 'Edsger W. Dijkstra', likes: 5}
        expect(result).toEqual(expected)
    })
    test('when list contains more than one, result equals the blog with the most likes', ()=>{
        const blogs = [
            {
                _id: '5a422aa71b54a676234d17f8',
                title: 'Go To Statement Considered Harmful',
                author: 'Edsger W. Dijkstra',
                url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
                likes: 5,
                __v: 0
            },
            {
                _id: '5a422aa71b54a676234d17f8',
                title: 'Go To Statement Considered Harmful',
                author: 'Edsger W. Dijkstra',
                url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
                likes: 10,
                __v: 0
            }
        ]
        const res = listHelper.favoriteBlog(blogs)
        const expected = {title: 'Go To Statement Considered Harmful', author: 'Edsger W. Dijkstra', likes: 10}
        expect(res).toEqual(expected)
    })
})