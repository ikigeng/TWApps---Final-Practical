const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;
const DATA_FILE = path.join(__dirname, 'data', 'accounts.json');

app.use(cors());
app.use(express.json());

// Helper to read accounts
function readAccounts() {
    try {
        const data = fs.readFileSync(DATA_FILE, 'utf-8');
        return JSON.parse(data || '[]');
    } catch {
        return [];
    }
}

// Helper to write accounts
function writeAccounts(accounts) {
    fs.writeFileSync(DATA_FILE, JSON.stringify(accounts, null, 2));
}

// GET /accounts
app.get('/accounts', (req, res) => {
    const accounts = readAccounts();
    res.json(accounts);
});

// POST /accounts
app.post('/accounts', (req, res) => {
    const { name, number } = req.body;
    if (!name || !number) {
        return res.status(400).json({ error: 'Name and number required' });
    }
    const accounts = readAccounts();
    accounts.push({ name, number });
    writeAccounts(accounts);
    res.status(201).json({ message: 'Account added' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});