export default function Experience() {
  const experiences = [
    {
      title: "Node JS Developer",
      company: "E – Signature Pvt. Ltd.",
      period: "May, 2024 – Present",
      responsibilities: [
        "Develop multivendor ecommerce",
        "Integrated payment gateways such as Esewa, Khalti, and Stripe",
        "Optimized API performance using postgreSQL features",
        "Experience with deploying NodeJS applications using cloud platforms and tools",
        "Developed scalable chat applications using WebSocket, Redis Adapter, and RabbitMQ",
        "Participated in code reviews, bug tracking, and version control",
      ],
    },
    {
      title: "Full stack developer",
      company: "28softwares",
      period: "November, 2023 – April, 2024",
      responsibilities: [
        "Worked with senior developers to build full stack applications",
        "Developed robust and scalable APIs using Nest.js framework",
        "Built scalable web applications using React, Typescript, Next.js, Tailwind CSS, Shadcn/ui",
        "Gained proficiency in deploying production-ready applications",
        "Improved API performance and efficiency using caching techniques",
      ],
    },
    {
      title: "Frontend Developer intern",
      company: "LancemeUp",
      period: "June, 2023 – October, 2023",
      responsibilities: [
        "Learned about Nextjs and TypeScript",
        "Built UI using Tailwind CSS and component libraries such as MUI, ChakraUI",
        "Integrated Rest and GraphQL APIs on frontend",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 animate-slideIn text-emerald-500">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border-l-4 border-emerald-500 pl-4 animate-slideIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold text-emerald-400">{exp.title}</h3>
              <p className="text-gray-400 mb-2">
                {exp.company} | {exp.period}
              </p>
              <ul className="list-disc list-inside">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-gray-300">
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

