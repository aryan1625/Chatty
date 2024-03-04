# Chatty: Real-Time Chat Application

Chatty is a real-time chat application built using React.js, Tailwind CSS, Node.js, Express.js, and Socket.IO to provide real-time chatting.

## Installation

Before running the application, make sure you have [Node.js](https://nodejs.org/en/) and [MongoDB](https://www.mongodb.com/) installed on your system.

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/aryan1625/Chatty.git
Navigate to the project directory:

bash
cd Realtime-Chat-Application

Install dependencies for both the frontend and backend:

bash
Copy code
cd frontend
npm install

cd ../backend
npm install

Configuration
Create a .env file in the backend directory and add your MongoDB connection URL:

MONGODB_URI=<your-mongodb-uri>
Running the Application
To run the Chatty application, you'll need to start both the frontend and backend servers.

Start the frontend server:

bash
Copy code
cd frontend
npm run dev
This will start the frontend server and open it in your default web browser.

Navigate to localhost:5173/login in your web browser to access the login page.

Start the backend server:

bash
Copy code
cd ../backend
npm start
This will start the backend server.

Technologies Used
Frontend: React.js, Tailwind CSS
Backend: Node.js, Express.js
Real-Time Functionality: Socket.IO

Features
Real-Time Chat: Communicate with other users in real-time.
Avatar Customization: Set your avatar to personalize your profile.

Usage
Once both servers are running, you can access the Chatty application in your web browser. You can register/login, set your avatar, and start chatting with other users in real-time.

Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.
