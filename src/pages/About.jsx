import React from 'react';

const AboutUs = () => {
    return (
        <div className="pt-10">
            <div className="py-16 px-4">
                <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
                <p className="text-lg text-center max-w-3xl mx-auto mb-6">
                    We are a team of passionate individuals dedicated to providing quality products and services to our customers. Our goal is to ensure customer satisfaction through innovative solutions and exceptional service.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className='shadow-lg rounded-md bg-gray-400 p-3'>
                        <h2 className="text-2xl font-semibold mb-4 text-white text-center">Our Mission</h2>
                        <p className="text-gray-700">
                            Our mission is to deliver products that meet the highest standards of quality and performance. We are committed to continuously improving our offerings to meet the needs of our customers.
                        </p>
                    </div>
                    <div className='shadow-lg rounded-md bg-gray-400 p-3'>
                        <h2 className="text-2xl font-semibold mb-4 text-white text-center">Our Vision</h2>
                        <p className="text-gray-700">
                            Our vision is to be a global leader in the industry, providing exceptional value to our customers and contributing to the communities we serve.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
