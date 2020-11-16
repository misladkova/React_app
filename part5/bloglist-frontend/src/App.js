import React, {useState, useEffect} from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'

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

    const handleLogin = async (event) => {
        event.preventDefault()

        const user = await loginService.login({username, password})
        window.localStorage.setItem('loggedUser', JSON.stringify(user))
        blogService.setToken(user.token)
        setUser(user)
        setUsername('')
        setPassword('')
    }

    const handleLogout = (event)=>{
        event.preventDefault()
        window.localStorage.clear()
        setUser(null)
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
            <div>
                <p>{user.name} is logged in <button type="submit" onClick={handleLogout}>logout</button></p>
            </div>
            {blogs.map(blog =>
                <Blog key={blog.id} blog={blog}/>
            )}
        </div>
    )
}

export default App