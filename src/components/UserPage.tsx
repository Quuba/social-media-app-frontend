import React from 'react';

const UserPage = () => {
    return (
        <div>
            Hello {localStorage.getItem('username') || 'usernameNotSet'}
        </div>
    );
};

export default UserPage;