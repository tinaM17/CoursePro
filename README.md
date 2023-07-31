# Course Selling Website - README
# CoursePro
This repository contains the code for a Course Selling Website built using the MERN (MongoDB, Express, React, Node.js) stack. The website allows admins to manage courses and users to browse and purchase courses.

## Features
Admin can sign up and log in to the dashboard.
Admin can create, edit, and list all courses.
Users can sign up and log in to their accounts.
Users can browse and purchase courses.
Users can view their purchased courses.

## Backend Setup

## Clone the repository:
git clone https://github.com/tinaM17/CoursePro.git

## Install dependencies:
cd server
npm install
## Run the server:
node index.js
The backend will be running at http://localhost:3000.

# Frontend Setup
## Admin Panel
## Install dependencies:
cd admin
npm install
## Set up environment variables:
In the helper.jsx update the
BASE_URL=http://localhost:3000
Make sure to replace http://localhost:3000 with the actual backend URL if deploying to a different environment.

## Run the admin panel:
npm run dev
The admin panel will be running at http://localhost:5173.

# User Frontend
## Install dependencies:
cd user
npm install
## Set up environment variables:
In the helper.jsx update the
BASE_URL=http://localhost:3000
Replace http://localhost:3000 with the actual backend URL if deploying to a different environment.

## Run the user frontend:
npm run dev
The user frontend will be running at http://localhost:5174.

# Deployment
## Backend
The backend of the Course Selling Website is deployed on Render. The backend automatically connects to the MongoDB database specified in the environment variables.

## Frontend
The frontend of the Admin Panel and User Frontend are deployed on Netlify. The .env files for each frontend are configured on Netlify's environment variables settings.

## Admin Panel: 
https://admin-coursepro-app.netlify.app/

## User Frontend: 
https://coursepro-app.netlify.app/

# Contribute
Contributions to the Course Selling Website project are welcome. If you find any bugs or want to add new features, feel free to create a pull request.


Thank you for using the Course Selling Website. If you have any questions or need further assistance, please don't hesitate to contact us. Happy learning!

