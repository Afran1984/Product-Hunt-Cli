# Product Hunt Clone

Welcome to the **Product Hunt Clone** repository! This project is a web application that mimics the functionality of the popular platform Product Hunt, allowing users to discover, share, and discuss the latest products.

## Features

- **User Authentication**: Sign up, log in, and manage your account.
- **Product Listings**: Add, view, and upvote products.
- **Categories**: Organize products into various categories.
- **Search Functionality**: Quickly find products by name or category.
- **Comment System**: Engage with the community by leaving comments on products.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Technologies Used

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Hosting**: Vercel/Netlify (Frontend), Render/Heroku (Backend)

## Installation

Follow these steps to run the project locally:

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/Afran1984/Product-Hunt-Cli.git
   cd product-hunt-clone
   ```

2. Install dependencies for both the frontend and backend:

   ```bash
   # Navigate to the frontend folder
   cd frontend
   npm install

   # Navigate to the backend folder
   cd ../backend
   npm install
   ```

3. Configure environment variables:

   Create a `.env` file in the `backend` folder with the following:

   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the development servers:

   ```bash
   # Start the backend server
   cd backend
   npm run dev

   # Start the frontend server
   cd ../frontend
   npm start
   ```

5. Open your browser and navigate to:

   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:3300`

## Project Structure

```
product-hunt-clone/
├── frontend/          # React frontend
│   ├── src/
│   │   ├── components/   # Reusable components
│   │   ├── pages/        # Application pages
│   │   └── utils/        # Helper functions
├── backend/           # Express backend
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   ├── controllers/    # Request handlers
│   └── middleware/     # Custom middleware
└── README.md          # Project documentation
```

## Contributing

Contributions are welcome! If you'd like to contribute:

1. Fork the repository.
2. Create a new branch:

   ```bash
   git checkout -b feature/Product-Hunt-Cli
   ```

3. Make your changes and commit them:

   ```bash
   git commit -m "Product-Hunt"
   ```

4. Push to the branch:

   ```bash
   git push origin feature/Product-Hunt-Cli
   ```

5. Open a pull request.

## License

This project is licensed under the MIT License. See the file for details.

## Contact

For questions or feedback, feel free to reach out:

- Email: afranrazzak1984@gmail.com & dev.aktherhosen@gmail.com
- GitHub: https://github.com/Afran1984
- GitHub: https://github.com/AktherHosen
---

Thank you for checking out this project! 🚀
