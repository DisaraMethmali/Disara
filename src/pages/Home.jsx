import React from 'react'
import { Mail, Phone, Linkedin, Github, MapPin, ExternalLink } from 'lucide-react'

export default function Home() {
  const skills = {
    backend: ['Java', 'Node.js', 'PHP', 'Flask', 'Python', 'Go Lang', 'C#'],
    frontend: ['React', 'JavaScript', 'Angular', 'Next.js'],
    databases: ['MySQL', 'MongoDB', 'Firebase'],
    mobile: ['Kotlin', 'React Native'],
    tools: ['Git', 'Figma', 'VS Code', 'Docker', 'Jira']
  }

  const projects = [
    {
      title: 'Personal Finance Tracker System',
      description: 'Secure financial management system with role-based authentication, expense tracking, budgeting, and real-time insights.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'MUI'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'GoRoute - Transportation System',
      description: 'Public transport reservation system with high security and performance standards.',
      tech: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Learning Management System',
      description: 'Complete LMS with student and admin roles for course management and progress tracking.',
      tech: ['Flask', 'React', 'MySQL', 'Tailwind CSS'],
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'INSIGHT EYE',
      description: 'React Native learning platform for visually impaired students using voice commands.',
      tech: ['React Native', 'Firebase', 'Google API'],
      color: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="relative px-6 py-24 mx-auto max-w-7xl lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
              <span className="block">DISARA METHMALI</span>
              <span className="block mt-2 text-3xl sm:text-4xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Software Engineering Intern
              </span>
            </h1>
            <p className="max-w-2xl mx-auto mt-6 text-lg text-gray-300">
              Passionate software engineering student with expertise in full-stack development, 
              seeking opportunities to contribute to innovative projects and solve complex problems.
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-4 mt-8 text-sm">
              <a href="mailto:disaramethmali1@gmail.com" className="flex items-center gap-2 px-4 py-2 text-white bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Mail className="w-4 h-4" />
                disaramethmali1@gmail.com
              </a>
              <a href="tel:+94715353455" className="flex items-center gap-2 px-4 py-2 text-white bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Phone className="w-4 h-4" />
                +94 715353455
              </a>
              <div className="flex items-center gap-2 px-4 py-2 text-white bg-white/10 rounded-full">
                <MapPin className="w-4 h-4" />
                Malabe, Sri Lanka
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mt-6">
              <a href="#" className="p-3 text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-full hover:scale-110 transition-transform">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="p-3 text-white bg-gradient-to-r from-gray-700 to-gray-800 rounded-full hover:scale-110 transition-transform">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-16 mx-auto max-w-7xl lg:px-8">
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-3xl p-8 backdrop-blur-lg border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
          <p className="text-gray-300 leading-relaxed">
            I'm a motivated software engineering student at SLIIT with a CGPA of 3.46, passionate about web and software development. 
            I thrive on understanding industry workflows, fixing bugs, and solving complex problems. With a strong foundation in 
            multiple programming languages and frameworks, I'm committed to continuous improvement and ready to contribute effectively 
            to dynamic, innovative teams.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 py-16 mx-auto max-w-7xl lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all">
              <h3 className="text-xl font-semibold text-white mb-4 capitalize">
                {category === 'backend' ? 'Backend Development' : 
                 category === 'frontend' ? 'Frontend Development' :
                 category === 'databases' ? 'Databases' :
                 category === 'mobile' ? 'Mobile Development' : 'Tools & Software'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span key={skill} className="px-3 py-1 text-sm bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white rounded-full border border-white/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="px-6 py-16 mx-auto max-w-7xl lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-10 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 p-6 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all hover:scale-[1.02]">
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
              <div className="relative">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className={`px-3 py-1 text-xs bg-gradient-to-r ${project.color} text-white rounded-full`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 mx-auto max-w-7xl lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Let's Work Together</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always excited to collaborate on innovative projects and contribute to dynamic teams. 
            Feel free to reach out if you'd like to discuss opportunities or just connect!
          </p>
          <div className="flex justify-center gap-4">
            <a href="mailto:disaramethmali1@gmail.com" className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:scale-105 transition-transform">
              Get In Touch
            </a>
            <a href="#" className="px-8 py-3 bg-white/10 text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-colors">
              View Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}