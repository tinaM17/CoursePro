import { useNavigate } from 'react-router-dom'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { userState } from '../recoil/atom'
import { useEffect } from 'react'
import axios from 'axios'
import {BASE_URL} from './helper'

const Appbar = () => {
  const navigate = useNavigate()
  // const[user,setUser]=useRecoilState(userState)
  const setUser = useSetRecoilState(userState)
  const user = useRecoilValue(userState)

  useEffect(() => {
    axios
      .get(`${BASE_URL}/users/me`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      })
      .then((res) => {
        setUser(res.data.name)
      })
      .catch((error) => {
        // Handle error if needed
        console.error('Error fetching user data:', error)
      })
  }, [])

  return (
    <div>
      <nav>
        <div className="container main-nav flex">
          <button style={{ marginLeft: -20 }}>
            <h3>CoursePro</h3>
          </button>
          <div className="nav-links" id="nav-links">
            <ul className="flex">
              <li>
                <button
                  className="hover-link"
                  onClick={() => {
                    navigate('/')
                  }}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  className="hover-link"
                  onClick={() => {
                    navigate('/courses')
                  }}
                >
                  All Courses
                </button>
              </li>
              <li>
                <button
                  className="hover-link"
                  onClick={() => {
                    navigate('/about')
                  }}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  className="hover-link"
                  onClick={() => {
                    navigate('/contact')
                  }}
                >
                  Contact
                </button>
              </li>
              {user ? (
                <>
                  <li>
                    <button
                      className="hover-link"
                      onClick={() => {
                        navigate('/purchased')
                      }}
                    >
                      Purchased
                    </button>
                  </li>
                  <li>
                    <button
                      className="hover-link"
                      onClick={() => {
                        localStorage.removeItem('token')
                        window.location='/'
                      }}
                    >
                      Logout
                    </button>
                  </li>
                  <li>
                    <button className="hover-link" style={{backgroundColor:'blue',color:'white',borderRadius:'50%',paddingInline:10,paddingBlock:4}}>{user.charAt(0).toUpperCase()}</button>
                  </li>{' '}
                </>
              ) : (
                <>
                  <li>
                    <button
                      className="hover-link secondary-button"
                      onClick={() => {
                        navigate('/login')
                      }}
                    >
                      Sign in
                    </button>
                  </li>
                  <li>
                    <button
                      className="hover-link primary-button"
                      onClick={() => {
                        navigate('/signup')
                      }}
                    >
                      Sign up
                    </button>
                  </li>{' '}
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Appbar
