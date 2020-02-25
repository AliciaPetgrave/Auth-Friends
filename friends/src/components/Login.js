import React, {useState} from 'react'

function Login() {

    const [login, setLogin] = useState({
        username: '',
        password: ''
      })



    return (
        <div>
            <form>
                <input
                type="text"
                placeholder="username"
                name="username"/>

                <input
                type="text"
                placeholder="password"
                name="password"/>
            </form>
            <button type="submit">Login</button>
        </div>
    )
}

export default Login
