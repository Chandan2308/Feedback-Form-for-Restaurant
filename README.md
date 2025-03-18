# Restaurant Feedback Form (Flask API)

## Overview
The **Restaurant Feedback Form** is a web-based solution designed to collect and manage customer feedback efficiently. Built using Flask, this application provides a structured way for restaurant owners to gather insights from their customers, enhancing service quality and customer satisfaction. With an intuitive interface and a robust backend, this feedback form ensures a seamless experience for both users and administrators.

## Features
- User-friendly form for submitting feedback
- Secure API endpoints for data submission and retrieval
- Authentication for restaurant admins to view feedback
- Stores data in a structured format using a database (SQLite/PostgreSQL/MySQL)
- Supports integration with email notifications for new feedback
- Mobile-responsive design

## Technologies Used
- Frontend: HTML, CSS, JavaScript (with Fetch API or AJAX)
- Backend: Python (Flask)
- Database: SQLite / PostgreSQL / MySQL
- API: Flask RESTful
- Authentication: Flask-Login / JWT

## Installation
### Prerequisites
Ensure you have the following installed:
- Python 3.x
- Required dependencies (install using pip)

```sh
pip install flask flask-restful flask-sqlalchemy flask-login flask-cors
```

## Usage
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/restaurant-feedback-form.git
   cd restaurant-feedback-form
   ```
2. Set up and activate a virtual environment (optional but recommended):
   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```
3. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```
4. Run the Flask application:
   ```sh
   python app.py
   ```
5. Open the webpage in a browser:
   ```
   http://localhost:5000
   ```
6. Submit feedback through the form and review responses in the admin panel.

## API Endpoints
### Submit Feedback
```http
POST /api/feedback
```
**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "rating": 5,
  "comments": "Great food and service!"
}
```

### Retrieve Feedback (Admin Only)
```http
GET /api/feedback
```
**Response:**
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "rating": 5,
    "comments": "Great food and service!",
    "timestamp": "2025-03-18T10:00:00Z"
  }
]
```

## About Me
I am a passionate developer dedicated to creating practical and impactful web applications. With a strong focus on backend development and API design, I strive to build solutions that are both efficient and user-friendly. My goal is to help businesses streamline their operations using technology.

## Contribution
If you would like to contribute to improving this project, feel free to submit a pull request or report any issues.

## Contact
For any inquiries, feel free to reach out at chandanpgeete@gmai.com.

