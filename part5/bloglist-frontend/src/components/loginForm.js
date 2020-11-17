import React from "react";

const LoginForm = ({handleLogin, username, password, handleUsernameChange, handlePasswordChange}) => {
    return (
        <div>
            <h2>log in to application</h2>
            <form onSubmit={handleLogin}>
                <div>
                    username: <input type="text" value={username} onChange={handleUsernameChange}/>
                </div>
                <div>
                    password: <input type="password" value={password} onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button type="submit">login</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm