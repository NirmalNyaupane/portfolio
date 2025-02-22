'use client'
import React, { useState } from 'react'
import { sendEmail } from '../actions/send-mail';

const ContactUsForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [status, setStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({ type: null, message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prevState) => ({ ...prevState, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setStatus({ type: null, message: '' });
        const result = await sendEmail(formData);
        setStatus({
            type: result.success ? 'success' : 'error',
            message: result.message,
        });

        if (result.success) {
            setFormData({
                name: '',
                email: '',
                message: ''
            })
        }
    }
    return (
        <form onSubmit={handleSubmit} className="w-[50%]">
            <div className="mb-4">
                <label htmlFor="name" className="block text-emerald-400 mb-2">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 text-gray-300 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-emerald-400 mb-2">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 text-gray-300 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block text-emerald-400 mb-2">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 text-gray-300 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                ></textarea>
            </div>
            <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
            >
                Send Message
            </button>
            {status.message && (
                <div
                    className={`p-4 rounded ${status.type === 'success' ? 'text-green-500' : 'text-red-500'
                        }`}
                >
                    {status.message}
                </div>
            )}
        </form>
    )
}

export default ContactUsForm