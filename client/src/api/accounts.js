import axios from 'axios';

const API_URL = 'http://localhost:5000/accounts';

export const fetchAccounts = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const addAccount = async (account) => {
    const response = await axios.post(API_URL, account);
    return response.data;
};