import React from 'react'
import PropTypes from 'prop-types'

const LoginForm = ({handleLogin, username, password, handleUsernameChange, handlePasswordChange}) => {
    return (
        <div>
            <h2>log in to application</h2>
            <form onSubmit={handleLogin}>
                <div>
                    username: <input id="username" type="text" value={username} onChange={handleUsernameChange}/>
                </div>
                <div>
                    password: <input id="password" type="password" value={password} onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button id="login-button" type="submit">login</button>
                </div>
            </form>
        </div>
    )
}

LoginForm.propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    handleLogin: PropTypes.func.isRequired,
    handlePasswordChange: PropTypes.func.isRequired,
    handleUsernameChange: PropTypes.func.isRequired,
}

export default LoginForm