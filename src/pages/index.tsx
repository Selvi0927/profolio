import React, { useState, useEffect } from "react";
import Image from 'next/image';
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import { Download, Github, Linkedin, Mail, Code} from "lucide-react";

export default function Portfolio() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [activeIcon, setActiveIcon] = useState<string | null>(null);
  const [color, setColor] = useState("");
  const colors = ["text-orange-500", "text-red-500", "text-blue-500"];

  const projects = [
    {
      title:'Your Gateway to Strong Returns with Zentra Wealth',
      description:'Transforming financial goals into real wealth with smart strategies and personalized services for strong returns.',
      image: '/image.png'
    },
    {
      title: 'Church App website',
      description: 'A comprehensive dashboard for monitoring donations, prayer requests, user growth, and website visits, empowering community engagement and resource management.',
      image: '/image2.png'
    },
    {
      title: ' Urban Your One-Stop Home Services Solution',
      description: 'Uc Urban offers a variety of home services, including womens salon, mens salon, cleaning, pest control, and more.',
      image: '/image3.png'
    },
    {
      title: 'Discover Your Unique Style at My Life My Style',
      description: 'Explore a curated collection of fashion essentials, designed to elevate your wardrobe and express your personal style.',
      image: '/image4.png'
    },
  ]
  

  const handleDownload = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsDownloading(true);

    const link = document.createElement("a");
    link.href = "/selvi.pdf";
    link.download = "selvi.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => setIsDownloading(false), 2000);
  };

  const handleIconClick = (iconName: string, url: string) => {
    setActiveIcon(iconName);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const randomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    setColor(colors[randomIndex]);
  };

  useEffect(() => {
    randomColor();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-200 via-pink-200 via-blue-200 via-red-200 to-gray-200">
      {/* Navigation */}
      <nav className="sticky top-0 z-10 backdrop-blur-md bg-black/30 border-b border-white/20">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="font-light text-xl text-gray-800">
            My{" "}
            <span className="bg-gradient-to-r from-red-500 via-blue-500 to-orange-500 text-transparent bg-clip-text font-bold text-2xl">
              Portfolio
            </span>
          </Link>
          <ul className="hidden md:flex space-x-3">
            {['HOME', 'ABOUT', 'SKILLS', 'PORTFOLIO'].map((item) => (
              <li key={item}>
                <Link href={`#${item.toLowerCase()}`} className="text-gray-800 hover:text-blue-600 transition-colors text-ml">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-violet-300 via-pink-300 via-blue-300 via-red-300 to-gray-300">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <Image
            src="/selvi.png"
            alt="Profile"
            width={300}
            height={400}
            className="rounded-full mb-6"
          />
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
            Hello, I&apos;m <span className="text-blue-900">Thangaselvi!</span>
          </h1>
          <p className="text-2xl md:text-3xl mb-6 text-gray-700">
            I&apos;m a{" "}
            <span className={`${color}`}>
              <Typewriter
                words={[
                  "Web Designer",
                  "Photographer",
                  "Full Stack Developer",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                onType={() => randomColor()}
              />
            </span>
          </p>
          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className="bg-blue-600 text-white text-xl px-6 py-3 rounded-full inline-flex items-center hover:bg-blue-700 transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed mb-6"
          >
            {isDownloading ? "Downloading..." : "Download CV"}{" "}
            <Download className="ml-2" size={24} />
          </button>

          <div className="flex justify-center space-x-4 mb-8">
            {[
              { name: "github", icon: Github, url: "https://github.com/EricMartin" },
              { name: "linkedin", icon: Linkedin, url: "https://www.linkedin.com/in/ericmartin" },
              { name: "mail", icon: Mail, url: "mailto:eric@example.com" },
              { name: "leetcode", icon: Code, url: "https://leetcode.com/ericmartin" },
            ].map((social) => (
              <button
                key={social.name}
                onClick={() => handleIconClick(social.name, social.url)}
                className={`
                  ${activeIcon === social.name ? "text-blue-600 border-2 border-blue-600" : "hover:text-blue-600"}
                  transition-all duration-200 rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50
                `}
                aria-label={`Visit ${social.name}`}
              >
                <social.icon size={24} />
              </button>
            ))}
          </div>

          <div className="flex space-x-8">
            <div className="text-center">
              <h4 className="text-4xl font-bold text-gray-900 mb-2">4+</h4>
              <p className="text-sm text-gray-800">COMPUTER SCIENCE<br />YEARS OF EXPERIENCE</p>
            </div>
            <div className="text-center">
              <h4 className="text-4xl font-bold text-gray-900 mb-2">6+</h4>
              <p className="text-sm text-gray-800">PROJECTS<br />COMPLETED</p>
            </div>
            <div className="text-center">
              <h4 className="text-4xl font-bold text-gray-900 mb-2">20+</h4>
              <p className="text-sm text-gray-800">CERTIFICATE<br />COURSE COMPLETED</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* About Section */}
        <section id="about" className="mb-16">
          <div className="backdrop-blur-lg bg-white/70 rounded-xl p-8 shadow-lg">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">About</h2>
                <p className="text-gray-700 mb-4">
                  Graduating from Colorado State University with a chemistry degree in 2013, I landed an
                  opportunity to work at the forefront of analytical quantification methodologies for cannabis at
                  Nordic Analytic. Being in the first state to legalize cannabis in the U.S., I was among the
                  pioneering chemists in the cannabis testing industry, helping shape the methodologies we
                  use today. I&apos;m honored that my potency testing methodology was chosen by the state of
                  Colorado as the industry standard.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-16">
          <div className="backdrop-blur-lg bg-white/70 rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Education</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-blue-600">M.S. in Computer Science</h3>
                <p className="text-gray-700">Research Assistant with Dr. Indrakshi Ray</p>
                <p className="text-gray-700">Colorado State University</p>
                <p className="text-gray-700">Expected Graduation Date: May 2024</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-blue-600">B.S. in Computer Science (GPA 3.951)</h3>
                <p className="text-gray-700">Magna Cum Laude Distinction</p>
                <p className="text-gray-700">Colorado State University</p>
                <p className="text-gray-700">Dec 2022</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-16">
          <div className="backdrop-blur-lg bg-white/70 rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Competencies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Languages', items: ['Python', 'C++', 'Java', 'JavaScript', 'SQL'] },
                { title: 'Coding Methodologies', items: ['Test-Driven Development', 'Agile', 'Clean Code'] },
                { title: 'Project Management', items: ['SCRUM', 'GitHub', 'Kanban'] },
                { title: 'Interests', items: ['Software Engineering', 'Cyber-Security', 'Machine Learning'] },
                { title: 'Relevant Courses', items: ['Data Structures', 'Software Engineering in C++'] },
                { title: 'Development', items: ['Linux', 'Docker', 'React', 'Node.js'] },
              ].map((category) => (
                <div key={category.title} className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg p-4 shadow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
                  <ul className="list-disc list-inside text-gray-700">
                    {category.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="backdrop-blur-lg bg-white/70 rounded-xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">My latest projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project) => (
              <div key={project.title} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105">
                <div className="relative h-40 w-full">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    layout="fill"
                    objectFit="cover"
                    className="transition-opacity duration-300 hover:opacity-75"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">{project.title}</h3>
                  <p className="text-sm text-gray-700 line-clamp-3">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
      </main>
    </div>
  );
}