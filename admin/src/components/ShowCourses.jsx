import React from 'react'
import { useEffect } from 'react'
import { Typography, Card, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function ShowCourses() {
  const [courses, setCourses] = React.useState([])
  const [currentPage,setCurrentPage]=React.useState(1);
  const coursesPerPage=6;
  useEffect(() => {
    axios
      .get('http://localhost:3000/admin/courses', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      })
      .then((res) => {
        setCourses(res.data.Courses)
      })
  }, [])
  const lastIndex=currentPage*coursesPerPage;
  const firstIndex=lastIndex-coursesPerPage;
  const currentCourse=courses.slice(firstIndex,lastIndex);

  const paginate=(pageNumber)=>{
    setCurrentPage(pageNumber)
  }

  if (courses.length==0) {
    return (
      <div>
        <Typography variant="h4" style={{ textAlign: 'center',marginTop:10 }}>
          To see all the course you have to login first
        </Typography>
      </div>
    )
  }
  return (
    <div>
      <Typography variant="h4" style={{ textAlign: 'center' }}>
        All Courses
      </Typography>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {currentCourse.map((course) => (
          <Course course={course} />
        ))}
        </div>
        <div
          style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}
        >
          <Button
            variant="contained"
            style={{ marginRight: 10 }}
            disabled={currentPage === 1}
            onClick={() => {
              paginate(currentPage - 1)
            }}
          >
            Prev
          </Button>
          <Button
            variant="contained"
            disabled={currentCourse.length < coursesPerPage}
            onClick={() => {
              paginate(currentPage + 1)
            }}
          >
            Next
          </Button>
        </div>
    </div>
  )
}

function Course(props) {
  const course = props.course
  const navigate = useNavigate()
  return (
    <Card
      style={{
        margin: 10,
        width: 300,
        minHeight: 200,
      }}
    >
      <img
        src={course.imageLink}
        alt="Image not available"
        style={{ width: 300 }}
      />
      <Typography style={{ textAlign: 'center', backgroundColor: '#03fccf' }}>
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

export default ShowCourses
