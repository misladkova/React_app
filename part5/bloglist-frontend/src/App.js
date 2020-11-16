import React, {useState, useEffect} from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'

const App = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        blogService.getAll().then(blogs =>
            setBlogs(blogs)
        )
    }, [])

    const handleLogin = (event) => {
        event.preventDefault()
        console.log('logging in with', username, password)
    }

    if (user === null) {
        return (
            <div>
                <h2>log in to application</h2>
                <form onSubmit={handleLogin}>
                    <div>
                        username: <input type="text" value={username} onChange={({target}) =>
                        setUsername(target.value)}/>
                    </div>
                    <div>
                        password: <input type="password" value={password} onChange={({target}) =>
                        setPassword(target.value)}/>
                    </div>
                    <div>
                        <button type="submit">login</button>
                    </div>
                </form>
            </div>
        )
    }
    return (
        <div>
            <h2>blogs</h2>
            {blogs.map(blog =>
                <Blog key={blog.id} blog={blog}/>
            )}
        </div>
    )
}

export default App