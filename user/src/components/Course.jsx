import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import { courseState, showPurchaseState } from '../recoil/atom'
import axios from 'axios'
import { Card, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import {BASE_URL} from './helper'

const Course = () => {
  let { courseId } = useParams()
  const [course, setCourse] = useRecoilState(courseState)
  const [show, setShow] = useState(false)
  const [purchase, setPurchase] = useRecoilState(showPurchaseState)

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/users/courses/${courseId}`,
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          }
        )
        setCourse(response.data.Course)
      } catch (error) {
        console.error('Error fetching course:', error)
      }
    }
    const fetchPurchases = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/users/purchasedCourses`, // Assuming the API endpoint to get user purchases
          {
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
          }
        )
        // Assuming the API returns an array of purchased courses
        // Assuming the API returns an array of purchased course IDs
        const purchasedCourseIds = response.data.PurchasedCourses.map(
          (purchase) => purchase._id
        )
        // Check if the courseId is in the purchasedCourseIds array
        const isCoursePurchased = purchasedCourseIds.includes(courseId)
        setPurchase(isCoursePurchased)
      } catch (error) {
        console.error('Error fetching purchases:', error)
      }
    }

    // Call both functions simultaneously
    Promise.all([fetchCourse(), fetchPurchases()])
  }, [])
  console.log(purchase)

  const handleShow = () => {
    setShow(!show)
  }
  if (!course) {
    return (
      <div
        style={{
          height: '100vh',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        Loading....
      </div>
    )
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Card
        style={{
          margin: 30,
          marginLeft: 50,
          width: 500,
          minHeight: 200,
        }}
      >
        <img
          src={course.imageLink}
          alt="Image not available"
          style={{ width: 500 }}
        />
        <Typography
          style={{
            color: 'black',
            fontSize: 20,
          }}
        >
          <b>Title:</b>
          {course.title}
        </Typography>
        <br />
        <Typography
          style={{
            color: 'black',
            fontSize: 20,
          }}
        >
          <b>Description:</b>
          {course.description}
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
          {purchase ? (
            <Button variant="contained">Start Learning</Button>
          ) : (
            <Button variant="contained" onClick={handleShow}>
              Buy Now
            </Button>
          )}
        </div>
      </Card>
      {show ? <BuyNow /> : <div></div>}
    </div>
  )
}

const BuyNow = () => {
  const course = useRecoilValue(courseState)
  const navigate = useNavigate()
  return (
    <Card
      style={{
        margin: 30,
        marginRight: 60,
        width: 300,
        maxHeight: 250,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <div>
          <Typography variant="h6" style={{ textAlign: 'center' }}>
            Total Price
          </Typography>
          <hr />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginInline: 30,
            padding: 5,
          }}
        >
          <div>
            <Typography>Price:</Typography>
          </div>
          <div>
            <Typography>{course.price}</Typography>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginInline: 30,
            padding: 5,
          }}
        >
          <div>
            <Typography>GST:</Typography>
          </div>
          <div>
            <Typography>{Math.floor(course.price * 0.18)}</Typography>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginInline: 30,
            padding: 5,
          }}
        >
          <div>
            <Typography>Coupon:</Typography>
          </div>
          <div>
            <Typography>0</Typography>
          </div>
        </div>
        <hr />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginInline: 30,
            padding: 5,
          }}
        >
          <div>
            <Typography>Total Price:</Typography>
          </div>
          <div>
            <Typography>
              {course.price + Math.floor(course.price * 0.18)}
            </Typography>
          </div>
        </div>
        <Button
          variant="contained"
          style={{ backgroundColor: 'red', margin: 10 }}
          onClick={async () => {
            console.log(course._id);
            const res = await axios.post(
              `${BASE_URL}/users/courses/` + course._id,null,
              {
                headers: {
                  Authorization: 'Bearer ' + localStorage.getItem('token'),
                },
              }
            )
            alert(res.data.message)
            navigate('/purchased')
          }}
        >
          Buy Now
        </Button>
      </div>
    </Card>
  )
}

export default Course
