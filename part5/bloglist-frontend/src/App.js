import React, {useState, useEffect} from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'
import LoginForm from "./components/loginForm";
import CreateForm from "./components/createForm";

const App = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)
    const [blogs, setBlogs] = useState([])
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [url, setUrl] = useState('')
    const [showLogin, setShowLogin] = useState(false)
    const [showCreate, setShowCreate] = useState(false)

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

    const handleLogout = (event) => {
        event.preventDefault()
        window.localStorage.removeItem('loggedUser')
        setUser(null)
    }

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

    if (user === null) {
        const hide = {display: showLogin ? 'none' : ''}
        const show = {display: showLogin ? '' : 'none'}

        return (
            <div>
                <div style={hide}>
                    <button onClick={() => setShowLogin(true)}>Log in</button>
                </div>
                <div style={show}>
                    <LoginForm username={username} password={password} handleLogin={handleLogin} handleUsernameChange=
                        {({target}) => setUsername(target.value)} handlePasswordChange={({target}) =>
                        setPassword(target.value)}/>
                    <button onClick={() => setShowLogin(false)}>Cancel</button>
                </div>
            </div>
        )
    }
    const hide = {display: showCreate ? 'none' : ''}
    const show = {display: showCreate ? '' : 'none'}

    return (
        <div>
            <h2>blogs</h2>
            <div>
                <p>{user.name} is logged in <button type="submit" onClick={handleLogout}>logout</button></p>
            </div>
            <div style={hide}>
                <button onClick={() => setShowCreate(true)}>new blog</button>
            </div>
            <div style={show}>
                <CreateForm title={title} handleAdding={handleAdding} author={author} setAuthor={setAuthor} url={url}
                            setTitle={setTitle} setUrl={setUrl} setShowCreate={setShowCreate}/>
            </div>
            {blogs.map(blog => <Blog blog={blog}/>)}
        </div>
    )
}

export default App