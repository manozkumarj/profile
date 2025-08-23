import React, { useState } from 'react';
import { Mail, Instagram, Github, Linkedin } from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Main heading */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-2">Contact</h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

                    {/* Contact Information - Left Side */}
                    <div className="lg:col-span-1">
                        <div className="space-y-8">
                            {/* Email Section */}
                            <div className="text-left">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight mb-1">Email</h3>
                                <a
                                    href="mailto:manojmani517@gmail.com"
                                    className="text-gray-600 dark:text-gray-400 font-medium hover:text-gray-700 transition-colors duration-200 tracking-wide"
                                >
                                    manojmani517@gmail.com
                                </a>
                            </div>

                            {/* Address Section */}
                            <div className="text-left">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight mb-1">Address</h3>
                                <div className="text-gray-600 dark:text-gray-400 font-medium tracking-wide">
                                    <div>Jagtial, Telangana</div>
                                    <div>India</div>
                                </div>
                            </div>

                            {/* Social Section */}
                            <div className="text-left">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight mb-2">Social</h3>
                                <div className="flex justify-start space-x-4">
                                    <a
                                        href="mailto:manojmani517@gmail.com"
                                        className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white hover:bg-orange-600 transition-all duration-200 hover:scale-110"
                                    >
                                        <Mail size={20} />
                                    </a>
                                    <a
                                        href="#"
                                        className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center text-white hover:bg-gray-700 transition-all duration-200 hover:scale-110"
                                    >
                                        <Instagram size={20} />
                                    </a>
                                    <a
                                        href="#"
                                        className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-white hover:bg-gray-900 transition-all duration-200 hover:scale-110"
                                    >
                                        <Github size={20} />
                                    </a>
                                    <a
                                        href="#"
                                        className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-all duration-200 hover:scale-110"
                                    >
                                        <Linkedin size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form - Right Side */}
                    <div className="lg:col-span-2">
                        <div className="mb-8">
                            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-1">Connect with me</h2>
                            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                                If you want to know more about me or my work, or if you would just like to say hello, send me a message. I'd love to hear from you.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-white leading-tight mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    className="w-full px-4 py-3 bg-gray-700 text-white placeholder-gray-400 rounded-lg border-0 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all duration-200"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white leading-tight mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 bg-gray-700 text-white placeholder-gray-400 rounded-lg border-0 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all duration-200"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-white leading-tight mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Enter your message"
                                    className="w-full px-4 py-3 bg-gray-700 text-white placeholder-gray-400 rounded-lg border-0 focus:ring-2 focus:ring-indigo-500 focus:outline-none resize-vertical transition-all duration-200"
                                />
                            </div>

                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                <a
                                    href="mailto:manojmani517@gmail.com"
                                    className="text-gray-900 underline hover:text-gray-600 dark:text-gray-400 transition-colors duration-200"
                                >
                                    Send me email directly
                                </a>
                                <button
                                    type="submit"
                                    className="w-full sm:w-auto px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all duration-200 shadow-lg hover:shadow-xl"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;