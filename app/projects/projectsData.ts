export type Project = {
  titleKey: string;
  categoryKey: string;
  descriptionKey: string;
  releaseDate: string;
  location: string;
  clientKey: string;
  image: string;
  additionalImages?: string[];
  githubUrl?: string;
  websiteUrl?: string;
  featuresKeys: string[];
  technologies: string[];
  longDescriptionKey: string;
}

export const projectsData: Record<string, Project> = {
  syllabussync: {
    titleKey: "projectData.syllabussync.title",
    categoryKey: "projectData.syllabussync.category",
    descriptionKey: "projectData.syllabussync.description",
    releaseDate: "December 2025",
    location: "Ottawa, ON",
    clientKey: "projectData.syllabussync.client",
    image: "/project1.jpg",
    githubUrl: "https://github.com/rabi3daoudd/SyllabusSync",
    websiteUrl: "https://ssync.ca",
    featuresKeys: [
      "projectData.syllabussync.feature1",
      "projectData.syllabussync.feature2",
      "projectData.syllabussync.feature3",
      "projectData.syllabussync.feature4"
    ],
    technologies: ["Next.js & TypeScript", "Tailwind CSS", "Vercel", "OpenAI Assistant"],
    longDescriptionKey: "projectData.syllabussync.longDesc"
  },
  calculator: {
    titleKey: "projectData.calculator.title",
    categoryKey: "projectData.calculator.category",
    descriptionKey: "projectData.calculator.description",
    releaseDate: "October 2023",
    location: "Ottawa, ON",
    clientKey: "projectData.calculator.client",
    image: "/calculator.jpg",
    githubUrl: "https://github.com/alikhreis7/Calculator",
    featuresKeys: [
      "projectData.calculator.feature1",
      "projectData.calculator.feature2",
      "projectData.calculator.feature3",
      "projectData.calculator.feature4"
    ],
    technologies: ["Java", "Object-Oriented Programming", "Java Swing", "Java AWT"],
    longDescriptionKey: "projectData.calculator.longDesc"
  },
  salon: {
    titleKey: "projectData.salon.title",
    categoryKey: "projectData.salon.category",
    descriptionKey: "projectData.salon.description",
    releaseDate: "June 2023",
    location: "Ottawa, ON",
    clientKey: "projectData.salon.client",
    image: "/salon.jpg",
    githubUrl: "https://github.com/alikhreis7/alikhreis7.github.io",
    featuresKeys: [
      "projectData.salon.feature1",
      "projectData.salon.feature2",
      "projectData.salon.feature3",
      "projectData.salon.feature4",
      "projectData.salon.feature5",
      "projectData.salon.feature6"
    ],
    technologies: ["HTML5 & CSS3", "JavaScript", "Bootstrap", "UI/UX Prototyping", "Responsive Design"],
    longDescriptionKey: "projectData.salon.longDesc"
  },
  portfolio: {
    titleKey: "projectData.portfolio.title",
    categoryKey: "projectData.portfolio.category",
    descriptionKey: "projectData.portfolio.description",
    releaseDate: "January 2025",
    location: "Ottawa, ON",
    clientKey: "projectData.portfolio.client",
    image: "/portfoliopic.jpg",
    githubUrl: "https://github.com/alikhreis7/AliKhreis-Portfolio",
    websiteUrl: "https://www.alikhreis.ca",
    featuresKeys: [
      "projectData.portfolio.feature1",
      "projectData.portfolio.feature2",
      "projectData.portfolio.feature3",
      "projectData.portfolio.feature4",
      "projectData.portfolio.feature5",
      "projectData.portfolio.feature6"
    ],
    technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel Deployment"],
    longDescriptionKey: "projectData.portfolio.longDesc"
  },
  fishingbc: {
    titleKey: "projectData.fishingbc.title",
    categoryKey: "projectData.fishingbc.category",
    descriptionKey: "projectData.fishingbc.description",
    releaseDate: "September 2022 - April 2023",
    location: "Ottawa, ON, Canada",
    clientKey: "projectData.fishingbc.client",
    image: "/fishingbc.jpg",
    websiteUrl: "https://www.fishingbcapp.ca/",
    featuresKeys: [
      "projectData.fishingbc.feature1",
      "projectData.fishingbc.feature2",
      "projectData.fishingbc.feature3",
      "projectData.fishingbc.feature4",
      "projectData.fishingbc.feature5",
      "projectData.fishingbc.feature6",
      "projectData.fishingbc.feature7",
      "projectData.fishingbc.feature8"
    ],
    technologies: ["HTML, CSS, JavaScript", "TypeScript", "Java", "SQL", "Spring Boot", "Oracle Database"],
    longDescriptionKey: "projectData.fishingbc.longDesc"
  },
  cira: {
    titleKey: "projectData.cira.title",
    categoryKey: "projectData.cira.category",
    descriptionKey: "projectData.cira.description",
    releaseDate: "May 2023 - September 2023",
    location: "Ottawa, ON, Canada",
    clientKey: "projectData.cira.client",
    image: "/cira.jpg",
    websiteUrl: "https://performance.cira.ca/",
    featuresKeys: [
      "projectData.cira.feature1",
      "projectData.cira.feature2",
      "projectData.cira.feature3",
      "projectData.cira.feature4",
      "projectData.cira.feature5",
      "projectData.cira.feature6",
      "projectData.cira.feature7",
      "projectData.cira.feature8"
    ],
    technologies: ["React (TypeScript)", "Python", "SQL", "JavaScript", "Agile Development", "Browser Extension APIs"],
    longDescriptionKey: "projectData.cira.longDesc"
  },
  agroclimate: {
    titleKey: "projectData.agroclimate.title",
    categoryKey: "projectData.agroclimate.category",
    descriptionKey: "projectData.agroclimate.description",
    releaseDate: "May 2024 - November 2024",
    location: "Ottawa, ON, Canada",
    clientKey: "projectData.agroclimate.client",
    image: "/agroclimate.jpg",
    websiteUrl: "https://survey123.arcgis.com/share/f9f94b54b524475d80dc39c02c89532a?portalUrl=https://www.arcgis.com",
    featuresKeys: [
      "projectData.agroclimate.feature1",
      "projectData.agroclimate.feature2",
      "projectData.agroclimate.feature3",
      "projectData.agroclimate.feature4",
      "projectData.agroclimate.feature5",
      "projectData.agroclimate.feature6",
      "projectData.agroclimate.feature7",
      "projectData.agroclimate.feature8"
    ],
    technologies: ["Python", "SQL", "JavaScript", "React", "ArcGIS/Survey123", "GIS Databases"],
    longDescriptionKey: "projectData.agroclimate.longDesc"
  },
  linearregression: {
    titleKey: "projectData.linearregression.title",
    categoryKey: "projectData.linearregression.category",
    descriptionKey: "projectData.linearregression.description",
    releaseDate: "January 2026",
    location: "Ottawa, ON",
    clientKey: "projectData.linearregression.client",
    image: "/linearregression.jpg",
    githubUrl: "https://github.com/alikhreis7/Linear-RegressionHW",
    featuresKeys: [
      "projectData.linearregression.feature1",
      "projectData.linearregression.feature2",
      "projectData.linearregression.feature3",
      "projectData.linearregression.feature4",
      "projectData.linearregression.feature5",
      "projectData.linearregression.feature6"
    ],
    technologies: ["Python", "NumPy", "Pandas", "Scikit-learn", "Matplotlib", "Jupyter Notebook"],
    longDescriptionKey: "projectData.linearregression.longDesc"
  },
  logisticregression: {
    titleKey: "projectData.logisticregression.title",
    categoryKey: "projectData.logisticregression.category",
    descriptionKey: "projectData.logisticregression.description",
    releaseDate: "January 2026",
    location: "Ottawa, ON",
    clientKey: "projectData.logisticregression.client",
    image: "/logisticregression.jpg",
    githubUrl: "https://github.com/alikhreis7/Logistic-Regression",
    featuresKeys: [
      "projectData.logisticregression.feature1",
      "projectData.logisticregression.feature2",
      "projectData.logisticregression.feature3",
      "projectData.logisticregression.feature4",
      "projectData.logisticregression.feature5",
      "projectData.logisticregression.feature6"
    ],
    technologies: ["Python", "NumPy", "Pandas", "Statsmodels", "Seaborn", "Scikit-learn"],
    longDescriptionKey: "projectData.logisticregression.longDesc"
  },
  neuralnetworks: {
    titleKey: "projectData.neuralnetworks.title",
    categoryKey: "projectData.neuralnetworks.category",
    descriptionKey: "projectData.neuralnetworks.description",
    releaseDate: "January 2026",
    location: "Ottawa, ON",
    clientKey: "projectData.neuralnetworks.client",
    image: "/neuralnetworks.jpg",
    githubUrl: "https://github.com/alikhreis7/Regularization-Propagation-Neural-Networks",
    featuresKeys: [
      "projectData.neuralnetworks.feature1",
      "projectData.neuralnetworks.feature2",
      "projectData.neuralnetworks.feature3",
      "projectData.neuralnetworks.feature4",
      "projectData.neuralnetworks.feature5",
      "projectData.neuralnetworks.feature6"
    ],
    technologies: ["Python", "NumPy", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
    longDescriptionKey: "projectData.neuralnetworks.longDesc"
  },
  unsupervisedlearning: {
    titleKey: "projectData.unsupervisedlearning.title",
    categoryKey: "projectData.unsupervisedlearning.category",
    descriptionKey: "projectData.unsupervisedlearning.description",
    releaseDate: "January 2026",
    location: "Ottawa, ON",
    clientKey: "projectData.unsupervisedlearning.client",
    image: "/unsupervisedlearning.jpg",
    githubUrl: "https://github.com/alikhreis7/Neural-Networks-and-Unsupervised-Learning",
    featuresKeys: [
      "projectData.unsupervisedlearning.feature1",
      "projectData.unsupervisedlearning.feature2",
      "projectData.unsupervisedlearning.feature3",
      "projectData.unsupervisedlearning.feature4",
      "projectData.unsupervisedlearning.feature5",
      "projectData.unsupervisedlearning.feature6"
    ],
    technologies: ["Python", "NumPy", "TensorFlow/Keras", "Scikit-learn", "Matplotlib", "Jupyter Notebook"],
    longDescriptionKey: "projectData.unsupervisedlearning.longDesc"
  },
  pinholecamera: {
    titleKey: "projectData.pinholecamera.title",
    categoryKey: "projectData.pinholecamera.category",
    descriptionKey: "projectData.pinholecamera.description",
    releaseDate: "January 2026",
    location: "Ottawa, ON",
    clientKey: "projectData.pinholecamera.client",
    image: "/pinholecamera.jpg",
    githubUrl: "https://github.com/alikhreis7/MV-Color-Pinhole-Camera-Simulator",
    featuresKeys: [
      "projectData.pinholecamera.feature1",
      "projectData.pinholecamera.feature2",
      "projectData.pinholecamera.feature3",
      "projectData.pinholecamera.feature4",
      "projectData.pinholecamera.feature5",
      "projectData.pinholecamera.feature6"
    ],
    technologies: ["MATLAB", "Linear Algebra", "Computer Vision", "Image Processing", "Camera Geometry", "Matrix Operations"],
    longDescriptionKey: "projectData.pinholecamera.longDesc"
  },
  edgedetection: {
    titleKey: "projectData.edgedetection.title",
    categoryKey: "projectData.edgedetection.category",
    descriptionKey: "projectData.edgedetection.description",
    releaseDate: "January 2026",
    location: "Ottawa, ON",
    clientKey: "projectData.edgedetection.client",
    image: "/edgedetection.jpg",
    githubUrl: "https://github.com/alikhreis7/MV-Study-of-Image-Filtering-and-Edge-Detection-Methods",
    featuresKeys: [
      "projectData.edgedetection.feature1",
      "projectData.edgedetection.feature2",
      "projectData.edgedetection.feature3",
      "projectData.edgedetection.feature4",
      "projectData.edgedetection.feature5",
      "projectData.edgedetection.feature6"
    ],
    technologies: ["MATLAB", "Image Processing Toolbox", "Signal Processing", "Computer Vision", "Statistical Analysis", "Digital Filtering"],
    longDescriptionKey: "projectData.edgedetection.longDesc"
  },
  motiondetection: {
    titleKey: "projectData.motiondetection.title",
    categoryKey: "projectData.motiondetection.category",
    descriptionKey: "projectData.motiondetection.description",
    releaseDate: "January 2026",
    location: "Ottawa, ON",
    clientKey: "projectData.motiondetection.client",
    image: "/motiondetection.jpg",
    githubUrl: "https://github.com/alikhreis7/MV-Motion-Detection-inimage-sequences",
    featuresKeys: [
      "projectData.motiondetection.feature1",
      "projectData.motiondetection.feature2",
      "projectData.motiondetection.feature3",
      "projectData.motiondetection.feature4",
      "projectData.motiondetection.feature5",
      "projectData.motiondetection.feature6"
    ],
    technologies: ["MATLAB", "Image Processing Toolbox", "Video Analysis", "Computer Vision", "Background Subtraction", "Temporal Filtering"],
    longDescriptionKey: "projectData.motiondetection.longDesc"
  },
  mvchallenge: {
    titleKey: "projectData.mvchallenge.title",
    categoryKey: "projectData.mvchallenge.category",
    descriptionKey: "projectData.mvchallenge.description",
    releaseDate: "January 2026",
    location: "Ottawa, ON",
    clientKey: "projectData.mvchallenge.client",
    image: "/mvchallenge.jpg",
    githubUrl: "https://github.com/alikhreis7/Machine-Vision-Challenge",
    featuresKeys: [
      "projectData.mvchallenge.feature1",
      "projectData.mvchallenge.feature2",
      "projectData.mvchallenge.feature3",
      "projectData.mvchallenge.feature4",
      "projectData.mvchallenge.feature5",
      "projectData.mvchallenge.feature6"
    ],
    technologies: ["MATLAB", "Image Processing Toolbox", "Color Space Analysis", "Shape Recognition", "Coordinate Transformation", "Robotic Vision"],
    longDescriptionKey: "projectData.mvchallenge.longDesc"
  },
  "sra-intelligence": {
    titleKey: "projectData.sraIntelligence.title",
    categoryKey: "projectData.sraIntelligence.category",
    descriptionKey: "projectData.sraIntelligence.description",
    releaseDate: "November 2025",
    location: "Ottawa, ON",
    clientKey: "projectData.sraIntelligence.client",
    image: "/sra-intelligence.jpg",
    additionalImages: ["/sra-hackathon-badge.jpg"],
    featuresKeys: [
      "projectData.sraIntelligence.feature1",
      "projectData.sraIntelligence.feature2",
      "projectData.sraIntelligence.feature3",
      "projectData.sraIntelligence.feature4",
      "projectData.sraIntelligence.feature5",
      "projectData.sraIntelligence.feature6"
    ],
    technologies: ["C#/.NET Services", "React/Vite UI", "SQL Database", "Azure OpenAI", "Google Gemini", "Microsoft Copilot"],
    longDescriptionKey: "projectData.sraIntelligence.longDesc"
  },
  "code-review-agent": {
    titleKey: "projectData.codeReviewAgent.title",
    categoryKey: "projectData.codeReviewAgent.category",
    descriptionKey: "projectData.codeReviewAgent.description",
    releaseDate: "January 2026",
    location: "Ottawa, ON",
    clientKey: "projectData.codeReviewAgent.client",
    image: "/code-review-agent.jpg",
    githubUrl: "https://github.com/alikhreis7/code-review-agent",
    featuresKeys: [
      "projectData.codeReviewAgent.feature1",
      "projectData.codeReviewAgent.feature2",
      "projectData.codeReviewAgent.feature3",
      "projectData.codeReviewAgent.feature4",
      "projectData.codeReviewAgent.feature5",
      "projectData.codeReviewAgent.feature6"
    ],
    technologies: ["Python 3.11+", "OpenAI GPT-4o", "LangGraph", "LangChain", "FastAPI", "Pydantic", "Celery + Redis"],
    longDescriptionKey: "projectData.codeReviewAgent.longDesc"
  },
  "genai-policy-agents": {
    titleKey: "projectData.policyAgents.title",
    categoryKey: "projectData.policyAgents.category",
    descriptionKey: "projectData.policyAgents.description",
    releaseDate: "January 2026",
    location: "Ottawa, ON",
    clientKey: "projectData.policyAgents.client",
    image: "/genai-policy-agents.jpg",
    githubUrl: "https://github.com/alikhreis7/genai-policy-agents",
    featuresKeys: [
      "projectData.policyAgents.feature1",
      "projectData.policyAgents.feature2",
      "projectData.policyAgents.feature3",
      "projectData.policyAgents.feature4",
      "projectData.policyAgents.feature5",
      "projectData.policyAgents.feature6"
    ],
    technologies: ["Python 3.11+", "OpenAI API", "LangGraph", "LangChain", "Pydantic", "FAISS", "Rich CLI"],
    longDescriptionKey: "projectData.policyAgents.longDesc"
  },
  "fair-ai-data": {
    titleKey: "projectData.fairAI.title",
    categoryKey: "projectData.fairAI.category",
    descriptionKey: "projectData.fairAI.description",
    releaseDate: "February 2025",
    location: "Ottawa, ON",
    clientKey: "projectData.fairAI.client",
    image: "/fair-ai-data.jpg",
    githubUrl: "https://github.com/QuinnMcGill/makeyourdatafair",
    featuresKeys: [
      "projectData.fairAI.feature1",
      "projectData.fairAI.feature2",
      "projectData.fairAI.feature3",
      "projectData.fairAI.feature4",
      "projectData.fairAI.feature5",
      "projectData.fairAI.feature6",
      "projectData.fairAI.feature7"
    ],
    technologies: ["Python", "Jupyter Notebook", "Pandas & NumPy", "Scikit-learn", "Fairness Metrics Libraries", "Statistical Analysis"],
    longDescriptionKey: "projectData.fairAI.longDesc"
  }
}
