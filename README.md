# React.js Fundamentals Assignment

## Project Overview
This project demonstrates the fundamental concepts of React.js, including component creation, state management using hooks, event handling, and styling with Tailwind CSS.

## Features
- **Header Component**: Displays the title of the assignment.
- **Profile Component**: Accepts user details (name and email) as props and allows updating them dynamically.
- **Counter Component**: Implements a counter with increment, decrement, and reset functionalities.
- **Tailwind CSS Styling**: Provides a visually appealing and responsive design.

## Installation & Setup
### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Latest LTS version recommended)
- [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Steps to Set Up the Project
1. Clone the repository:
   ```sh
   git clone https://github.com/PLP-Full-Stack-Development-MERN/week-3-react-js-assignment-kaidavi.git
   cd react-assignment
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm start
   ```
4. Open your browser and visit:
   ```
   http://localhost:3000
   ```

## Usage Guide
- Update the **Profile Component** by typing a new name or email in the input fields.
- Click the **Increment**, **Decrement**, or **Reset** buttons in the **Counter Component** to manipulate the count.

## Folder Structure
```
react-assignment/
│── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Profile.js
│   │   ├── Counter.js
│   ├── App.js
│   ├── index.js
│── public/
│── package.json
│── tailwind.config.js
│── postcss.config.js
│── README.md
```

## Troubleshooting
- If `npm start` fails, try:
  ```sh
  rm -rf node_modules package-lock.json
  npm install
  npm start
  ```
- Ensure `react-scripts` is installed:
  ```sh
  npm install react-scripts
  ```

## Contributing
Feel free to fork the repository, make improvements, and submit pull requests.

## License
This project is licensed under the MIT License.

