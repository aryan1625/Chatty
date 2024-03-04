# Chatty: Real-Time Chat Application

<!-- ABOUT THE PROJECT -->
## About The Project

Chatty is a real-time chat application crafted with React.js, Tailwind CSS, Node.js, Express.js, and Socket.IO. Users can personalize their profiles with avatars and engage in seamless conversations. With its sleek interface and responsive design, Chatty offers an immersive platform for meaningful interactions and community building.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)


## Installation

Before running the application, make sure you have [Node.js](https://nodejs.org/en/) and [MongoDB](https://www.mongodb.com/) installed on your system.

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/aryan1625/Chatty.git

2. Navigate to the project directory:

   ```bash
   cd Realtime-Chat-Application
   ```

3. Install dependencies for both the frontend and backend:

   ```bash
   cd frontend
   npm install
   ```
   
   ```bash
   cd ../backend
   npm install
   ```

## Configuration

1. Create a .env file in the backend directory and add your MongoDB connection URL:
   ```.env
   MONGODB_URI=<your-mongodb-uri>
   ```

2. Running the Application
To run the Chatty application, you'll need to start both the frontend and backend servers.

3. Start the frontend server:

   ```bash
   cd frontend
   npm run dev
   ```

This will start the frontend server and open it in your default web browser.
Navigate to localhost:5173/login in your web browser to access the login page.

4. Start the backend server:

   ```bash
   cd ../backend
   npm start
   ```

This will start the backend server.

## Technologies Used
* Frontend: React.js, Tailwind CSS
* Backend: Node.js, Express.js
* Real-Time Functionality: Socket.IO

## Features
* Real-Time Chat: Communicate with other users in real-time.
* Avatar Customization: Set your avatar to personalize your profile.

## Usage
Once both servers are running, you can access the Chatty application in your web browser. You can register/login, set your avatar, and start chatting with other users in real-time.

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


