import React, { useState } from 'react'
import blogService from '../services/blogs'

const CreateForm = ({blogs, setBlogs, setShowCreate}) => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')

    const handleAdding = async (event) => {
        event.preventDefault()

        const newBlog = {title: title, author: author, url: url}
        const newBlogPromise = blogService.create(newBlog)
        setTitle('')
        setAuthor('')
        setUrl('')
        const response = await newBlogPromise
        const newBlogs = blogs.concat(response)
        setBlogs(newBlogs)
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={handleAdding}>
                <div>
                    title: <input id="title" type="text" value={title} onChange={({target}) =>
                    setTitle(target.value)}/>
                </div>
                <div>
                    author: <input id="author" type="text" value={author} onChange={({target}) =>
                    setAuthor(target.value)}/>
                </div>
                <div>
                    url: <input id="url" type="text" value={url} onChange={({target}) =>
                    setUrl(target.value)}/>
                </div>
                <div>
                    <button id="create-button" type="submit" onClick={()=>setShowCreate(false)}>create</button>
                </div>
            </form>
        </div>
    )
}

export default CreateForm