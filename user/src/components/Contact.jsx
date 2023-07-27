import { Typography, Card } from '@mui/material'
import map from '../assets/map.png'
import gmail from '../assets/gmail.png'
import telephone from '../assets/telephone.png'

const Contact = () => {
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
          height: 300,
        }}
      >
        <div>
          <Typography variant="h4">Need Help?</Typography>
        </div>
        <div style={{ marginBlock: 10, width: 600 }}>
          <Typography variant="h6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            quas voluptate, consectetur rem debitis expedita nihil quaerat quis
          </Typography>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          backgroundColor: '#d7d7d9',
          padding: 30,
        }}
      >
        <div>
          <Typography variant="h4">Contact with us</Typography>
        </div>
        <div style={{ marginBlock: 10, width: 600 }}>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
            corrupti reprehenderit ea. Harum eum blanditiis odio voluptatem,
            excepturi quia error aliquam esse vitae?
          </Typography>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            flexWrap: 'wrap',
            margin: 20,
          }}
        >
          <Card
            style={{
              padding: 30,
              margin: 20,
            }}
          >
            <div>
              <img
                src={telephone}
                alt=""
                style={{ width: 50, height: 50, objectFit: 'cover'}}
              />
            </div>
            <div>
              <Typography variant="h6">Call Us 24X7</Typography>
            </div>
            <div>
              <Typography variant="h6">+1234-456-789</Typography>
            </div>
          </Card>
          <Card
            style={{
              padding: 30,
              margin: 20,
            }}
          >
            <div>
              <img
                src={gmail}
                alt=""
                style={{ width: 50, height: 50, objectFit: 'cover' }}
              />
            </div>
            <div>
              <Typography variant="h6">Write Us</Typography>
            </div>
            <div>
              <Typography variant="h6">email@example.com</Typography>
            </div>
          </Card>
          <Card
            style={{
              padding: 30,
              margin: 20,
            }}
          >
            <div>
              <img
                src={map}
                alt=""
                style={{ width: 50, height: 50, objectFit: 'cover' }}
              />
            </div>
            <div>
              <Typography variant="h6">Main Office</Typography>
            </div>
            <div>
              <Typography variant="h6">New York, NY 10160</Typography>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Contact
