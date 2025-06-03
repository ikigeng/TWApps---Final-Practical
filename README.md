# Full Stack Accounts Application [For an exam]

This project is a lightweight full stack application that allows users to manage a list of accounts. It consists of a React frontend and a Node.js/Express backend. It is to be built only using copilot and ZERO manual code.

## Prompts Used
1.	You'll be working with me to build a lightweight full stack application. We will be making a UI and an API. The front end will be built using React, and the backend will be built using Node.js and Express.
I have already created a file structure for you to follow.
For the front end I require:
•	Display list of the account from the backend [GET /accounts]
•	Form to add new accounts [name, and number]
•	We need two buttons: Add [to submit the form], and cancel[to the clear form]
•	The list should automatically update when new entries are made.

2.	Tech Requirements: ● Functional components only ● React Hooks: useState, useEffect ● Axios or Fetch API.

3.	For the backend:
•	Server data from GET /accounts
•	Accept new data via POST /accounts
•	Store all accounts in accounts.json file



## Project Structure

```
fullstack-accounts-app
├── client
│   ├── src
│   │   ├── App.js
│   │   ├── index.js
│   │   ├── components
│   │   │   ├── AccountList.js
│   │   │   └── AddAccountForm.js
│   │   └── api
│   │       └── accounts.js
│   ├── package.json
│   └── README.md
├── server
│   ├── index.js
│   ├── data
│   │   └── accounts.json
│   ├── package.json
│   └── README.md
└── README.md
```

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Client Setup

1. Navigate to the `client` directory:
   ```
   cd client
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Start the client application:
   ```
   npm start
   ```

### Server Setup

1. Navigate to the `server` directory:
   ```
   cd server
   ```

2. Install the dependencies:
   ```
   npm install
   ```

3. Start the server application:
   ```
   npm start
   ```

## Features

- Display a list of accounts fetched from the backend.
- Form to add new accounts with fields for name and number.
- Automatically updates the account list when new entries are made.

## License

This project is licensed under the MIT License.