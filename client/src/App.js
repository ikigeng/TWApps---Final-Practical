import React, { useState, useEffect } from 'react';
import AddAccountForm from './components/AddAccountForm';
import axios from 'axios';

const App = () => {
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        fetchAccounts();
    }, []);

    const fetchAccounts = async () => {
        const res = await axios.get('/accounts');
        setAccounts(res.data);
    };

    const handleAddAccount = async (account) => {
        await axios.post('/accounts', account);
        fetchAccounts(); // Refresh list
    };

    return (
        <div>
            <AddAccountForm onAddAccount={handleAddAccount} />
            <ul>
                {accounts.map((acc, idx) => (
                    <li key={idx}>{acc.name} - {acc.number}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;