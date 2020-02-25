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
            <form onSubmit={submitLogin}>
                <input
                type="text"
                placeholder="username"
                name="username"
                onChange={handleChanges}
                value={props.username}/>

                <input
                type="password"
                placeholder="password"
                name="password"
                onChange={handleChanges}
                value={props.password}/>

                <button type="submit">Login</button>
            </form>
            
        </div>
    )
}

export default Login
