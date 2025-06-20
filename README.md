# Chatty - Realtime Chat Application

Chatty is a full-stack real-time chat application designed for instant communication. It features user authentication, one-on-one messaging, and a responsive user interface.

## Tech Stack

### Backend
*   [`Node.js`](https://nodejs.org/): JavaScript runtime environment
*   [`Express.js`](https://expressjs.com/): Web application framework for Node.js
*   [`MongoDB`](https://www.mongodb.com/): NoSQL database
*   [`Socket.IO`](https://socket.io/): Library for real-time web applications
*   [`Cloudinary`](https://cloudinary.com/): Cloud-based image and video management

### Frontend
*   [`React.js`](https://react.dev/): JavaScript library for building user interfaces
*   [`Vite`](https://vitejs.dev/): Next-generation frontend tooling
*   [`Tailwind CSS`](https://tailwindcss.com/): Utility-first CSS framework
*   [`Axios`](https://axios-http.com/): Promise-based HTTP client
*   [`Zustand`](https://zustand-demo.pmnd.rs/): Small, fast, and scalable bearbones state-management solution

## How to Run

To get Chatty up and running on your local machine, follow these steps:

### Prerequisites
*   [`Node.js`](https://nodejs.org/) (LTS version recommended)
*   [`npm`](https://www.npmjs.com/) or [`Yarn`](https://yarnpkg.com/)
*   [`MongoDB`](https://www.mongodb.com/docs/manual/installation/) (local instance or a cloud service like MongoDB Atlas)

### Steps

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/chatty.git
    cd chatty
    ```

2.  **Backend Setup:**
    Navigate to the `backend` directory, install dependencies, and start the server.
    ```bash
    cd backend
    npm install # or yarn install
    # Create a .env file in the backend directory with your environment variables (e.g., MONGODB_URI, JWT_SECRET, CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET)
    npm start # or yarn start
    ```
    The backend server will typically run on `http://localhost:5000`.

3.  **Frontend Setup:**
    Open a new terminal, navigate to the `frontend` directory, install dependencies, and start the development server.
    ```bash
    cd ../frontend
    npm install # or yarn install
    npm run dev # or yarn dev
    ```
    The frontend application will typically run on `http://localhost:5173` (or another port if 5173 is in use).

Once both the backend and frontend servers are running, you can access the application in your web browser.
