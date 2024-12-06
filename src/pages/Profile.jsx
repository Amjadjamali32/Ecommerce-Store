import React from 'react';

const Profile = () => {
    return (
        <div className="pt-20">
                <h1 className="text-3xl font-bold text-center mb-4 mt-4">Profile</h1>
                <div className="max-w-lg mx-auto bg-blue-400  text-white p-8 shadow-md rounded-md">
                    <h2 className="text-2xl font-normal mb-4">User Information</h2>
                    <div className="mb-4">
                        <label className="text-sm font-normal">Email:</label>
                        <p className="text-gray-700">user@example.com</p>
                    </div>
                    <div className="mb-4">
                        <label className="font-normal text-sm">Full Name:</label>
                        <p className="text-gray-700">John Doe</p>
                    </div>
                    <div className="mb-4">
                        <label className="text-sm font-normal">Joined:</label>
                        <p className="text-gray-700">January 1, 2024</p>
                    </div>
                </div>
        </div>
    );
};

export default Profile;
