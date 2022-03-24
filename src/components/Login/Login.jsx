import React, { useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

async function userLogin(credentials){
    const res = await axios.post('http://localhost:8080/api/auth/login',{
        headers: {
            "Content-Type": "application/json"
            // Authorization: `Bearer ${Userfront.accessToken()}`,
          },
          body: {usernameOrEmail:"huuhuan",password:"!Elnino1903"} 
        }
    ).then(data => data.json())
    console.log(res.body)
}
export default function Login({setToken}) {
    const [usernameOrEmail, setUsernameOrEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await userLogin({
            usernameOrEmail,
            password
        });
        setToken(token)
        console.log(token)
    }
    
    const handleInput = (e) => {
        setUsernameOrEmail(e.target.value)
        console.log(e.target.value)
    }
  return (
    <div className='wrapper row justify-content-md-center m-5'>
        <h1 className='text-center'>Welcome to Login</h1>
        <div className='card col-md-4 m-4'>
            <div className='card-header'>
                <h3>Login Form</h3>
            </div>
            <div className='card-body'>
                <form className="row justify-content-md-center" onSubmit={handleSubmit}>
                    <div className='mb-3 row'>
                        <label className="col-sm-3 col-form-label">Email</label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control" id="inputEmail" onChange={e => setUsernameOrEmail(handleInput(e))}/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label className="col-sm-3 col-form-label">Password</label>
                        <div className="col-sm-9">
                            <input type="password" className="form-control" id="inputPassword" onChange={e => setPassword(e.target.value)}/>
                        </div>
                    </div>
                    <div className='row col-3 justify-content-md-center'>
                        <button type='submit' className='btn btn-primary'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}