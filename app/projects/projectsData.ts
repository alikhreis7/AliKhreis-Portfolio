export type Project = {
  title: string;
  category: string;
  description: string;
  releaseDate: string;
  location: string;
  client: string;
  image: string;
  githubUrl?: string;
  websiteUrl?: string;
  features: string[];
  technologies: string[];
  longDescription: string;
}

export const projectsData: Record<string, Project> = {
  syllabussync: {
    title: "SyllabusSync",
    category: "Full Stack Development",
    description: "AI-powered academic companion that transforms academic life management through intelligent scheduling and syllabus analysis.",
    releaseDate: "December 2025",
    location: "Ottawa, ON",
    client: "Capstone Engineering Project",
    image: "/project1.jpg",
    githubUrl: "https://github.com/rabi3daoudd/SyllabusSync",
    features: [
      "AI-Powered Scheduling",
      "Google Calendar Integration",
      "Responsive Design",
      "Smart Deadline Management"
    ],
    technologies: [
      "Next.js & TypeScript",
      "Tailwind CSS",
      "Vercel",
      "OpenAI Assistant"
    ],
    longDescription: "SyllabusSync is an AI-powered academic companion, designed to transform the way you manage your academic life. It personalizes study schedules by integrating with Google Calendar, analyzing syllabi and assignment deadlines to predict optimal study sessions. Built with modern technologies and featuring a responsive design, it helps students stay ahead in their academic journey."
  },
  calculator: {
    title: "Calculator App",
    category: "Backend Development",
    description: "A robust calculator application implementing core arithmetic operations with a clean, user-friendly interface.",
    releaseDate: "October 2023",
    location: "Ottawa, ON",
    client: "Personal Project",
    image: "/calculator.jpg",
    githubUrl: "https://github.com/alikhreis7/Calculator",
    features: [
      "Basic Arithmetic Operations",
      "Decimal Number Support",
      "Clear Function",
      "Instant Result Display"
    ],
    technologies: [
      "Java",
      "Object-Oriented Programming",
      "Java Swing",
      "Java AWT"
    ],
    longDescription: "A comprehensive calculator application that handles essential mathematical operations. The app supports addition, subtraction, multiplication, and division, along with decimal number calculations. Features include a clear function for resetting calculations and an intuitive equal operation for immediate result display. Built with a focus on backend logic and data processing."
  },
  salon: {
    title: "Elegance Salon",
    category: "Frontend Development",
    description: "A modern salon website offering seamless service booking, expert selection, and business information access.",
    releaseDate: "June 2023",
    location: "Ottawa, ON",
    client: "SEG3125 Course Project",
    image: "/salon.jpg",
    githubUrl: "https://github.com/alikhreis7/alikhreis7.github.io",
    features: [
      "Interactive Service Booking System",
      "Expert Stylist Selection",
      "Service Price Calculator",
      "Business Hours & Location",
      "Responsive Design",
      "User Experience Optimization"
    ],
    technologies: [
      "HTML5 & CSS3",
      "JavaScript",
      "Bootstrap",
      "UI/UX Prototyping",
      "Responsive Design"
    ],
    longDescription: "Developed as part of the Analysis & Design of User Interfaces course (SEG3125), this salon website project focused on creating an intuitive user interface for service booking and business information access. The development process included creating initial prototypes, gathering user feedback, and implementing a high-fidelity version with improved human-machine interaction. The website allows users to easily book specific services with their preferred experts at convenient times, while also providing essential business information such as location, operating hours, and service pricing."
  },
  portfolio: {
    title: "Personal Portfolio",
    category: "Frontend Development",
    description: "A modern, responsive portfolio website showcasing professional work and skills with an emphasis on user experience and clean design.",
    releaseDate: "January 2025",
    location: "Ottawa, ON",
    client: "Personal Brand",
    image: "/portfoliopic.jpg",
    githubUrl: "https://github.com/alikhreis7/AliKhreis-Portfolio",
    features: [
      "Dynamic Project Showcase",
      "Responsive Design",
      "Interactive UI Elements",
      "Contact Form Integration",
      "Smooth Page Transitions",
      "Social Media Integration"
    ],
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel Deployment"
    ],
    longDescription: "A personal portfolio website built with modern web technologies, featuring a clean and minimalist design that prioritizes user experience. The site showcases professional projects through an intuitive interface, incorporating smooth animations and responsive layouts. Built using Next.js and TypeScript for robust performance, styled with Tailwind CSS for a polished look, and enhanced with Framer Motion for engaging animations. The portfolio demonstrates both technical expertise and design sensibility while serving as a platform for professional presentation."
  },
  fishingbc: {
    title: "British Columbia's Tidal/Saltwater Fishing App",
    category: "Full Stack Development",
    description: "BC's official fishing app providing digital licensing, real-time regulations, catch logging, and species identification for tidal waters.",
    releaseDate: "September 2022 - April 2023",
    location: "Ottawa, ON, Canada",
    client: "Fisheries and Oceans Canada",
    image: "/fishingbc.jpg",
    websiteUrl: "https://www.fishingbcapp.ca/",
    features: [
      "Digital Fishing License Display",
      "Personal Catch Log with Photos",
      "Up-to-Date Official Regulations",
      "Species Identification Guide",
      "Location-Based Regulations",
      "Closures and Contamination Alerts",
      "NRLS Account Integration",
      "Interactive Boundary Maps"
    ],
    technologies: [
      "HTML, CSS, JavaScript",
      "TypeScript",
      "Java",
      "SQL",
      "Spring Boot",
      "Oracle Database"
    ],
    longDescription: "Developed a full-stack fisheries app using HTML, CSS, JavaScript, TypeScript, Java, SQL, and Spring. Built Spring-based web applications with an Oracle database. Designed comprehensive client-side and server-side architecture, completing almost 50% of the system design. Underwent a complete software development life cycle from requirements gathering to deployment. Created by the Sport Fishing Institute of BC in partnership with Fisheries and Oceans Canada and supported by the Pacific Salmon Foundation, this app serves as BC's official tool for displaying valid BC Tidal Waters Sport Fishing Licences and recording catches."
  },
  cira: {
    title: "Internet Performance Test Tool",
    category: "React & TypeScript Development",
    description: "An embeddable Internet Performance Test (IPT) tool enabling users to test connection speeds and monitor internet performance across Canada.",
    releaseDate: "May 2023 - September 2023",
    location: "Ottawa, ON, Canada",
    client: "CIRA (Canadian Internet Registration Authority)",
    image: "/cira.jpg",
    websiteUrl: "https://performance.cira.ca/",
    features: [
      "Real-Time Speed Testing",
      "Upload/Download Measurement",
      "Latency Analysis",
      "Browser Extension Integration",
      "Embeddable Widget",
      "Enhanced Data Collection",
      "Cross-Browser Compatibility",
      "Performance Analytics Dashboard"
    ],
    technologies: [
      "React (TypeScript)",
      "Python",
      "SQL",
      "JavaScript",
      "Agile Development",
      "Browser Extension APIs"
    ],
    longDescription: "Developed an embeddable version of the Internet Performance Test (IPT) tool using React (TypeScript), Python, and SQL. Collaborated with the development team to enhance the application's data collection capabilities, resulting in increased and diversified internet performance data from millions of users across Canada. Successfully integrated the embeddable IPT tool into a security-focused browser extension, expanding its usability and reach to a broader audience. Exemplified Agile development principles by presenting new ideas and providing daily updates on work progress throughout the development of the Internet Performance Test (IPT) tool. The tool drove 35% user growth while improving data collection and enhancing insights into Canadian internet performance."
  },
  agroclimate: {
    title: "SQ - Agroclimate Impact Reporter",
    category: "GIS & Data Development",
    description: "A web-based GIS tool for automated data processing, spatial analysis, and reporting on agroclimate impacts across Canada.",
    releaseDate: "May 2024 - November 2024",
    location: "Ottawa, ON, Canada",
    client: "Agriculture and Agri-Food Canada",
    image: "/agroclimate.jpg",
    websiteUrl: "https://survey123.arcgis.com/share/f9f94b54b524475d80dc39c02c89532a?portalUrl=https://www.arcgis.com",
    features: [
      "Interactive GIS Mapping",
      "Automated Data Processing",
      "Spatial Analysis Tools",
      "Location-Based Reporting",
      "Real-Time Data Integration",
      "Multi-Location Survey Support",
      "Data Quality Checks",
      "ArcGIS/Survey123 Integration"
    ],
    technologies: [
      "Python (Programming Language)",
      "SQL",
      "JavaScript",
      "React",
      "ArcGIS/Survey123",
      "GIS Databases"
    ],
    longDescription: "Built and maintained GIS databases, automated data processing workflows, and developed web-based tools for improved accessibility. Conducted spatial analysis, created maps, and integrated data to support decision-making for agricultural climate impact assessment. Enhanced data accuracy and efficiency through ArcGIS/Survey123 and quality checks. Automated GIS data processing with Python, SQL, and JavaScript, boosting efficiency by 35%. Developed web-based mapping tools using JavaScript and React, increasing user engagement by 40% and improving data accuracy. The tool enables farmers and agricultural stakeholders to report agroclimate conditions across multiple locations, helping to build a comprehensive database for better agricultural planning and climate resilience."
  },
  linearregression: {
    title: "Linear Regression Machine Learning Model",
    category: "Machine Learning",
    description: "A machine learning project implementing linear regression algorithms to predict outcomes based on training data.",
    releaseDate: "January 2025",
    location: "Ottawa, ON",
    client: "Personal Project",
    image: "/linearregression.jpg",
    githubUrl: "https://github.com/alikhreis7/Linear-RegressionHW",
    features: [
      "Linear Regression Implementation",
      "Data Preprocessing",
      "Model Training & Testing",
      "Performance Metrics",
      "Data Visualization",
      "Prediction Engine"
    ],
    technologies: [
      "Python",
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "Matplotlib",
      "Jupyter Notebook"
    ],
    longDescription: "A comprehensive machine learning project focused on implementing and understanding linear regression algorithms. The project includes data preprocessing, feature engineering, model training, and evaluation using standard ML metrics. Built with Python and popular data science libraries, it demonstrates the fundamentals of supervised learning and predictive modeling. The implementation includes visualization of results and performance analysis to understand model behavior and accuracy."
  }
} 