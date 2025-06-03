import React from 'react';

const AccountList = ({ accounts }) => {
    return (
        <div>
            <h2>Account List</h2>
            <ul>
                {accounts.map((account, index) => (
                    <li key={index}>
                        {account.name} - {account.number}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AccountList;