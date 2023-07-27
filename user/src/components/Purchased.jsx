import { useEffect, useState } from 'react'
import axios from 'axios'
import { useRecoilState } from 'recoil'
import { purchaseState } from '../recoil/atom'
import { CourseCard } from './Courses'
import { Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Purchased = () => {
  const navigate = useNavigate()
  const [purchases, setPurchases] = useRecoilState(purchaseState)
  const [currentPage, setCurrentPage] = useState(1)
  const coursesPerPage = 6 // Set the number of courses per page here

  useEffect(() => {
    axios
      .get('http://localhost:3000/users/purchasedCourses', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      })
      .then((res) => {
        setPurchases(res.data.PurchasedCourses)
      })
    console.log(purchases)
  }, [])

  const indexOfLastCourse = currentPage * coursesPerPage
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage
  const currentCourses = purchases.slice(indexOfFirstCourse, indexOfLastCourse)

  const paginate = () => {
    setCurrentPage(pageNumber)
  }
  return (
    <div>
      {purchases.length == 0 ? (
        <div>
          <Typography
            variant="h5"
            style={{ textAlign: 'center', marginTop: 10 }}
          >
            You have not purchased any course yet, Please go to
            <Button
              variant="contained"
              style={{ margin: 10 }}
              onClick={() => {
                navigate('/courses')
              }}
            >
              All Courses
            </Button>
          </Typography>
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div>
            <Typography variant="h4" style={{ margin: 10 }}>
              Purchased Courses
            </Typography>
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              flexDirection: 'row',
            }}
          >
            {currentCourses.map((course) => (
              <CourseCard course={course} />
            ))}
          </div>
          <div
            style={{ display: 'flex', justifyContent: 'center', marginTop: 20 }}
          >
            <Button
              variant="contained"
              style={{ marginRight: 10 }}
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
      )}
    </div>
  )
}

export default Purchased
