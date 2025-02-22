import { Mail, MapPin, Phone } from "lucide-react"

import ContactUsForm from "./contact-us-form"


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
                    <ContactUsForm />
                </div>
            </div>
        </section>
    )
}

