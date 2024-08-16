import React from 'react';

function Home() {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-blue-600 text-white py-20">
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl font-bold">Welcome to Our Church</h1>
                    <p className="mt-4 text-lg">Join us for worship, community, and spiritual growth.</p>
                    <a href="/services" className="mt-8 inline-block bg-white text-blue-600 py-3 px-6 rounded-full font-semibold">
                        Discover Our Services
                    </a>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-20 bg-gray-100">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-800">About Our Church</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        We are a community committed to loving God and loving people. Our mission is to serve and uplift
                        everyone we encounter.
                    </p>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        We offer a variety of services for all ages and stages of life.
                    </p>
                    <div className="mt-8 flex justify-center space-x-8">
                        <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
                            <div className="p-4">
                                <h3 className="text-2xl font-bold text-gray-800">Sunday Worship</h3>
                                <p className="mt-2 text-gray-600">Join us every Sunday at 10 AM for a time of worship and teaching.</p>
                            </div>
                        </div>
                        <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
                            <div className="p-4">
                                <h3 className="text-2xl font-bold text-gray-800">Bible Study</h3>
                                <p className="mt-2 text-gray-600">Dive deep into the Word with our weekly Bible study sessions.</p>
                            </div>
                        </div>
                        <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
                            <div className="p-4">
                                <h3 className="text-2xl font-bold text-gray-800">Community Outreach</h3>
                                <p className="mt-2 text-gray-600">Be a part of our efforts to serve and uplift the community.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-blue-600 text-white">
                <div className="container mx-auto text-center">
                    <h2 className="text-4xl font-bold">Contact Us</h2>
                    <p className="mt-4 text-lg max-w-2xl mx-auto">
                        We'd love to hear from you! Whether you have a question or just want to say hello, feel free to reach out.
                    </p>
                    <a href="/contact" className="mt-8 inline-block bg-white text-blue-600 py-3 px-6 rounded-full font-semibold">
                        Get in Touch
                    </a>
                </div>
            </section>
        </div>
    );
}

export default Home;
