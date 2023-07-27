import { useState } from 'react'
import '../assets/Signup.css'
import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from './helper'

const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  return (
    <div>
      <div className="outer-box">
        <div className="inner-box">
          <header className="signup-header">
            <h1 className="signup">Sign Up</h1>
            <div>It takes just 2 minutes</div>
          </header>
          <main className="signup-main">
            <div>
              <label htmlFor="fullname">Full Name</label>
            </div>
            <div>
              <TextField
                type="text"
                id="fullname"
                label="Name"
                variant="outlined"
                fullWidth={true}
                onChange={(e) => {
                  setName(e.target.value)
                }}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
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
                  const res = await axios.post(`${BASE_URL}/users/signup`, {
                    name: name,
                    username: email,
                    password: password,
                  })
                  localStorage.setItem('token', res.data.token)
                  navigate('/login')
                }}
              >
                Create Account
              </Button>
            </div>
            <Typography>
              Already have an account? <Button>Login</Button>
            </Typography>
          </main>
        </div>
        <div className="circle c1"></div>
        <div className="circle c2"></div>
      </div>
    </div>
  )
}

export default Signup
