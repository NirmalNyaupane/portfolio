"use client"

import { Mail, MapPin, Phone } from "lucide-react"
import type React from "react"

import { useState } from "react"


export const contactInfo = [{
    value: 'neupanenirmal417@gmail.com',
    icon: <Mail className="text-emerald-500" />
}, {
    value: '9821238476',
    icon: <Phone className="text-emerald-500" />
},
{
    value: 'Kathmandu Nepal',
    icon: <MapPin className="text-emerald-500" />
}
]

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prevState) => ({ ...prevState, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // Here you would typically send the form data to a server
        console.log("Form submitted:", formData)
        // Reset form after submission
        setFormData({ name: "", email: "", message: "" })
    }

    return (
        <section id="contact" className="py-20 animate-on-scroll w-full relative">
            <div className="absolute inset-0 bg-gray-950"></div>
            {/* contact illustration */}
            <div className="absolute inset-0 opacity-10 text-white">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="skill-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                            <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
                            <path d="M50 30 L50 70 M30 50 L70 50" stroke="currentColor" strokeWidth="2" />
                        </pattern>
                    </defs>
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#skill-pattern)" />
                </svg>
            </div>


            <div className="container mx-auto px-4 w-full relative z-10">
                <h2 className="text-3xl font-bold mb-8 text-emerald-500">Keep In Touch.</h2>
                <div className="flex md:flex-row w-full">
                    <div
                        className="border-l-4 border-emerald-500 pl-4 animate-slideIn w-[50%]"
                        style={{ animationDelay: `${0.1}s` }}
                    >
                        <h3 className="text-2xl font-bold text-emerald-400">Contact Information</h3>
                        <div className="mt-6">
                            {
                                contactInfo.map((info, index) => (
                                    <div key={index} className="flex items-center mb-2 gap-3">
                                        {info.icon}
                                        <p className="font-bold text-lg text-white">{info.value}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>


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
                    </form>

                </div>
            </div>
        </section>
    )
}

