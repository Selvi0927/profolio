import React, { useState, useEffect } from "react";
import Image from 'next/image';
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import { Download, Github, Linkedin, Mail, Code,  UserRound} from "lucide-react";
 
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
  const technologies = [
    { name: "HTML", logo: "https://benscott.dev/imgs/html.6aa56206be02cf6404844871df1d2da6.png", position: "col-start-1" },
    { name: "JAVASCRIPT", logo: "https://benscott.dev/imgs/js.f8a28e905c78dadb79434b7ceebd52a0.png", position: "col-start-2" },
    { name: "TYPESCRIPT", logo: "data:image/png;base64,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", position: "col-start-3" },
    { name: "REACT", logo: "https://benscott.dev/imgs/react.cb15bfce2a9004ce61c5f79f805b067b.png", position: "col-start-1" },
    { name: "CSS", logo: "https://benscott.dev/imgs/css.0ce0f0a2b4c4aa34b64c40e5278af3d1.png", position: "col-start-2" },
    { name: "NEXT.JS", logo: "https://benscott.dev/imgs/nextjs.ff373e2ef4f7fdf152425a8c5c30816c.png", position: "col-start-3" },
    { name: "EXPRESS.JS", logo: "https://benscott.dev/imgs/express.1eca086d2a78b4be3dd1f0a47b84b618.png", position: "col-start-1" },
    { name: "MONGODB", logo: "https://benscott.dev/imgs/mongo.41ae1969f341d30268a13d57846efcc6.png", position: "col-start-2" },
    { name: "NODE.JS", logo: "https://benscott.dev/imgs/node.94a06c4b9dd29e984501e6407e77a918.png", position: "col-start-3" },
    { name: "GIT", logo: "https://benscott.dev/imgs/git.3092b5991e8accb9e7c36817c048a8d5.png", position: "col-start-2 row-start-4" },
  ];
 
 
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
              { name: "github", icon: Github, url: "https://github.com/Selvi0927" },
              { name: "linkedin", icon: Linkedin, url: "https://www.linkedin.com/in/thangaselvi-t-a-656667236"},
              { name: "mail", icon: Mail, url: "mailto:balaselvi0927@gmail.com " },
              { name: "leetcode", icon: Code, url: "https://leetcode.com/u/balaselvi0927/" },
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
        <section id="about">
        <h2 className="text-6xl font-bold text-gray-900 mt-4">About</h2>
 
  <div className="min-h-screen text-black flex flex-col md:flex-row items-center justify-center px-6 mt-6">
   
    {/* Left Side - Profile & Description */}
    <div className="flex flex-col items-center space-y-6 md:w-1/2 text-left md:text-left ">
      {/* Profile Image (Replace with actual image or SVG) */}
      <UserRound size={100} />
      {/* Description */}
      <p className="text-center md:text-left text-lg font-light">
        In 2025, I graduated from the SCAD College of Engineering and Technology at Anna University with a degree in Computer Science and Engineering. Eager to apply my skills in the tech industry, I quickly stepped into the role of a full stack developer. In this capacity, I have had the opportunity to work on diverse projects, integrating both front-end and back-end technologies to create seamless user experiences. My training has equipped me with a solid foundation in various programming languages and frameworks, allowing me to contribute effectively to innovative software solutions. I am excited about the possibilities that lie ahead in my career and look forward to making a meaningful impact in the tech world.
      </p>
    </div>
 
    {/* Right Side - Tech Stack */}
    <div className="grid grid-cols-3 gap-3 max-w-2xl mx-auto md:ml-auto md:mt-0 mt-8">
      {technologies.map((tech, index) => (
        <div
          key={tech.name}
          className={`relative p-4 rounded-lg ${tech.position} group`}
        >
          <div className="absolute inset-0 rounded-lg" />
          <div className="relative flex flex-col items-center justify-center space-y-2 bg-black rounded-lg p-4">
            <div className="w-10 h-10 relative">
              <Image
                src={tech.logo}
                alt={`${tech.name} logo`}
                fill
                className="object-contain"
              />
            </div>
            <span className="text-white text-sm font-medium">{tech.name}</span>
          </div>
        </div>
      ))}
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
                { title: 'Languages', items: ['Python', 'C , C++', 'Java', 'JavaScript,Typescript', 'SQL'] },
                { title: 'Project Management', items: ['SCRUM', 'GitHub',] },
                { title: 'Interests', items: ['Software Engineering', 'Software Development','Artificial Intelligence'] },
                { title: 'Relevant Courses', items:['Python - GUVI', 'Programming in java - NPTEL',' SQL for Beginners - Udemy',' The Joy of Computing Using Python - NPTEL ','Introducion To AI - Skill Up'] },
                { title: 'Development', items: ['Linux', 'Nextjs', 'React', 'Node.js'] },
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