import React, {useState} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'

function Login(props) {

    const [login, setLogin] = useState({
        username: '',
        password: ''
    })

    //handles login changes
    const handleChanges = e => {
          setLogin({
              ...login,
              [e.target.name]: e.target.value
      })
    }  

    const submitLogin = e => {
        e.preventDefault()
        axiosWithAuth()
        .post('/api/login', login)
        .then(response => {
            window.localStorage.setItem('token', response.data.payload)
            props.history.push('/protected')
        })
        .catch(error => {
            console.log (error)
        })
        setLogin({
            username:'',
            password:''
        })
    }

    return (
        <div>
            
            <form className="login-form" onSubmit={submitLogin}>
            <h2>Login</h2>
                <input
                type="text"
                placeholder="username"
                name="username"
                onChange={handleChanges}
                value={login.username}/>

                <input
                type="password"
                placeholder="password"
                name="password"
                onChange={handleChanges}
                value={login.password}/>

                <button type="submit">Login</button>
            </form>
            
        </div>
    )
}

export default Login
