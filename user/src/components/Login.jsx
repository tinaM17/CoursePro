import { useState } from 'react'
import '../assets/Signup.css'
import { Button, TextField } from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div>
      <div className="outer-box">
        <div className="inner-box">
          <header className="signup-header">
            <h1 className="signup">Sign In</h1>
            <p>Lets's start your journey with us</p>
          </header>
          <main className="signup-main">
            <div>
              <label htmlFor="username">Username/Email</label>
            </div>
            <div>
              <TextField
                type="email"
                id="email"
                label="Email"
                variant="outlined"
                fullWidth={true}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Your Password</label>
            </div>
            <div>
              <TextField
                type="password"
                id="password"
                label="Password"
                variant="outlined"
                fullWidth={true}
                placeholder="at least 6 characters"
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                required
              />
            </div>
            <div>
              <Button
                variant="contained"
                onClick={async () => {
                  const res = await axios.post(
                    'http://localhost:3000/users/login',
                    {
                      username: email,
                      password: password,
                    }
                  )
                  localStorage.setItem('token', res.data.token)
                  window.location='/'
                }}
              >
                {' '}
                Login
              </Button>
            </div>
            <div>
              Don't have an account? <Button>SignUp</Button>
            </div>
          </main>
        </div>
        <div className="circle c1"></div>
        <div className="circle c2"></div>
      </div>
    </div>
  )
}

export default Login
