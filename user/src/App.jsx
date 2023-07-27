import './App.css'
import About from './components/About'
import Appbar from './components/Appbar'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import {Courses} from './components/Courses'
import Purchased from './components/Purchased'
import Course from './components/Course'

function App() {

  return (
    <div>
      <Router>
        <Appbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course/:courseId" element={<Course />} />
          <Route path="/purchased" element={<Purchased />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
