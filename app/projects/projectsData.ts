export type Project = {
  title: string;
  category: string;
  description: string;
  releaseDate: string;
  location: string;
  client: string;
  image: string;
  additionalImages?: string[];
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
    websiteUrl: "https://ssync.ca",
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
    title: "Personal Portfolio 💼",
    category: "Frontend Development",
    description: "👨‍💻 A modern, responsive portfolio website showcasing professional work and skills with an emphasis on user experience and clean design.",
    releaseDate: "January 2025",
    location: "Ottawa, ON",
    client: "Personal Brand",
    image: "/portfoliopic.jpg",
    githubUrl: "https://github.com/alikhreis7/AliKhreis-Portfolio",
    websiteUrl: "https://www.alikhreis.ca",
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
    releaseDate: "January 2026",
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
  },
  logisticregression: {
    title: "Logistic Regression Classification",
    category: "Machine Learning",
    description: "Implementation of binary and multi-class logistic regression algorithms for classification tasks, including softmax regression from scratch.",
    releaseDate: "January 2026",
    location: "Ottawa, ON",
    client: "ELG 5255 - Applied Machine Learning",
    image: "/logisticregression.jpg",
    githubUrl: "https://github.com/alikhreis7/Logistic-Regression",
    features: [
      "Binary Logistic Regression with Ridge Regularization",
      "Softmax Regression (Multinomial) from Scratch",
      "Feature Standardization (No Data Leakage)",
      "Confusion Matrix Visualization",
      "Cross-Entropy Loss Implementation",
      "Gradient Descent Optimization"
    ],
    technologies: [
      "Python",
      "NumPy",
      "Pandas",
      "Statsmodels",
      "Seaborn",
      "Scikit-learn"
    ],
    longDescription: "A comprehensive implementation of logistic regression algorithms for binary and multi-class classification tasks as part of ELG 5255 - Applied Machine Learning coursework. The project includes two implementations: Binary Logistic Regression using statsmodels with L2 (ridge) regularization on the Sonar dataset for Rock vs Mine classification, and Softmax Regression implemented entirely from scratch using NumPy for multi-class classification on the Penguins dataset. Key features include proper feature standardization using only training set statistics to prevent data leakage, configurable hyperparameters, and comprehensive performance metrics including accuracy and confusion matrices."
  },
  neuralnetworks: {
    title: "Neural Networks & Power Forecasting",
    category: "Machine Learning",
    description: "Implementation of neural network concepts including forward propagation and power generation forecasting using the Combined Cycle Power Plant dataset.",
    releaseDate: "January 2026",
    location: "Ottawa, ON",
    client: "ELG 5255 - Applied Machine Learning",
    image: "/neuralnetworks.jpg",
    githubUrl: "https://github.com/alikhreis7/Regularization-Propagation-Neural-Networks",
    features: [
      "3-Layer Forward Propagation Implementation",
      "Power Generation Forecasting (MLPRegressor)",
      "93% R² Score Accuracy",
      "L2 Regularization & Adam Optimizer",
      "Comprehensive Data Visualization",
      "Early Stopping with Patience"
    ],
    technologies: [
      "Python",
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn"
    ],
    longDescription: "A comprehensive implementation of neural network concepts including forward propagation through a 3-layer feedforward network and power generation forecasting using the Combined Cycle Power Plant dataset from UCI ML Repository. The forward propagation implementation demonstrates step-by-step calculations through input, hidden (sigmoid activation), and output layers. The power forecasting model uses scikit-learn's MLPRegressor with a 2-hidden-layer architecture (100 and 50 neurons with ReLU activation), achieving ~93% R² score with RMSE of ~3.8 MW. Features include data visualization, feature selection with statistical justification, standardization, and comprehensive performance evaluation with residual analysis."
  },
  unsupervisedlearning: {
    title: "Neural Networks & Unsupervised Learning",
    category: "Machine Learning",
    description: "Neural network implementation with Keras/NumPy, K-means clustering, and Principal Component Analysis (PCA) for dimensionality reduction and pattern discovery.",
    releaseDate: "January 2026",
    location: "Ottawa, ON",
    client: "ELG 5255 - Applied Machine Learning",
    image: "/unsupervisedlearning.jpg",
    githubUrl: "https://github.com/alikhreis7/Neural-Networks-and-Unsupervised-Learning",
    features: [
      "Neural Network with Keras & NumPy",
      "K-Means Clustering Implementation",
      "Principal Component Analysis (PCA)",
      "Function Approximation",
      "Clustering Visualization",
      "Dimensionality Reduction Techniques"
    ],
    technologies: [
      "Python",
      "NumPy",
      "TensorFlow/Keras",
      "Scikit-learn",
      "Matplotlib",
      "Jupyter Notebook"
    ],
    longDescription: "A comprehensive exploration of neural networks and unsupervised learning techniques as part of ELG5255 coursework. The project includes neural network implementation using both Keras and pure NumPy (with fallback support), K-means clustering for pattern discovery and data segmentation, and Principal Component Analysis (PCA) for dimensionality reduction and variance analysis. Features include function approximation demonstrations, clustering visualization with clear cluster boundaries, and PCA variance analysis plots. The implementation is provided in Jupyter notebooks with executable Python code and comprehensive visualizations for each technique."
  },
  pinholecamera: {
    title: "Color Pinhole Camera Simulator",
    category: "Machine Vision",
    description: "A MATLAB-based color pinhole camera simulator implementing fundamental computer vision principles including 3D-to-2D projection, camera calibration, and image formation.",
    releaseDate: "January 2026",
    location: "Ottawa, ON",
    client: "ELG 5163 - Machine Vision",
    image: "/pinholecamera.jpg",
    githubUrl: "https://github.com/alikhreis7/MV-Color-Pinhole-Camera-Simulator",
    features: [
      "3D to 2D Projection",
      "Camera Intrinsic Parameters",
      "Extrinsic Calibration",
      "Color Image Formation",
      "Perspective Transformation",
      "Multi-View Visualization"
    ],
    technologies: [
      "MATLAB",
      "Linear Algebra",
      "Computer Vision",
      "Image Processing",
      "Camera Geometry",
      "Matrix Operations"
    ],
    longDescription: "A comprehensive color pinhole camera simulator developed in MATLAB as part of ELG 5163 - Machine Vision coursework. The project implements the fundamental pinhole camera model to simulate how 3D world coordinates are projected onto a 2D image plane. Key features include camera intrinsic parameter configuration (focal length, principal point, pixel scaling), extrinsic parameter handling (rotation and translation), and color image formation. The simulator demonstrates core computer vision concepts including perspective projection, coordinate transformations, and the mathematical foundations of camera calibration. Multiple visualization outputs show the projection results from different perspectives and configurations."
  },
  edgedetection: {
    title: "Image Filtering & Edge Detection Study",
    category: "Machine Vision",
    description: "A comprehensive study of image filtering techniques and edge detection algorithms in MATLAB, evaluating performance using PSNR and SSIM metrics across different noise conditions.",
    releaseDate: "January 2026",
    location: "Ottawa, ON",
    client: "ELG 5163 - Machine Vision",
    image: "/edgedetection.jpg",
    githubUrl: "https://github.com/alikhreis7/MV-Study-of-Image-Filtering-and-Edge-Detection-Methods",
    features: [
      "Gaussian & Salt-Pepper Noise Analysis",
      "Multiple Filter Implementations (Averaging, Gaussian, Median)",
      "Edge Detection (Sobel, Prewitt, LoG, Canny)",
      "PSNR & SSIM Performance Metrics",
      "Comparative Analysis & Visualization",
      "Automated Results Generation"
    ],
    technologies: [
      "MATLAB",
      "Image Processing Toolbox",
      "Signal Processing",
      "Computer Vision",
      "Statistical Analysis",
      "Digital Filtering"
    ],
    longDescription: "A comprehensive study investigating and comparing various image filtering techniques and edge detection algorithms developed for ELG 5163 - Machine Vision. The project evaluates filter performance using quantitative metrics (PSNR, SSIM) across different noise conditions including Gaussian and Salt & Pepper noise. Implemented filters include Flat Averaging (3×3, 7×7), Directional Averaging, Gaussian (7×7, σ=1.0), and Median filters. Edge detection methods include Sobel, Prewitt, Laplacian of Gaussian (LoG), and Canny algorithms. The study provides detailed comparative analysis with automated metrics generation, visual montages, and comprehensive performance evaluation for real-world image processing applications."
  },
  motiondetection: {
    title: "Motion Detection in Image Sequences",
    category: "Machine Vision",
    description: "MATLAB implementation of motion detection techniques using temporal differentiation and adaptive background modeling for analyzing video sequences.",
    releaseDate: "January 2026",
    location: "Ottawa, ON",
    client: "ELG 5163 - Machine Vision",
    image: "/motiondetection.jpg",
    githubUrl: "https://github.com/alikhreis7/MV-Motion-Detection-inimage-sequences",
    features: [
      "Temporal Frame Differentiation",
      "Adaptive Background Modeling",
      "Dynamic Background Updates (α=0.95)",
      "Binary Motion Map Generation",
      "150-Frame Video Sequence Analysis",
      "Shadow & Noise Handling"
    ],
    technologies: [
      "MATLAB",
      "Image Processing Toolbox",
      "Video Analysis",
      "Computer Vision",
      "Background Subtraction",
      "Temporal Filtering"
    ],
    longDescription: "A MATLAB implementation of motion detection techniques for analyzing video sequences developed for ELG 5163 - Machine Vision. The project implements and compares two fundamental motion detection algorithms: Temporal Frame Differentiation (detecting motion through absolute differences between consecutive frames) and Adaptive Background Differentiation (maintaining a dynamically updated background model). Evaluated on a 150-frame outdoor traffic sequence containing vehicles, shadows, and vegetation. The adaptive background method uses recursive updates with α=0.95 and achieves significantly cleaner, more stable detections through temporal smoothing, successfully converging to a clean scene model by removing all transient objects."
  },
  mvchallenge: {
    title: "Machine Vision Challenge - Object Detection & Classification",
    category: "Machine Vision",
    description: "A black-box computer vision solution for robotic manipulation that detects and classifies geometric shapes, outputting positions and orientations relative to a reference coordinate system.",
    releaseDate: "January 2026",
    location: "Ottawa, ON",
    client: "ELG 5163 - Machine Vision",
    image: "/mvchallenge.jpg",
    githubUrl: "https://github.com/alikhreis7/Machine-Vision-Challenge",
    features: [
      "5-Shape Classification (Circle, Triangle, Square, Rectangle, Semicircle)",
      "LAB & HSV Color Space Segmentation",
      "Reference Frame Detection (RGB Markers)",
      "Position & Orientation Output (mm, degrees)",
      "Morphological Image Processing",
      "Connected Component Analysis"
    ],
    technologies: [
      "MATLAB",
      "Image Processing Toolbox",
      "Color Space Analysis",
      "Shape Recognition",
      "Coordinate Transformation",
      "Robotic Vision"
    ],
    longDescription: "A black-box computer vision solution developed for the ELG 5163 Machine Vision Challenge. The system processes RGB images from an overhead camera to detect and classify geometric shapes on a robotic manipulation workspace. The algorithm identifies 5 shape categories (circle, triangle, square, rectangle, semicircle) using color-based segmentation in LAB and HSV color spaces to isolate orange and cyan objects. The system automatically detects colored reference markers (red=origin, blue=+X, green=+Y) to establish a coordinate system, then reports each object's label, position in mm, and orientation angle. The pipeline includes preprocessing, morphological cleaning, connected component analysis, and shape classification based on circularity, aspect ratio, extent, and solidity metrics."
  },
  "sra-intelligence": {
    title: "SRA Intelligence Agent",
    category: "GenAI & Agents",
    description: "AI-powered Security Risk Assessment (SRA) agent with queue orchestration, weighted scoring, and human-in-the-loop review - built at the 2025 Kinaxis Hackathon.",
    releaseDate: "November 2025",
    location: "Ottawa, ON",
    client: "Kinaxis Hackathon 2025",
    image: "/sra-intelligence.jpg",
    additionalImages: ["/sra-hackathon-badge.jpg"],
    features: [
      "AI-Assisted Risk Assessment with Weighted Scoring",
      "Queue Orchestration for Evidence Collection",
      "Document Ingestion & Metadata Parsing",
      "Human-in-the-Loop Review Workflow",
      "Bulk Assessment Capabilities",
      "Real-Time Analytics Dashboard"
    ],
    technologies: [
      "C#/.NET Services",
      "React/Vite UI",
      "SQL Database",
      "Azure OpenAI",
      "Google Gemini",
      "Microsoft Copilot"
    ],
    longDescription: "SRA Intelligence is a modern, AI-assisted Security Risk Assessment agent developed end-to-end during the 2025 Kinaxis Hackathon (Theme: KXS Secret Agents). The agent features queue orchestration that pulls together evidence from multiple sources, applies a weighted scoring model, and routes assessments to human review with AI-generated summaries and risk scores. Built with C#/.NET services for the backend, React/Vite for a responsive UI, and SQL database for consistent and accurate assessments. The AI pipeline leverages Azure OpenAI and Google Gemini with Microsoft Copilot integration to process applications by ingesting and parsing documents and metadata, then applying a weighted model to produce consistent, accurate risk assessment scores. This project demonstrates practical application of ML/LLM concepts that deliver measurable business impact in enterprise security workflows."
  },
  "code-review-agent": {
    title: "AI Code Review Agent",
    category: "GenAI & Agents",
    description: "Multi-agent GenAI system using GPT-4o and LangGraph to automatically review PRs for security vulnerabilities, bugs, code quality issues, and best practice violations.",
    releaseDate: "January 2026",
    location: "Ottawa, ON",
    client: "Personal Project",
    image: "/code-review-agent.jpg",
    githubUrl: "https://github.com/alikhreis7/code-review-agent",
    features: [
      "6 Specialized AI Agents (Security, Style, Bug, Performance, Docs, Test)",
      "Parallel Agent Execution with LangGraph",
      "GitHub Webhook Integration",
      "Real-Time Analysis Dashboard",
      "Severity-Based Findings Organization",
      "Inline Code Suggestions"
    ],
    technologies: [
      "Python 3.11+",
      "OpenAI GPT-4o",
      "LangGraph",
      "LangChain",
      "FastAPI",
      "Pydantic",
      "Celery + Redis"
    ],
    longDescription: "A sophisticated multi-agent GenAI system that automatically reviews pull requests for security vulnerabilities, code quality issues, and best practice violations. The system deploys 6 specialized AI agents running in parallel: Security Agent (detects SQL injection, XSS, hardcoded secrets), Style Agent (code quality and best practices), Bug Agent (null references, race conditions), Performance Agent (N+1 queries, memory leaks), Docs Agent (missing documentation), and Test Agent (coverage gaps). Features a modern glassmorphism web dashboard with real-time status updates, GitHub webhook support for automatic PR reviews, and structured feedback with severity ratings and fix suggestions."
  },
  "genai-policy-agents": {
    title: "Enterprise Policy Intelligence Agent",
    category: "GenAI & Agents",
    description: "Multi-agent GenAI system for enterprise policy lookup and decision support using RAG, LangGraph orchestration, and structured outputs with citations and confidence scoring.",
    releaseDate: "January 2026",
    location: "Ottawa, ON",
    client: "Personal Project",
    image: "/genai-policy-agents.jpg",
    githubUrl: "https://github.com/alikhreis7/genai-policy-agents",
    features: [
      "Multi-Agent Orchestration (Router, RAG, Synthesis, Confidence)",
      "RAG over Enterprise Policies & ADRs",
      "Citations Linking Claims to Sources",
      "Confidence Scoring & Human Escalation",
      "Section-Based Document Chunking",
      "Demo Mode (No API Keys Required)"
    ],
    technologies: [
      "Python 3.11+",
      "OpenAI API",
      "LangGraph",
      "LangChain",
      "Pydantic",
      "FAISS",
      "Rich CLI"
    ],
    longDescription: "A multi-agent GenAI decision-support system that uses RAG over enterprise policies, architectural decision records (ADRs), and historical discussions to answer questions like 'Is this allowed?', 'Has this been done before?', and 'What are the risks?'. Built with citations, confidence scoring, and human escalation to demonstrate production-grade GenAI engineering practices. Features include Intent Router Agent for query classification, Policy RAG Agent for document retrieval, Synthesis Agent for answer generation with citations, and Confidence Agent for grounding verification. The system treats LLMs as unreliable components that must be orchestrated, validated, and constrained—reducing code review bottlenecks by 40-60% while catching issues before human review."
  },
  "fair-ai-data": {
    title: "Fair AI Data Preprocessing Toolkit",
    category: "GenAI & Agents",
    description: "A comprehensive implementation of bias mitigation techniques for fair machine learning, addressing data biases to build ethical AI systems.",
    releaseDate: "February 2025",
    location: "Ottawa, ON",
    client: "ELG 5195 - Cybersecurity in Applied AI",
    image: "/fair-ai-data.jpg",
    githubUrl: "https://github.com/QuinnMcGill/makeyourdatafair",
    features: [
      "Reweighing Algorithm for Bias Correction",
      "Data Massaging Techniques",
      "Attribute Suppression Methods",
      "Uniform Sampling Implementation",
      "Disparate Impact Analysis",
      "Group & Individual Fairness Metrics",
      "Counterfactual Fairness Evaluation"
    ],
    technologies: [
      "Python",
      "Jupyter Notebook",
      "Pandas & NumPy",
      "Scikit-learn",
      "Fairness Metrics Libraries",
      "Statistical Analysis"
    ],
    longDescription: "An implementation and expansion of techniques from the research paper 'Make your data fair: A survey of data preprocessing techniques that address biases in data towards fair AI'. This project tackles one of the most critical challenges in modern AI: ensuring fairness and eliminating bias in machine learning systems. The toolkit implements multiple preprocessing techniques including reweighing (adjusting instance weights to balance protected groups), massaging (strategically modifying labels to reduce discrimination), suppression (removing sensitive attributes), and uniform sampling (balancing dataset representation). The project also implements comprehensive fairness metrics including disparate impact ratio, group fairness, individual fairness, counterfactual fairness, and equality of opportunity—enabling practitioners to measure and improve the fairness of their ML pipelines. Developed collaboratively as part of ELG 5195 coursework at the University of Ottawa."
  }
} 