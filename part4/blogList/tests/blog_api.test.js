const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Blog = require('../models/blog')

const api = supertest(app)

const initialBlogs = [
    {
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 5,
    },
    {
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 15,
    }
]

beforeEach(async () => {
    await Blog.deleteMany({})
    let blogObj = new Blog(initialBlogs[0])
    await blogObj.save()
    blogObj = new Blog(initialBlogs[1])
    await blogObj.save()
})

test('return all blog as json', async () => {
    await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

test('there are 2 blogs', async () => {
    const res = await api.get('/api/blogs')
    expect(res.body).toHaveLength(2)
})

test('a new blog added', async () => {
    const newBlog = {
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
        likes: 30,
    }
    await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(201)
        .expect('Content-Type', /application\/json/)

    const res = await api.get('/api/blogs')
    const title = res.body.map(x=>x.title)
    expect(res.body).toHaveLength(initialBlogs.length+1)
    expect(title).toContain('Go To Statement Considered Harmful')
})

test('specific blog removed', async () => {
    const all = await api.get('/api/blogs')
    const id = all.body[0].id

    await api
        .delete(`/api/blogs/${id}`)
        .expect(204)

    const res = await api.get('/api/blogs')
    expect(res.body).toHaveLength(1)
})

test('specific blog updated', async () => {
    const all = await api.get('/api/blogs')
    const id = all.body[0].id

    const updatedBlog = {likes: 150}

    await api
        .put(`/api/blogs/${id}`, updatedBlog)
        .expect(200)

    const res = await api.get(`/api/blogs/${id}`)
    expect(res.body.likes).toEqual(150)

})

afterAll(() => {
    mongoose.connection.close()
})
