# Aayush Sapkota Portfolio Data for Pinecone Vector Database
records = [
    # Personal Information
    { "_id": "personal_1", "chunk_text": "Aayush Sapkota, also known as A-U, is a software developer based in Kingston, Ontario, Canada. Contact: 343-520-6934", "category": "personal_info" },
    { "_id": "personal_2", "chunk_text": "Email contacts: Personal - aayush@aayussh.com, College - aayush.sapkota@student.sl.on.ca, General - aayushsapkota1030@gmail.com", "category": "personal_info" },
    
    # Professional Summary
    { "_id": "summary_1", "chunk_text": "Aayush is a passionate and curious software developer with strong foundation in Python and love for C++. He enjoys building backend systems, exploring AI integrations, and designing efficient software architectures.", "category": "professional_summary" },
    { "_id": "summary_2", "chunk_text": "Born in Nepal, moved to Canada, overcame initial challenges and discovered passion for computer science. Actively contributes to personal and open-source projects.", "category": "professional_summary" },
    { "_id": "summary_3", "chunk_text": "Believes learning comes from all aspects of life. Experiences in Toastmasters, volunteer work, and tech events helped develop leadership, communication, and problem-solving skills.", "category": "professional_summary" },
    
    # Background
    { "_id": "background_1", "chunk_text": "Born in Nijgadh, Bara, Nepal, country of Mount Everest. Curious, fearless, calm, ambivert, and lover of challenges.", "category": "background" },
    { "_id": "background_2", "chunk_text": "Completed high school at Shree Gaurishankar Higher Secondary School with decent GPA. Moved to Canada driven by curiosity and desire for challenges.", "category": "background" },
    { "_id": "background_3", "chunk_text": "Initially faced uncertainty for a year after moving to Canada, then discovered passion for programming. Currently at St. Lawrence College, Kingston studying Computer Programming and Analysis.", "category": "background" },
    
    # Professional Experience
    { "_id": "exp_1", "chunk_text": "Empire Life - Software Engineer Intern (Co-op), Aug 2025 – Present, Kingston, ON (Hybrid). Hands-on software development in co-op setting.", "category": "experience" },
    { "_id": "exp_2", "chunk_text": "Student Association of St. Lawrence College - Front Desk Representative, Apr 2025 – Present (On-site). Front-facing role, coordination, and support for student services.", "category": "experience" },
    { "_id": "exp_3", "chunk_text": "Self-Employed - Peer Tutor, Oct 2024 – Present (Remote). Tutored students in Arduino and programming fundamentals, assisted in project development and troubleshooting.", "category": "experience" },
    { "_id": "exp_4", "chunk_text": "Sustainable Kingston - Website Coordinator, Aug 2024 – Apr 2025 (Hybrid). Managed website content, design, technical issues, analytics, and community engagement.", "category": "experience" },
    { "_id": "exp_5", "chunk_text": "Mr. Lube Canada - Automotive Technician, Oct 2023 – Apr 2024 (On-site). Tire maintenance, customer service, inventory management, team collaboration.", "category": "experience" },
    
    # Education
    { "_id": "edu_1", "chunk_text": "St. Lawrence College, Kingston - Advanced Diploma, Computer Programming and Analysis (Sep 2023 – Apr 2026). Courses include C++, JavaScript, Web Development Frameworks.", "category": "education" },
    { "_id": "edu_2", "chunk_text": "Activities at St. Lawrence College: Orientation Volunteer, Toastmasters, Fitness Club, Computer Programming Club.", "category": "education" },
    { "_id": "edu_3", "chunk_text": "Gaurishankar Secondary School, Nepal - High School (2020 – 2023).", "category": "education" },
    
    # Technical Skills
    { "_id": "skills_1", "chunk_text": "Programming Languages: Python (primary), C++, JavaScript. Frameworks/Tools: Arduino, React, Django, Docker, LangChain, Vertex AI, BigQuery.", "category": "technical_skills" },
    { "_id": "skills_2", "chunk_text": "Cloud & AI Tools: OpenAI GPT, Vector embeddings, RAG pipelines. Other Skills: Backend architecture, file system management, AI integration, problem-solving, documentation.", "category": "technical_skills" },
    { "_id": "skills_3", "chunk_text": "Soft Skills: Communication, leadership, public speaking, teamwork.", "category": "technical_skills" },
    
    # Projects
    { "_id": "project_1", "chunk_text": "Aayush Sapkota's coding projects include Folderly-Prototype and JobTrackerMaster. Folderly-Prototype is an industry-level desktop file management system currently in development.", "category": "projects" },
    { "_id": "project_2", "chunk_text": "Folderly-Prototype is an AI-powered file organization tool with natural language commands. Built with Python, OpenAI GPT-3, OS scripting, Docker, Poetry, and Docker Compose.", "category": "projects" },
    { "_id": "project_3", "chunk_text": "JobTrackerMaster is a web-based job application tracking system that tracks job applications and stages using React frontend and Django backend.", "category": "projects" },
    { "_id": "project_4", "chunk_text": "JobTrackerMaster tech stack includes Python (Django), React, SQLite, and Docker. Challenges faced: Frontend-backend integration, state management, and deployment.", "category": "projects" },
    { "_id": "project_5", "chunk_text": "Aayush Sapkota's personal coding projects: Folderly-Prototype (AI file management) and JobTrackerMaster (job tracking web app). Both projects showcase his full-stack development skills.", "category": "projects" },
    
    # Open Source Contributions
    { "_id": "opensource_1", "chunk_text": "Numaflow - Docker file optimization contribution. Reduced Docker image size and improved speed significantly.", "category": "opensource" },
    
    # Events and Community
    { "_id": "events_1", "chunk_text": "The AI Collective - Kingston Chapter Launch. Member; hosted chapter event for AI discussions.", "category": "events" },
    { "_id": "events_2", "chunk_text": "Build With AI Workshop - GDG Mississauga/IDEA Mississauga. Hands-on workshop on GenAI applications, RAG, LangChain, BigQuery, Vertex AI, vector embeddings.", "category": "events" },
    { "_id": "events_3", "chunk_text": "Intuit Open Source Event - Toronto Tech Week. Learned about Numaflow, event-driven architecture, open-source workflows.", "category": "events" },
    { "_id": "events_4", "chunk_text": "Dayforce Virtual Open House - Gained insights from professionals on career preparation.", "category": "events" },
    { "_id": "events_5", "chunk_text": "HAS-Motion Open House - Biomechanics Day. Learned tech applications in biomechanics; interacted with CEO, president, and developers.", "category": "events" },
    
    # Social Profiles
    { "_id": "profiles_1", "chunk_text": "GitHub: https://github.com/sapkota-aayush, LinkedIn: https://www.linkedin.com/in/aayush-sapkota/, Medium/Blog: https://medium.com/@aayushsapkota1030", "category": "profiles" },
    
    # Leadership and Volunteering
    { "_id": "leadership_1", "chunk_text": "Toastmasters International - VP of Membership & Speaker (Oct 2024 – Jul 2025), President (Jul 2025 – Present). Managed people, budgets, marketing, events; developed leadership and public speaking skills.", "category": "leadership" },
    
    # Problem Solving & Technical Challenges
    { "_id": "problem_1", "chunk_text": "Folderly Project Challenge: File operations were blocking the UI. Problem: I/O bound operations froze the interface during file management. Solution: Implemented async + threading architecture with event loop, individual threads for each operation, and parallel execution. Result: 13 seconds reduced to 2 seconds for multiple operations.", "category": "problem_solving" },
    { "_id": "problem_2", "chunk_text": "Python Async Challenge: Converting synchronous file operations to async. Used asyncio.to_thread() for non-blocking I/O operations and asyncio.gather() for parallel execution. This kept the UI responsive while handling multiple file operations simultaneously.", "category": "problem_solving" },
    { "_id": "problem_3", "chunk_text": "Function Calling Integration: Integrated OpenAI function calling with async operations in Folderly. Challenge was managing AI-generated function calls with thread-safe execution. Solved by creating a task queue system that processes AI commands through the async architecture.", "category": "problem_solving" },
    
        
    # Common Technical Questions
    { "_id": "qa_1", "chunk_text": "What's your biggest technical challenge? Building Folderly's async architecture. File operations were blocking the UI, so I implemented threading with asyncio to make operations parallel and non-blocking, reducing execution time from 13 to 2 seconds.", "category": "qa" },
    { "_id": "qa_2", "chunk_text": "How do you approach debugging? I use systematic debugging - reproduce the issue, isolate the problem, add logging/print statements, test hypotheses, and fix incrementally. For complex issues, I create minimal test cases.", "category": "qa" },
    { "_id": "qa_3", "chunk_text": "What's your strongest programming language? Python is my primary language. I love its readability, extensive libraries, and how it handles complex data structures. I use it for AI integration, backend development, and automation tasks.", "category": "qa" },
    { "_id": "qa_4", "chunk_text": "How do you learn new technologies? I start with official documentation, build small projects, join communities, and practice regularly. For AI/ML, I attended workshops like Build With AI and joined The AI Collective Kingston chapter.", "category": "qa" },
    { "_id": "qa_5", "chunk_text": "What's your development process? I follow: 1) Understand requirements, 2) Plan architecture, 3) Build incrementally, 4) Test frequently, 5) Document as I go. I use version control, write clean code, and prioritize user experience.", "category": "qa" },
    { "_id": "qa_6", "chunk_text": "How do you handle errors in your code? I implement comprehensive error handling with try-catch blocks, logging, graceful degradation, and user-friendly error messages. For Folderly, I added rollback mechanisms for failed operations.", "category": "qa" },
    { "_id": "qa_7", "chunk_text": "What's your experience with AI integration? I've integrated OpenAI GPT-4 with function calling in Folderly, used LangChain for RAG pipelines, and worked with vector embeddings. I understand prompt engineering and AI model limitations.", "category": "qa" },
    { "_id": "qa_8", "chunk_text": "How do you stay updated with technology? I attend tech events, follow industry blogs, contribute to open source, and practice with new tools. Recent activities include Build With AI workshop and Intuit Open Source Event.", "category": "qa" }
]
