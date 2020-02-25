import React, {useState} from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'

function Login(props) {

    const [login, setLogin] = useState({
        username: '',
        password: ''
    })

    const handleChanges = e => {
          setLogin({
              ...login,
              [e.target.username]: e.target.value
      })
    }  

    const submitLogin = e => {
        e.preventDefault()
        axiosWithAuth()
        .post('/api/login', login)
        .then(response => {
            window.localStorage.setItem('token', response.data.payload)
            // history.push('/protected')
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
            <form onSubmit={submitLogin}>
                <input
                type="text"
                placeholder="username"
                name="username"
                onChange={handleChanges}
                value={login.username}/>

                <input
                type="text"
                placeholder="password"
                name="password"
                onChange={handleChanges}
                value={login.password}/>
            </form>
            <button type="submit">Login</button>
        </div>
    )
}

export default Login
