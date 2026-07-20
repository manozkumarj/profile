import React, { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import toast from "react-hot-toast";
import api from '../api/axios';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Prevent multiple submissions
        if (isSubmitting) {
            toast.error("Multiple submissions are not allowed.");
            return;
        }

        setIsSubmitting(true);

        // Handle form submission here
        const _name = formData.name.trim();
        const _email = formData.email.trim();
        const _message = formData.message.trim();

        if (!_name || !_email || !_message) {
            toast.error("Please fill in all fields.");
            setIsSubmitting(false);
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(_email)) {
            toast.error("Please enter a valid email address.");
            setIsSubmitting(false);
            return;
        }

        if (_name.length > 64) {
            toast.error("Name is too long. Please enter a name less than 64 characters.");
            setIsSubmitting(false);
            return;
        }

        if (_email.length > 64) {
            toast.error("Email is too long. Please enter an email less than 64 characters.");
            setIsSubmitting(false);
            return;
        }

        if (_message.length > 1000) {
            toast.error("Message is too long. Please enter a message less than 1000 characters.");
            setIsSubmitting(false);
            return;
        }

        // console.log('Form submitted:', formData);

        await api.post('/send-email', {
            name: _name,
            email: _email,
            message: _message
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            // console.log("response --> ", res);
            if (res.status === 200) {
                toast.success("Message sent successfully!");
                setFormData({ name: '', email: '', message: '' });
            } else {
                toast.error("Failed to send message. Please try again later.");
            }
        }).catch(() => {
            toast.error("An error occurred. Please try again later.");
            setIsSubmitting(false);
        }).finally(() => {
            setIsSubmitting(false);
        });
    };

    // const notify = () => toast.success("Here is your toast.");

    return (
        <div className="pb-2 px-4 sm:px-6 lg:px-8" id="contact">
            <div className="max-w-7xl mx-auto">
                {/* Main heading */}
                <div className="max-w-7xl mx-auto flex max-lg:flex-col max-lg:gap-6">
                    <div className="w-1/2 max-lg:w-full">
                        <div className="max-lg:text-center max-md:mb-8 mb-16 max-lg:mb-8">
                            <h1 className="text-5xl max-lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight mb-2">Contact me</h1>
                        </div>

                        <div className="w-full">

                            {/* Contact Information - Left Side */}
                            <div className="lg:col-span-1 max-lg:flex max-lg:justify-center max-lg:items-center">
                                <div className="space-y-8">
                                    {/* Email Section */}
                                    <div className="text-left max-lg:text-center">
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight mb-1">Email</h3>
                                        <a
                                            href="mailto:manoj76342@gmail.com"
                                            className="text-gray-600 dark:text-gray-400 font-medium hover:text-gray-700 transition-colors duration-200 tracking-wide"
                                        >
                                            manoj76342@gmail.com
                                        </a>
                                    </div>

                                    {/* Address Section */}
                                    <div className="text-left max-lg:text-center">
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight mb-1">Address</h3>
                                        <div className="text-gray-600 dark:text-gray-400 font-medium tracking-wide max-lg:flex">
                                            <div>Jagtial, Telangana,</div>
                                            <div>India</div>
                                        </div>
                                    </div>

                                    {/* Social Section */}
                                    <div className="text-left max-lg:text-center">
                                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white leading-tight mb-2">Social</h3>
                                        <div className="flex justify-start space-x-4">
                                            <a
                                                href="mailto:manoj76342@gmail.com"
                                                className="w-12 h-12 bg-orange-500 border border-zinc-50 rounded-lg flex items-center justify-center text-white hover:bg-orange-600 transition-all duration-200 hover:scale-110"
                                            >
                                                <Mail size={20} />
                                            </a>
                                            {/* <a
                                        href="#"
                                        className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center text-white hover:bg-gray-700 transition-all duration-200 hover:scale-110"
                                    >
                                        <Instagram size={20} />
                                    </a> */}
                                            <a
                                                href="https://github.com/manozkumarj"
                                                target='_blank'
                                                className="w-12 h-12 bg-gray-800 border border-zinc-50 rounded-lg flex items-center justify-center text-white hover:bg-gray-900 transition-all duration-200 hover:scale-110"
                                            >
                                                <Github size={20} />
                                            </a>
                                            <a
                                                target='_blank'
                                                href="https://linkedin.com/in/manozkumarj"
                                                className="w-12 h-12 bg-blue-600 border border-zinc-50 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-all duration-200 hover:scale-110"
                                            >
                                                <Linkedin size={20} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form - Right Side */}
                    <div className="lg:col-span-2 max-lg:px-6">
                        <div className="mb-8">
                            <h2 className="text-3xl max-lg:mt-8 max-lg:text-4xl max-md:font-bold max-lg:text-center font-semibold text-gray-900 dark:text-white mb-1">Connect with me</h2>
                            <p className="text-gray-600 max-lg:mt-3 max-lg:text-center dark:text-gray-400 text-lg">
                                If you want to know more about me or my work, or if you would just like to say 'hello', send me a message. I'd love to hear from you.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-white leading-tight mb-2">
                                    Name*
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    disabled={isSubmitting}
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 text-black dark:text-white placeholder-gray-400 rounded-lg border-2 border-zinc-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all duration-200"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-white leading-tight mb-2">
                                    Email*
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    disabled={isSubmitting}
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 text-black dark:text-white placeholder-gray-400 rounded-lg border-2 border-zinc-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all duration-200"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-white leading-tight mb-2">
                                    Message* (Max 1000 characters)
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    disabled={isSubmitting}
                                    rows={6}
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Enter your message"
                                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 text-black dark:text-white placeholder-gray-400 rounded-lg border-2 border-zinc-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none resize-vertical transition-all duration-200"
                                />
                            </div>

                            <div className="flex flex-col sm:flex-row justify-between items-start max-md:justify-center max-md:items-center gap-4">
                                <a
                                    href="mailto:manoj76342@gmail.com"
                                    className="max-md:hidden text-gray-900 underline hover:text-gray-600 dark:text-gray-400 transition-colors duration-200"
                                >
                                    Send me email directly
                                </a>
                                <button
                                    type="submit"
                                    // onClick={notify}
                                    disabled={isSubmitting}
                                    className="flex items-centerw-full sm:w-auto px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none transition-all duration-200 shadow-lg hover:shadow-xl"
                                >
                                    {isSubmitting && (
                                        <div
                                            className={`inline-block size-6 mr-3 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-white motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white`}
                                            role="status"
                                        >
                                            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                                                Loading...
                                            </span>
                                        </div>
                                    )}
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
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