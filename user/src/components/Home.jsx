import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate()
  return (
    <header>
      <div className="container header-section flex">
        <div className="header-left">
          <h1>Learn from Industry Experts</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            maximus tortor at diam gravida posuere. Curabitur et malesuada mi.
          </p>
          <button
            className="primary-button get-started-btn"
            onClick={() => {
              navigate('/courses')
            }}
          >
            All Courses
          </button>
        </div>
        <div className="header-right">
          <img
            src="https://img.freepik.com/free-vector/online-learning-isometric-concept_1284-17947.jpg?w=740&t=st=1690179350~exp=1690179950~hmac=0aad1bc320acf97b3729e2d1d6ae478415f021b348b577f2947a35e30b546c49"
            alt="hero image"
          />
        </div>
      </div>
    </header>
  )
}

export default Home
