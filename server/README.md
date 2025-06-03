# Full Stack Accounts Application

This project is a lightweight full stack application that allows users to manage a list of accounts. It consists of a React frontend and a Node.js/Express backend.

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

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd fullstack-accounts-app
   ```

2. Navigate to the server directory and install dependencies:
   ```
   cd server
   npm install
   ```

3. Navigate to the client directory and install dependencies:
   ```
   cd ../client
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```
   cd server
   npm start
   ```

2. In a new terminal, start the frontend application:
   ```
   cd client
   npm start
   ```

### Usage

- The application allows users to view a list of accounts and add new accounts through a form.
- The list of accounts will automatically update when new entries are made.

### Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

### License

This project is licensed under the MIT License.