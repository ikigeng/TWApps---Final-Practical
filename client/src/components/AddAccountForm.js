import React, { useState } from 'react';

const AddAccountForm = ({ onAddAccount }) => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && number) {
            onAddAccount({ name, number });
            setName('');
            setNumber('');
        }
    };

    const handleCancel = () => {
        setName('');
        setNumber('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Number:
                    <input
                        type="text"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        required
                    />
                </label>
            </div>
            <button type="submit">Add Account</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
        </form>
    );
};

export default AddAccountForm;