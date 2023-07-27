import React, { useEffect,useState } from 'react'
import { Button, Typography, Card } from '@mui/material'
import { coursesState } from '../recoil/atom'
import { useRecoilState } from 'recoil'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {BASE_URL} from './helper'

export const Courses = () => {
  const navigate = useNavigate()
  const [courses, setCourses] = useRecoilState(coursesState)
  const [currentPage, setCurrentPage] = useState(1)
  const coursesPerPage = 6 // Set the number of courses per page here

  useEffect(() => {
    axios
      .get(`${BASE_URL}/users/courses`, {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      })
      .then((res) => {
        setCourses(res.data.Courses)
      })
  }, [])
  // Calculate the indexes of courses to display on the current page
  const indexOfLastCourse = currentPage * coursesPerPage
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage
  const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse)

  // Update the current page when the pagination buttons are clicked
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: 20,
          paddingBottom: 30,
          flexDirection: 'column',
          height: 200,
        }}
      >
        <div>
          <Typography variant="h4">All Courses</Typography>
        </div>
        <div style={{ marginBlock: 10, width: 600 }}>
          <Typography variant="h6">
            Our Courses category:- Data Structure and Algorithm, FullStack
            Development, Learning Java, Python, Web Development etc
          </Typography>
        </div>
      </div>
      {courses.length == 0 ? (
        <div>
          <Typography
            variant="h5"
            style={{ textAlign: 'center', marginTop: 10 }}
          >
            To see all the course you have to login first
            <Button
              variant="contained"
              style={{ margin: 10 }}
              onClick={() => {
                navigate('/')
              }}
            >
              Login
            </Button>
          </Typography>
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {currentCourses.map((course) => (
            <CourseCard course={course} purchased={false} />
          ))}
        </div>
      )}
      {/* Pagination controls */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 20}}>
        <Button
          variant="contained"
          style={{marginRight:10}}
          disabled={currentPage === 1}
          onClick={() => paginate(currentPage - 1)}
        >
          Prev
        </Button>
        <Button
          variant="contained"
          disabled={currentCourses.length < coursesPerPage}
          onClick={() => paginate(currentPage + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  )
}

export function CourseCard(props) {
  const course = props.course
  const navigate = useNavigate()
  return (
    <Card
      style={{
        margin: 20,
        width: 300,
        minHeight: 200,
      }}
    >
      <img
        src={course.imageLink}
        alt="Image not available"
        style={{ width: 300 }}
      />
      <Typography
        style={{
          textAlign: 'center',
          backgroundColor: '#03fccf',
          color: 'black',
        }}
      >
        {course.title}
      </Typography>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: 5,
        }}
      >
        <Typography
          style={{
            backgroundColor: '#f51d5a',
            borderRadius: 10,
            textAlign: 'center',
            padding: 5,
            color: 'black',
          }}
        >
          Price: {course.price}
        </Typography>
        <Button
          variant="contained"
          onClick={() => {
            navigate('/course/' + course._id)
          }}
        >
          View Course
        </Button>
      </div>
    </Card>
  )
}
