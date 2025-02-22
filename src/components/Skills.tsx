export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["JavaScript", "TypeScript", "TailwindCSS", "React", "Next.js", "Redux"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "TypeScript", "Express.js", "NestJs", "GraphQL"],
    },
    {
      category: "DevOps",
      skills: ["Docker", "AWS"],
    },
    {
      category: "Database",
      skills: ["MySQL", "MongoDB", "PostgreSQL"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-gray-950 pattern-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 animate-slideIn text-emerald-500">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-md animate-slideIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-emerald-400">{category.category}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="text-gray-300">
                    {skill}
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

