# Fullstack Accounts Application

This project is a lightweight full stack application that allows users to manage accounts. It consists of a React frontend and a Node.js/Express backend.

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

1. Navigate to the client directory:
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

1. Navigate to the server directory:
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
- Add new accounts through a form with fields for name and number.
- Automatically update the account list when new entries are made.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes. 

## License

This project is licensed under the MIT License.