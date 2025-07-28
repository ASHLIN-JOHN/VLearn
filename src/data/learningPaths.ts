import { LearningPath } from '../types/learning';

export const learningPaths: { [key: string]: LearningPath } = {
  'full-stack-development': {
    id: 'full-stack-development',
    title: 'Ful Stack Development',
    description: 'Master front-end and back-end development with modern technologies',
    totalDuration: '12 weeks',
    difficulty: 'Intermediate',
    modules: [
      {
        id: 'html-basics',
        title: 'HTML Fundamentals',
        description: 'Learn the building blocks of web development',
        icon: '🌐',
        duration: '1 week',
        difficulty: 'Beginner',
        resources: {
          videos: [
            'HTML Fundamentals - Structure and Syntax (45 min)',
            'Semantic HTML Elements and Best Practices (30 min)',
            'HTML Forms and Input Validation (25 min)'
          ],
          articles: [
            'Complete HTML5 Reference Guide - MDN Documentation',
            'Web Accessibility Guidelines (WCAG) for HTML',
            'HTML Best Practices for SEO and Performance'
          ],
          exercises: [
            'Build Your First Personal Portfolio Page',
            'Create a Contact Form with Validation',
            'Design a Responsive Navigation Menu'
          ]
        },
        quiz: {
          id: 'html-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'What does HTML stand for?',
              options: ['Hyper Text Markup Language', 'High Tech Modern Language', 'Home Tool Markup Language', 'Hyperlink and Text Markup Language'],
              correctAnswer: 0,
              explanation: 'HTML stands for Hyper Text Markup Language, which is the standard markup language for creating web pages.'
            },
            {
              id: 'q2',
              question: 'Which HTML tag is used for the largest heading?',
              options: ['<h6>', '<h1>', '<header>', '<head>'],
              correctAnswer: 1,
              explanation: 'The <h1> tag represents the largest heading in HTML, with headings going from <h1> (largest) to <h6> (smallest).'
            }
          ]
        },
        completed: false,
        unlocked: true
      },
      {
        id: 'css-styling',
        title: 'CSS Styling',
        description: 'Style your web pages with modern CSS techniques',
        icon: '🎨',
        duration: '2 weeks',
        difficulty: 'Beginner',
        resources: {
          videos: [
            'CSS Fundamentals - Selectors and Properties (50 min)',
            'Flexbox Complete Guide with Examples (40 min)',
            'CSS Grid Layout Mastery (45 min)',
            'Responsive Design with Media Queries (35 min)'
          ],
          articles: [
            'CSS Architecture and Methodology (BEM, OOCSS)',
            'Modern CSS Features - Grid, Flexbox, and Custom Properties',
            'CSS Performance Optimization Techniques'
          ],
          exercises: [
            'Build a Responsive Landing Page from Scratch',
            'Create a CSS Grid Photo Gallery',
            'Design a Mobile-First Navigation System'
          ]
        },
        quiz: {
          id: 'css-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'Which CSS property is used to change the text color?',
              options: ['color', 'text-color', 'font-color', 'text-style'],
              correctAnswer: 0,
              explanation: 'The "color" property is used to set the color of text in CSS.'
            },
            {
              id: 'q2',
              question: 'What does "CSS" stand for?',
              options: ['Computer Style Sheets', 'Creative Style Sheets', 'Cascading Style Sheets', 'Colorful Style Sheets'],
              correctAnswer: 2,
              explanation: 'CSS stands for Cascading Style Sheets, which describes how HTML elements should be displayed.'
            }
          ]
        },
        completed: false,
        unlocked: false
      },
      {
        id: 'javascript-fundamentals',
        title: 'JavaScript Fundamentals',
        description: 'Add interactivity with JavaScript programming',
        icon: '⚡',
        duration: '3 weeks',
        difficulty: 'Intermediate',
        resources: {
          videos: [
            'JavaScript Fundamentals - Variables and Functions (60 min)',
            'DOM Manipulation and Event Handling (45 min)',
            'Asynchronous JavaScript - Promises and Async/Await (50 min)',
            'ES6+ Features - Arrow Functions, Destructuring, Modules (40 min)'
          ],
          articles: [
            'JavaScript Design Patterns and Best Practices',
            'Understanding the JavaScript Event Loop',
            'Modern JavaScript Development Workflow'
          ],
          exercises: [
            'Build a Dynamic Calculator with Advanced Operations',
            'Create an Interactive Todo List with Local Storage',
            'Develop a Weather App using APIs'
          ]
        },
        quiz: {
          id: 'js-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'Which method is used to add an element to the end of an array?',
              options: ['push()', 'add()', 'append()', 'insert()'],
              correctAnswer: 0,
              explanation: 'The push() method adds one or more elements to the end of an array and returns the new length.'
            }
          ]
        },
        completed: false,
        unlocked: false
      },
      {
        id: 'react-frontend',
        title: 'React Frontend',
        description: 'Build modern UIs with React framework',
        icon: '⚛️',
        duration: '3 weeks',
        difficulty: 'Intermediate',
        resources: {
          videos: [
            'React Components and JSX Fundamentals (55 min)',
            'React Hooks Deep Dive - useState, useEffect, useContext (65 min)',
            'State Management with Redux Toolkit (50 min)',
            'React Router and Navigation (35 min)'
          ],
          articles: [
            'React Component Design Patterns and Best Practices',
            'Performance Optimization in React Applications',
            'Testing React Components with Jest and React Testing Library'
          ],
          exercises: [
            'Build a Full-Featured Todo Application',
            'Create a Real-Time Chat Application',
            'Develop an E-commerce Product Catalog'
          ]
        },
        quiz: {
          id: 'react-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'What is JSX?',
              options: ['JavaScript XML', 'Java Syntax Extension', 'JSON XML', 'JavaScript Extension'],
              correctAnswer: 0,
              explanation: 'JSX stands for JavaScript XML and allows you to write HTML-like syntax in JavaScript.'
            }
          ]
        },
        completed: false,
        unlocked: false
      },
      {
        id: 'nodejs-backend',
        title: 'Node.js Backend',
        description: 'Create server-side applications with Node.js',
        icon: '🟢',
        duration: '2 weeks',
        difficulty: 'Intermediate',
        resources: {
          videos: [
            'Node.js Fundamentals and NPM Ecosystem (50 min)',
            'Express.js Framework and Middleware (45 min)',
            'RESTful API Development and Best Practices (55 min)',
            'Authentication and Authorization with JWT (40 min)'
          ],
          articles: [
            'Node.js Security Best Practices and Common Vulnerabilities',
            'API Design Guidelines and Documentation with Swagger',
            'Microservices Architecture with Node.js'
          ],
          exercises: [
            'Build a Complete REST API for Blog Management',
            'Implement User Authentication and Authorization',
            'Create a Real-Time WebSocket Chat Server'
          ]
        },
        quiz: {
          id: 'node-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'What is Node.js?',
              options: ['A JavaScript library', 'A JavaScript runtime', 'A database', 'A web browser'],
              correctAnswer: 1,
              explanation: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine for server-side development.'
            }
          ]
        },
        completed: false,
        unlocked: false
      },
      {
        id: 'database-integration',
        title: 'Database Integration',
        description: 'Store and manage data with modern databases',
        icon: '🗄️',
        duration: '1 week',
        difficulty: 'Intermediate',
        resources: {
          videos: [
            'SQL Fundamentals - Queries, Joins, and Indexes (60 min)',
            'MongoDB and NoSQL Database Concepts (45 min)',
            'Database Design and Normalization (40 min)',
            'Database Performance and Optimization (35 min)'
          ],
          articles: [
            'Database Security and Data Protection Strategies',
            'Choosing Between SQL and NoSQL Databases',
            'Database Scaling and Replication Techniques'
          ],
          exercises: [
            'Design a Complete E-commerce Database Schema',
            'Implement Advanced CRUD Operations with Relationships',
            'Build a Data Analytics Dashboard with Aggregations'
          ]
        },
        quiz: {
          id: 'db-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'What does CRUD stand for?',
              options: ['Create, Read, Update, Delete', 'Copy, Read, Update, Delete', 'Create, Remove, Update, Delete', 'Create, Read, Upload, Delete'],
              correctAnswer: 0,
              explanation: 'CRUD stands for Create, Read, Update, Delete - the four basic operations for persistent storage.'
            }
          ]
        },
        completed: false,
        unlocked: false
      }
    ]
  },
  'ai-with-python': {
    id: 'ai-with-python',
    title: 'AI with Python',
    description: 'Learn artificial intelligence and machine learning with Python',
    totalDuration: '10 weeks',
    difficulty: 'Advanced',
    modules: [
      {
        id: 'python-basics',
        title: 'Python Fundamentals',
        description: 'Master Python programming language basics',
        icon: '🐍',
        duration: '2 weeks',
        difficulty: 'Beginner',
        resources: {
          videos: [
            'Python Syntax and Basic Programming Concepts (55 min)',
            'Python Data Structures - Lists, Dictionaries, Sets (50 min)',
            'Object-Oriented Programming in Python (60 min)',
            'File Handling and Exception Management (40 min)'
          ],
          articles: [
            'Python Best Practices and PEP 8 Style Guide',
            'Python Virtual Environments and Package Management',
            'Advanced Python Features - Decorators, Generators, Context Managers'
          ],
          exercises: [
            'Build a Command-Line Task Manager',
            'Create a Web Scraper with Beautiful Soup',
            'Develop a Simple Game using Object-Oriented Principles'
          ]
        },
        quiz: {
          id: 'python-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'Which data type is mutable in Python?',
              options: ['tuple', 'string', 'list', 'int'],
              correctAnswer: 2,
              explanation: 'Lists are mutable in Python, meaning their contents can be changed after creation.'
            }
          ]
        },
        completed: false,
        unlocked: true
      },
      {
        id: 'numpy-pandas',
        title: 'NumPy & Pandas',
        description: 'Data manipulation and analysis libraries',
        icon: '📊',
        duration: '2 weeks',
        difficulty: 'Intermediate',
        resources: {
          videos: [
            'NumPy Arrays and Mathematical Operations (50 min)',
            'Pandas DataFrames and Data Manipulation (65 min)',
            'Data Cleaning and Preprocessing Techniques (45 min)',
            'Data Visualization with Matplotlib and Seaborn (55 min)'
          ],
          articles: [
            'Advanced Data Analysis Techniques with Pandas',
            'Statistical Computing and Hypothesis Testing',
            'Time Series Analysis and Forecasting Methods'
          ],
          exercises: [
            'Complete Data Cleaning Project with Real Dataset',
            'Exploratory Data Analysis of Sales Data',
            'Build Interactive Data Visualizations'
          ]
        },
        quiz: {
          id: 'numpy-pandas-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'What is the primary data structure in Pandas?',
              options: ['Array', 'DataFrame', 'Matrix', 'Vector'],
              correctAnswer: 1,
              explanation: 'DataFrame is the primary data structure in Pandas for handling structured data.'
            }
          ]
        },
        completed: false,
        unlocked: false
      },
      {
        id: 'machine-learning',
        title: 'Machine Learning',
        description: 'Supervised and unsupervised learning algorithms',
        icon: '🤖',
        duration: '3 weeks',
        difficulty: 'Advanced',
        resources: {
          videos: [
            'Machine Learning Algorithms Overview (70 min)',
            'Supervised Learning - Classification and Regression (80 min)',
            'Unsupervised Learning - Clustering and Dimensionality Reduction (60 min)',
            'Feature Engineering and Model Selection (55 min)'
          ],
          articles: [
            'Machine Learning Theory and Mathematical Foundations',
            'Model Evaluation Metrics and Cross-Validation',
            'Handling Overfitting and Bias-Variance Tradeoff'
          ],
          exercises: [
            'Build a Customer Churn Prediction Model',
            'Create a Recommendation System',
            'Develop a Fraud Detection Algorithm'
          ]
        },
        quiz: {
          id: 'ml-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'What is supervised learning?',
              options: ['Learning without labels', 'Learning with input-output pairs', 'Reinforcement learning', 'Unsupervised clustering'],
              correctAnswer: 1,
              explanation: 'Supervised learning uses labeled training data to learn a mapping from inputs to outputs.'
            }
          ]
        },
        completed: false,
        unlocked: false
      },
      {
        id: 'deep-learning',
        title: 'Deep Learning',
        description: 'Neural networks and deep learning frameworks',
        icon: '🧠',
        duration: '3 weeks',
        difficulty: 'Advanced',
        resources: {
          videos: [
            'Neural Networks Fundamentals and Backpropagation (75 min)',
            'Deep Learning with TensorFlow and Keras (90 min)',
            'Convolutional Neural Networks for Computer Vision (80 min)',
            'Recurrent Neural Networks and LSTM (70 min)'
          ],
          articles: [
            'Deep Learning Theory and Advanced Architectures',
            'Transfer Learning and Pre-trained Models',
            'Deep Learning for Natural Language Processing'
          ],
          exercises: [
            'Build an Image Classification System',
            'Create a Sentiment Analysis Model',
            'Develop a Chatbot using Deep Learning'
          ]
        },
        quiz: {
          id: 'dl-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'What is a neural network?',
              options: ['A biological brain', 'A computing system inspired by biological networks', 'A database structure', 'A programming language'],
              correctAnswer: 1,
              explanation: 'A neural network is a computing system inspired by biological neural networks for machine learning.'
            }
          ]
        },
        completed: false,
        unlocked: false
      }
    ]
  },
  'cybersecurity-beginner-track': {
    id: 'cybersecurity-beginner-track',
    title: 'Cybersecurity Beginner Track',
    description: 'Learn essential cybersecurity concepts and practices',
    totalDuration: '8 weeks',
    difficulty: 'Beginner',
    modules: [
      {
        id: 'security-fundamentals',
        title: 'Security Fundamentals',
        description: 'Basic concepts of information security',
        icon: '🔒',
        duration: '2 weeks',
        difficulty: 'Beginner',
        resources: {
          videos: [
            'Information Security Fundamentals - CIA Triad (40 min)',
            'Current Threat Landscape and Attack Vectors (50 min)',
            'Risk Assessment and Management Frameworks (45 min)',
            'Security Policies and Compliance Standards (35 min)'
          ],
          articles: [
            'Cybersecurity Frameworks - NIST, ISO 27001, CIS Controls',
            'Common Vulnerabilities and Exposures (CVE) Database',
            'Security Awareness and Human Factor in Cybersecurity'
          ],
          exercises: [
            'Conduct a Comprehensive Risk Assessment',
            'Develop a Security Policy Framework',
            'Create an Incident Response Playbook'
          ]
        },
        quiz: {
          id: 'security-fundamentals-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'What does CIA stand for in cybersecurity?',
              options: ['Central Intelligence Agency', 'Confidentiality, Integrity, Availability', 'Computer Information Access', 'Cyber Intelligence Analysis'],
              correctAnswer: 1,
              explanation: 'CIA stands for Confidentiality, Integrity, and Availability - the three pillars of information security.'
            }
          ]
        },
        completed: false,
        unlocked: true
      },
      {
        id: 'network-security',
        title: 'Network Security',
        description: 'Securing network infrastructure and communications',
        icon: '🌐',
        duration: '2 weeks',
        difficulty: 'Beginner',
        resources: {
          videos: [
            'Network Protocols and OSI Model Deep Dive (55 min)',
            'Firewall Configuration and Management (45 min)',
            'VPN Technologies and Implementation (40 min)',
            'Network Monitoring and Intrusion Detection (50 min)'
          ],
          articles: [
            'Network Security Architecture and Design Principles',
            'Advanced Persistent Threats and Network Defense',
            'Zero Trust Network Security Model'
          ],
          exercises: [
            'Configure Enterprise Firewall Rules',
            'Set Up Network Monitoring Dashboard',
            'Implement Network Segmentation Strategy'
          ]
        },
        quiz: {
          id: 'network-security-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'What is a firewall?',
              options: ['A physical barrier', 'A network security device', 'An antivirus program', 'A password manager'],
              correctAnswer: 1,
              explanation: 'A firewall is a network security device that monitors and filters incoming and outgoing network traffic.'
            }
          ]
        },
        completed: false,
        unlocked: false
      },
      {
        id: 'cryptography-basics',
        title: 'Cryptography Basics',
        description: 'Fundamentals of encryption and data protection',
        icon: '🔐',
        duration: '2 weeks',
        difficulty: 'Intermediate',
        resources: {
          videos: [
            'Symmetric and Asymmetric Encryption Algorithms (60 min)',
            'Public Key Infrastructure (PKI) and Digital Certificates (50 min)',
            'Hash Functions and Digital Signatures (45 min)',
            'Cryptographic Protocols - TLS, SSH, IPSec (55 min)'
          ],
          articles: [
            'Modern Cryptographic Standards and Best Practices',
            'Quantum Cryptography and Post-Quantum Security',
            'Cryptographic Key Management and Lifecycle'
          ],
          exercises: [
            'Implement RSA Encryption Algorithm',
            'Build a Secure Communication System',
            'Create Digital Signature Verification Tool'
          ]
        },
        quiz: {
          id: 'crypto-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'What is encryption?',
              options: ['Converting data to unreadable format', 'Deleting data permanently', 'Compressing data', 'Backing up data'],
              correctAnswer: 0,
              explanation: 'Encryption is the process of converting data into an unreadable format to protect it from unauthorized access.'
            }
          ]
        },
        completed: false,
        unlocked: false
      },
      {
        id: 'incident-response',
        title: 'Incident Response',
        description: 'Handling and responding to security incidents',
        icon: '🚨',
        duration: '2 weeks',
        difficulty: 'Intermediate',
        resources: {
          videos: [
            'Incident Response Lifecycle and Methodologies (50 min)',
            'Digital Forensics and Evidence Collection (60 min)',
            'Malware Analysis and Reverse Engineering (55 min)',
            'Business Continuity and Disaster Recovery (45 min)'
          ],
          articles: [
            'Incident Response Playbooks and Procedures',
            'Legal and Regulatory Aspects of Incident Response',
            'Threat Intelligence and Attribution Techniques'
          ],
          exercises: [
            'Simulate a Real-World Security Incident',
            'Conduct Digital Forensics Investigation',
            'Develop Business Continuity Plan'
          ]
        },
        quiz: {
          id: 'ir-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'What is the first step in incident response?',
              options: ['Recovery', 'Identification', 'Eradication', 'Documentation'],
              correctAnswer: 1,
              explanation: 'Identification is the first step in incident response, involving the detection and confirmation of a security incident.'
            }
          ]
        },
        completed: false,
        unlocked: false
      }
    ]
  },
  'biology-beginner-track': {
    id: 'biology-beginner-track',
    title: 'Biology Beginner Track',
    description: 'Explore fundamental biological concepts and processes',
    totalDuration: '8 weeks',
    difficulty: 'Beginner',
    modules: [
      {
        id: 'cell-biology',
        title: 'Cell Biology',
        description: 'Understand the structure and functions of cells',
        icon: '🧬',
        duration: '2 weeks',
        difficulty: 'Beginner',
        resources: {
          videos: [
            'Introduction to Cells and Microscopy (45 min)',
            'Prokaryotic vs Eukaryotic Cells (40 min)',
            'Cell Organelles and Their Functions (50 min)',
            'Cell Membrane and Transport Mechanisms (35 min)'
          ],
          articles: [
            'Structure of the Cell - Nucleus, Mitochondria, and More',
            'Osmosis and Diffusion in Cells',
            'The Cell Theory and Its Development'
          ],
          exercises: [
            'Label a Cell Diagram',
            'Compare Prokaryotic and Eukaryotic Cells',
            'Demonstrate Osmosis Using Household Items'
          ]
        },
        quiz: {
          id: 'cell-biology-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'Which organelle is known as the powerhouse of the cell?',
              options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Golgi apparatus'],
              correctAnswer: 1,
              explanation: 'Mitochondria generate most of the cell’s energy through respiration.'
            }
          ]
        },
        completed: false,
        unlocked: true
      },
      {
        id: 'genetics-basics',
        title: 'Basics of Genetics',
        description: 'Learn about heredity and genetic principles',
        icon: '🧫',
        duration: '2 weeks',
        difficulty: 'Beginner',
        resources: {
          videos: [
            'DNA, Genes, and Chromosomes (50 min)',
            'Mendelian Genetics and Inheritance (45 min)',
            'Punnett Squares and Genetic Traits (40 min)',
            'Mutations and Genetic Disorders (35 min)'
          ],
          articles: [
            'Gregor Mendel and Laws of Inheritance',
            'Structure and Replication of DNA',
            'Genetic Variation and Its Importance'
          ],
          exercises: [
            'Solve Punnett Square Problems',
            'Model DNA Structure with Household Materials',
            'Explore Genetic Traits in Family Tree'
          ]
        },
        quiz: {
          id: 'genetics-basics-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'Who is considered the father of genetics?',
              options: ['Charles Darwin', 'Gregor Mendel', 'James Watson', 'Louis Pasteur'],
              correctAnswer: 1,
              explanation: 'Gregor Mendel discovered the basic principles of heredity through pea plant experiments.'
            }
          ]
        },
        completed: false,
        unlocked: false
      },
      {
        id: 'human-anatomy',
        title: 'Introduction to Human Anatomy',
        description: 'Overview of human body systems and structures',
        icon: '🫀',
        duration: '2 weeks',
        difficulty: 'Intermediate',
        resources: {
          videos: [
            'Skeletal and Muscular Systems (50 min)',
            'Digestive and Respiratory Systems (55 min)',
            'Circulatory and Nervous Systems (45 min)',
            'Homeostasis and Human Physiology (40 min)'
          ],
          articles: [
            'Major Human Body Systems Explained',
            'Role of Organs and Tissues in Body Function',
            'Basics of Neurotransmission and Hormonal Control'
          ],
          exercises: [
            'Label Human Body Diagrams',
            'Compare Body Systems Functions',
            'Track Digestion Process from Start to Finish'
          ]
        },
        quiz: {
          id: 'anatomy-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'Which organ is responsible for pumping blood throughout the body?',
              options: ['Lungs', 'Kidneys', 'Heart', 'Liver'],
              correctAnswer: 2,
              explanation: 'The heart is a muscular organ that circulates blood throughout the body.'
            }
          ]
        },
        completed: false,
        unlocked: false
      },
      {
        id: 'ecology-basics',
        title: 'Ecology and Environment',
        description: 'Study of organisms and their environment',
        icon: '🌱',
        duration: '2 weeks',
        difficulty: 'Intermediate',
        resources: {
          videos: [
            'Introduction to Ecosystems (45 min)',
            'Food Chains and Trophic Levels (40 min)',
            'Biomes and Habitats (50 min)',
            'Environmental Conservation and Biodiversity (55 min)'
          ],
          articles: [
            'Components of Ecosystems - Biotic and Abiotic',
            'Energy Flow in Ecosystems',
            'Human Impact on Environment'
          ],
          exercises: [
            'Build a Simple Food Web',
            'Research Local Biodiversity',
            'Plan a Conservation Awareness Activity'
          ]
        },
        quiz: {
          id: 'ecology-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'Which level in the food chain is occupied by herbivores?',
              options: ['Producers', 'Primary consumers', 'Secondary consumers', 'Tertiary consumers'],
              correctAnswer: 1,
              explanation: 'Herbivores feed on producers and are called primary consumers.'
            }
          ]
        },
        completed: false,
        unlocked: false
      }
    ]
  },
  'botany-beginner-track': {
    id: 'botany-beginner-track',
    title: 'Botany Beginner Track',
    description: 'Learn the foundational concepts of plant biology and botanical sciences',
    totalDuration: '8 weeks',
    difficulty: 'Beginner',
    modules: [
      {
        id: 'plant-cell-biology',
        title: 'Plant Cell Biology',
        description: 'Explore the structure and functions of plant cells',
        icon: '🌿',
        duration: '2 weeks',
        difficulty: 'Beginner',
        resources: {
          videos: [
            'Introduction to Plant Cells and Organelles (45 min)',
            'Cell Wall, Chloroplasts, and Vacuoles (40 min)',
            'Photosynthesis and Energy Conversion (50 min)',
            'Plant Cell Division - Mitosis and Meiosis (35 min)'
          ],
          articles: [
            'Unique Features of Plant Cells',
            'Functions of Chloroplast and Vacuole',
            'Photosynthesis Explained with Diagrams'
          ],
          exercises: [
            'Label Parts of a Plant Cell',
            'Compare Plant and Animal Cells',
            'Draw and Describe the Photosynthesis Process'
          ]
        },
        quiz: {
          id: 'plant-cell-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'Which organelle is responsible for photosynthesis?',
              options: ['Mitochondria', 'Nucleus', 'Chloroplast', 'Ribosome'],
              correctAnswer: 2,
              explanation: 'Chloroplasts contain chlorophyll and perform photosynthesis in plant cells.'
            }
          ]
        },
        completed: false,
        unlocked: true
      },
      {
        id: 'plant-anatomy',
        title: 'Plant Anatomy',
        description: 'Study the structure of roots, stems, leaves, and flowers',
        icon: '🌱',
        duration: '2 weeks',
        difficulty: 'Beginner',
        resources: {
          videos: [
            'External and Internal Structure of Roots (40 min)',
            'Anatomy of Stems and Transport Tissues (45 min)',
            'Leaf Structure and Functions (50 min)',
            'Flower Anatomy and Reproduction (40 min)'
          ],
          articles: [
            'Root and Shoot Systems in Plants',
            'Xylem and Phloem - Plant Transport System',
            'Structure and Role of Leaves and Flowers'
          ],
          exercises: [
            'Draw and Label a Flower',
            'Compare Monocot and Dicot Stems',
            'Investigate Transpiration in Leaves'
          ]
        },
        quiz: {
          id: 'plant-anatomy-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'What tissue transports water in plants?',
              options: ['Phloem', 'Cambium', 'Xylem', 'Epidermis'],
              correctAnswer: 2,
              explanation: 'Xylem transports water and minerals from roots to the rest of the plant.'
            }
          ]
        },
        completed: false,
        unlocked: false
      },
      {
        id: 'plant-physiology',
        title: 'Plant Physiology',
        description: 'Understand how plants function and grow',
        icon: '🍀',
        duration: '2 weeks',
        difficulty: 'Intermediate',
        resources: {
          videos: [
            'Photosynthesis and Respiration in Plants (50 min)',
            'Plant Hormones and Growth Regulation (45 min)',
            'Water Absorption and Transpiration (40 min)',
            'Photoperiodism and Plant Movements (35 min)'
          ],
          articles: [
            'Plant Nutrition and Mineral Uptake',
            'Role of Auxins, Gibberellins, and Cytokinins',
            'Adaptations for Water Conservation'
          ],
          exercises: [
            'Experiment with Light and Plant Growth',
            'Track Daily Water Loss in Leaves',
            'Build a Model of the Photosynthesis Process'
          ]
        },
        quiz: {
          id: 'plant-physiology-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'Which hormone is responsible for cell elongation in plants?',
              options: ['Cytokinin', 'Ethylene', 'Auxin', 'Abscisic acid'],
              correctAnswer: 2,
              explanation: 'Auxins promote cell elongation and are key to plant growth responses like phototropism.'
            }
          ]
        },
        completed: false,
        unlocked: false
      },
      {
        id: 'plant-classification',
        title: 'Plant Classification',
        description: 'Learn how plants are categorized and named',
        icon: '🌾',
        duration: '2 weeks',
        difficulty: 'Intermediate',
        resources: {
          videos: [
            'Basics of Plant Taxonomy (40 min)',
            'Classification of Angiosperms and Gymnosperms (50 min)',
            'Plant Families and Characteristics (45 min)',
            'Introduction to Botanical Nomenclature (35 min)'
          ],
          articles: [
            'Binomial Nomenclature and Plant Taxa',
            'Common Families: Fabaceae, Poaceae, Solanaceae',
            'Hierarchy of Plant Classification'
          ],
          exercises: [
            'Classify Local Plants by Family',
            'Write Scientific Names Correctly',
            'Compare Angiosperms vs Gymnosperms'
          ]
        },
        quiz: {
          id: 'plant-classification-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'Who developed the system of binomial nomenclature?',
              options: ['Aristotle', 'Gregor Mendel', 'Carl Linnaeus', 'Charles Darwin'],
              correctAnswer: 2,
              explanation: 'Carl Linnaeus introduced the modern system of naming organisms using genus and species.'
            }
          ]
        },
        completed: false,
        unlocked: false
      }
    ]
  },
  'zoology-beginner-track': {
    id: 'zoology-beginner-track',
    title: 'Zoology Beginner Track',
    description: 'Understand the basic principles of animal biology, anatomy, and classification',
    totalDuration: '8 weeks',
    difficulty: 'Beginner',
    modules: [
      {
        id: 'animal-cell-biology',
        title: 'Animal Cell Biology',
        description: 'Explore the structure and functions of animal cells',
        icon: '🧬',
        duration: '2 weeks',
        difficulty: 'Beginner',
        resources: {
          videos: [
            'Introduction to Animal Cells and Organelles (45 min)',
            'Differences Between Animal and Plant Cells (40 min)',
            'Cellular Respiration and Energy Production (50 min)',
            'Cell Cycle and Mitosis (35 min)'
          ],
          articles: [
            'Structure and Function of Animal Cell Organelles',
            'Animal Cell vs Plant Cell – Key Differences',
            'Cell Cycle Phases Explained'
          ],
          exercises: [
            'Label an Animal Cell Diagram',
            'Compare Cell Functions in Animals vs Plants',
            'Create a Mitosis Stage Model'
          ]
        },
        quiz: {
          id: 'animal-cell-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'Which organelle provides energy in animal cells?',
              options: ['Nucleus', 'Mitochondria', 'Golgi apparatus', 'Lysosome'],
              correctAnswer: 1,
              explanation: 'Mitochondria are responsible for energy production through cellular respiration.'
            }
          ]
        },
        completed: false,
        unlocked: true
      },
      {
        id: 'animal-anatomy',
        title: 'Animal Anatomy',
        description: 'Study the structure and systems of animal bodies',
        icon: '🦴',
        duration: '2 weeks',
        difficulty: 'Beginner',
        resources: {
          videos: [
            'Overview of Major Animal Organ Systems (50 min)',
            'Skeletal and Muscular Systems (45 min)',
            'Digestive and Respiratory Systems (40 min)',
            'Circulatory and Nervous Systems (55 min)'
          ],
          articles: [
            'Human vs Animal Body Systems',
            'Basic Structure of Vertebrate Organs',
            'Functions of Major Organ Systems'
          ],
          exercises: [
            'Label Body Systems in a Vertebrate',
            'Compare Herbivore and Carnivore Digestive Systems',
            'Track the Circulation of Blood in Mammals'
          ]
        },
        quiz: {
          id: 'animal-anatomy-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'Which system includes the heart and blood vessels?',
              options: ['Nervous system', 'Digestive system', 'Circulatory system', 'Respiratory system'],
              correctAnswer: 2,
              explanation: 'The circulatory system transports blood, oxygen, and nutrients throughout the body.'
            }
          ]
        },
        completed: false,
        unlocked: false
      },
      {
        id: 'animal-classification',
        title: 'Animal Classification',
        description: 'Learn how animals are grouped and named',
        icon: '🦋',
        duration: '2 weeks',
        difficulty: 'Intermediate',
        resources: {
          videos: [
            'Basics of Animal Taxonomy (40 min)',
            'Vertebrates vs Invertebrates (50 min)',
            'Classification of Animal Phyla (45 min)',
            'Binomial Nomenclature for Animals (35 min)'
          ],
          articles: [
            'Taxonomic Hierarchy in Zoology',
            'Overview of Key Animal Phyla',
            'Scientific Naming Rules and Examples'
          ],
          exercises: [
            'Classify Sample Animals by Phylum',
            'Practice Scientific Naming for Animals',
            'Compare Vertebrates with Invertebrates'
          ]
        },
        quiz: {
          id: 'animal-classification-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'Which phylum includes insects and spiders?',
              options: ['Chordata', 'Arthropoda', 'Mollusca', 'Annelida'],
              correctAnswer: 1,
              explanation: 'Arthropoda includes animals with exoskeletons, segmented bodies, and jointed appendages.'
            }
          ]
        },
        completed: false,
        unlocked: false
      },
      {
        id: 'animal-ecology-behavior',
        title: 'Animal Ecology & Behavior',
        description: 'Understand animal behavior and their ecological roles',
        icon: '🐾',
        duration: '2 weeks',
        difficulty: 'Intermediate',
        resources: {
          videos: [
            'Introduction to Animal Behavior (45 min)',
            'Instincts vs Learned Behaviors (40 min)',
            'Habitat, Niche, and Adaptations (50 min)',
            'Animal Roles in Food Chains and Ecosystems (55 min)'
          ],
          articles: [
            'Social Behavior in Animal Species',
            'Predation, Camouflage, and Mimicry',
            'Human Impact on Animal Habitats'
          ],
          exercises: [
            'Observe Local Animal Behaviors',
            'Draw a Simple Food Chain with 3–5 Species',
            'Research and Present Animal Adaptations'
          ]
        },
        quiz: {
          id: 'animal-ecology-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'What is a niche in ecology?',
              options: ['A shelter for animals', 'The number of species in a habitat', 'An organism’s role in an ecosystem', 'A food source for predators'],
              correctAnswer: 2,
              explanation: 'A niche refers to how an organism interacts with its environment — its role, habitat, and behavior.'
            }
          ]
        },
        completed: false,
        unlocked: false
      }
    ]
  },
  'genetics-beginner-track': {
    id: 'genetics-beginner-track',
    title: 'Genetics Beginner Track',
    description: 'Understand the fundamentals of heredity, DNA structure, and gene expression',
    totalDuration: '8 weeks',
    difficulty: 'Beginner',
    modules: [
      {
        id: 'introduction-to-genetics',
        title: 'Introduction to Genetics',
        description: 'Explore basic genetic concepts and the history of genetic studies',
        icon: '🧬',
        duration: '2 weeks',
        difficulty: 'Beginner',
        resources: {
          videos: [
            'Basics of Heredity and Mendelian Laws (45 min)',
            'Gregor Mendel and His Experiments (35 min)',
            'Introduction to DNA, Genes, and Chromosomes (50 min)',
            'Punnett Squares and Genetic Probability (40 min)'
          ],
          articles: [
            'What is Genetics?',
            'Mendelian Genetics Explained',
            'Dominant and Recessive Traits'
          ],
          exercises: [
            'Complete a Punnett Square for Eye Color',
            'Trace Family Traits Using a Pedigree Chart',
            'Identify Dominant and Recessive Alleles in Examples'
          ]
        },
        quiz: {
          id: 'genetics-intro-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'Who is considered the father of modern genetics?',
              options: ['Charles Darwin', 'Gregor Mendel', 'James Watson', 'Louis Pasteur'],
              correctAnswer: 1,
              explanation: 'Gregor Mendel discovered the fundamental laws of inheritance through pea plant experiments.'
            }
          ]
        },
        completed: false,
        unlocked: true
      },
      {
        id: 'dna-and-structure',
        title: 'DNA and its Structure',
        description: 'Learn about the molecular structure and replication of DNA',
        icon: '🧫',
        duration: '2 weeks',
        difficulty: 'Beginner',
        resources: {
          videos: [
            'DNA Double Helix and Base Pairing (40 min)',
            'DNA Replication Steps and Enzymes (50 min)',
            'RNA vs DNA – Key Differences (35 min)',
            'Transcription and Translation Basics (45 min)'
          ],
          articles: [
            'Structure of DNA and Base Pairs',
            'Steps in DNA Replication',
            'From DNA to Protein – Gene Expression'
          ],
          exercises: [
            'Build a Paper DNA Model',
            'Label DNA Replication Diagram',
            'Match Codons to Amino Acids'
          ]
        },
        quiz: {
          id: 'dna-structure-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'What are the four bases in DNA?',
              options: [
                'Adenine, Guanine, Cytosine, Thymine',
                'Adenine, Uracil, Cytosine, Guanine',
                'Arginine, Glycine, Cytosine, Thymine',
                'Adenine, Lysine, Cytosine, Thymine'
              ],
              correctAnswer: 0,
              explanation: 'The four nucleotide bases in DNA are adenine, guanine, cytosine, and thymine.'
            }
          ]
        },
        completed: false,
        unlocked: false
      },
      {
        id: 'genetic-disorders',
        title: 'Genetic Disorders',
        description: 'Study how gene mutations lead to disorders and inheritance patterns',
        icon: '🧠',
        duration: '2 weeks',
        difficulty: 'Intermediate',
        resources: {
          videos: [
            'Understanding Gene Mutations (40 min)',
            'Single-Gene vs Chromosomal Disorders (50 min)',
            'Case Study: Cystic Fibrosis (45 min)',
            'Genetic Testing and Counseling (35 min)'
          ],
          articles: [
            'Types of Genetic Mutations',
            'Common Genetic Disorders and Their Causes',
            'How Genetic Testing Works'
          ],
          exercises: [
            'Analyze Pedigree Charts for Disorders',
            'Match Disorders with Mutation Types',
            'Research a Genetic Disorder and Present a Report'
          ]
        },
        quiz: {
          id: 'genetic-disorders-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'Which of the following is a recessive genetic disorder?',
              options: ['Huntington’s Disease', 'Cystic Fibrosis', 'Down Syndrome', 'Turner Syndrome'],
              correctAnswer: 1,
              explanation: 'Cystic Fibrosis is a recessive disorder caused by a mutation in the CFTR gene.'
            }
          ]
        },
        completed: false,
        unlocked: false
      },
      {
        id: 'genetics-and-society',
        title: 'Genetics and Society',
        description: 'Explore the ethical, social, and technological impact of genetics',
        icon: '🌐',
        duration: '2 weeks',
        difficulty: 'Intermediate',
        resources: {
          videos: [
            'Genetic Engineering and CRISPR (50 min)',
            'Ethical Issues in Genetic Modification (45 min)',
            'Personalized Medicine and Pharmacogenomics (40 min)',
            'Future of Genetic Technologies (35 min)'
          ],
          articles: [
            'Gene Editing and CRISPR Explained',
            'Ethical Concerns in Genetics',
            'Genetic Privacy and Legal Considerations'
          ],
          exercises: [
            'Debate Pros and Cons of Gene Editing',
            'Research Recent CRISPR Advancements',
            'Create a Poster on Genetic Privacy'
          ]
        },
        quiz: {
          id: 'genetics-society-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'What is CRISPR primarily used for?',
              options: ['Cloning animals', 'Editing genes', 'Diagnosing infections', 'Producing vaccines'],
              correctAnswer: 1,
              explanation: 'CRISPR is a tool used to edit genes with precision by targeting specific DNA sequences.'
            }
          ]
        },
        completed: false,
        unlocked: false
      }
    ]
  },
  'microbiology-beginner-track': {
    id: 'microbiology-beginner-track',
    title: 'Microbiology Beginner Track',
    description: 'Learn about microorganisms, their structure, function, and roles in health and environment',
    totalDuration: '8 weeks',
    difficulty: 'Beginner',
    modules: [
      {
        id: 'introduction-to-microbiology',
        title: 'Introduction to Microbiology',
        description: 'Explore the history, scope, and importance of microbiology',
        icon: '🧫',
        duration: '2 weeks',
        difficulty: 'Beginner',
        resources: {
          videos: [
            'History and Scope of Microbiology (40 min)',
            'Types of Microorganisms (50 min)',
            'Microscopes and Techniques (45 min)',
            'Role of Microbes in Daily Life (35 min)'
          ],
          articles: [
            'What is Microbiology?',
            'Major Groups of Microorganisms',
            'Applications of Microbiology'
          ],
          exercises: [
            'Label Parts of a Compound Microscope',
            'Identify Microorganisms from Images',
            'Write a Summary on Contributions of Louis Pasteur'
          ]
        },
        quiz: {
          id: 'microbiology-intro-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'Who is considered the father of microbiology?',
              options: ['Robert Koch', 'Alexander Fleming', 'Louis Pasteur', 'Antonie van Leeuwenhoek'],
              correctAnswer: 3,
              explanation: 'Antonie van Leeuwenhoek is considered the father of microbiology for his pioneering work with microscopes and discovery of microorganisms.'
            }
          ]
        },
        completed: false,
        unlocked: true
      },
      {
        id: 'bacteria-and-viruses',
        title: 'Bacteria and Viruses',
        description: 'Understand the structure and function of bacteria and viruses',
        icon: '🦠',
        duration: '2 weeks',
        difficulty: 'Beginner',
        resources: {
          videos: [
            'Bacterial Structure and Classification (50 min)',
            'How Bacteria Reproduce (45 min)',
            'Structure of Viruses (40 min)',
            'Viral Replication Cycles (35 min)'
          ],
          articles: [
            'Differences Between Bacteria and Viruses',
            'Pathogenic vs Beneficial Bacteria',
            'Common Human Viral Infections'
          ],
          exercises: [
            'Compare Structures of Bacteria and Viruses',
            'Draw and Label a Bacterium',
            'Match Viruses with Diseases'
          ]
        },
        quiz: {
          id: 'bacteria-virus-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'Which structure is found in bacteria but not viruses?',
              options: ['Capsid', 'DNA', 'Cell wall', 'Envelope'],
              correctAnswer: 2,
              explanation: 'Bacteria have a cell wall, while viruses do not.'
            }
          ]
        },
        completed: false,
        unlocked: false
      },
      {
        id: 'immune-response',
        title: 'Immune Response and Microbes',
        description: 'Study how the immune system defends against microbial infections',
        icon: '🛡️',
        duration: '2 weeks',
        difficulty: 'Intermediate',
        resources: {
          videos: [
            'Innate vs Adaptive Immunity (50 min)',
            'How Vaccines Work (40 min)',
            'Immune Cells and Their Functions (45 min)',
            'Microbial Evasion Mechanisms (35 min)'
          ],
          articles: [
            'How the Immune System Fights Infections',
            'Vaccination and Herd Immunity',
            'Antigen-Antibody Interactions'
          ],
          exercises: [
            'Label Immune System Components',
            'Simulate a Vaccination Campaign',
            'Compare Innate and Adaptive Immunity'
          ]
        },
        quiz: {
          id: 'immune-response-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'Which of the following is a component of the adaptive immune system?',
              options: ['Skin', 'T cells', 'Mucus', 'Stomach acid'],
              correctAnswer: 1,
              explanation: 'T cells are key players in adaptive immunity, recognizing and attacking specific pathogens.'
            }
          ]
        },
        completed: false,
        unlocked: false
      },
      {
        id: 'microbiology-in-society',
        title: 'Microbiology in Society',
        description: 'Explore the impact of microbes in medicine, industry, and the environment',
        icon: '🌍',
        duration: '2 weeks',
        difficulty: 'Intermediate',
        resources: {
          videos: [
            'Antibiotics and Resistance (45 min)',
            'Microbes in Biotechnology (40 min)',
            'Environmental Microbiology (50 min)',
            'Microbes and Public Health (35 min)'
          ],
          articles: [
            'How Antibiotics Work',
            'Industrial Uses of Microorganisms',
            'Microbial Pollution and Bioremediation'
          ],
          exercises: [
            'Research a Biotech Microbial Product',
            'Evaluate a Case of Antibiotic Resistance',
            'Design a Public Health Awareness Poster'
          ]
        },
        quiz: {
          id: 'microbiology-society-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'What is bioremediation?',
              options: [
                'Use of microbes to cure diseases',
                'Use of microbes to clean pollutants',
                'Use of chemicals to kill microbes',
                'Sterilizing surgical tools with microbes'
              ],
              correctAnswer: 1,
              explanation: 'Bioremediation is the process of using microorganisms to degrade environmental pollutants.'
            }
          ]
        },
        completed: false,
        unlocked: false
      }
    ]
  },
  'molecular-biology-beginner-track': {
    id: 'molecular-biology-beginner-track',
    title: 'Molecular Biology Beginner Track',
    description: 'Dive into the fundamentals of DNA, RNA, and proteins to understand the molecular basis of life',
    totalDuration: '8 weeks',
    difficulty: 'Beginner',
    modules: [
      {
        id: 'dna-and-rna-structure',
        title: 'DNA and RNA Structure',
        description: 'Learn about the molecular structure of DNA and RNA and their roles in genetics',
        icon: '🧬',
        duration: '2 weeks',
        difficulty: 'Beginner',
        resources: {
          videos: [
            'Structure of DNA (45 min)',
            'RNA: Types and Functions (40 min)',
            'DNA vs RNA Comparison (30 min)',
            'Base Pairing and Double Helix (35 min)'
          ],
          articles: [
            'What is DNA?',
            'RNA: Messenger and More',
            'Discovery of the Double Helix'
          ],
          exercises: [
            'Label a DNA Molecule',
            'Compare DNA and RNA',
            'Identify Bases in Sequences'
          ]
        },
        quiz: {
          id: 'dna-rna-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'Which base is found in RNA but not DNA?',
              options: ['Adenine', 'Thymine', 'Cytosine', 'Uracil'],
              correctAnswer: 3,
              explanation: 'Uracil replaces thymine in RNA.'
            }
          ]
        },
        completed: false,
        unlocked: true
      },
      {
        id: 'gene-expression',
        title: 'Gene Expression',
        description: 'Explore how genetic information is transcribed and translated into proteins',
        icon: '🧾',
        duration: '2 weeks',
        difficulty: 'Beginner',
        resources: {
          videos: [
            'Transcription: DNA to RNA (40 min)',
            'Translation: RNA to Protein (50 min)',
            'The Central Dogma Explained (30 min)',
            'tRNA and Ribosome Role (35 min)'
          ],
          articles: [
            'Steps of Transcription',
            'The Genetic Code',
            'Protein Synthesis Overview'
          ],
          exercises: [
            'Label Transcription Steps',
            'Match Codons to Amino Acids',
            'Summarize the Central Dogma'
          ]
        },
        quiz: {
          id: 'gene-expression-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'What enzyme is responsible for transcription?',
              options: ['DNA polymerase', 'RNA polymerase', 'Ligase', 'Helicase'],
              correctAnswer: 1,
              explanation: 'RNA polymerase synthesizes RNA from the DNA template.'
            }
          ]
        },
        completed: false,
        unlocked: false
      },
      {
        id: 'dna-replication-repair',
        title: 'DNA Replication and Repair',
        description: 'Understand how DNA is duplicated and maintained for cellular function',
        icon: '🛠️',
        duration: '2 weeks',
        difficulty: 'Intermediate',
        resources: {
          videos: [
            'Mechanism of DNA Replication (50 min)',
            'Enzymes Involved in Replication (45 min)',
            'DNA Proofreading and Repair (40 min)',
            'Mutation and Repair Mechanisms (35 min)'
          ],
          articles: [
            'Steps of DNA Replication',
            'Common DNA Repair Pathways',
            'Mutations and Their Causes'
          ],
          exercises: [
            'Diagram DNA Replication Fork',
            'List DNA Repair Enzymes',
            'Simulate a Mutation Fix'
          ]
        },
        quiz: {
          id: 'dna-repair-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'Which enzyme joins Okazaki fragments during replication?',
              options: ['Helicase', 'Primase', 'Ligase', 'Topoisomerase'],
              correctAnswer: 2,
              explanation: 'DNA ligase joins Okazaki fragments on the lagging strand.'
            }
          ]
        },
        completed: false,
        unlocked: false
      },
      {
        id: 'molecular-techniques',
        title: 'Molecular Biology Techniques',
        description: 'Get introduced to techniques like PCR, electrophoresis, and gene cloning',
        icon: '🔬',
        duration: '2 weeks',
        difficulty: 'Intermediate',
        resources: {
          videos: [
            'PCR: Polymerase Chain Reaction (45 min)',
            'Gel Electrophoresis Explained (40 min)',
            'DNA Cloning Basics (35 min)',
            'CRISPR Overview (30 min)'
          ],
          articles: [
            'Steps of PCR',
            'How Gel Electrophoresis Works',
            'Introduction to CRISPR-Cas9'
          ],
          exercises: [
            'Simulate PCR Steps',
            'Interpret Gel Results',
            'Design a Cloning Experiment'
          ]
        },
        quiz: {
          id: 'molecular-techniques-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'Which technique is used to amplify DNA?',
              options: ['Electrophoresis', 'PCR', 'Blotting', 'Cloning'],
              correctAnswer: 1,
              explanation: 'PCR is used to create millions of DNA copies from a small sample.'
            }
          ]
        },
        completed: false,
        unlocked: false
      }
    ]
  },
  'food-science-nutrition-beginner-track': {
    id: 'food-science-nutrition-beginner-track',
    title: 'Food Science and Nutrition Beginner Track',
    description: 'Explore the basics of food composition, nutrients, and how diet affects health and well-being',
    totalDuration: '8 weeks',
    difficulty: 'Beginner',
    modules: [
      {
        id: 'macronutrients-basics',
        title: 'Macronutrients: Carbs, Proteins, Fats',
        description: 'Learn about the major nutrients that provide energy and support bodily functions',
        icon: '🍞',
        duration: '2 weeks',
        difficulty: 'Beginner',
        resources: {
          videos: [
            'Introduction to Macronutrients (40 min)',
            'Carbohydrates Explained (35 min)',
            'Proteins: Structure and Function (45 min)',
            'Understanding Fats and Oils (30 min)'
          ],
          articles: [
            'What are Macronutrients?',
            'Balanced Diet and Energy Needs',
            'The Role of Essential Fatty Acids'
          ],
          exercises: [
            'Identify Macronutrients in Meals',
            'Calculate Energy from Macronutrients',
            'Compare Simple vs Complex Carbs'
          ]
        },
        quiz: {
          id: 'macronutrients-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'Which nutrient is the body’s primary energy source?',
              options: ['Proteins', 'Fats', 'Carbohydrates', 'Vitamins'],
              correctAnswer: 2,
              explanation: 'Carbohydrates are the main source of quick energy for the body.'
            }
          ]
        },
        completed: false,
        unlocked: true
      },
      {
        id: 'micronutrients-vitamins-minerals',
        title: 'Micronutrients: Vitamins and Minerals',
        description: 'Understand the importance of vitamins and minerals for maintaining health',
        icon: '🍊',
        duration: '2 weeks',
        difficulty: 'Beginner',
        resources: {
          videos: [
            'Essential Vitamins and Their Roles (45 min)',
            'Minerals: Macro and Trace (40 min)',
            'Deficiency Diseases (35 min)',
            'Water-Soluble vs Fat-Soluble Vitamins (30 min)'
          ],
          articles: [
            'Micronutrient Chart',
            'Common Deficiencies',
            'Daily Recommended Intakes'
          ],
          exercises: [
            'Match Vitamins to Functions',
            'Trace Mineral Quiz',
            'Plan a Vitamin-Rich Diet'
          ]
        },
        quiz: {
          id: 'micronutrients-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'Which vitamin is essential for vision?',
              options: ['Vitamin C', 'Vitamin A', 'Vitamin D', 'Vitamin K'],
              correctAnswer: 1,
              explanation: 'Vitamin A is crucial for eye health and vision.'
            }
          ]
        },
        completed: false,
        unlocked: false
      },
      {
        id: 'food-processing-safety',
        title: 'Food Processing and Safety',
        description: 'Explore how food is processed, preserved, and made safe for consumption',
        icon: '🏭',
        duration: '2 weeks',
        difficulty: 'Intermediate',
        resources: {
          videos: [
            'Introduction to Food Processing (40 min)',
            'Preservation Techniques (45 min)',
            'Food Safety Standards (35 min)',
            'HACCP and Contamination Prevention (30 min)'
          ],
          articles: [
            'Thermal and Non-Thermal Processing',
            'Food Spoilage and Microbes',
            'Packaging and Storage Guidelines'
          ],
          exercises: [
            'Label Food Safety Hazards',
            'Create a Processing Flowchart',
            'List Contamination Control Measures'
          ]
        },
        quiz: {
          id: 'food-safety-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'Which system is used to identify and control food safety risks?',
              options: ['GMP', 'ISO 9001', 'HACCP', 'FDA'],
              correctAnswer: 2,
              explanation: 'HACCP (Hazard Analysis and Critical Control Points) is widely used in food safety.'
            }
          ]
        },
        completed: false,
        unlocked: false
      },
      {
        id: 'diet-and-health',
        title: 'Diet and Human Health',
        description: 'Learn how nutrition affects health, disease prevention, and wellness',
        icon: '🧠',
        duration: '2 weeks',
        difficulty: 'Intermediate',
        resources: {
          videos: [
            'The Science of Healthy Eating (40 min)',
            'Nutritional Needs by Age (35 min)',
            'Diet and Lifestyle Diseases (45 min)',
            'MyPlate and Dietary Guidelines (30 min)'
          ],
          articles: [
            'Link Between Diet and Disease',
            'Nutritional Planning for Adults',
            'BMI and Caloric Needs'
          ],
          exercises: [
            'Analyze a Daily Diet',
            'Calculate BMI and BMR',
            'Suggest Diet Plans Based on Age'
          ]
        },
        quiz: {
          id: 'diet-health-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'Which condition is commonly linked to poor diet?',
              options: ['Asthma', 'Diabetes', 'Arthritis', 'Tuberculosis'],
              correctAnswer: 1,
              explanation: 'Poor diet is a major risk factor for Type 2 diabetes.'
            }
          ]
        },
        completed: false,
        unlocked: false
      }
    ]
  },
  'agricultural-biotechnology-beginner-track': {
    id: 'agricultural-biotechnology-beginner-track',
    title: 'Agricultural Biotechnology Beginner Track',
    description: 'Discover how biotechnology enhances crop yield, disease resistance, and sustainable agriculture practices',
    totalDuration: '8 weeks',
    difficulty: 'Beginner',
    modules: [
      {
        id: 'intro-to-agri-biotech',
        title: 'Introduction to Agricultural Biotechnology',
        description: 'Understand the basics of biotechnology and its role in agriculture',
        icon: '🌱',
        duration: '2 weeks',
        difficulty: 'Beginner',
        resources: {
          videos: [
            'What is Agricultural Biotechnology? (40 min)',
            'History and Applications in Farming (30 min)',
            'Key Techniques in Agri Biotech (35 min)'
          ],
          articles: [
            'Overview of Agri Biotech',
            'Importance in Food Security',
            'FAQs on GMO Crops'
          ],
          exercises: [
            'List Applications of Agri Biotech',
            'Match Biotech Tools to Uses',
            'Summarize a GMO Development Case'
          ]
        },
        quiz: {
          id: 'intro-agri-biotech-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'Which is a common use of agricultural biotechnology?',
              options: ['Soil erosion control', 'Improved irrigation', 'Pest-resistant crops', 'Traditional breeding'],
              correctAnswer: 2,
              explanation: 'Biotechnology often involves developing crops that are resistant to pests and diseases.'
            }
          ]
        },
        completed: false,
        unlocked: true
      },
      {
        id: 'genetic-engineering-crops',
        title: 'Genetic Engineering of Crops',
        description: 'Explore how genetic engineering helps improve crop traits like yield, quality, and resistance',
        icon: '🧬',
        duration: '2 weeks',
        difficulty: 'Beginner',
        resources: {
          videos: [
            'Basics of Genetic Modification (40 min)',
            'BT Crops and Pest Resistance (35 min)',
            'Golden Rice and Nutritional Enhancement (30 min)'
          ],
          articles: [
            'How GM Crops Are Made',
            'Pros and Cons of Genetic Engineering',
            'Regulations Around GMOs'
          ],
          exercises: [
            'Diagram a Genetically Modified Plant',
            'Evaluate Benefits of GM Crops',
            'Distinguish Between Traditional and GM Methods'
          ]
        },
        quiz: {
          id: 'genetic-crops-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'Golden rice was developed to combat deficiency of which vitamin?',
              options: ['Vitamin A', 'Vitamin C', 'Vitamin D', 'Vitamin B12'],
              correctAnswer: 0,
              explanation: 'Golden rice is genetically modified to produce beta-carotene, a precursor of Vitamin A.'
            }
          ]
        },
        completed: false,
        unlocked: false
      },
      {
        id: 'biotech-soil-plant-health',
        title: 'Biotechnology in Soil and Plant Health',
        description: 'Learn how biotech tools monitor and improve soil and plant health for sustainable agriculture',
        icon: '🪴',
        duration: '2 weeks',
        difficulty: 'Beginner',
        resources: {
          videos: [
            'Microbial Biotechnology for Soil Health (35 min)',
            'Biofertilizers and Biopesticides (40 min)',
            'Plant-Microbe Interactions (30 min)'
          ],
          articles: [
            'Using Microbes for Plant Growth',
            'Biotech Solutions to Soil Degradation',
            'Mycorrhizae and Nutrient Uptake'
          ],
          exercises: [
            'Identify Types of Biofertilizers',
            'Label Soil Health Indicators',
            'Match Microbes with Plant Benefits'
          ]
        },
        quiz: {
          id: 'soil-plant-health-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'Which of the following improves nutrient uptake in plants?',
              options: ['Fungi', 'Mycorrhizae', 'Viruses', 'Algae'],
              correctAnswer: 1,
              explanation: 'Mycorrhizae are fungi that form symbiotic relationships with plant roots to enhance nutrient absorption.'
            }
          ]
        },
        completed: false,
        unlocked: false
      },
      {
        id: 'ethics-and-impact-agri-biotech',
        title: 'Ethics and Impact of Agricultural Biotechnology',
        description: 'Examine ethical issues, global impact, and debates surrounding biotech in agriculture',
        icon: '⚖️',
        duration: '2 weeks',
        difficulty: 'Intermediate',
        resources: {
          videos: [
            'Ethical Concerns in GMO Use (30 min)',
            'Biotech and the Environment (35 min)',
            'Public Perception and Regulation (40 min)'
          ],
          articles: [
            'Ethics of Genetic Modification',
            'Biotech and Climate-Resilient Crops',
            'International GMO Policies'
          ],
          exercises: [
            'Debate: Pros vs Cons of GM Crops',
            'Policy Analysis: India vs USA on GMOs',
            'Write a Reflection on Biotech Ethics'
          ]
        },
        quiz: {
          id: 'ethics-impact-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'Which is a major ethical concern of agricultural biotechnology?',
              options: ['Low productivity', 'Over-irrigation', 'Unintended gene flow', 'Use of fertilizers'],
              correctAnswer: 2,
              explanation: 'Unintended gene flow from GM crops to wild relatives is a significant ethical and ecological concern.'
            }
          ]
        },
        completed: false,
        unlocked: false
      }
    ]
  },
  'physics-beginner-track': {
    id: 'physics-beginner-track',
    title: 'Physics Beginner Track',
    description: 'Build a solid foundation in classical and modern physics with engaging concepts and applications',
    totalDuration: '8 weeks',
    difficulty: 'Beginner',
    modules: [
      {
        id: 'basic-mechanics',
        title: 'Basic Mechanics',
        description: 'Understand motion, forces, Newton’s laws, and energy basics',
        icon: '⚙️',
        duration: '2 weeks',
        difficulty: 'Beginner',
        resources: {
          videos: [
            'Introduction to Motion and Force (40 min)',
            'Newton’s Laws of Motion (35 min)',
            'Work, Energy, and Power Explained (30 min)'
          ],
          articles: [
            'Key Concepts in Mechanics',
            'Understanding Free Body Diagrams',
            'Common Mistakes in Applying Newton’s Laws'
          ],
          exercises: [
            'Solve Force and Motion Problems',
            'Draw Free Body Diagrams',
            'Calculate Work and Power'
          ]
        },
        quiz: {
          id: 'basic-mechanics-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'What does Newton’s First Law state?',
              options: [
                'Force equals mass times acceleration',
                'Objects remain at rest or in uniform motion unless acted upon',
                'Every action has an equal and opposite reaction',
                'Energy can neither be created nor destroyed'
              ],
              correctAnswer: 1,
              explanation: 'Newton’s First Law describes inertia – an object remains in its state unless disturbed.'
            }
          ]
        },
        completed: false,
        unlocked: true
      },
      {
        id: 'waves-and-sound',
        title: 'Waves and Sound',
        description: 'Learn the properties of waves and how sound travels',
        icon: '🔊',
        duration: '2 weeks',
        difficulty: 'Beginner',
        resources: {
          videos: [
            'What Are Waves? (30 min)',
            'Types of Mechanical Waves (35 min)',
            'Understanding Sound Waves (40 min)'
          ],
          articles: [
            'Wave Characteristics Explained',
            'Frequency, Wavelength, and Speed',
            'Applications of Sound Waves'
          ],
          exercises: [
            'Classify Wave Types',
            'Calculate Wave Speed',
            'Diagram Sound Wave Propagation'
          ]
        },
        quiz: {
          id: 'waves-sound-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'Which of the following is a longitudinal wave?',
              options: ['Light', 'Radio', 'Sound', 'Microwave'],
              correctAnswer: 2,
              explanation: 'Sound is a longitudinal wave that requires a medium to travel.'
            }
          ]
        },
        completed: false,
        unlocked: false
      },
      {
        id: 'light-and-optics',
        title: 'Light and Optics',
        description: 'Explore how light behaves and interacts with different surfaces',
        icon: '🔦',
        duration: '2 weeks',
        difficulty: 'Beginner',
        resources: {
          videos: [
            'Nature of Light (35 min)',
            'Reflection and Refraction (40 min)',
            'Lenses and Mirrors (30 min)'
          ],
          articles: [
            'Basic Laws of Reflection',
            'Snell’s Law Explained',
            'Applications of Optics in Technology'
          ],
          exercises: [
            'Trace Ray Diagrams',
            'Calculate Image Distance',
            'Differentiate Concave and Convex Lenses'
          ]
        },
        quiz: {
          id: 'light-optics-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'What happens when light passes from air into water?',
              options: [
                'It reflects completely',
                'It speeds up',
                'It bends toward the normal',
                'It bends away from the normal'
              ],
              correctAnswer: 2,
              explanation: 'When light enters a denser medium like water, it slows down and bends toward the normal.'
            }
          ]
        },
        completed: false,
        unlocked: false
      },
      {
        id: 'electricity-and-magnetism',
        title: 'Electricity and Magnetism',
        description: 'Understand the basics of electric current, circuits, and magnetic fields',
        icon: '⚡',
        duration: '2 weeks',
        difficulty: 'Intermediate',
        resources: {
          videos: [
            'Basics of Electric Circuits (40 min)',
            'Ohm’s Law and Resistance (35 min)',
            'Magnetism and Electromagnetism (30 min)'
          ],
          articles: [
            'Electric Current and Voltage',
            'Series vs Parallel Circuits',
            'Magnetic Fields and Their Effects'
          ],
          exercises: [
            'Draw a Simple Circuit',
            'Calculate Resistance Using Ohm’s Law',
            'Identify Magnetic Poles'
          ]
        },
        quiz: {
          id: 'electricity-magnetism-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'What is the formula given by Ohm’s Law?',
              options: ['V = IR', 'P = IV', 'E = mc²', 'F = ma'],
              correctAnswer: 0,
              explanation: 'Ohm’s Law relates voltage (V), current (I), and resistance (R) as V = IR.'
            }
          ]
        },
        completed: false,
        unlocked: false
      }
    ]
  },
  'astrophysics-beginner-track': {
    id: 'astrophysics-beginner-track',
    title: 'Astrophysics Beginner Track',
    description: 'Explore the universe, celestial bodies, and fundamental astrophysical phenomena from the ground up',
    totalDuration: '8 weeks',
    difficulty: 'Beginner',
    modules: [
      {
        id: 'introduction-to-astrophysics',
        title: 'Introduction to Astrophysics',
        description: 'Learn about the scope of astrophysics, the universe, and how we study celestial objects',
        icon: '🌌',
        duration: '2 weeks',
        difficulty: 'Beginner',
        resources: {
          videos: [
            'What is Astrophysics? (25 min)',
            'The Observable Universe (35 min)',
            'Tools of Astronomy (30 min)'
          ],
          articles: [
            'Overview of Astrophysics',
            'Telescopes and Detectors',
            'Famous Astronomers and Discoveries'
          ],
          exercises: [
            'Label the Parts of a Telescope',
            'List Different Types of Telescopes',
            'Match Discoveries with Astronomers'
          ]
        },
        quiz: {
          id: 'intro-astrophysics-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'What does astrophysics study?',
              options: [
                'Biological processes on Earth',
                'The physical properties of celestial bodies',
                'The ocean currents',
                'Human evolution'
              ],
              correctAnswer: 1,
              explanation: 'Astrophysics focuses on the physical behavior and properties of celestial objects.'
            }
          ]
        },
        completed: false,
        unlocked: true
      },
      {
        id: 'stars-and-galaxies',
        title: 'Stars and Galaxies',
        description: 'Understand the life cycle of stars and the structure of galaxies',
        icon: '⭐',
        duration: '2 weeks',
        difficulty: 'Beginner',
        resources: {
          videos: [
            'Birth and Death of Stars (30 min)',
            'Types of Stars and Their Properties (35 min)',
            'Structure of Galaxies (30 min)'
          ],
          articles: [
            'Hertzsprung-Russell Diagram Explained',
            'What Are Nebulae?',
            'Types of Galaxies'
          ],
          exercises: [
            'Classify Star Types by Temperature',
            'Draw a Star Life Cycle Diagram',
            'Match Galaxy Types with Their Features'
          ]
        },
        quiz: {
          id: 'stars-galaxies-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'Which stage comes after a red giant in a star’s life?',
              options: ['White dwarf', 'Supernova', 'Neutron star', 'Black hole'],
              correctAnswer: 0,
              explanation: 'Low-mass stars become white dwarfs after passing through the red giant phase.'
            }
          ]
        },
        completed: false,
        unlocked: false
      },
      {
        id: 'solar-system-and-planets',
        title: 'Solar System and Planets',
        description: 'Explore the Sun, planets, and other celestial bodies in our solar system',
        icon: '🪐',
        duration: '2 weeks',
        difficulty: 'Beginner',
        resources: {
          videos: [
            'Overview of the Solar System (30 min)',
            'Terrestrial vs Jovian Planets (35 min)',
            'Moons, Asteroids, and Comets (25 min)'
          ],
          articles: [
            'Characteristics of Inner and Outer Planets',
            'The Sun: Structure and Behavior',
            'Famous Space Missions and Discoveries'
          ],
          exercises: [
            'Order Planets by Distance from Sun',
            'Label Planet Types',
            'Identify Unique Features of Each Planet'
          ]
        },
        quiz: {
          id: 'solar-system-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'Which planet is known for its prominent ring system?',
              options: ['Earth', 'Mars', 'Saturn', 'Neptune'],
              correctAnswer: 2,
              explanation: 'Saturn is known for its stunning and prominent ring system.'
            }
          ]
        },
        completed: false,
        unlocked: false
      },
      {
        id: 'cosmology-and-the-universe',
        title: 'Cosmology and the Universe',
        description: 'Dive into the origin, structure, and future of the universe',
        icon: '🧿',
        duration: '2 weeks',
        difficulty: 'Intermediate',
        resources: {
          videos: [
            'The Big Bang Theory Explained (30 min)',
            'Expansion of the Universe (35 min)',
            'Dark Matter and Dark Energy (30 min)'
          ],
          articles: [
            'Redshift and Cosmic Background Radiation',
            'What is the Fate of the Universe?',
            'Evidence for Dark Energy'
          ],
          exercises: [
            'Describe the Big Bang Model',
            'Explain Hubble’s Law',
            'Compare Matter, Dark Matter, and Dark Energy'
          ]
        },
        quiz: {
          id: 'cosmology-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'What is believed to have caused the expansion of the universe?',
              options: ['Gravity', 'Dark energy', 'Black holes', 'Solar winds'],
              correctAnswer: 1,
              explanation: 'Dark energy is the mysterious force driving the accelerated expansion of the universe.'
            }
          ]
        },
        completed: false,
        unlocked: false
      }
    ]
  },
  'astronomy-beginner-track': {
    id: 'astronomy-beginner-track',
    title: 'Astronomy Beginner Track',
    description: 'Explore the universe, celestial bodies, and the science behind the cosmos',
    totalDuration: '8 weeks',
    difficulty: 'Beginner',
    modules: [
      {
        id: 'introduction-to-astronomy',
        title: 'Introduction to Astronomy',
        description: 'Learn about the history, tools, and basic concepts of astronomy',
        icon: '🌌',
        duration: '2 weeks',
        difficulty: 'Beginner',
        resources: {
          videos: [
            'What is Astronomy? (30 min)',
            'History of Astronomy (35 min)',
            'Tools of the Astronomer (40 min)'
          ],
          articles: [
            'Ancient Astronomy and Observations',
            'Telescopes and How They Work',
            'Branches of Astronomy'
          ],
          exercises: [
            'Identify Key Astronomical Instruments',
            'Timeline of Major Discoveries',
            'Basic Sky Observation Log'
          ]
        },
        quiz: {
          id: 'intro-astronomy-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'What tool is essential for most astronomical observations?',
              options: ['Microscope', 'Telescope', 'Binoculars', 'Periscope'],
              correctAnswer: 1,
              explanation: 'Telescopes are crucial for observing distant celestial objects.'
            }
          ]
        },
        completed: false,
        unlocked: true
      },
      {
        id: 'solar-system',
        title: 'The Solar System',
        description: 'Understand planets, moons, and other bodies in our solar system',
        icon: '🪐',
        duration: '2 weeks',
        difficulty: 'Beginner',
        resources: {
          videos: [
            'Overview of the Solar System (30 min)',
            'Planets and Their Characteristics (35 min)',
            'Asteroids, Comets, and Moons (40 min)'
          ],
          articles: [
            'Structure of the Solar System',
            'Why Pluto is No Longer a Planet',
            'Moons of Jupiter and Saturn'
          ],
          exercises: [
            'Label Planets by Distance from Sun',
            'Match Moons to Their Planets',
            'Solar System Fact Sheet'
          ]
        },
        quiz: {
          id: 'solar-system-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'Which planet is known as the "Red Planet"?',
              options: ['Venus', 'Mars', 'Jupiter', 'Mercury'],
              correctAnswer: 1,
              explanation: 'Mars is called the Red Planet due to its reddish appearance from iron oxide.'
            }
          ]
        },
        completed: false,
        unlocked: false
      },
      {
        id: 'stars-and-galaxies',
        title: 'Stars and Galaxies',
        description: 'Learn about stars, their life cycles, and the vast galaxies beyond',
        icon: '⭐',
        duration: '2 weeks',
        difficulty: 'Beginner',
        resources: {
          videos: [
            'How Stars Are Formed (35 min)',
            'Life Cycle of a Star (40 min)',
            'Types of Galaxies (30 min)'
          ],
          articles: [
            'Star Classification and Spectra',
            'Supernova and Black Holes',
            'Milky Way vs. Other Galaxies'
          ],
          exercises: [
            'Label Star Life Stages',
            'Compare Spiral and Elliptical Galaxies',
            'Star Brightness and Temperature Graph'
          ]
        },
        quiz: {
          id: 'stars-galaxies-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'What is the final stage of a massive star’s life?',
              options: ['White dwarf', 'Supernova', 'Neutron star or black hole', 'Red giant'],
              correctAnswer: 2,
              explanation: 'Massive stars can end their lives as neutron stars or black holes after a supernova.'
            }
          ]
        },
        completed: false,
        unlocked: false
      },
      {
        id: 'cosmology-and-space-exploration',
        title: 'Cosmology and Space Exploration',
        description: 'Understand the origin of the universe and mankind’s journey into space',
        icon: '🚀',
        duration: '2 weeks',
        difficulty: 'Intermediate',
        resources: {
          videos: [
            'Big Bang Theory and Cosmic Background (35 min)',
            'The Expanding Universe (30 min)',
            'History of Space Exploration (40 min)'
          ],
          articles: [
            'Introduction to Cosmology',
            'Major Space Missions and Satellites',
            'The Search for Extraterrestrial Life'
          ],
          exercises: [
            'Timeline of Space Missions',
            'Hubble’s Law and Universe Expansion',
            'Exploration Goals of NASA and ISRO'
          ]
        },
        quiz: {
          id: 'cosmology-exploration-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'What evidence supports the Big Bang theory?',
              options: ['Sunspots', 'Black holes', 'Cosmic microwave background radiation', 'Asteroid impacts'],
              correctAnswer: 2,
              explanation: 'Cosmic microwave background radiation is a key evidence of the Big Bang.'
            }
          ]
        },
        completed: false,
        unlocked: false
      }
    ]
  },
  'geology-beginner-track': {
    id: 'geology-beginner-track',
    title: 'Geology Beginner Track',
    description: 'Discover the Earth’s structure, rocks, minerals, and the forces that shape our planet',
    totalDuration: '8 weeks',
    difficulty: 'Beginner',
    modules: [
      {
        id: 'earth-structure-and-plate-tectonics',
        title: 'Earth’s Structure and Plate Tectonics',
        description: 'Explore the layers of Earth and the movement of tectonic plates',
        icon: '🌍',
        duration: '2 weeks',
        difficulty: 'Beginner',
        resources: {
          videos: [
            'Layers of the Earth (30 min)',
            'Introduction to Plate Tectonics (35 min)',
            'Earthquakes and Volcanoes (40 min)'
          ],
          articles: [
            'Crust, Mantle, and Core',
            'Types of Plate Boundaries',
            'Ring of Fire and Natural Disasters'
          ],
          exercises: [
            'Label Earth Layers Diagram',
            'Match Tectonic Boundary Types',
            'Volcanic Activity Map Analysis'
          ]
        },
        quiz: {
          id: 'tectonics-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'Which layer of the Earth is the thickest?',
              options: ['Crust', 'Mantle', 'Core', 'Lithosphere'],
              correctAnswer: 1,
              explanation: 'The mantle is the thickest layer of Earth’s interior.'
            }
          ]
        },
        completed: false,
        unlocked: true
      },
      {
        id: 'rocks-and-minerals',
        title: 'Rocks and Minerals',
        description: 'Identify different types of rocks and understand mineral properties',
        icon: '🪨',
        duration: '2 weeks',
        difficulty: 'Beginner',
        resources: {
          videos: [
            'Introduction to Rocks (30 min)',
            'Types of Rocks: Igneous, Sedimentary, Metamorphic (35 min)',
            'Minerals and Their Properties (40 min)'
          ],
          articles: [
            'Rock Cycle Overview',
            'Common Rock Types',
            'Hardness, Streak, and Luster'
          ],
          exercises: [
            'Rock Identification Chart',
            'Mineral Property Table',
            'Classify Rocks from Pictures'
          ]
        },
        quiz: {
          id: 'rocks-minerals-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'What type of rock forms from lava cooling?',
              options: ['Sedimentary', 'Igneous', 'Metamorphic', 'Fossil'],
              correctAnswer: 1,
              explanation: 'Igneous rocks form from the cooling of lava or magma.'
            }
          ]
        },
        completed: false,
        unlocked: false
      },
      {
        id: 'geological-time-and-fossils',
        title: 'Geological Time and Fossils',
        description: 'Understand Earth’s history through layers and fossil records',
        icon: '🦴',
        duration: '2 weeks',
        difficulty: 'Beginner',
        resources: {
          videos: [
            'Geological Time Scale (35 min)',
            'Fossil Formation and Dating (40 min)',
            'Mass Extinctions in History (30 min)'
          ],
          articles: [
            'Precambrian to Cenozoic Eras',
            'Radiometric and Relative Dating',
            'Famous Fossil Sites'
          ],
          exercises: [
            'Create a Time Scale Chart',
            'Identify Fossils from Eras',
            'Match Fossils to Layers'
          ]
        },
        quiz: {
          id: 'fossils-time-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'What is the oldest eon in Earth’s history?',
              options: ['Mesozoic', 'Cenozoic', 'Paleozoic', 'Precambrian'],
              correctAnswer: 3,
              explanation: 'The Precambrian eon covers the majority of Earth’s history.'
            }
          ]
        },
        completed: false,
        unlocked: false
      },
      {
        id: 'earth-processes-and-resources',
        title: 'Earth Processes and Natural Resources',
        description: 'Learn about erosion, weathering, and the importance of Earth’s resources',
        icon: '⛏️',
        duration: '2 weeks',
        difficulty: 'Intermediate',
        resources: {
          videos: [
            'Weathering and Erosion (30 min)',
            'Soil Formation and Layers (35 min)',
            'Mining and Earth’s Resources (40 min)'
          ],
          articles: [
            'Water, Wind, and Ice Erosion',
            'Types of Natural Resources',
            'Impact of Mining on Environment'
          ],
          exercises: [
            'Erosion Simulation Observation',
            'Resource Classification Activity',
            'Environmental Impact Chart'
          ]
        },
        quiz: {
          id: 'earth-processes-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'Which process breaks rocks into smaller pieces?',
              options: ['Condensation', 'Weathering', 'Erosion', 'Deposition'],
              correctAnswer: 1,
              explanation: 'Weathering is the breaking down of rocks through physical or chemical means.'
            }
          ]
        },
        completed: false,
        unlocked: false
      }
    ]
  },
  'geophysics-beginner-track': {
    id: 'geophysics-beginner-track',
    title: 'Geophysics Beginner Track',
    description: 'Explore the physical principles and techniques used to study the Earth’s interior and surface phenomena',
    totalDuration: '8 weeks',
    difficulty: 'Beginner',
    modules: [
      {
        id: 'introduction-to-geophysics',
        title: 'Introduction to Geophysics',
        description: 'Understand the scope, methods, and importance of geophysics in Earth sciences',
        icon: '🌐',
        duration: '2 weeks',
        difficulty: 'Beginner',
        resources: {
          videos: [
            'What is Geophysics? (30 min)',
            'Applications of Geophysics (35 min)',
            'Earth’s Physical Properties (40 min)'
          ],
          articles: [
            'Branches of Geophysics',
            'History and Evolution of Geophysical Methods',
            'Geophysical Surveys Overview'
          ],
          exercises: [
            'Geophysics Terminology Match',
            'Identify Geophysical Applications',
            'Fill-in-the-Blank: Geophysics Basics'
          ]
        },
        quiz: {
          id: 'intro-geophysics-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'Which of the following is NOT a branch of geophysics?',
              options: ['Seismology', 'Magnetometry', 'Botany', 'Gravimetry'],
              correctAnswer: 2,
              explanation: 'Botany is a branch of biology, not geophysics.'
            }
          ]
        },
        completed: false,
        unlocked: true
      },
      {
        id: 'seismology-and-earthquakes',
        title: 'Seismology and Earthquakes',
        description: 'Learn how seismic waves help us understand the Earth’s interior and monitor earthquakes',
        icon: '🌋',
        duration: '2 weeks',
        difficulty: 'Beginner',
        resources: {
          videos: [
            'Basics of Seismic Waves (30 min)',
            'Measuring Earthquakes (35 min)',
            'Seismic Hazard Zones (40 min)'
          ],
          articles: [
            'P-Waves and S-Waves Explained',
            'Seismograph and Seismometer',
            'Global Earthquake Monitoring'
          ],
          exercises: [
            'Wave Type Identification',
            'Earthquake Intensity Comparison',
            'Seismograph Data Interpretation'
          ]
        },
        quiz: {
          id: 'seismology-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'Which wave travels fastest during an earthquake?',
              options: ['S-wave', 'Rayleigh wave', 'P-wave', 'Love wave'],
              correctAnswer: 2,
              explanation: 'P-waves (Primary waves) are the fastest seismic waves.'
            }
          ]
        },
        completed: false,
        unlocked: false
      },
      {
        id: 'gravity-and-magnetic-methods',
        title: 'Gravity and Magnetic Methods',
        description: 'Understand how gravitational and magnetic measurements reveal subsurface structures',
        icon: '🧲',
        duration: '2 weeks',
        difficulty: 'Beginner',
        resources: {
          videos: [
            'Gravity Surveys in Geophysics (30 min)',
            'Earth’s Magnetic Field (35 min)',
            'Anomalies and What They Tell Us (40 min)'
          ],
          articles: [
            'Gravimetry in Exploration',
            'Types of Magnetic Surveys',
            'Interpreting Gravity and Magnetic Data'
          ],
          exercises: [
            'Map Gravity Anomalies',
            'Identify Magnetic Features',
            'Survey Method Match-Up'
          ]
        },
        quiz: {
          id: 'gravity-magnetic-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'What is a gravity anomaly?',
              options: ['A type of earthquake', 'A deviation in gravity from normal values', 'A volcanic eruption', 'A magnetic field disturbance'],
              correctAnswer: 1,
              explanation: 'A gravity anomaly indicates differences in subsurface density.'
            }
          ]
        },
        completed: false,
        unlocked: false
      },
      {
        id: 'electrical-methods-and-geoelectrics',
        title: 'Electrical Methods and Geoelectrics',
        description: 'Explore how electrical currents are used to investigate subsurface materials',
        icon: '⚡',
        duration: '2 weeks',
        difficulty: 'Intermediate',
        resources: {
          videos: [
            'Resistivity in Geophysics (30 min)',
            'Electrical Resistivity Tomography (35 min)',
            'Applications of Geoelectrics (40 min)'
          ],
          articles: [
            'Ohm’s Law in Geophysics',
            'Subsurface Resistivity Profiles',
            'Geoelectric Mapping Techniques'
          ],
          exercises: [
            'Resistivity Value Estimation',
            'Profile Interpretation Activity',
            'Electrical Survey Planning'
          ]
        },
        quiz: {
          id: 'electrical-methods-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'Which property does resistivity measure?',
              options: ['Density', 'Conductivity', 'Hardness', 'Magnetism'],
              correctAnswer: 1,
              explanation: 'Resistivity measures how much a material resists electric current.'
            }
          ]
        },
        completed: false,
        unlocked: false
      }
    ]
  },
  'app-development-beginner-track': {
    id: 'app-development-beginner-track',
    title: 'App Development Beginner Track',
    description: 'Learn the fundamental concepts and tools required to build mobile and web applications',
    totalDuration: '8 weeks',
    difficulty: 'Beginner',
    modules: [
      {
        id: 'introduction-to-app-development',
        title: 'Introduction to App Development',
        description: 'Understand the basics of app development, platforms, and development life cycle',
        icon: '📱',
        duration: '2 weeks',
        difficulty: 'Beginner',
        resources: {
          videos: [
            'What is App Development? (30 min)',
            'Types of Apps: Web, Mobile, Hybrid (35 min)',
            'App Development Life Cycle (40 min)'
          ],
          articles: [
            'History of Mobile Apps',
            'Frontend vs Backend in App Development',
            'Overview of Development Tools'
          ],
          exercises: [
            'Identify App Types',
            'Match Tools with Platforms',
            'Fill-in-the-Blank: App Lifecycle'
          ]
        },
        quiz: {
          id: 'intro-app-dev-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'Which of the following is NOT a type of mobile app?',
              options: ['Native App', 'Web App', 'Hybrid App', 'Desktop App'],
              correctAnswer: 3,
              explanation: 'Desktop apps are not considered mobile apps.'
            }
          ]
        },
        completed: false,
        unlocked: true
      },
      {
        id: 'frontend-development-basics',
        title: 'Frontend Development Basics',
        description: 'Learn the structure and design of app interfaces using HTML, CSS, and JavaScript',
        icon: '🎨',
        duration: '2 weeks',
        difficulty: 'Beginner',
        resources: {
          videos: [
            'HTML & CSS Basics (30 min)',
            'JavaScript for Interactivity (35 min)',
            'Responsive Design (40 min)'
          ],
          articles: [
            'HTML Tags Reference',
            'CSS Selectors and Styling',
            'JavaScript Fundamentals'
          ],
          exercises: [
            'Build a Simple Web Page',
            'Style a Button with CSS',
            'Add Click Function with JavaScript'
          ]
        },
        quiz: {
          id: 'frontend-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'Which language is primarily used to style web pages?',
              options: ['HTML', 'JavaScript', 'CSS', 'Python'],
              correctAnswer: 2,
              explanation: 'CSS is used to control the visual presentation of web pages.'
            }
          ]
        },
        completed: false,
        unlocked: false
      },
      {
        id: 'backend-development-intro',
        title: 'Backend Development Intro',
        description: 'Understand how the server side works, databases, and API connections',
        icon: '🛠️',
        duration: '2 weeks',
        difficulty: 'Beginner',
        resources: {
          videos: [
            'What is Backend? (30 min)',
            'Node.js and Express Basics (35 min)',
            'Intro to APIs and REST (40 min)'
          ],
          articles: [
            'Server-Side Programming Concepts',
            'Database Basics: SQL vs NoSQL',
            'How APIs Work'
          ],
          exercises: [
            'Build a Simple API with Express',
            'Connect to a Database',
            'Create a REST Endpoint'
          ]
        },
        quiz: {
          id: 'backend-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'Which of these is a backend technology?',
              options: ['React', 'Node.js', 'HTML', 'CSS'],
              correctAnswer: 1,
              explanation: 'Node.js is a backend JavaScript runtime.'
            }
          ]
        },
        completed: false,
        unlocked: false
      },
      {
        id: 'app-deployment-and-maintenance',
        title: 'App Deployment and Maintenance',
        description: 'Learn how to publish apps, manage versions, and monitor performance',
        icon: '🚀',
        duration: '2 weeks',
        difficulty: 'Intermediate',
        resources: {
          videos: [
            'Deploying Web Apps (30 min)',
            'Publishing to App Stores (35 min)',
            'Monitoring and Updating Apps (40 min)'
          ],
          articles: [
            'Deployment Platforms Overview',
            'App Store Submission Checklist',
            'App Versioning Best Practices'
          ],
          exercises: [
            'Deploy a Web App to GitHub Pages',
            'Simulate App Store Submission',
            'Plan an Update Strategy'
          ]
        },
        quiz: {
          id: 'deployment-quiz',
          passingScore: 70,
          questions: [
            {
              id: 'q1',
              question: 'Which platform is commonly used to deploy web apps?',
              options: ['Play Store', 'GitHub Pages', 'Xcode', 'npm'],
              correctAnswer: 1,
              explanation: 'GitHub Pages is a popular free web hosting platform for static sites.'
            }
          ]
        },
        completed: false,
        unlocked: false
      }
    ]
  },
  'backend-development-beginner-track': {
  id: 'backend-development-beginner-track',
  title: 'Backend Development Beginner Track',
  description: 'Learn how servers, databases, and APIs work together to power web and mobile applications',
  totalDuration: '8 weeks',
  difficulty: 'Beginner',
  modules: [
    {
      id: 'intro-to-backend',
      title: 'Introduction to Backend Development',
      description: 'Understand the role of backend in application development and basic server-side concepts',
      icon: '🧠',
      duration: '2 weeks',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'What is Backend Development? (30 min)',
          'Frontend vs Backend (35 min)',
          'Server and Client Communication (40 min)'
        ],
        articles: [
          'The Server-Side Explained',
          'Backend Tech Stack Overview',
          'Common Server Architectures'
        ],
        exercises: [
          'Identify Backend Components',
          'Server-Client Request Flow',
          'Backend Terminology Match'
        ]
      },
      quiz: {
        id: 'intro-backend-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which of the following is NOT part of backend development?',
            options: ['Database Management', 'API Integration', 'HTML Styling', 'Server Configuration'],
            correctAnswer: 2,
            explanation: 'HTML styling is part of frontend, not backend.'
          }
        ]
      },
      completed: false,
      unlocked: true
    },
    {
      id: 'nodejs-and-express',
      title: 'Node.js and Express.js',
      description: 'Build backend servers using JavaScript with Node.js and the Express.js framework',
      icon: '🌐',
      duration: '2 weeks',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Setting Up Node.js (30 min)',
          'Creating Your First Express Server (35 min)',
          'Middleware and Routing (40 min)'
        ],
        articles: [
          'Node.js Basics',
          'Express.js Routing Guide',
          'Using Middleware in Express'
        ],
        exercises: [
          'Create a Basic API',
          'Setup Routes and Middleware',
          'Handle GET and POST Requests'
        ]
      },
      quiz: {
        id: 'node-express-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which function is used to define routes in Express?',
            options: ['route()', 'router()', 'get()', 'link()'],
            correctAnswer: 2,
            explanation: 'The `get()` function defines a route handler for GET requests.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'working-with-databases',
      title: 'Working with Databases',
      description: 'Learn how to store, retrieve, and manage data using SQL and NoSQL databases',
      icon: '💾',
      duration: '2 weeks',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Relational vs Non-Relational Databases (30 min)',
          'Using MongoDB with Node.js (35 min)',
          'Intro to SQL Queries (40 min)'
        ],
        articles: [
          'Understanding MongoDB',
          'CRUD Operations with SQL',
          'Connecting to a Database with Mongoose'
        ],
        exercises: [
          'Write Basic SQL Queries',
          'Perform CRUD with MongoDB',
          'Database Connection Setup'
        ]
      },
      quiz: {
        id: 'database-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which of these is a NoSQL database?',
            options: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite'],
            correctAnswer: 2,
            explanation: 'MongoDB is a document-based NoSQL database.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'rest-api-basics',
      title: 'REST APIs and JSON',
      description: 'Learn to build and use RESTful APIs with proper structure and data formats',
      icon: '🔗',
      duration: '2 weeks',
      difficulty: 'Intermediate',
      resources: {
        videos: [
          'What is a REST API? (30 min)',
          'JSON and Data Exchange (35 min)',
          'Building Your Own API (40 min)'
        ],
        articles: [
          'REST API Principles',
          'Status Codes Explained',
          'Using Postman to Test APIs'
        ],
        exercises: [
          'Design a RESTful Route',
          'Test an API with Postman',
          'Create CRUD Endpoints in Express'
        ]
      },
      quiz: {
        id: 'rest-api-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which HTTP method is used to update a resource?',
            options: ['GET', 'POST', 'PUT', 'DELETE'],
            correctAnswer: 2,
            explanation: 'PUT is used to update an existing resource.'
          }
        ]
      },
      completed: false,
      unlocked: false
    }
  ]
},
'frontend-development-beginner-track': {
  id: 'frontend-development-beginner-track',
  title: 'Frontend Development Beginner Track',
  description: 'Master the core technologies used to build engaging and interactive user interfaces for web applications',
  totalDuration: '8 weeks',
  difficulty: 'Beginner',
  modules: [
    {
      id: 'intro-to-frontend',
      title: 'Introduction to Frontend Development',
      description: 'Learn the role of frontend in web development and how it interacts with the backend',
      icon: '🧭',
      duration: '2 weeks',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'What is Frontend Development? (30 min)',
          'Understanding Web Browsers (35 min)',
          'Frontend vs Backend (40 min)'
        ],
        articles: [
          'Frontend Architecture Overview',
          'Essential Frontend Tools',
          'How Websites Load'
        ],
        exercises: [
          'Identify UI Elements',
          'Frontend vs Backend Matching',
          'Browser Workflow Diagram'
        ]
      },
      quiz: {
        id: 'intro-frontend-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which of the following is NOT a frontend responsibility?',
            options: ['Layout and design', 'Database storage', 'User input handling', 'Responsive UI'],
            correctAnswer: 1,
            explanation: 'Database storage is handled by the backend.'
          }
        ]
      },
      completed: false,
      unlocked: true
    },
    {
      id: 'html-and-css',
      title: 'HTML and CSS Basics',
      description: 'Build the structure and style of web pages using HTML and CSS',
      icon: '🧱',
      duration: '2 weeks',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'HTML Tags and Structure (30 min)',
          'CSS Styling Basics (35 min)',
          'Box Model and Layout (40 min)'
        ],
        articles: [
          'HTML Semantic Tags',
          'CSS Selectors and Properties',
          'Flexbox and Grid Layouts'
        ],
        exercises: [
          'Create a Simple Web Page',
          'Style a Navigation Bar',
          'Build a Responsive Layout'
        ]
      },
      quiz: {
        id: 'html-css-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which HTML tag is used for main page headings?',
            options: ['<div>', '<h1>', '<title>', '<p>'],
            correctAnswer: 1,
            explanation: '<h1> is used for top-level headings.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'javascript-basics',
      title: 'JavaScript Basics',
      description: 'Add interactivity to your web pages using JavaScript and DOM manipulation',
      icon: '⚙️',
      duration: '2 weeks',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'JavaScript Variables and Data Types (30 min)',
          'Functions and Events (35 min)',
          'DOM Manipulation (40 min)'
        ],
        articles: [
          'JavaScript Syntax Overview',
          'Common JavaScript Methods',
          'Understanding Event Listeners'
        ],
        exercises: [
          'Create an Alert Button',
          'Toggle a Class with JavaScript',
          'Build an Interactive Form'
        ]
      },
      quiz: {
        id: 'javascript-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which keyword is used to declare a variable in JavaScript?',
            options: ['var', 'dim', 'int', 'let'],
            correctAnswer: 0,
            explanation: 'var is used to declare variables (also let and const).'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'responsive-design',
      title: 'Responsive and Interactive Design',
      description: 'Learn how to create websites that adapt to different devices and screen sizes',
      icon: '📱',
      duration: '2 weeks',
      difficulty: 'Intermediate',
      resources: {
        videos: [
          'Media Queries and Breakpoints (30 min)',
          'Mobile-First Design (35 min)',
          'CSS Transitions and Animations (40 min)'
        ],
        articles: [
          'Responsive Web Design Principles',
          'Using Viewport Units and Flexbox',
          'UI Animation Tips'
        ],
        exercises: [
          'Design a Responsive Navbar',
          'Create a Grid Layout for Mobile and Desktop',
          'Add a Hover Animation'
        ]
      },
      quiz: {
        id: 'responsive-design-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which CSS rule is used for responsive layouts?',
            options: ['@media', '@flex', '@responsive', '@size'],
            correctAnswer: 0,
            explanation: '@media is used to apply styles based on device conditions.'
          }
        ]
      },
      completed: false,
      unlocked: false
    }
  ]
},
'devops-beginner-track': {
  id: 'devops-beginner-track',
  title: 'DevOps Beginner Track',
  description: 'Learn the fundamental practices of DevOps to automate, integrate, and improve software delivery and infrastructure management',
  totalDuration: '8 weeks',
  difficulty: 'Beginner',
  modules: [
    {
      id: 'intro-to-devops',
      title: 'Introduction to DevOps',
      description: 'Understand the core concepts, culture, and benefits of DevOps in modern software development',
      icon: '🔄',
      duration: '2 weeks',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'What is DevOps? (30 min)',
          'DevOps Lifecycle Explained (35 min)',
          'Agile and DevOps Culture (40 min)'
        ],
        articles: [
          'DevOps vs Traditional IT',
          'Key Principles of DevOps',
          'Common DevOps Tools Overview'
        ],
        exercises: [
          'DevOps Terminology Match',
          'Identify DevOps Phases',
          'Agile vs DevOps Comparison'
        ]
      },
      quiz: {
        id: 'intro-devops-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which is a key goal of DevOps?',
            options: ['Slower releases', 'Increased silos', 'Continuous delivery', 'Manual deployments'],
            correctAnswer: 2,
            explanation: 'DevOps aims to enable continuous integration and delivery.'
          }
        ]
      },
      completed: false,
      unlocked: true
    },
    {
      id: 'version-control-and-git',
      title: 'Version Control and Git',
      description: 'Learn how Git and version control systems help manage source code and collaborate in teams',
      icon: '🔧',
      duration: '2 weeks',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Git Basics: Clone, Commit, Push (30 min)',
          'Branches and Merge Conflicts (35 min)',
          'GitHub for Collaboration (40 min)'
        ],
        articles: [
          'Understanding Git Workflow',
          'Using GitHub Effectively',
          'Common Git Commands'
        ],
        exercises: [
          'Create and Push a Git Repo',
          'Practice Branching and Merging',
          'Resolve a Merge Conflict'
        ]
      },
      quiz: {
        id: 'git-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which command creates a new Git repository?',
            options: ['git start', 'git new', 'git init', 'git create'],
            correctAnswer: 2,
            explanation: '`git init` initializes a new repository.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'ci-cd-pipelines',
      title: 'CI/CD Pipelines',
      description: 'Discover how continuous integration and continuous deployment improve delivery speed and quality',
      icon: '🚀',
      duration: '2 weeks',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'CI/CD Concepts (30 min)',
          'Jenkins and GitHub Actions (35 min)',
          'Build-Test-Deploy Flow (40 min)'
        ],
        articles: [
          'What Makes a CI Pipeline?',
          'Configuring a Jenkins Pipeline',
          'CI/CD Best Practices'
        ],
        exercises: [
          'Build a CI Workflow in GitHub Actions',
          'Automate a Test Stage',
          'Simulate a Deployment Flow'
        ]
      },
      quiz: {
        id: 'cicd-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What does CI stand for?',
            options: ['Continuous Installation', 'Code Integration', 'Continuous Integration', 'Centralized Integration'],
            correctAnswer: 2,
            explanation: 'CI stands for Continuous Integration.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'containerization-and-docker',
      title: 'Containerization and Docker',
      description: 'Learn how Docker simplifies software deployment by packaging applications into containers',
      icon: '📦',
      duration: '2 weeks',
      difficulty: 'Intermediate',
      resources: {
        videos: [
          'Introduction to Docker (30 min)',
          'Creating Dockerfiles (35 min)',
          'Running Containers and Volumes (40 min)'
        ],
        articles: [
          'Why Containers Matter',
          'Docker Commands Reference',
          'Docker Compose Basics'
        ],
        exercises: [
          'Create a Dockerfile for a Web App',
          'Run a Multi-container Setup',
          'Use Docker Compose Locally'
        ]
      },
      quiz: {
        id: 'docker-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which file is used to define a Docker image?',
            options: ['docker.sh', 'compose.yml', 'Dockerfile', 'package.json'],
            correctAnswer: 2,
            explanation: 'The `Dockerfile` defines how a Docker image is built.'
          }
        ]
      },
      completed: false,
      unlocked: false
    }
  ]
},
'data-science-beginner-track': {
  id: 'data-science-beginner-track',
  title: 'Data Science Beginner Track',
  description: 'Learn the foundations of data science including data analysis, visualization, statistics, and machine learning',
  totalDuration: '8 weeks',
  difficulty: 'Beginner',
  modules: [
    {
      id: 'intro-to-data-science',
      title: 'Introduction to Data Science',
      description: 'Understand what data science is, its real-world applications, and the data science workflow',
      icon: '📊',
      duration: '2 weeks',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'What is Data Science? (30 min)',
          'Data Science Process Overview (35 min)',
          'Applications Across Industries (40 min)'
        ],
        articles: [
          'Roles in Data Science',
          'Lifecycle of a Data Science Project',
          'Common Tools in Data Science'
        ],
        exercises: [
          'Match Tools to Stages',
          'Explore Popular Data Sets',
          'Identify Use Cases'
        ]
      },
      quiz: {
        id: 'intro-datasci-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which of the following is a key step in a data science project?',
            options: ['Designing a website', 'Model deployment', 'UI testing', 'Network routing'],
            correctAnswer: 1,
            explanation: 'Model deployment is one of the final stages in the data science workflow.'
          }
        ]
      },
      completed: false,
      unlocked: true
    },
    {
      id: 'data-analysis-with-python',
      title: 'Data Analysis with Python',
      description: 'Learn how to clean, explore, and analyze data using Python libraries like Pandas and NumPy',
      icon: '🐍',
      duration: '2 weeks',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Intro to Pandas and NumPy (30 min)',
          'DataFrames and Series (35 min)',
          'Data Cleaning Techniques (40 min)'
        ],
        articles: [
          'Pandas Cheatsheet',
          'Common Data Cleaning Tasks',
          'Exploratory Data Analysis (EDA)'
        ],
        exercises: [
          'Load and Inspect a CSV',
          'Handle Missing Values',
          'Calculate Basic Stats'
        ]
      },
      quiz: {
        id: 'data-analysis-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which Python library is most commonly used for data analysis?',
            options: ['TensorFlow', 'Pandas', 'Scikit-learn', 'OpenCV'],
            correctAnswer: 1,
            explanation: 'Pandas provides powerful tools for structured data analysis.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'data-visualization',
      title: 'Data Visualization',
      description: 'Explore how to visualize data using tools like Matplotlib and Seaborn to find patterns and insights',
      icon: '📈',
      duration: '2 weeks',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Visualizing with Matplotlib (30 min)',
          'Styling Graphs with Seaborn (35 min)',
          'Choosing the Right Chart (40 min)'
        ],
        articles: [
          'Types of Data Visualizations',
          'When to Use Bar vs Line Charts',
          'Color Theory in Visualization'
        ],
        exercises: [
          'Plot a Line Chart',
          'Make a Heatmap',
          'Build a Histogram from Data'
        ]
      },
      quiz: {
        id: 'data-viz-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which visualization is best for showing distribution?',
            options: ['Line chart', 'Pie chart', 'Histogram', 'Scatter plot'],
            correctAnswer: 2,
            explanation: 'Histograms are ideal for showing the distribution of continuous data.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'intro-to-machine-learning',
      title: 'Introduction to Machine Learning',
      description: 'Get started with supervised and unsupervised learning using Scikit-learn',
      icon: '🤖',
      duration: '2 weeks',
      difficulty: 'Intermediate',
      resources: {
        videos: [
          'Types of Machine Learning (30 min)',
          'Using Scikit-learn for ML (35 min)',
          'Training and Evaluating Models (40 min)'
        ],
        articles: [
          'Supervised vs Unsupervised Learning',
          'Model Accuracy and Overfitting',
          'Common ML Algorithms'
        ],
        exercises: [
          'Train a Linear Regression Model',
          'Build a Decision Tree Classifier',
          'Visualize Model Accuracy'
        ]
      },
      quiz: {
        id: 'ml-intro-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which of the following is a supervised learning algorithm?',
            options: ['K-Means Clustering', 'PCA', 'Linear Regression', 't-SNE'],
            correctAnswer: 2,
            explanation: 'Linear Regression is a fundamental supervised learning algorithm.'
          }
        ]
      },
      completed: false,
      unlocked: false
    }
  ]
},
'machine-learning-beginner-track': {
  id: 'machine-learning-beginner-track',
  title: 'Machine Learning Beginner Track',
  description: 'Build a strong foundation in machine learning, covering key concepts, algorithms, and real-world applications',
  totalDuration: '8 weeks',
  difficulty: 'Beginner',
  modules: [
    {
      id: 'ml-introduction',
      title: 'Introduction to Machine Learning',
      description: 'Understand what machine learning is, how it works, and where it is used',
      icon: '🧠',
      duration: '2 weeks',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'What is Machine Learning? (30 min)',
          'Supervised vs Unsupervised Learning (35 min)',
          'Real-World Applications of ML (40 min)'
        ],
        articles: [
          'History of Machine Learning',
          'Types of Machine Learning',
          'ML Workflow Overview'
        ],
        exercises: [
          'Categorize ML Applications',
          'Compare Learning Types',
          'Identify ML Use Cases'
        ]
      },
      quiz: {
        id: 'ml-intro-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which of the following is a type of machine learning?',
            options: ['Classical Computing', 'Reinforcement Learning', 'Hard Coding', 'Scripted AI'],
            correctAnswer: 1,
            explanation: 'Reinforcement learning is a core ML paradigm, alongside supervised and unsupervised learning.'
          }
        ]
      },
      completed: false,
      unlocked: true
    },
    {
      id: 'supervised-learning',
      title: 'Supervised Learning',
      description: 'Explore algorithms that learn from labeled data, including regression and classification models',
      icon: '📘',
      duration: '2 weeks',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Linear Regression Explained (30 min)',
          'Classification with k-NN (35 min)',
          'Model Evaluation Metrics (40 min)'
        ],
        articles: [
          'Regression vs Classification',
          'Train-Test Split and Accuracy',
          'Confusion Matrix Overview'
        ],
        exercises: [
          'Predict House Prices (Regression)',
          'Classify Emails as Spam',
          'Build a Confusion Matrix'
        ]
      },
      quiz: {
        id: 'supervised-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which of the following is a classification algorithm?',
            options: ['Linear Regression', 'K-Means', 'k-NN', 'PCA'],
            correctAnswer: 2,
            explanation: 'k-NN is used for classification and regression but commonly applied to classification.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'unsupervised-learning',
      title: 'Unsupervised Learning',
      description: 'Learn how to find patterns and groupings in data without labels using clustering and dimensionality reduction',
      icon: '📗',
      duration: '2 weeks',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Clustering with K-Means (30 min)',
          'Hierarchical Clustering (35 min)',
          'Dimensionality Reduction Techniques (40 min)'
        ],
        articles: [
          'How Clustering Works',
          'PCA Explained',
          'Choosing the Right Unsupervised Algorithm'
        ],
        exercises: [
          'Cluster Customer Segments',
          'Reduce Data Dimensions with PCA',
          'Visualize Clusters'
        ]
      },
      quiz: {
        id: 'unsupervised-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which algorithm is commonly used for clustering?',
            options: ['Linear Regression', 'k-NN', 'K-Means', 'Logistic Regression'],
            correctAnswer: 2,
            explanation: 'K-Means is a popular unsupervised algorithm for clustering.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'model-evaluation-and-improvement',
      title: 'Model Evaluation and Improvement',
      description: 'Learn how to assess model performance and improve it through tuning and validation',
      icon: '📊',
      duration: '2 weeks',
      difficulty: 'Intermediate',
      resources: {
        videos: [
          'Cross-Validation Techniques (30 min)',
          'Bias-Variance Tradeoff (35 min)',
          'Hyperparameter Tuning (40 min)'
        ],
        articles: [
          'Underfitting vs Overfitting',
          'Using Grid Search',
          'Evaluating with Precision and Recall'
        ],
        exercises: [
          'Apply K-Fold Validation',
          'Use GridSearchCV with Scikit-Learn',
          'Analyze Learning Curves'
        ]
      },
      quiz: {
        id: 'model-eval-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What does cross-validation help prevent?',
            options: ['Missing data', 'Code errors', 'Overfitting', 'Bias'],
            correctAnswer: 2,
            explanation: 'Cross-validation ensures the model generalizes well by training on different subsets of data.'
          }
        ]
      },
      completed: false,
      unlocked: false
    }
  ]
},
'deep-learning-beginner-track': {
  id: 'deep-learning-beginner-track',
  title: 'Deep Learning Beginner Track',
  description: 'Dive into neural networks and foundational deep learning concepts with hands-on modules and real-world use cases',
  totalDuration: '8 weeks',
  difficulty: 'Beginner',
  modules: [
    {
      id: 'deep-learning-intro',
      title: 'Introduction to Deep Learning',
      description: 'Learn the basics of deep learning, neural networks, and key concepts like activation functions and backpropagation',
      icon: '🤖',
      duration: '2 weeks',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'What is Deep Learning? (25 min)',
          'Neurons and Neural Networks (35 min)',
          'Forward and Backward Propagation (30 min)'
        ],
        articles: [
          'Deep Learning vs Machine Learning',
          'Understanding Activation Functions',
          'Gradient Descent Basics'
        ],
        exercises: [
          'Design a Perceptron',
          'Implement a Simple Neural Net',
          'Plot Activation Functions'
        ]
      },
      quiz: {
        id: 'dl-intro-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What does backpropagation do in a neural network?',
            options: ['Adds layers', 'Generates data', 'Updates weights', 'Saves models'],
            correctAnswer: 2,
            explanation: 'Backpropagation updates the weights to reduce error using gradient descent.'
          }
        ]
      },
      completed: false,
      unlocked: true
    },
    {
      id: 'building-neural-networks',
      title: 'Building Neural Networks',
      description: 'Build neural networks using frameworks like TensorFlow and PyTorch',
      icon: '🛠️',
      duration: '2 weeks',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Intro to TensorFlow (30 min)',
          'Creating Your First Model in PyTorch (40 min)',
          'Choosing Optimizers and Loss Functions (30 min)'
        ],
        articles: [
          'TensorFlow vs PyTorch: Which to Use',
          'Loss Functions Explained',
          'Training a Deep Network'
        ],
        exercises: [
          'Train a Neural Network on MNIST',
          'Experiment with Optimizers',
          'Save and Load Models'
        ]
      },
      quiz: {
        id: 'nn-build-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which function is commonly used to reduce the output of a classification network?',
            options: ['ReLU', 'Sigmoid', 'Softmax', 'Tanh'],
            correctAnswer: 2,
            explanation: 'Softmax converts logits into a probability distribution for classification.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'cnn-basics',
      title: 'Convolutional Neural Networks (CNN)',
      description: 'Understand how CNNs work and how they are used for image recognition',
      icon: '🖼️',
      duration: '2 weeks',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'What are CNNs? (35 min)',
          'Filters, Kernels, and Strides (30 min)',
          'Training CNNs with Real Datasets (40 min)'
        ],
        articles: [
          'CNN Layers and Operations',
          'Pooling Techniques',
          'Image Classification Pipeline'
        ],
        exercises: [
          'Build a CNN to Classify Images',
          'Apply Max and Average Pooling',
          'Visualize Feature Maps'
        ]
      },
      quiz: {
        id: 'cnn-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What is the main purpose of a convolutional layer?',
            options: ['Compress data', 'Detect features', 'Label data', 'Generate images'],
            correctAnswer: 1,
            explanation: 'The convolutional layer detects spatial features such as edges and patterns in images.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'rnn-basics',
      title: 'Recurrent Neural Networks (RNN)',
      description: 'Explore how RNNs are used for sequential data like text and time series',
      icon: '🕒',
      duration: '2 weeks',
      difficulty: 'Intermediate',
      resources: {
        videos: [
          'Understanding RNNs (30 min)',
          'Vanishing Gradient and LSTM/GRU (35 min)',
          'Text Generation with RNNs (40 min)'
        ],
        articles: [
          'How RNNs Remember Sequences',
          'Comparing LSTM and GRU',
          'Applications in NLP'
        ],
        exercises: [
          'Build an RNN for Sentiment Analysis',
          'Generate Text with LSTM',
          'Visualize Sequence Data Flow'
        ]
      },
      quiz: {
        id: 'rnn-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which RNN variant is designed to mitigate the vanishing gradient problem?',
            options: ['Plain RNN', 'GRU', 'Feedforward NN', 'CNN'],
            correctAnswer: 1,
            explanation: 'GRU and LSTM were specifically developed to retain long-term dependencies in sequences.'
          }
        ]
      },
      completed: false,
      unlocked: false
    }
  ]
},
'cybersecurity-beginner--track': {
  id: 'cybersecurity-beginner-track',
  title: 'Cybersecurity Beginner Track',
  description: 'Understand the fundamentals of digital security, threats, and protection techniques to safeguard data and systems',
  totalDuration: '8 weeks',
  difficulty: 'Beginner',
  modules: [
    {
      id: 'cyber-intro',
      title: 'Introduction to Cybersecurity',
      description: 'Learn what cybersecurity is, its importance, and common terminology used in the field',
      icon: '🛡️',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Cybersecurity Explained (20 min)',
          'Types of Cyber Threats (25 min)'
        ],
        articles: [
          'What is Cybersecurity?',
          'Top 10 Cybersecurity Terms You Should Know'
        ],
        exercises: [
          'Identify Cyber Threats',
          'Match Terminologies with Their Definitions'
        ]
      },
      quiz: {
        id: 'cyber-intro-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which of the following is an example of social engineering?',
            options: ['SQL Injection', 'Phishing Email', 'Brute Force Attack', 'Port Scanning'],
            correctAnswer: 1,
            explanation: 'Phishing is a type of social engineering attack.'
          }
        ]
      },
      completed: false,
      unlocked: true
    },
    {
      id: 'network-security',
      title: 'Network Security Fundamentals',
      description: 'Learn about securing computer networks from unauthorized access and misuse',
      icon: '🌐',
      duration: '2 weeks',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'What is Network Security? (30 min)',
          'Firewalls and Routers Explained (25 min)',
          'Introduction to VPNs (20 min)'
        ],
        articles: [
          'Firewalls vs Antivirus',
          'Understanding VPNs and Encryption',
          'Intrusion Detection Systems (IDS)'
        ],
        exercises: [
          'Diagram a Secure Network Setup',
          'Identify Weak Network Points'
        ]
      },
      quiz: {
        id: 'network-security-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What does a firewall do?',
            options: ['Encrypts files', 'Blocks malicious traffic', 'Stores passwords', 'Performs backups'],
            correctAnswer: 1,
            explanation: 'Firewalls monitor and control incoming and outgoing network traffic.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'system-security',
      title: 'System and Device Security',
      description: 'Understand how to secure operating systems and devices from internal and external threats',
      icon: '💻',
      duration: '2 weeks',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Securing Operating Systems (30 min)',
          'User Privileges and Permissions (25 min)',
          'Antivirus and Antimalware (20 min)'
        ],
        articles: [
          'User Roles and Access Levels',
          'Common Malware Types',
          'Safe Software Installation Practices'
        ],
        exercises: [
          'Set Permissions on a Sample OS',
          'Detect Malware Signatures'
        ]
      },
      quiz: {
        id: 'system-security-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which action improves system security?',
            options: ['Using default passwords', 'Installing pirated software', 'Enabling automatic updates', 'Disabling firewalls'],
            correctAnswer: 2,
            explanation: 'Keeping systems up to date reduces vulnerabilities.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'data-security-basics',
      title: 'Data Protection and Encryption',
      description: 'Learn the basics of protecting data through encryption, hashing, and secure storage',
      icon: '🔐',
      duration: '2 weeks',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Encryption Basics (25 min)',
          'Symmetric vs Asymmetric Encryption (30 min)',
          'What is Hashing? (20 min)'
        ],
        articles: [
          'How HTTPS Works',
          'Data Encryption at Rest vs In Transit',
          'Password Hashing Techniques'
        ],
        exercises: [
          'Encrypt and Decrypt a Message',
          'Compare Hash Algorithms',
          'Identify Weak Password Practices'
        ]
      },
      quiz: {
        id: 'data-protection-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which algorithm is commonly used for secure hashing?',
            options: ['MD5', 'SHA-256', 'DES', 'RSA'],
            correctAnswer: 1,
            explanation: 'SHA-256 is a widely used secure hashing algorithm.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'cyber-ethics-laws',
      title: 'Cyber Ethics and Legal Frameworks',
      description: 'Understand ethical hacking, digital laws, and the responsibilities of cybersecurity professionals',
      icon: '⚖️',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'What is Ethical Hacking? (20 min)',
          'Introduction to Cyber Laws (25 min)',
          'Careers in Cybersecurity (15 min)'
        ],
        articles: [
          'White Hat vs Black Hat Hackers',
          'GDPR and Data Privacy',
          'Cybercrime Laws in India and Globally'
        ],
        exercises: [
          'Case Study on Ethical Hacking',
          'Identify Legal vs Illegal Scenarios'
        ]
      },
      quiz: {
        id: 'cyber-ethics-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which term refers to hackers who use their skills for good?',
            options: ['Black Hat', 'Grey Hat', 'White Hat', 'Script Kiddie'],
            correctAnswer: 2,
            explanation: 'White hat hackers help organizations secure systems.'
          }
        ]
      },
      completed: false,
      unlocked: false
    }
  ]
},
'cloud-computing-beginner-track': {
  id: 'cloud-computing-beginner-track',
  title: 'Cloud Computing Beginner Track',
  description: 'Learn the fundamentals of cloud computing, service models, deployment types, and core services across major platforms',
  totalDuration: '8 weeks',
  difficulty: 'Beginner',
  modules: [
    {
      id: 'cloud-intro',
      title: 'Introduction to Cloud Computing',
      description: 'Understand the concept, evolution, and key benefits of cloud computing',
      icon: '☁️',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'What is Cloud Computing? (20 min)',
          'History and Benefits of the Cloud (15 min)'
        ],
        articles: [
          'Cloud Computing Explained',
          'Top 5 Benefits of the Cloud'
        ],
        exercises: [
          'Classify Cloud vs Traditional Models',
          'Match Terms: Cloud Terminology Quiz'
        ]
      },
      quiz: {
        id: 'cloud-intro-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which of the following is a benefit of cloud computing?',
            options: ['Higher electricity cost', 'Scalability', 'Manual backups', 'Slower deployment'],
            correctAnswer: 1,
            explanation: 'Cloud computing allows scalability based on demand.'
          }
        ]
      },
      completed: false,
      unlocked: true
    },
    {
      id: 'cloud-service-models',
      title: 'Cloud Service Models (IaaS, PaaS, SaaS)',
      description: 'Explore the different service models in the cloud and their real-world applications',
      icon: '🔧',
      duration: '2 weeks',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Understanding IaaS, PaaS, SaaS (25 min)',
          'Use Cases of Each Model (20 min)'
        ],
        articles: [
          'Comparison of IaaS, PaaS, SaaS',
          'Examples: AWS EC2, Heroku, Google Workspace'
        ],
        exercises: [
          'Categorize Real Products under Models',
          'Case Study Comparison'
        ]
      },
      quiz: {
        id: 'cloud-service-models-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which of the following is an example of SaaS?',
            options: ['Amazon EC2', 'Google Docs', 'Microsoft Azure', 'Docker'],
            correctAnswer: 1,
            explanation: 'Google Docs is Software as a Service (SaaS).'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'deployment-models',
      title: 'Cloud Deployment Models',
      description: 'Learn about Public, Private, Hybrid, and Community clouds with practical examples',
      icon: '🏢',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Deployment Models in Cloud (20 min)',
          'Public vs Private vs Hybrid Cloud (25 min)'
        ],
        articles: [
          'What is a Private Cloud?',
          'Hybrid Cloud in Real Businesses'
        ],
        exercises: [
          'Choose the Right Model for a Scenario',
          'Compare Deployment Strategies'
        ]
      },
      quiz: {
        id: 'deployment-models-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which model combines both public and private clouds?',
            options: ['Hybrid Cloud', 'Private Cloud', 'Public Cloud', 'Legacy Systems'],
            correctAnswer: 0,
            explanation: 'Hybrid Cloud uses both public and private infrastructure.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'core-cloud-services',
      title: 'Core Cloud Services and Providers',
      description: 'Familiarize yourself with key cloud providers (AWS, Azure, GCP) and their foundational services',
      icon: '🧰',
      duration: '2 weeks',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'AWS, Azure, GCP Overview (30 min)',
          'Compute, Storage, Database, Networking Basics (40 min)'
        ],
        articles: [
          'AWS vs Azure vs GCP',
          'Cloud Storage Explained (S3, Blob, Buckets)'
        ],
        exercises: [
          'Match Services to Providers',
          'Design a Simple Cloud Architecture'
        ]
      },
      quiz: {
        id: 'core-cloud-services-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What does Amazon S3 provide?',
            options: ['Virtual Machines', 'Object Storage', 'Database Services', 'DNS Management'],
            correctAnswer: 1,
            explanation: 'Amazon S3 is a scalable object storage service.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'cloud-security',
      title: 'Introduction to Cloud Security',
      description: 'Understand the basics of securing cloud environments and shared responsibility',
      icon: '🔒',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Cloud Security Essentials (30 min)',
          'Shared Responsibility Model (15 min)'
        ],
        articles: [
          'Best Practices for Cloud Security',
          'Common Threats in Cloud Environments'
        ],
        exercises: [
          'Identify Security Roles: Cloud vs User',
          'Secure a Sample Cloud Setup'
        ]
      },
      quiz: {
        id: 'cloud-security-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'In cloud security, who is responsible for configuring firewall rules?',
            options: ['Cloud Provider', 'User/Customer', 'ISP', 'Government'],
            correctAnswer: 1,
            explanation: 'The customer is responsible for security *in* the cloud.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'cloud-hands-on',
      title: 'Hands-on with Cloud Platforms',
      description: 'Create and manage cloud resources using free tiers of AWS, Azure, or GCP',
      icon: '🖥️',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Create Your First EC2 Instance (AWS) (20 min)',
          'Deploy a Static Website on Azure (30 min)'
        ],
        articles: [
          'Getting Started with AWS Free Tier',
          'Step-by-step GCP Project Setup'
        ],
        exercises: [
          'Launch a Virtual Machine',
          'Upload Files to Cloud Storage',
          'Create a Cloud SQL Database'
        ]
      },
      quiz: {
        id: 'cloud-hands-on-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What is required to use AWS services?',
            options: ['Hardware installation', 'On-prem server', 'AWS account', 'GitHub repo'],
            correctAnswer: 2,
            explanation: 'An AWS account is required to access and manage services.'
          }
        ]
      },
      completed: false,
      unlocked: false
    }
  ]
},
'aws-beginner-track': {
  id: 'aws-beginner-track',
  title: 'AWS Beginner Track',
  description: 'Get started with Amazon Web Services by learning key services, concepts, and hands-on cloud skills.',
  totalDuration: '8 weeks',
  difficulty: 'Beginner',
  modules: [
    {
      id: 'aws-introduction',
      title: 'Introduction to AWS',
      description: 'Learn what AWS is, its global infrastructure, and how it powers modern applications.',
      icon: '🌍',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'What is AWS? (15 min)',
          'AWS Global Infrastructure Overview (20 min)'
        ],
        articles: [
          'Introduction to AWS Services',
          'Regions and Availability Zones Explained'
        ],
        exercises: [
          'Match AWS Services to Use Cases',
          'Identify Regions and AZs on Map'
        ]
      },
      quiz: {
        id: 'aws-intro-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What is the purpose of AWS Availability Zones?',
            options: ['User authentication', 'Data redundancy and failover', 'Cost management', 'License tracking'],
            correctAnswer: 1,
            explanation: 'AZs improve reliability by distributing resources.'
          }
        ]
      },
      completed: false,
      unlocked: true
    },
    {
      id: 'aws-core-services',
      title: 'Core AWS Services',
      description: 'Dive into key services like EC2, S3, RDS, Lambda, and IAM.',
      icon: '🛠️',
      duration: '2 weeks',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'EC2, S3, RDS, IAM Overview (30 min)',
          'Hands-on: Create EC2 Instance (20 min)'
        ],
        articles: [
          'Getting Started with S3',
          'Understanding IAM Roles and Policies'
        ],
        exercises: [
          'Create an S3 Bucket',
          'Launch and SSH into EC2',
          'Configure IAM Users'
        ]
      },
      quiz: {
        id: 'aws-core-services-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which AWS service provides object storage?',
            options: ['EC2', 'S3', 'RDS', 'VPC'],
            correctAnswer: 1,
            explanation: 'Amazon S3 is used for storing objects (files, images, etc.).'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'aws-security-basics',
      title: 'AWS Security and Identity',
      description: 'Understand the shared responsibility model and AWS security best practices.',
      icon: '🔐',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'AWS Security Fundamentals (20 min)',
          'IAM Policies and Permissions (25 min)'
        ],
        articles: [
          'The Shared Responsibility Model',
          'Best Practices for IAM'
        ],
        exercises: [
          'Create IAM Roles with Least Privilege',
          'Review Security Groups on EC2'
        ]
      },
      quiz: {
        id: 'aws-security-basics-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Who is responsible for configuring security groups in AWS?',
            options: ['AWS', 'User/Customer', 'ISP', 'Amazon Retail'],
            correctAnswer: 1,
            explanation: 'Users configure resources securely in AWS.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'aws-networking',
      title: 'Networking in AWS',
      description: 'Explore VPCs, subnets, internet gateways, and security groups.',
      icon: '🌐',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Introduction to AWS VPC (25 min)',
          'Subnetting and Internet Gateways (20 min)'
        ],
        articles: [
          'VPC and Networking Essentials',
          'Security Groups vs NACLs'
        ],
        exercises: [
          'Create a Custom VPC with Subnets',
          'Setup Routing and IGW'
        ]
      },
      quiz: {
        id: 'aws-networking-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which component allows internet access to a VPC?',
            options: ['Subnet', 'Security Group', 'Internet Gateway', 'Route Table'],
            correctAnswer: 2,
            explanation: 'Internet Gateway connects a VPC to the internet.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'aws-deployment-monitoring',
      title: 'AWS Deployment and Monitoring',
      description: 'Use CloudWatch, CloudFormation, and basic deployment tools in AWS.',
      icon: '🚀',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'AWS CloudWatch Basics (15 min)',
          'Intro to CloudFormation Templates (20 min)'
        ],
        articles: [
          'Monitoring with CloudWatch',
          'Simple Deployments with Elastic Beanstalk'
        ],
        exercises: [
          'Monitor EC2 with CloudWatch',
          'Create a CloudFormation Template'
        ]
      },
      quiz: {
        id: 'aws-deployment-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What is AWS CloudWatch used for?',
            options: ['Identity management', 'Monitoring and alerts', 'Database backup', 'Cloud migration'],
            correctAnswer: 1,
            explanation: 'CloudWatch monitors AWS services and resources.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'aws-hands-on-lab',
      title: 'Hands-on AWS Projects',
      description: 'Practice what you’ve learned by deploying real cloud services on AWS free tier.',
      icon: '🧪',
      duration: '2 weeks',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Deploy a WordPress App on EC2 + RDS (30 min)',
          'S3 Static Website Hosting (20 min)'
        ],
        articles: [
          'AWS Hands-on Lab Guide',
          '10 Beginner Projects Using AWS Free Tier'
        ],
        exercises: [
          'Create and Deploy a Web App',
          'Host Files on S3',
          'Enable Monitoring for Resources'
        ]
      },
      quiz: {
        id: 'aws-hands-on-lab-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What is the AWS Free Tier?',
            options: ['Paid trial', 'Beta software', 'Free limited usage for 12 months', 'Premium license'],
            correctAnswer: 2,
            explanation: 'AWS Free Tier allows new users limited access to services free for 12 months.'
          }
        ]
      },
      completed: false,
      unlocked: false
    }
  ]
},
'azure-beginner-track': {
  id: 'azure-beginner-track',
  title: 'Azure Beginner Track',
  description: 'Learn Microsoft Azure fundamentals, core services, identity, and hands-on cloud computing with Microsoft’s cloud platform.',
  totalDuration: '8 weeks',
  difficulty: 'Beginner',
  modules: [
    {
      id: 'azure-introduction',
      title: 'Introduction to Azure',
      description: 'Understand what Azure is, its architecture, and the benefits of cloud computing.',
      icon: '☁️',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'What is Microsoft Azure? (15 min)',
          'Azure Global Infrastructure Overview (20 min)'
        ],
        articles: [
          'Introduction to Cloud Computing with Azure',
          'Regions and Availability Zones in Azure'
        ],
        exercises: [
          'Identify Azure Services',
          'Locate Regions on Azure Map'
        ]
      },
      quiz: {
        id: 'azure-intro-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What is one key benefit of using cloud services like Azure?',
            options: ['Manual scaling', 'Global accessibility', 'High maintenance costs', 'Limited storage'],
            correctAnswer: 1,
            explanation: 'Azure offers global infrastructure with scalable, cost-effective solutions.'
          }
        ]
      },
      completed: false,
      unlocked: true
    },
    {
      id: 'azure-core-services',
      title: 'Core Azure Services',
      description: 'Explore core services such as VMs, Blob Storage, Azure SQL, and Azure Functions.',
      icon: '🔧',
      duration: '2 weeks',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Intro to Virtual Machines, Blob, SQL, Functions (30 min)',
          'Deploy a VM on Azure (20 min)'
        ],
        articles: [
          'Blob Storage Explained',
          'Getting Started with Azure SQL Database'
        ],
        exercises: [
          'Create a VM',
          'Upload files to Blob Storage',
          'Write an Azure Function'
        ]
      },
      quiz: {
        id: 'azure-core-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which service in Azure provides serverless compute?',
            options: ['Azure VM', 'Blob Storage', 'Azure Functions', 'Azure SQL'],
            correctAnswer: 2,
            explanation: 'Azure Functions is used for running event-driven, serverless code.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'azure-security-basics',
      title: 'Azure Security and Identity',
      description: 'Learn about Azure AD, role-based access control (RBAC), and security best practices.',
      icon: '🔐',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Azure AD Overview (20 min)',
          'RBAC and Permissions (20 min)'
        ],
        articles: [
          'Understanding Azure Identity Services',
          'Azure Security Best Practices'
        ],
        exercises: [
          'Create Azure AD Users',
          'Assign Roles Using RBAC'
        ]
      },
      quiz: {
        id: 'azure-security-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What is Azure AD primarily used for?',
            options: ['Compute hosting', 'Storage management', 'Identity and access management', 'Network security'],
            correctAnswer: 2,
            explanation: 'Azure Active Directory is used for identity services.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'azure-networking',
      title: 'Azure Networking Basics',
      description: 'Explore VNets, subnets, NSGs, and public IP configuration.',
      icon: '🌐',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Virtual Network Basics (20 min)',
          'Network Security Groups and IP Setup (20 min)'
        ],
        articles: [
          'VNets and Subnetting in Azure',
          'Firewall and NSG Best Practices'
        ],
        exercises: [
          'Create a Virtual Network',
          'Assign Public IP to a VM',
          'Configure a Network Security Group'
        ]
      },
      quiz: {
        id: 'azure-networking-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What is the function of a Network Security Group (NSG) in Azure?',
            options: ['Assign roles', 'Store data', 'Control network traffic', 'Scale services'],
            correctAnswer: 2,
            explanation: 'NSGs control inbound and outbound traffic rules.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'azure-deployment-monitoring',
      title: 'Deploying and Monitoring in Azure',
      description: 'Understand ARM templates, Azure Monitor, and deployment automation.',
      icon: '🚀',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Intro to Azure Monitor (15 min)',
          'Deploying with ARM Templates (25 min)'
        ],
        articles: [
          'Monitoring Resources with Azure Monitor',
          'Deployment with Azure Resource Manager'
        ],
        exercises: [
          'Deploy a Resource Group with ARM',
          'Configure Alerts on Azure Monitor'
        ]
      },
      quiz: {
        id: 'azure-deploy-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What does Azure Monitor do?',
            options: ['Run code', 'Provide database backups', 'Monitor and visualize resource performance', 'Encrypt storage'],
            correctAnswer: 2,
            explanation: 'Azure Monitor tracks metrics and logs for Azure resources.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'azure-hands-on',
      title: 'Azure Hands-on Projects',
      description: 'Apply what you’ve learned by building and deploying services using the free Azure trial.',
      icon: '🧪',
      duration: '2 weeks',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Deploy a Static Web App (30 min)',
          'Host a Blog with VM + Blob (20 min)'
        ],
        articles: [
          'Azure Free Trial Guide',
          'Beginner-Friendly Azure Projects'
        ],
        exercises: [
          'Deploy Static App via Portal',
          'Host Media in Blob Storage',
          'Setup Monitoring and Alerts'
        ]
      },
      quiz: {
        id: 'azure-hands-on-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What’s included in the Azure free trial?',
            options: ['Unlimited VMs', 'Free 12-month usage + $200 credit', 'Premium support', 'No real usage allowed'],
            correctAnswer: 1,
            explanation: 'Azure offers a 12-month free tier and $200 in credits.'
          }
        ]
      },
      completed: false,
      unlocked: false
    }
  ]
},
'gcp-beginner-track': {
  id: 'gcp-beginner-track',
  title: 'Google Cloud Platform Beginner Track',
  description: 'Get started with Google Cloud Platform by learning its core services, identity management, storage, computing, and monitoring.',
  totalDuration: '8 weeks',
  difficulty: 'Beginner',
  modules: [
    {
      id: 'gcp-intro',
      title: 'Introduction to Google Cloud',
      description: 'Understand what GCP is, how it works, and its core benefits.',
      icon: '🌥️',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'What is GCP? (15 min)',
          'GCP Global Infrastructure Overview (20 min)'
        ],
        articles: [
          'Getting Started with Google Cloud',
          'Regions, Zones, and Projects Explained'
        ],
        exercises: [
          'Create Your First GCP Project',
          'Set Billing and Explore Console'
        ]
      },
      quiz: {
        id: 'gcp-intro-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What is a “project” in GCP?',
            options: ['A code repository', 'An identity provider', 'A container for resources and billing', 'A compute instance'],
            correctAnswer: 2,
            explanation: 'In GCP, a project is a container for all your resources and billing.'
          }
        ]
      },
      completed: false,
      unlocked: true
    },
    {
      id: 'gcp-compute-storage',
      title: 'Compute & Storage Services',
      description: 'Explore GCE, GKE, Cloud Storage, and App Engine.',
      icon: '🖥️',
      duration: '2 weeks',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'GCE vs App Engine (20 min)',
          'Google Kubernetes Engine Basics (25 min)'
        ],
        articles: [
          'Cloud Storage vs Persistent Disks',
          'Deploying Apps on App Engine'
        ],
        exercises: [
          'Deploy a VM using GCE',
          'Create a Bucket in Cloud Storage',
          'Deploy a Hello World App on App Engine'
        ]
      },
      quiz: {
        id: 'gcp-compute-storage-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which GCP service is serverless?',
            options: ['Compute Engine', 'Cloud Functions', 'Kubernetes Engine', 'Cloud VPN'],
            correctAnswer: 1,
            explanation: 'Cloud Functions allows serverless execution of event-driven code.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'gcp-iam-security',
      title: 'Identity & Security',
      description: 'Understand IAM roles, service accounts, and security policies.',
      icon: '🔐',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'GCP IAM Overview (15 min)',
          'Service Accounts in GCP (20 min)'
        ],
        articles: [
          'Managing IAM Policies',
          'Best Practices for GCP Security'
        ],
        exercises: [
          'Create a Service Account',
          'Assign Viewer Role to a User'
        ]
      },
      quiz: {
        id: 'gcp-iam-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What is the role of IAM in GCP?',
            options: ['Creating VMs', 'Assigning permissions and roles', 'Launching Kubernetes', 'Monitoring resources'],
            correctAnswer: 1,
            explanation: 'IAM controls who can do what within a GCP project.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'gcp-networking',
      title: 'Networking in GCP',
      description: 'Explore VPCs, subnets, firewalls, and load balancers.',
      icon: '🌐',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Virtual Private Cloud Overview (20 min)',
          'Load Balancer Demo (15 min)'
        ],
        articles: [
          'Understanding GCP Networking',
          'Firewall Rules & IP Management'
        ],
        exercises: [
          'Create a VPC and Subnet',
          'Set Up Firewall Rules',
          'Deploy an HTTP Load Balancer'
        ]
      },
      quiz: {
        id: 'gcp-network-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What is a VPC in GCP?',
            options: ['A storage solution', 'A project group', 'A logically isolated network', 'A firewall rule'],
            correctAnswer: 2,
            explanation: 'VPCs allow you to define and isolate your network on GCP.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'gcp-logging-monitoring',
      title: 'Monitoring & Logging',
      description: 'Learn how to monitor resources using Cloud Monitoring and Logging.',
      icon: '📊',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Cloud Monitoring Overview (20 min)',
          'Setting Alerts and Dashboards (15 min)'
        ],
        articles: [
          'Working with Logs in GCP',
          'Using Cloud Monitoring Metrics'
        ],
        exercises: [
          'View Logs for a Compute Instance',
          'Set Up an Uptime Check and Alert'
        ]
      },
      quiz: {
        id: 'gcp-monitoring-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What is the purpose of Cloud Logging?',
            options: ['Create networks', 'Store files', 'Collect logs from services', 'Manage IAM roles'],
            correctAnswer: 2,
            explanation: 'Cloud Logging helps you analyze and monitor logs across services.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'gcp-practical',
      title: 'Hands-on Projects with GCP',
      description: 'Apply your knowledge in mini-projects using GCP’s free tier.',
      icon: '🧪',
      duration: '2 weeks',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Deploy a Website Using Cloud Run (30 min)',
          'Build a Static Site with Storage and CDN (25 min)'
        ],
        articles: [
          'Using GCP’s Always Free Tier',
          'Beginner-Friendly GCP Projects'
        ],
        exercises: [
          'Create a serverless API with Cloud Functions',
          'Build and host a website using Cloud Storage',
          'Deploy a container on Cloud Run'
        ]
      },
      quiz: {
        id: 'gcp-projects-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which service is ideal for deploying containers quickly?',
            options: ['App Engine', 'Cloud Run', 'Cloud SQL', 'GKE'],
            correctAnswer: 1,
            explanation: 'Cloud Run is ideal for deploying containers with minimal setup.'
          }
        ]
      },
      completed: false,
      unlocked: false
    }
  ]
},
'blockchain-beginner-track': {
  id: 'blockchain-beginner-track',
  title: 'Blockchain Beginner Track',
  description: 'Understand the fundamentals of blockchain technology, its applications, smart contracts, and get started with hands-on projects.',
  totalDuration: '8 weeks',
  difficulty: 'Beginner',
  modules: [
    {
      id: 'intro-to-blockchain',
      title: 'Introduction to Blockchain',
      description: 'Explore what blockchain is, how it works, and why it matters.',
      icon: '⛓️',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: ['What is Blockchain? (15 min)', 'Blockchain vs Traditional Database (20 min)'],
        articles: ['Understanding Blockchain Basics', 'History and Evolution of Blockchain'],
        exercises: ['Draw a block structure', 'Simulate a basic chain with hashes']
      },
      quiz: {
        id: 'blockchain-intro-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What is a block in a blockchain?',
            options: ['A computer node', 'A data structure with transactions', 'A cryptographic hash', 'A cryptocurrency'],
            correctAnswer: 1,
            explanation: 'A block contains a list of transactions, a hash, and a link to the previous block.'
          }
        ]
      },
      completed: false,
      unlocked: true
    },
    {
      id: 'blockchain-architecture',
      title: 'Blockchain Architecture',
      description: 'Dive into nodes, consensus algorithms, mining, and block validation.',
      icon: '🏗️',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: ['How Blocks Are Linked (20 min)', 'Consensus Mechanisms Explained (25 min)'],
        articles: ['Proof of Work vs Proof of Stake', 'What is Mining in Blockchain?'],
        exercises: ['Simulate block mining with a puzzle', 'Compare PoW and PoS with examples']
      },
      quiz: {
        id: 'blockchain-arch-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which consensus mechanism does Bitcoin use?',
            options: ['Proof of Stake', 'Proof of Authority', 'Proof of Work', 'Delegated Proof of Stake'],
            correctAnswer: 2,
            explanation: 'Bitcoin uses Proof of Work as its consensus algorithm.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'smart-contracts',
      title: 'Smart Contracts',
      description: 'Understand what smart contracts are and how they’re used on Ethereum.',
      icon: '📜',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: ['Smart Contracts Explained (15 min)', 'Ethereum Basics (20 min)'],
        articles: ['What is Solidity?', 'Use Cases of Smart Contracts'],
        exercises: ['Read a basic smart contract code', 'Write a Hello World smart contract in Remix IDE']
      },
      quiz: {
        id: 'smart-contracts-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What platform is most known for smart contracts?',
            options: ['Bitcoin', 'Ripple', 'Ethereum', 'Cardano'],
            correctAnswer: 2,
            explanation: 'Ethereum is a popular blockchain platform supporting smart contracts.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'crypto-wallets-transactions',
      title: 'Crypto Wallets & Transactions',
      description: 'Learn how wallets work, how to manage keys, and perform transactions.',
      icon: '💳',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: ['What is a Crypto Wallet? (15 min)', 'Public Key vs Private Key (20 min)'],
        articles: ['How to Send and Receive Crypto', 'Custodial vs Non-Custodial Wallets'],
        exercises: ['Create a wallet on MetaMask', 'Send test crypto using a testnet']
      },
      quiz: {
        id: 'wallets-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What is a private key?',
            options: ['A public address', 'A way to mine coins', 'A secret used to authorize transactions', 'A smart contract'],
            correctAnswer: 2,
            explanation: 'Private keys are used to sign transactions and must be kept secure.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'blockchain-applications',
      title: 'Blockchain Use Cases',
      description: 'Explore real-world applications including supply chain, voting, NFTs, and DeFi.',
      icon: '🌍',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: ['DeFi Explained (20 min)', 'NFTs and Digital Ownership (15 min)'],
        articles: ['Blockchain in Supply Chain', 'Blockchain in Healthcare'],
        exercises: ['Track product origin on blockchain', 'Explore NFT marketplaces']
      },
      quiz: {
        id: 'blockchain-usecase-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which of the following is a blockchain use case?',
            options: ['Spreadsheet automation', 'Video streaming', 'Supply chain tracking', 'Web hosting'],
            correctAnswer: 2,
            explanation: 'Blockchain is widely used for ensuring supply chain transparency.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'blockchain-development',
      title: 'Blockchain Development Basics',
      description: 'Get started with Solidity, Remix IDE, and testnets for deploying smart contracts.',
      icon: '👨‍💻',
      duration: '2 weeks',
      difficulty: 'Beginner',
      resources: {
        videos: ['Solidity Syntax Introduction (25 min)', 'Deploying on Remix IDE (20 min)'],
        articles: ['Solidity Language Guide', 'Using Rinkeby & Mumbai Testnets'],
        exercises: ['Create and deploy a token contract', 'Write and test a voting contract']
      },
      quiz: {
        id: 'blockchain-dev-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which IDE is commonly used for writing Solidity contracts?',
            options: ['VSCode', 'PyCharm', 'Remix', 'Xcode'],
            correctAnswer: 2,
            explanation: 'Remix IDE is a browser-based tool for writing and testing smart contracts.'
          }
        ]
      },
      completed: false,
      unlocked: false
    }
  ]
},
'iot-beginner-track': {
  id: 'iot-beginner-track',
  title: 'Internet of Things Beginner Track',
  description: 'Learn how smart devices communicate, collect data, and interact with cloud platforms through sensors, microcontrollers, and networks.',
  totalDuration: '8 weeks',
  difficulty: 'Beginner',
  modules: [
    {
      id: 'intro-to-iot',
      title: 'Introduction to IoT',
      description: 'Understand what IoT is, how it works, and where it is used.',
      icon: '🌐',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: ['What is IoT? (15 min)', 'Real-life Examples of IoT (20 min)'],
        articles: ['IoT Basics and Architecture', 'Future of IoT'],
        exercises: ['List 10 IoT devices around you', 'Draw a simple IoT system']
      },
      quiz: {
        id: 'iot-intro-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What does IoT stand for?',
            options: ['Internet of Technologies', 'Interlink of Things', 'Internet of Things', 'Integrated Online Technology'],
            correctAnswer: 2,
            explanation: 'IoT stands for Internet of Things – a network of interconnected devices.'
          }
        ]
      },
      completed: false,
      unlocked: true
    },
    {
      id: 'sensors-and-actuators',
      title: 'Sensors & Actuators',
      description: 'Explore how IoT devices sense and respond to the environment.',
      icon: '📡',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: ['How Sensors Work (20 min)', 'Types of Actuators (15 min)'],
        articles: ['Difference between Sensors and Actuators', 'Top IoT Sensors'],
        exercises: ['Identify sensors in a smart home', 'Match actuators to use cases']
      },
      quiz: {
        id: 'sensors-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which of these is an actuator?',
            options: ['Temperature sensor', 'LED light', 'GPS module', 'Gyroscope'],
            correctAnswer: 1,
            explanation: 'An actuator performs an action, like turning on an LED.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'microcontrollers-iot',
      title: 'Microcontrollers for IoT',
      description: 'Learn to use Arduino, ESP32, and Raspberry Pi to control IoT devices.',
      icon: '🧠',
      duration: '2 weeks',
      difficulty: 'Beginner',
      resources: {
        videos: ['Getting Started with Arduino (25 min)', 'ESP32 vs Raspberry Pi (20 min)'],
        articles: ['Microcontrollers vs Microprocessors', 'How to Flash Arduino'],
        exercises: ['Blink an LED using Arduino', 'Send data from ESP32 to serial monitor']
      },
      quiz: {
        id: 'microcontrollers-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which board is commonly used for IoT prototyping?',
            options: ['MSI Motherboard', 'Arduino Uno', 'GPU Board', 'Hard Drive'],
            correctAnswer: 1,
            explanation: 'Arduino Uno is a widely used microcontroller in IoT projects.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'connectivity-protocols',
      title: 'Connectivity & Protocols',
      description: 'Understand how IoT devices communicate using Wi-Fi, Bluetooth, MQTT, etc.',
      icon: '📶',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: ['MQTT Protocol Overview (15 min)', 'Wi-Fi vs BLE for IoT (20 min)'],
        articles: ['IoT Protocols Guide', 'When to Use Zigbee or LoRa'],
        exercises: ['Simulate MQTT communication', 'Identify protocols used in smart devices']
      },
      quiz: {
        id: 'connectivity-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What is MQTT used for in IoT?',
            options: ['Powering sensors', 'Sending large files', 'Message communication', 'Storing databases'],
            correctAnswer: 2,
            explanation: 'MQTT is a lightweight protocol ideal for sending messages between IoT devices.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'cloud-integration-iot',
      title: 'Cloud Integration',
      description: 'Send and analyze IoT data in the cloud using platforms like Firebase and Thingspeak.',
      icon: '☁️',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: ['Sending IoT Data to Firebase (20 min)', 'Intro to Thingspeak (15 min)'],
        articles: ['Why Use the Cloud for IoT?', 'Top Cloud Platforms for IoT'],
        exercises: ['Log temperature data to cloud', 'Create a dashboard in Thingspeak']
      },
      quiz: {
        id: 'cloud-iot-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Why is the cloud important for IoT?',
            options: ['It provides Wi-Fi', 'Stores and analyzes sensor data', 'Controls physical devices', 'Manages device batteries'],
            correctAnswer: 1,
            explanation: 'Cloud platforms store, process, and visualize data from IoT devices.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'iot-security-basics',
      title: 'IoT Security Basics',
      description: 'Explore basic security principles to protect IoT devices and networks.',
      icon: '🔐',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: ['Top IoT Security Threats (15 min)', 'Encrypting IoT Data (20 min)'],
        articles: ['Why IoT Security is Critical', 'Best Practices for IoT Safety'],
        exercises: ['Enable password protection on a device', 'Simulate a security breach scenario']
      },
      quiz: {
        id: 'iot-security-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which is a major IoT security concern?',
            options: ['Screen brightness', 'Device overheating', 'Weak passwords', 'Low battery'],
            correctAnswer: 2,
            explanation: 'Weak or default passwords are a major entry point for attacks.'
          }
        ]
      },
      completed: false,
      unlocked: false
    }
  ]
},
'robotics-beginner-track': {
  id: 'robotics-beginner-track',
  title: 'Robotics Beginner Track',
  description: 'Explore the fundamentals of robotics, sensors, actuators, and programming robots',
  totalDuration: '8 weeks',
  difficulty: 'Beginner',
  modules: [
    {
      id: 'intro-to-robotics',
      title: 'Introduction to Robotics',
      description: 'Understand what robotics is and its real-world applications',
      icon: '🤖',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'What is Robotics? Concepts and History (30 min)',
          'Applications of Robotics in Industries and Daily Life (25 min)',
          'Components of a Robot - Overview (20 min)'
        ],
        articles: [
          'Beginner’s Guide to Robotics – RobotShop Learning Center',
          'Robotics in Automation and AI',
          'Trends in Robotics and Future Opportunities'
        ],
        exercises: [
          'Identify and label the parts of a robot',
          'Research and present a real-world robot application',
          'Create a flowchart of a robot decision process'
        ]
      },
      quiz: {
        id: 'robotics-intro-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What are the main components of a robot?',
            options: ['Sensors, Actuators, Power, Controller', 'CPU, Monitor, Keyboard, Mouse', 'Engine, Wheels, Brakes, Gear', 'Transmitter, Receiver, Antenna, Battery'],
            correctAnswer: 0,
            explanation: 'A robot is typically composed of sensors, actuators, a power source, and a controller (like a microcontroller or processor).'
          },
          {
            id: 'q2',
            question: 'Which field combines mechanical engineering, electronics, and programming?',
            options: ['Mechatronics', 'Civil Engineering', 'Thermodynamics', 'Networking'],
            correctAnswer: 0,
            explanation: 'Mechatronics is an interdisciplinary field that combines mechanics, electronics, and computing.'
          }
        ]
      },
      completed: false,
      unlocked: true
    },
    {
      id: 'sensors-and-actuators',
      title: 'Sensors and Actuators',
      description: 'Learn how robots perceive and interact with the world',
      icon: '🧭',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Types of Sensors in Robotics (30 min)',
          'Understanding Actuators and Motion Control (35 min)',
          'Integrating Sensors with Microcontrollers (25 min)'
        ],
        articles: [
          'Popular Sensors Used in Robotics – Arduino Blog',
          'Choosing the Right Actuator for Your Robot',
          'Sensor Fusion in Modern Robots'
        ],
        exercises: [
          'Connect a temperature sensor to an Arduino board',
          'Control a servo motor based on sensor input',
          'Simulate a robot avoiding obstacles using IR sensors'
        ]
      },
      quiz: {
        id: 'sensors-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What does a proximity sensor detect?',
            options: ['Distance to an object', 'Light intensity', 'Sound waves', 'Temperature'],
            correctAnswer: 0,
            explanation: 'Proximity sensors are used to detect how close an object is without physical contact.'
          }
        ]
      },
      completed: false,
      unlocked: false
    }
    // Add more modules like "Microcontrollers and Arduino", "Robot Programming", "Line Following Robot", etc., as needed
  ]
},
'virtual-reality-beginner-track': {
  id: 'virtual-reality-beginner-track',
  title: 'Virtual Reality Beginner Track',
  description: 'Discover the immersive world of VR, its applications, tools, and how to build your own virtual environments',
  totalDuration: '8 weeks',
  difficulty: 'Beginner',
  modules: [
    {
      id: 'intro-to-vr',
      title: 'Introduction to Virtual Reality',
      description: 'Understand the fundamentals of VR and its applications',
      icon: '🕶️',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'What is Virtual Reality? Concepts and History (30 min)',
          'Types of VR: Non-Immersive, Semi-Immersive, Fully Immersive (20 min)',
          'Applications of VR in Education, Gaming, and Healthcare (30 min)'
        ],
        articles: [
          'VR: The Ultimate Beginner’s Guide',
          'History of Virtual Reality Technologies',
          'The Impact of VR on Society'
        ],
        exercises: [
          'List 5 real-world VR applications and their benefits',
          'Write a reflection on how VR can change education',
          'Explore a WebVR experience and summarize your thoughts'
        ]
      },
      quiz: {
        id: 'vr-intro-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which device is most commonly used for experiencing VR?',
            options: ['Head-Mounted Display', 'Smartwatch', 'Smart Speaker', 'Touchpad'],
            correctAnswer: 0,
            explanation: 'Head-mounted displays like Oculus or HTC Vive are essential for immersive VR experiences.'
          },
          {
            id: 'q2',
            question: 'Which of these is a common application of VR?',
            options: ['Virtual Meetings', 'Real Estate Tours', 'Medical Training', 'All of the above'],
            correctAnswer: 3,
            explanation: 'VR is applied in diverse fields including education, real estate, healthcare, and entertainment.'
          }
        ]
      },
      completed: false,
      unlocked: true
    },
    {
      id: 'vr-hardware',
      title: 'VR Hardware and Devices',
      description: 'Explore the hardware used in creating immersive VR experiences',
      icon: '🧠',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'VR Headsets and Motion Controllers (25 min)',
          'Haptic Devices and Sensory Feedback (30 min)',
          'Tracking Systems in VR (30 min)'
        ],
        articles: [
          'Comparison of Major VR Headsets (Oculus, HTC, PSVR)',
          'Inside-Out vs Outside-In Tracking',
          'How Haptic Feedback Enhances Immersion'
        ],
        exercises: [
          'Create a comparison chart of popular VR headsets',
          'Analyze motion tracking techniques in two devices',
          'Explore low-cost VR options using Google Cardboard'
        ]
      },
      quiz: {
        id: 'vr-hardware-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which device provides tactile feedback in VR?',
            options: ['Haptic gloves', 'VR headset', 'Microphone', 'Gyroscope'],
            correctAnswer: 0,
            explanation: 'Haptic gloves simulate the sense of touch in virtual environments.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'vr-design-principles',
      title: 'VR Design Principles',
      description: 'Learn how to design intuitive and immersive virtual environments',
      icon: '🎨',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Principles of VR User Experience Design (30 min)',
          'Avoiding Motion Sickness and Disorientation (25 min)',
          'Spatial Audio and 3D Interaction (35 min)'
        ],
        articles: [
          'Do’s and Don’ts in VR Interface Design',
          'Designing for Comfort and Presence in VR',
          'The Role of Sound in Immersive VR'
        ],
        exercises: [
          'Sketch a simple layout for a VR app interface',
          'List design factors to reduce VR discomfort',
          'Create a VR scene wireframe including audio zones'
        ]
      },
      quiz: {
        id: 'vr-design-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which design principle helps reduce VR motion sickness?',
            options: ['Fixed frame of reference', 'Fast camera rotation', 'Blurred visuals', 'Randomized lighting'],
            correctAnswer: 0,
            explanation: 'Keeping a fixed frame of reference (like a cockpit) helps reduce motion sickness in VR.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'unity-vr-development',
      title: 'Unity for VR Development',
      description: 'Start building VR experiences using Unity and basic scripting',
      icon: '🧱',
      duration: '2 weeks',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Installing Unity and Setting up for VR (30 min)',
          'Creating Your First VR Scene (40 min)',
          'Interacting with Objects in VR (45 min)',
          'VR Camera and Player Movement (35 min)'
        ],
        articles: [
          'Unity XR Toolkit Overview',
          'Setting up Oculus/HTC SDK in Unity',
          'Best Practices for Performance in VR Apps'
        ],
        exercises: [
          'Create a 3D scene and view it in VR mode',
          'Implement gaze-based interaction in Unity',
          'Add teleportation controls to move in VR'
        ]
      },
      quiz: {
        id: 'unity-vr-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which scripting language is used in Unity?',
            options: ['C#', 'Python', 'Java', 'Ruby'],
            correctAnswer: 0,
            explanation: 'Unity primarily uses C# for scripting game and app logic.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'vr-interaction',
      title: 'VR Interaction Techniques',
      description: 'Understand how users can interact with virtual worlds',
      icon: '🖐️',
      duration: '1 week',
      difficulty: 'Intermediate',
      resources: {
        videos: [
          'Gaze-Based and Controller-Based Interaction (30 min)',
          'Gesture Recognition and Hand Tracking (40 min)',
          'Voice Commands in VR (35 min)'
        ],
        articles: [
          'Designing Natural User Interfaces in VR',
          'Integrating Voice Recognition with VR Apps',
          'Building Intuitive VR Menus'
        ],
        exercises: [
          'Create a gaze-triggered object interaction in Unity',
          'Add voice commands for scene navigation',
          'Design a VR quiz menu using controller input'
        ]
      },
      quiz: {
        id: 'vr-interaction-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which interaction method uses eye movement in VR?',
            options: ['Gaze-based input', 'Touchscreen', 'Joystick', 'Text input'],
            correctAnswer: 0,
            explanation: 'Gaze-based input allows interaction using head or eye direction.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'webvr-and-threejs',
      title: 'WebVR and Three.js',
      description: 'Build browser-based VR experiences using WebVR and Three.js',
      icon: '🌐',
      duration: '1 week',
      difficulty: 'Intermediate',
      resources: {
        videos: [
          'Introduction to WebVR and Three.js (35 min)',
          'Building 3D Objects and Scenes (40 min)',
          'Adding VR Controls and Effects in the Browser (30 min)'
        ],
        articles: [
          'Three.js Documentation for Beginners',
          'Deploying WebVR Projects Online',
          'Responsive VR Design for Mobile'
        ],
        exercises: [
          'Create a rotating 3D object in Three.js',
          'Build a basic interactive VR environment',
          'Deploy a WebVR demo on GitHub Pages'
        ]
      },
      quiz: {
        id: 'webvr-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which JavaScript library is used for 3D graphics in the browser?',
            options: ['Three.js', 'jQuery', 'React.js', 'Angular'],
            correctAnswer: 0,
            explanation: 'Three.js is widely used for creating 3D content in web browsers.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'vr-capstone-project',
      title: 'Capstone: Create Your VR Experience',
      description: 'Design, develop, and present your own VR scene or application',
      icon: '🏁',
      duration: '1 week',
      difficulty: 'Intermediate',
      resources: {
        videos: [
          'Planning and Storyboarding Your VR Project (25 min)',
          'Integrating All Elements in Unity or WebVR (40 min)',
          'Showcasing and Recording VR Experiences (30 min)'
        ],
        articles: [
          'Checklist for Publishing VR Projects',
          'Feedback and Iteration in VR Design',
          'Presenting VR Projects to an Audience'
        ],
        exercises: [
          'Create a themed VR scene (e.g., museum, sci-fi, nature)',
          'Add interactions, audio, and movement to your project',
          'Submit a walkthrough video and design notes'
        ]
      },
      quiz: {
        id: 'vr-capstone-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which of the following is critical in a VR project presentation?',
            options: ['User experience and immersion', 'Minimal visuals', 'Static camera', 'No audio'],
            correctAnswer: 0,
            explanation: 'A successful VR project emphasizes immersion and user experience.'
          }
        ]
      },
      completed: false,
      unlocked: false
    }
  ]
},
'augmented-reality-beginner-track': {
  id: 'augmented-reality-beginner-track',
  title: 'Augmented Reality Beginner Track',
  description: 'Learn how to blend digital content with the real world using AR technologies and build your own interactive AR apps',
  totalDuration: '8 weeks',
  difficulty: 'Beginner',
  modules: [
    {
      id: 'intro-to-ar',
      title: 'Introduction to Augmented Reality',
      description: 'Understand the basics of AR and how it differs from VR',
      icon: '📱',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'What is Augmented Reality? (25 min)',
          'AR vs VR vs MR Explained (30 min)',
          'Everyday Uses of AR in Mobile and Web (20 min)'
        ],
        articles: [
          'Introduction to Augmented Reality – Unity Blog',
          'History and Evolution of AR Technology',
          'Real-World Applications of AR (Retail, Education, etc.)'
        ],
        exercises: [
          'Compare and contrast AR and VR in a table',
          'List 5 mobile apps that use AR and explain their purpose',
          'Write a reflection on how AR could change your field'
        ]
      },
      quiz: {
        id: 'ar-intro-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What is Augmented Reality?',
            options: ['An overlay of digital content on the real world', 'A completely virtual environment', 'A physical object with no digital input', 'A type of 3D printing'],
            correctAnswer: 0,
            explanation: 'AR enhances the real world by overlaying digital content like images, text, or 3D models.'
          },
          {
            id: 'q2',
            question: 'Which of these is a common AR application?',
            options: ['Snapchat Filters', 'Oculus Rift', 'Microsoft Word', 'Spotify'],
            correctAnswer: 0,
            explanation: 'Snapchat filters are an example of face-based AR overlays.'
          }
        ]
      },
      completed: false,
      unlocked: true
    },
    {
      id: 'ar-devices-platforms',
      title: 'AR Devices and Platforms',
      description: 'Explore different hardware and software platforms for AR',
      icon: '🕶️',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Types of AR Devices: Phones, Glasses, Headsets (30 min)',
          'Popular AR Platforms: ARKit, ARCore, WebAR (35 min)',
          'Capabilities and Limitations of Mobile AR (25 min)'
        ],
        articles: [
          'Comparison of AR Devices – HoloLens vs Magic Leap',
          'ARKit and ARCore Feature Overview',
          'Choosing the Right AR Platform for Your App'
        ],
        exercises: [
          'Research and compare two AR SDKs',
          'Identify which AR hardware supports markerless AR',
          'Set up your phone for testing AR apps'
        ]
      },
      quiz: {
        id: 'ar-platforms-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which SDK is developed by Apple for AR?',
            options: ['ARKit', 'ARCore', 'Vuforia', 'Unity XR'],
            correctAnswer: 0,
            explanation: 'ARKit is Apple’s SDK for building AR experiences on iOS.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'ar-design-basics',
      title: 'Design Principles for AR',
      description: 'Learn how to design intuitive and context-aware AR experiences',
      icon: '🎨',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Designing for AR Interfaces and UX (30 min)',
          'Anchoring Digital Content in Real Space (35 min)',
          'Avoiding Motion Sickness and Eye Strain (20 min)'
        ],
        articles: [
          'AR UX Guidelines – Google Developers',
          'Designing Spatial Interfaces for AR',
          'Principles of Context-Aware Interaction in AR'
        ],
        exercises: [
          'Sketch an AR app UI for a museum guide',
          'Describe how AR can be made more intuitive',
          'Create a storyboard for an AR classroom experience'
        ]
      },
      quiz: {
        id: 'ar-design-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which is a key design factor in AR?',
            options: ['Environmental awareness', 'Full screen scrolling', 'Static layout', 'Pop-ups'],
            correctAnswer: 0,
            explanation: 'AR design relies heavily on spatial awareness and context-based interaction.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'unity-and-vuforia',
      title: 'Unity and Vuforia for AR',
      description: 'Start building AR apps using Unity and the Vuforia SDK',
      icon: '🧱',
      duration: '2 weeks',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Installing Unity and Vuforia SDK (25 min)',
          'Creating an Image-Target AR App (45 min)',
          'Adding 3D Models and Animations to Targets (40 min)',
          'Deploying AR Apps to Android/iOS (35 min)'
        ],
        articles: [
          'Getting Started with Vuforia – Official Docs',
          'Unity AR Foundation vs Vuforia',
          'Troubleshooting Camera and Permissions in AR'
        ],
        exercises: [
          'Create an AR app that recognizes a printed image',
          'Place a 3D character on an image marker',
          'Export and test the AR app on a real device'
        ]
      },
      quiz: {
        id: 'unity-ar-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What is an “image target” in AR?',
            options: ['A reference image used for tracking and overlay', 'A camera sensor', 'A GPS coordinate', 'An app logo'],
            correctAnswer: 0,
            explanation: 'Image targets are predefined images that trigger AR content.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'markerless-ar',
      title: 'Markerless AR and Surface Tracking',
      description: 'Learn how to create AR experiences without predefined markers',
      icon: '🗺️',
      duration: '1 week',
      difficulty: 'Intermediate',
      resources: {
        videos: [
          'Understanding Markerless AR (30 min)',
          'Surface Plane Detection and Anchors (35 min)',
          'Creating an AR App with Surface Tracking (40 min)'
        ],
        articles: [
          'ARCore Feature Overview – Google Developers',
          'Spatial Mapping in ARKit and AR Foundation',
          'SLAM (Simultaneous Localization and Mapping) Basics'
        ],
        exercises: [
          'Create an AR app that places furniture on the floor',
          'Allow user to walk around and view the model',
          'Use hit-testing to interact with virtual objects'
        ]
      },
      quiz: {
        id: 'markerless-ar-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which technology helps place AR objects on real surfaces?',
            options: ['Surface tracking', 'QR code scanning', 'Screen mirroring', '3D printing'],
            correctAnswer: 0,
            explanation: 'Surface tracking enables realistic placement of AR content on horizontal/vertical surfaces.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'webar-and-8thwall',
      title: 'WebAR and 8thWall',
      description: 'Build AR experiences for the browser without requiring apps',
      icon: '🌐',
      duration: '1 week',
      difficulty: 'Intermediate',
      resources: {
        videos: [
          'What is WebAR and How it Works (25 min)',
          'Using 8thWall for Markerless WebAR (40 min)',
          'Publishing AR Projects to the Web (35 min)'
        ],
        articles: [
          'Introduction to WebAR – Mozilla WebXR',
          'WebAR with A-Frame and Three.js',
          'Deploying AR Experiences to Your Website'
        ],
        exercises: [
          'Build a WebAR greeting card experience',
          'Add face-tracking filters in 8thWall',
          'Publish and test your project on mobile browser'
        ]
      },
      quiz: {
        id: 'webar-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which is a key benefit of WebAR?',
            options: ['No app installation required', 'Offline usage only', 'Requires VR headset', 'Runs only on desktop'],
            correctAnswer: 0,
            explanation: 'WebAR allows users to experience AR content directly in mobile browsers.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'ar-capstone-project',
      title: 'Capstone: Build Your AR App',
      description: 'Design and develop your own AR experience as a final project',
      icon: '🏁',
      duration: '1 week',
      difficulty: 'Intermediate',
      resources: {
        videos: [
          'Planning Your AR App (30 min)',
          'Designing Assets and Interactions (35 min)',
          'Showcasing and Sharing Your Project (25 min)'
        ],
        articles: [
          'Checklist for Releasing an AR App',
          'Tips for AR User Testing',
          'Final Touches: Optimization and Performance'
        ],
        exercises: [
          'Create a full AR app using image or surface tracking',
          'Integrate audio, animation, or interaction logic',
          'Record and present a walkthrough of your experience'
        ]
      },
      quiz: {
        id: 'ar-capstone-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What is a common final step before publishing an AR app?',
            options: ['Testing on real devices', 'Uninstalling SDK', 'Removing all permissions', 'Switching to VR mode'],
            correctAnswer: 0,
            explanation: 'Testing the AR app on physical devices ensures it works in real-world conditions.'
          }
        ]
      },
      completed: false,
      unlocked: false
    }
  ]
},
'ui-ux-design-beginner-track': {
  id: 'ui-ux-design-beginner-track',
  title: 'UI/UX Design Beginner Track',
  description: 'Learn the principles of user interface and user experience design to create intuitive and engaging digital products',
  totalDuration: '8 weeks',
  difficulty: 'Beginner',
  modules: [
    {
      id: 'intro-to-uiux',
      title: 'Introduction to UI/UX Design',
      description: 'Understand the fundamentals of UI/UX and their importance in product design',
      icon: '🎨',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'What is UI/UX Design? (20 min)',
          'Difference Between UI and UX (25 min)',
          'History and Evolution of UI Design (15 min)'
        ],
        articles: [
          'UI vs UX: What’s the Difference?',
          'The Importance of UX in Modern Product Design',
          'A Brief History of UI Design'
        ],
        exercises: [
          'Compare 3 popular apps based on UI/UX',
          'Sketch a rough layout for a login page',
          'Identify 5 apps with poor UX and explain why'
        ]
      },
      quiz: {
        id: 'uiux-intro-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What does UX stand for?',
            options: ['User Execution', 'User Experience', 'User Exposure', 'User Extension'],
            correctAnswer: 1,
            explanation: 'UX stands for User Experience — how a person feels when interacting with a product.'
          },
          {
            id: 'q2',
            question: 'Which of the following focuses on aesthetics and interface layout?',
            options: ['UX Design', 'UI Design', 'Backend Design', 'Product Management'],
            correctAnswer: 1,
            explanation: 'UI Design focuses on visuals, colors, typography, and layout.'
          }
        ]
      },
      completed: false,
      unlocked: true
    },
    {
      id: 'principles-of-design',
      title: 'Principles of UI Design',
      description: 'Learn about layout, spacing, typography, and color theory',
      icon: '📐',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Visual Hierarchy and Composition (30 min)',
          'Understanding Color Theory for UI (25 min)',
          'Typography Basics (20 min)'
        ],
        articles: [
          '10 UI Design Principles You Should Know',
          'How to Choose the Right Font',
          'Effective Use of Whitespace in UI'
        ],
        exercises: [
          'Design a clean mobile profile page',
          'Choose fonts and colors for a news website',
          'Revamp an existing app UI with better spacing'
        ]
      },
      quiz: {
        id: 'ui-principles-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which design principle improves readability and clarity?',
            options: ['Animation', 'Whitespace', 'Shadowing', 'Noise'],
            correctAnswer: 1,
            explanation: 'Whitespace improves clarity by avoiding clutter.'
          },
          {
            id: 'q2',
            question: 'Which element conveys tone and branding the most?',
            options: ['Typography', 'Padding', 'Shadow', 'Grid'],
            correctAnswer: 0,
            explanation: 'Typography can express emotion and brand personality.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'user-research',
      title: 'User Research and Personas',
      description: 'Conduct user research to understand target audiences',
      icon: '🧠',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'User Personas in UX (20 min)',
          'How to Conduct User Interviews (30 min)',
          'Understanding Empathy Maps (25 min)'
        ],
        articles: [
          'User Research 101',
          'Building Effective Personas',
          'The Role of Empathy in UX Design'
        ],
        exercises: [
          'Create 2 user personas for an e-learning app',
          'Design an empathy map for a student user',
          'List questions for a user interview'
        ]
      },
      quiz: {
        id: 'user-research-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What is the main goal of a user persona?',
            options: ['Track sales', 'Summarize target users', 'Design UI directly', 'Manage team roles'],
            correctAnswer: 1,
            explanation: 'Personas represent typical users to guide design decisions.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'wireframing-prototyping',
      title: 'Wireframing and Prototyping',
      description: 'Design wireframes and interactive prototypes using popular tools',
      icon: '🖌️',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Wireframing Basics with Figma (30 min)',
          'Clickable Prototypes with Adobe XD (20 min)',
          'Low vs High Fidelity Prototypes (15 min)'
        ],
        articles: [
          'Best Practices for Wireframing',
          'Tools for UX Prototyping',
          'From Sketch to Prototype: The Full Flow'
        ],
        exercises: [
          'Create a wireframe for a food delivery app',
          'Make a basic clickable prototype',
          'Sketch a user flow for login → dashboard'
        ]
      },
      quiz: {
        id: 'wireframe-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What is a low-fidelity wireframe?',
            options: ['Detailed design with colors', 'Rough sketch showing structure', 'Animated prototype', 'User data chart'],
            correctAnswer: 1,
            explanation: 'Low-fidelity wireframes focus on layout and structure, not visual design.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'interaction-and-animation',
      title: 'Interaction Design and Animation',
      description: 'Add meaningful interactions and motion to enhance user experience',
      icon: '🎬',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Principles of Interaction Design (25 min)',
          'Microinteractions and UX (30 min)',
          'Adding Animation in Prototypes (20 min)'
        ],
        articles: [
          'Why Microinteractions Matter',
          'Designing Delightful UI Animations',
          'Using Animation to Guide User Attention'
        ],
        exercises: [
          'Design a hover interaction for buttons',
          'Add transitions between screens in a prototype',
          'Animate an error message display'
        ]
      },
      quiz: {
        id: 'interaction-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which element enhances feedback in a UI?',
            options: ['Microinteraction', 'Bold Text', 'Static Icon', 'Scrollbar'],
            correctAnswer: 0,
            explanation: 'Microinteractions provide subtle feedback like button presses and toggles.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'usability-testing',
      title: 'Usability Testing and Feedback',
      description: 'Test your designs with real users and gather actionable feedback',
      icon: '🧪',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'How to Conduct Usability Tests (25 min)',
          'Analyzing UX Feedback (30 min)',
          'Iterating Based on Results (20 min)'
        ],
        articles: [
          'UX Testing Methods You Should Know',
          'Common UX Testing Mistakes',
          'Feedback Loops in Product Design'
        ],
        exercises: [
          'Create a usability test plan',
          'Test your prototype with 3 users',
          'Analyze results and propose 3 improvements'
        ]
      },
      quiz: {
        id: 'usability-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which is a good method to gather UX feedback?',
            options: ['Beta Testing', 'Team Meetings', 'Release Notes', 'Unit Testing'],
            correctAnswer: 0,
            explanation: 'Beta testing and direct user observation reveal usability issues.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'tools-and-frameworks',
      title: 'UI/UX Tools and Frameworks',
      description: 'Get familiar with popular tools like Figma, Adobe XD, and design systems',
      icon: '🛠️',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Figma for Beginners (25 min)',
          'Design Systems and Atomic Design (30 min)',
          'Collaborating in Adobe XD (20 min)'
        ],
        articles: [
          'Top UI Design Tools in 2025',
          'Introduction to Design Systems',
          'Version Control in UX Projects'
        ],
        exercises: [
          'Recreate a basic app UI in Figma',
          'Use a design system to build a page',
          'Collaborate with a peer on a shared project'
        ]
      },
      quiz: {
        id: 'tools-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which tool is best for collaborative UI design?',
            options: ['Figma', 'Photoshop', 'Canva', 'Illustrator'],
            correctAnswer: 0,
            explanation: 'Figma allows real-time collaboration and is widely used for UI design.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'final-project',
      title: 'Final Project: Design a Full App UI/UX',
      description: 'Apply everything learned to design a complete mobile or web app experience',
      icon: '🏁',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Final Project Guidelines and Showcase (20 min)',
          'Common Mistakes in UI/UX Projects (15 min)'
        ],
        articles: [
          'Checklist for a UX Design Case Study',
          'How to Present Your UX Project',
          'Documenting Your Design Decisions'
        ],
        exercises: [
          'Design wireframes, UI screens, and prototype',
          'Conduct user testing and iterate',
          'Submit and present your full design project'
        ]
      },
      quiz: {
        id: 'final-project-quiz',
        passingScore: 100,
        questions: [
          {
            id: 'q1',
            question: 'Have you submitted your complete prototype and documentation?',
            options: ['Yes', 'No'],
            correctAnswer: 0,
            explanation: 'Final project must include design, prototype, testing, and documentation.'
          }
        ]
      },
      completed: false,
      unlocked: false
    }
  ]
},
'game-development-beginner-track': {
  id: 'game-development-beginner-track',
  title: 'Game Development Beginner Track',
  description: 'Start your journey in game development by learning the basics of game design, engines, scripting, and publishing your first game',
  totalDuration: '8 weeks',
  difficulty: 'Beginner',
  modules: [
    {
      id: 'intro-to-game-development',
      title: 'Introduction to Game Development',
      description: 'Understand the fundamentals of how games are made and the roles involved',
      icon: '🎮',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'What is Game Development? (20 min)',
          'History of Game Development (15 min)',
          'Overview of the Game Industry (25 min)'
        ],
        articles: [
          'Game Development Basics – freeCodeCamp',
          'Types of Games and Game Genres',
          'Game Development Pipeline Explained'
        ],
        exercises: [
          'List 5 favorite games and classify by genre',
          'Research popular game engines and their features',
          'Sketch your idea for a simple 2D game'
        ]
      },
      quiz: {
        id: 'game-dev-intro-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which of the following is a popular game engine?',
            options: ['Unreal Engine', 'NumPy', 'AutoCAD', 'Node.js'],
            correctAnswer: 0,
            explanation: 'Unreal Engine is widely used in professional game development.'
          },
          {
            id: 'q2',
            question: 'What genre is a game like “Clash of Clans”?',
            options: ['Strategy', 'Platformer', 'FPS', 'Puzzle'],
            correctAnswer: 0,
            explanation: 'Clash of Clans is a real-time strategy game.'
          }
        ]
      },
      completed: false,
      unlocked: true
    },
    {
      id: 'game-design-basics',
      title: 'Game Design Basics',
      description: 'Learn about gameplay mechanics, player feedback, and level design',
      icon: '🧩',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Core Game Mechanics Explained (30 min)',
          'Designing a Game Level from Scratch (20 min)',
          'What Makes a Game Fun? (25 min)'
        ],
        articles: [
          'Game Design Principles – Gamasutra',
          'Balancing Game Difficulty',
          'Understanding Feedback Loops in Games'
        ],
        exercises: [
          'Design a simple level layout for a platformer game',
          'Create a point system for your game idea',
          'Write a description of how players win/lose in your game'
        ]
      },
      quiz: {
        id: 'game-design-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What is a “feedback loop” in game design?',
            options: ['A sound effect', 'A repeated level', 'Game mechanics that reinforce behavior', 'None of the above'],
            correctAnswer: 2,
            explanation: 'Feedback loops reinforce or counter certain player actions, influencing gameplay.'
          },
          {
            id: 'q2',
            question: 'Which of these affects game balance?',
            options: ['Level difficulty', 'Rewards given', 'Enemy strength', 'All of the above'],
            correctAnswer: 3,
            explanation: 'Game balance is influenced by multiple design choices including rewards and enemy design.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: '2d-game-development',
      title: '2D Game Development with Unity/Godot',
      description: 'Start building 2D games using beginner-friendly engines like Unity or Godot',
      icon: '🕹️',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Creating a 2D Platformer in Unity (30 min)',
          'Getting Started with Godot (25 min)',
          'Animating Sprites in 2D Games (20 min)'
        ],
        articles: [
          'Unity vs Godot: Which to Choose',
          '2D Game Development Tips',
          'Exporting and Running a Simple Game'
        ],
        exercises: [
          'Create a 2D character that can move and jump',
          'Add enemies to your game scene',
          'Add sound effects and background music'
        ]
      },
      quiz: {
        id: '2d-game-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which scripting language does Godot use?',
            options: ['C#', 'Python', 'GDScript', 'Lua'],
            correctAnswer: 2,
            explanation: 'Godot primarily uses GDScript, its own Python-like language.'
          },
          {
            id: 'q2',
            question: 'What is a sprite?',
            options: ['A game sound', 'A type of engine', '2D image in a game', 'A physics tool'],
            correctAnswer: 2,
            explanation: 'Sprites are 2D images used to represent characters or objects in games.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'intro-to-scripting',
      title: 'Introduction to Scripting for Games',
      description: 'Learn to write basic scripts to control gameplay events and logic',
      icon: '📜',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Intro to C# for Unity (30 min)',
          'Writing Simple Scripts to Control Characters (25 min)',
          'Detecting Collisions and Triggers (20 min)'
        ],
        articles: [
          'Unity Scripting Reference Guide',
          'Variables, Loops, and Events in Game Scripting',
          'Fixing Common Scripting Errors'
        ],
        exercises: [
          'Make a player move with arrow keys',
          'Create a script to collect coins',
          'Script a game-over condition'
        ]
      },
      quiz: {
        id: 'game-scripting-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which keyword is used to define a method in C#?',
            options: ['function', 'void', 'def', 'method'],
            correctAnswer: 1,
            explanation: 'In C#, `void` is commonly used to define a method that doesn’t return a value.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'game-ui-and-sound',
      title: 'Game UI and Sound Design',
      description: 'Add menus, buttons, HUD, sound effects, and music to enhance player experience',
      icon: '🔊',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Creating a Game Menu in Unity (30 min)',
          'Adding Sound and Music (25 min)',
          'Designing a Scoreboard and Health Bar (20 min)'
        ],
        articles: [
          'UI Design Tips for Games',
          'Free Resources for Game Audio',
          'Adding Audio Triggers in Unity'
        ],
        exercises: [
          'Design a start screen and pause menu',
          'Add a health bar that decreases on damage',
          'Import and trigger background music'
        ]
      },
      quiz: {
        id: 'game-ui-sound-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What does HUD stand for?',
            options: ['Head-Up Display', 'Hot UI Dashboard', 'Hard Utility Driver', 'High UI Design'],
            correctAnswer: 0,
            explanation: 'HUD means Head-Up Display, showing in-game stats like health and score.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'final-project-build',
      title: 'Build and Publish a Mini Game',
      description: 'Apply all your knowledge by building and publishing a simple game project',
      icon: '🚀',
      duration: '2 weeks',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Game Jam Project Planning (15 min)',
          'Packaging and Publishing Games (25 min)',
          'Feedback and Playtesting Tips (20 min)'
        ],
        articles: [
          'Submitting to Itch.io or Google Play Store',
          'Version Control for Game Projects',
          'Game Publishing Checklist'
        ],
        exercises: [
          'Build a 2D game using Unity or Godot',
          'Test it with at least 3 friends',
          'Publish it online (Itch.io or GitHub)'
        ]
      },
      quiz: {
        id: 'game-project-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which platform allows indie devs to publish free games easily?',
            options: ['Itch.io', 'YouTube', 'Slack', 'AWS'],
            correctAnswer: 0,
            explanation: 'Itch.io is a free platform to publish and share games.'
          }
        ]
      },
      completed: false,
      unlocked: false
    }
  ]
},
'quantum-computing-beginner-track': {
  id: 'quantum-computing-beginner-track',
  title: 'Quantum Computing Beginner Track',
  description: 'Understand the foundations of quantum computing, qubits, gates, and quantum algorithms',
  totalDuration: '8 weeks',
  difficulty: 'Beginner',
  modules: [
    {
      id: 'intro-to-quantum-computing',
      title: 'Introduction to Quantum Computing',
      description: 'Discover what quantum computing is and how it differs from classical computing',
      icon: '🧠',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Quantum Computing Explained Simply (15 min)',
          'Quantum vs Classical Computing – Major Differences (20 min)',
          'Real World Applications of Quantum Computing (25 min)'
        ],
        articles: [
          'Beginner’s Guide to Quantum Computing – IBM Q',
          'Why Quantum Computing Matters – Microsoft Learn',
          'History and Future of Quantum Computers'
        ],
        exercises: [
          'Compare classical bits vs quantum bits (qubits)',
          'List three real-world applications of quantum computing',
          'Explain superposition using a coin analogy'
        ]
      },
      quiz: {
        id: 'quantum-intro-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What is a qubit?',
            options: [
              'A type of classical bit',
              'A quantum version of a bit that can be 0 and 1 simultaneously',
              'A computer component for storage',
              'A unit of quantum time'
            ],
            correctAnswer: 1,
            explanation: 'A qubit can exist in a superposition of both 0 and 1 states simultaneously.'
          },
          {
            id: 'q2',
            question: 'Which of the following is unique to quantum computing?',
            options: ['Binary logic', 'Superposition', 'Looping statements', 'Bitwise operations'],
            correctAnswer: 1,
            explanation: 'Superposition is a fundamental principle of quantum mechanics allowing multiple states at once.'
          }
        ]
      },
      completed: false,
      unlocked: true
    },
    {
      id: 'qubits-and-superposition',
      title: 'Qubits and Superposition',
      description: 'Learn how qubits work and enable quantum parallelism',
      icon: '🔮',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'What is a Qubit? (18 min)',
          'Superposition and Entanglement (22 min)',
          'Quantum State Visualization (15 min)'
        ],
        articles: [
          'Qubits Explained – IBM Quantum',
          'Understanding Superposition – Quantum Country',
          'Quantum States and Probabilities'
        ],
        exercises: [
          'Simulate a qubit in superposition using an online tool',
          'Write a summary of superposition',
          'List two differences between classical bits and qubits'
        ]
      },
      quiz: {
        id: 'qubits-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What is superposition?',
            options: [
              'A quantum state storing only 0',
              'The ability of a qubit to be in multiple states simultaneously',
              'A classical computing concept',
              'A way to measure quantum speed'
            ],
            correctAnswer: 1,
            explanation: 'Superposition allows a qubit to be in a combination of states at once.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'quantum-gates-and-circuits',
      title: 'Quantum Gates and Circuits',
      description: 'Understand quantum logic gates like X, H, and CNOT and how circuits are built',
      icon: '🚪',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Quantum Gates Explained (20 min)',
          'Building Quantum Circuits (25 min)',
          'Hadamard Gate and its Role (15 min)'
        ],
        articles: [
          'Quantum Circuit Basics – Qiskit Textbook',
          'What Are Quantum Gates?',
          'CNOT Gate & Quantum Logic'
        ],
        exercises: [
          'Draw a circuit using H and CNOT gates',
          'Describe the Hadamard gate’s effect on a qubit',
          'Simulate a basic quantum circuit online'
        ]
      },
      quiz: {
        id: 'quantum-gates-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What does the Hadamard (H) gate do?',
            options: [
              'Flips a qubit from 0 to 1',
              'Creates a superposition state',
              'Measures a qubit',
              'Entangles two qubits'
            ],
            correctAnswer: 1,
            explanation: 'The H gate creates a superposition of 0 and 1.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'quantum-entanglement',
      title: 'Quantum Entanglement',
      description: 'Explore one of the most fascinating principles in quantum mechanics',
      icon: '🔗',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Entanglement Explained Visually (18 min)',
          'Why Entanglement is Spooky (20 min)',
          'Quantum Teleportation Concept (22 min)'
        ],
        articles: [
          'Quantum Entanglement – Britannica',
          'Einstein and Spooky Action at a Distance',
          'Entanglement in Real World Use Cases'
        ],
        exercises: [
          'Explain entanglement to a friend',
          'Research real-world uses of entanglement',
          'Simulate an entangled pair online'
        ]
      },
      quiz: {
        id: 'entanglement-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What is true about entangled particles?',
            options: [
              'They behave independently',
              'Measuring one instantly determines the other',
              'They are identical in state always',
              'They only exist in labs'
            ],
            correctAnswer: 1,
            explanation: 'Entangled particles’ states are correlated regardless of distance.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'quantum-algorithms-basics',
      title: 'Quantum Algorithms Basics',
      description: 'Learn how quantum algorithms provide speed-ups for certain problems',
      icon: '📐',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Quantum Algorithms Overview (20 min)',
          'Deutsch-Jozsa Algorithm (25 min)',
          'Quantum Speedup with Grover’s (22 min)'
        ],
        articles: [
          'Quantum Algorithms – Qiskit',
          'Grover’s and Shor’s Algorithm Basics',
          'How Quantum Algorithms Work'
        ],
        exercises: [
          'Compare classical vs quantum search algorithms',
          'Outline Deutsch-Jozsa in 4 steps',
          'Research why Shor’s algorithm matters'
        ]
      },
      quiz: {
        id: 'quantum-algorithms-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which algorithm provides quadratic speed-up in search?',
            options: ['Shor’s', 'Grover’s', 'Huffman’s', 'Bellman-Ford'],
            correctAnswer: 1,
            explanation: 'Grover’s algorithm searches in √N time vs N for classical algorithms.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'introduction-to-qiskit',
      title: 'Introduction to Qiskit',
      description: 'Get hands-on with IBM’s Qiskit framework for quantum programming',
      icon: '💻',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Qiskit Overview for Beginners (20 min)',
          'How to Run a Circuit in Qiskit (30 min)',
          'Quantum Experience Demo (15 min)'
        ],
        articles: [
          'Qiskit Installation Guide',
          'First Circuit with Qiskit',
          'Qiskit Tutorials – IBM'
        ],
        exercises: [
          'Install Qiskit locally',
          'Run a basic H gate circuit',
          'Use IBM Quantum Experience to simulate a circuit'
        ]
      },
      quiz: {
        id: 'qiskit-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Qiskit is primarily used to:',
            options: [
              'Develop mobile apps',
              'Simulate classical physics',
              'Program quantum computers',
              'Measure entropy'
            ],
            correctAnswer: 2,
            explanation: 'Qiskit is IBM’s open-source framework to write and simulate quantum programs.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'quantum-use-cases',
      title: 'Quantum Use Cases & Industries',
      description: 'Explore how quantum computing is used in cryptography, finance, and chemistry',
      icon: '🏭',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Real-World Quantum Applications (25 min)',
          'Quantum in Pharma and AI (20 min)',
          'Quantum in Cryptography (18 min)'
        ],
        articles: [
          'Quantum Applications by Domain – IBM',
          'How Banks Are Testing Quantum',
          'Quantum Simulations in Drug Discovery'
        ],
        exercises: [
          'Research one industry and how it benefits from quantum',
          'Explain why quantum cryptography is secure',
          'Write a paragraph on quantum AI applications'
        ]
      },
      quiz: {
        id: 'quantum-usecases-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which of the following is a potential quantum use case?',
            options: ['Web development', 'Prime factorization', 'Social media automation', 'Spreadsheet sorting'],
            correctAnswer: 1,
            explanation: 'Quantum computers can factor large numbers exponentially faster, used in cryptography.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'quantum-future-and-ethics',
      title: 'The Future and Ethics of Quantum Computing',
      description: 'Understand the risks, potential impact, and ethical concerns in quantum technology',
      icon: '🧭',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Quantum Future – What’s Coming (20 min)',
          'Quantum Ethics in Tech (18 min)',
          'Will Quantum Break Encryption? (22 min)'
        ],
        articles: [
          'Ethics in Quantum Computing',
          'Post-Quantum Cryptography',
          'The Need for Quantum Regulations'
        ],
        exercises: [
          'List 2 ethical concerns in quantum',
          'What is post-quantum cryptography?',
          'Debate the pros and cons of rapid quantum growth'
        ]
      },
      quiz: {
        id: 'quantum-ethics-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'One ethical concern of quantum computing is:',
            options: ['Too many engineers', 'Access by small startups', 'Breaking current cryptographic systems', 'Lack of video content'],
            correctAnswer: 2,
            explanation: 'Quantum computers could break modern encryption methods, posing privacy risks.'
          }
        ]
      },
      completed: false,
      unlocked: false
    }
  ]
},
'nlp-beginner-track': {
  id: 'nlp-beginner-track',
  title: 'Natural Language Processing Beginner Track',
  description: 'Learn the fundamentals of Natural Language Processing, from text preprocessing to language models and applications.',
  totalDuration: '8 weeks',
  difficulty: 'Beginner',
  modules: [
    {
      id: 'intro-to-nlp',
      title: 'Introduction to NLP',
      description: 'Understand what NLP is, its history, and real-world applications.',
      icon: '🧠',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'What is NLP? (10 min)',
          'Applications of NLP (15 min)',
          'Evolution of NLP Over Time (12 min)'
        ],
        articles: [
          'Beginner’s Guide to NLP – Towards Data Science',
          'NLP in Real Life: Chatbots, Translation, and More'
        ],
        exercises: [
          'List 5 use cases of NLP in daily life',
          'Write a summary of NLP in your own words'
        ]
      },
      quiz: {
        id: 'nlp-intro-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What does NLP stand for?',
            options: ['Neural Language Programming', 'Natural Language Processing', 'Natural Logic Prediction', 'None of the above'],
            correctAnswer: 1,
            explanation: 'NLP stands for Natural Language Processing.'
          },
          {
            id: 'q2',
            question: 'Which is a common use case of NLP?',
            options: ['Image recognition', 'Speech synthesis', 'Sentiment analysis', 'Video compression'],
            correctAnswer: 2,
            explanation: 'Sentiment analysis is a common application of NLP.'
          }
        ]
      },
      completed: false,
      unlocked: true
    },
    {
      id: 'text-preprocessing',
      title: 'Text Preprocessing Techniques',
      description: 'Learn tokenization, stemming, lemmatization, stopwords removal, and more.',
      icon: '📄',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Text Cleaning in NLP (12 min)',
          'Tokenization and Stop Words (18 min)',
          'Stemming vs Lemmatization (15 min)'
        ],
        articles: [
          'Text Preprocessing Techniques – Analytics Vidhya',
          'NLTK Preprocessing Cheatsheet'
        ],
        exercises: [
          'Clean a raw paragraph using NLTK',
          'Perform tokenization and remove stopwords',
          'Stem and lemmatize a list of words'
        ]
      },
      quiz: {
        id: 'text-preprocessing-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which of the following is used to split sentences into words?',
            options: ['Stemming', 'Tokenization', 'Encoding', 'Parsing'],
            correctAnswer: 1,
            explanation: 'Tokenization is the process of splitting text into tokens.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'text-representation',
      title: 'Text Representation Methods',
      description: 'Explore Bag-of-Words, TF-IDF, and Word Embeddings (Word2Vec, GloVe).',
      icon: '📊',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Bag of Words & TF-IDF Explained (15 min)',
          'Introduction to Word Embeddings (18 min)',
          'Visualizing Word Vectors (12 min)'
        ],
        articles: [
          'TF-IDF for Beginners – Scikit-learn Docs',
          'Word2Vec Explained – TensorFlow',
          'How GloVe Works'
        ],
        exercises: [
          'Convert sample text using BoW and TF-IDF',
          'Compare two word vectors for similarity',
          'Explain how Word2Vec captures meaning'
        ]
      },
      quiz: {
        id: 'text-representation-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which method gives weight to important but rare words?',
            options: ['BoW', 'One-hot encoding', 'TF-IDF', 'Stemming'],
            correctAnswer: 2,
            explanation: 'TF-IDF gives higher weight to rare but important terms.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'language-models',
      title: 'Language Models and N-grams',
      description: 'Learn how probabilistic language models work using n-grams and Markov chains.',
      icon: '🔢',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'What is a Language Model? (13 min)',
          'N-gram Models Explained (20 min)',
          'Limitations of N-gram Models (12 min)'
        ],
        articles: [
          'Intro to N-gram Models',
          'Markov Chains in NLP'
        ],
        exercises: [
          'Generate bigrams and trigrams for a sentence',
          'Calculate probability of a word sequence using an n-gram model',
          'Explain how Markov chains are used in NLP'
        ]
      },
      quiz: {
        id: 'language-models-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What does a bigram represent?',
            options: ['A single word', 'Three words in sequence', 'Two consecutive words', 'A word and a number'],
            correctAnswer: 2,
            explanation: 'A bigram is a pair of consecutive words.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'nlp-with-python',
      title: 'NLP with Python Libraries',
      description: 'Hands-on with NLTK, spaCy, and TextBlob for practical NLP tasks.',
      icon: '🐍',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'NLP using NLTK – Tokenization, POS tagging (20 min)',
          'spaCy Tutorial for Beginners (25 min)',
          'Sentiment Analysis with TextBlob (15 min)'
        ],
        articles: [
          'NLTK vs spaCy – Which to Choose?',
          'TextBlob Quickstart Guide',
          'Common NLP Tasks with Python'
        ],
        exercises: [
          'Perform POS tagging with spaCy',
          'Do sentiment analysis on a review',
          'Extract named entities using NLTK'
        ]
      },
      quiz: {
        id: 'nlp-python-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which library is best known for deep linguistic features?',
            options: ['NLTK', 'TextBlob', 'spaCy', 'Scikit-learn'],
            correctAnswer: 2,
            explanation: 'spaCy is optimized for fast and efficient NLP pipelines with advanced features.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'text-classification',
      title: 'Text Classification and Sentiment Analysis',
      description: 'Build models to classify text and analyze sentiment.',
      icon: '🔍',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Intro to Text Classification (15 min)',
          'Building a Sentiment Classifier in Python (20 min)',
          'Confusion Matrix & Evaluation (12 min)'
        ],
        articles: [
          'Text Classification Pipeline',
          'Sentiment Analysis Datasets and Benchmarks'
        ],
        exercises: [
          'Build a spam detector using Naive Bayes',
          'Train a sentiment classifier on IMDB data',
          'Evaluate model accuracy and precision'
        ]
      },
      quiz: {
        id: 'text-classification-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which algorithm is commonly used for text classification?',
            options: ['Linear Regression', 'Naive Bayes', 'K-Means', 'PCA'],
            correctAnswer: 1,
            explanation: 'Naive Bayes is efficient for high-dimensional text classification.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'seq2seq-and-translation',
      title: 'Seq2Seq Models and Machine Translation',
      description: 'Understand how encoder-decoder models work for tasks like translation and summarization.',
      icon: '🌐',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'How Seq2Seq Works (15 min)',
          'Machine Translation with Encoder-Decoder (20 min)',
          'Real-time Language Translation (10 min)'
        ],
        articles: [
          'Seq2Seq Models – Illustrated',
          'Translation Systems – Google, OpenNMT, etc.'
        ],
        exercises: [
          'Train a basic encoder-decoder model using Keras',
          'Translate short sentences from English to French',
          'Visualize attention mechanism (optional)'
        ]
      },
      quiz: {
        id: 'seq2seq-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What is the purpose of the encoder in Seq2Seq?',
            options: ['To predict the output', 'To classify words', 'To compress input into context', 'To remove stopwords'],
            correctAnswer: 2,
            explanation: 'The encoder converts the input into a context vector.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'transformers-and-bert',
      title: 'Transformers and BERT',
      description: 'Explore how transformer models like BERT and GPT revolutionized NLP.',
      icon: '⚡',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'What is a Transformer in NLP? (20 min)',
          'BERT vs GPT – Key Differences (15 min)',
          'Using Hugging Face Transformers (25 min)'
        ],
        articles: [
          'The Illustrated Transformer',
          'Beginner’s Guide to BERT',
          'Intro to Hugging Face Transformers'
        ],
        exercises: [
          'Use BERT to classify text using Hugging Face',
          'Fine-tune a transformer model on custom text',
          'Compare BERT with traditional methods'
        ]
      },
      quiz: {
        id: 'transformers-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What is the main innovation of the Transformer model?',
            options: ['Recurrent layers', 'Tokenization', 'Attention mechanism', 'Convolution layers'],
            correctAnswer: 2,
            explanation: 'Transformers rely heavily on the self-attention mechanism.'
          }
        ]
      },
      completed: false,
      unlocked: false
    }
  ]
},
'computer-vision-beginner-track': {
  id: 'computer-vision-beginner-track',
  title: 'Computer Vision Beginner Track',
  description: 'Explore how machines understand and interpret visual data from the world using computer vision',
  totalDuration: '8 weeks',
  difficulty: 'Beginner',
  modules: [
    {
      id: 'intro-to-computer-vision',
      title: 'Introduction to Computer Vision',
      description: 'Understand what computer vision is and where it is used',
      icon: '📸',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'What is Computer Vision? (10 min)',
          'Applications of Computer Vision (15 min)',
          'History and Evolution of Computer Vision (12 min)'
        ],
        articles: [
          'Intro to Computer Vision – IBM Developer',
          '10 Real-World Applications of Computer Vision',
          'How Self-Driving Cars Use Computer Vision'
        ],
        exercises: [
          'List 5 applications of computer vision in daily life',
          'Explain how computer vision differs from image processing',
          'Identify input/output in a typical vision pipeline'
        ]
      },
      quiz: {
        id: 'cv-intro-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What is the primary goal of computer vision?',
            options: [
              'Store images efficiently',
              'Improve camera quality',
              'Enable machines to interpret visual data',
              'Replace human vision entirely'
            ],
            correctAnswer: 2,
            explanation: 'Computer vision allows machines to "see" and understand visual input like images or videos.'
          },
          {
            id: 'q2',
            question: 'Which of the following is a real-world application of computer vision?',
            options: [
              'Text-to-speech conversion',
              'Face recognition in smartphones',
              'Spelling correction',
              'Chatbot response generation'
            ],
            correctAnswer: 1,
            explanation: 'Face recognition is a classic computer vision task.'
          }
        ]
      },
      completed: false,
      unlocked: true
    },
    {
      id: 'image-processing-basics',
      title: 'Image Processing Basics',
      description: 'Learn how digital images are represented and manipulated',
      icon: '🖼️',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'How Images Work – Pixels and Color Channels (14 min)',
          'Basic Image Operations in OpenCV (15 min)',
          'Noise and Filtering Techniques (12 min)'
        ],
        articles: [
          'Image Representation in Computers – GeeksforGeeks',
          'Smoothing and Blurring Techniques',
          'OpenCV Image Basics Tutorial'
        ],
        exercises: [
          'Write code to convert an image to grayscale',
          'Apply Gaussian blur to an image',
          'Explain the role of color channels (RGB)'
        ]
      },
      quiz: {
        id: 'image-processing-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What does a grayscale image contain?',
            options: ['Red pixels only', 'Multiple color layers', 'One intensity value per pixel', 'Alpha transparency only'],
            correctAnswer: 2,
            explanation: 'Grayscale images have a single intensity value per pixel.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'image-classification',
      title: 'Image Classification',
      description: 'Train models to identify and classify images into categories',
      icon: '🏷️',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Image Classification with CNNs (18 min)',
          'Cats vs Dogs Classifier – Example (20 min)',
          'Transfer Learning for Classification (15 min)'
        ],
        articles: [
          'What is Image Classification?',
          'Building a Classifier using Keras',
          'Exploring Pre-trained CNNs (ResNet, MobileNet)'
        ],
        exercises: [
          'Build a basic image classifier using TensorFlow or PyTorch',
          'Train a model on CIFAR-10 or MNIST dataset',
          'Explain what softmax does in the final layer'
        ]
      },
      quiz: {
        id: 'classification-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What is the output of an image classification model?',
            options: ['Coordinates of objects', 'A segmentation mask', 'A predicted class label', 'A 3D point cloud'],
            correctAnswer: 2,
            explanation: 'Classification outputs a class label indicating the category the image belongs to.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'object-detection',
      title: 'Object Detection',
      description: 'Detect and locate multiple objects in an image or video',
      icon: '🎯',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'What is Object Detection? (10 min)',
          'YOLO vs SSD vs Faster R-CNN (18 min)',
          'Object Detection with OpenCV (12 min)'
        ],
        articles: [
          'Understanding Object Detection',
          'YOLO Explained Simply',
          'Implementing Object Detection in Python'
        ],
        exercises: [
          'Label objects in an image with bounding boxes',
          'Use a pre-trained model to detect faces',
          'Differentiate between detection and classification'
        ]
      },
      quiz: {
        id: 'object-detection-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What does object detection return?',
            options: ['Only labels', 'Labels and bounding boxes', 'Image resolution', 'Background subtraction'],
            correctAnswer: 1,
            explanation: 'Object detection identifies objects and localizes them using bounding boxes.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'image-segmentation',
      title: 'Image Segmentation',
      description: 'Understand pixel-level classification of images using segmentation',
      icon: '🧩',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Semantic vs Instance Segmentation (10 min)',
          'UNet Architecture Overview (14 min)',
          'Segmentation in Self-Driving Cars (12 min)'
        ],
        articles: [
          'Image Segmentation Explained',
          'Using UNet for Semantic Segmentation',
          'Pixel-wise Prediction in Deep Learning'
        ],
        exercises: [
          'Visualize segmented images using masks',
          'Apply thresholding for basic segmentation',
          'Compare semantic and instance segmentation'
        ]
      },
      quiz: {
        id: 'segmentation-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What does semantic segmentation do?',
            options: ['Detect objects only', 'Classify entire image', 'Classify each pixel into a category', 'Remove noise from image'],
            correctAnswer: 2,
            explanation: 'Semantic segmentation assigns a class to each pixel in an image.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'face-recognition-and-tracking',
      title: 'Face Recognition and Tracking',
      description: 'Explore facial feature detection, recognition, and live tracking',
      icon: '😊',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'How Face Recognition Works (10 min)',
          'Live Face Detection with OpenCV (15 min)',
          'Face Recognition with Dlib (12 min)'
        ],
        articles: [
          'Facial Landmarks and FaceNet',
          'Building a Face Recognizer',
          'Ethical Concerns of Face Surveillance'
        ],
        exercises: [
          'Detect faces in webcam stream',
          'Recognize a known face from a dataset',
          'Discuss privacy issues of face tech'
        ]
      },
      quiz: {
        id: 'face-recognition-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which library is widely used for real-time face detection?',
            options: ['Pandas', 'TensorFlow', 'OpenCV', 'NumPy'],
            correctAnswer: 2,
            explanation: 'OpenCV has built-in tools for face detection using Haar Cascades or DNNs.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'deep-learning-in-computer-vision',
      title: 'Deep Learning in Computer Vision',
      description: 'Use neural networks and CNNs to solve vision tasks',
      icon: '🧠',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'CNNs for Computer Vision (15 min)',
          'How a CNN Works Visually (12 min)',
          'Training Your First CNN (20 min)'
        ],
        articles: [
          'Understanding Convolution Layers',
          'Deep Learning in OpenCV and PyTorch',
          'Transfer Learning for Vision Tasks'
        ],
        exercises: [
          'Visualize CNN feature maps',
          'Build and train a simple CNN',
          'Use pretrained models like VGG16'
        ]
      },
      quiz: {
        id: 'cnn-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What is the primary role of a convolution layer?',
            options: [
              'Perform pooling',
              'Add non-linearity',
              'Extract spatial features from input',
              'Reduce resolution of image'
            ],
            correctAnswer: 2,
            explanation: 'Convolutions extract features like edges and shapes from images.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'projects-and-deployment',
      title: 'Projects and Deployment',
      description: 'Work on real-world projects and deploy vision models to production',
      icon: '🚀',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Deploying Vision Models with Flask (18 min)',
          'Computer Vision Projects Walkthrough (20 min)',
          'Deploy to Cloud with Streamlit (15 min)'
        ],
        articles: [
          'Packaging Vision Projects for Deployment',
          'Using Streamlit for Real-Time Apps',
          'Best Practices in Model Optimization'
        ],
        exercises: [
          'Build a face detection web app using Flask or Streamlit',
          'Host a vision model using Gradio',
          'Document your CV project on GitHub'
        ]
      },
      quiz: {
        id: 'deployment-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which tool is useful for deploying ML models in a simple web interface?',
            options: ['Scikit-learn', 'Jupyter', 'Gradio', 'Matplotlib'],
            correctAnswer: 2,
            explanation: 'Gradio helps you build easy-to-use frontends for ML models.'
          }
        ]
      },
      completed: false,
      unlocked: false
    }
  ]
},
'ethical-hacking-beginner-track': {
  id: 'ethical-hacking-beginner-track',
  title: 'Ethical Hacking Beginner Track',
  description: 'Learn the fundamentals of ethical hacking, penetration testing, and cybersecurity best practices',
  totalDuration: '8 weeks',
  difficulty: 'Beginner',
  modules: [
    {
      id: 'intro-to-ethical-hacking',
      title: 'Introduction to Ethical Hacking',
      description: 'Understand what ethical hacking is and the different types of hackers',
      icon: '🛡️',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'What is Ethical Hacking? (15 min)',
          'Types of Hackers (White Hat, Black Hat, Grey Hat) – (10 min)'
        ],
        articles: [
          'Ethical Hacking Overview – GeeksForGeeks',
          'Why Ethical Hacking Matters – IBM Security'
        ],
        exercises: [
          'Differentiate between white, black, and grey hat hackers',
          'List five ethical hacking principles'
        ]
      },
      quiz: {
        id: 'eh-intro-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which of the following best describes a white-hat hacker?',
            options: [
              'A hacker who breaks into systems for malicious purposes',
              'A hacker hired to find security vulnerabilities legally',
              'A government surveillance agent',
              'An automated script for security testing'
            ],
            correctAnswer: 1,
            explanation: 'White-hat hackers are professionals who ethically test security systems.'
          }
        ]
      },
      completed: false,
      unlocked: true
    },
    {
      id: 'networking-basics-for-hackers',
      title: 'Networking Basics for Hackers',
      description: 'Learn basic networking concepts essential for penetration testing',
      icon: '🌐',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Computer Networks Explained for Hackers (20 min)',
          'IP, TCP, UDP, and Ports Basics (15 min)'
        ],
        articles: [
          'Networking Basics for Hackers – Cybrary',
          'Common Network Protocols – Guru99'
        ],
        exercises: [
          'Identify open ports using online port scanners',
          'Map a network using basic commands like ipconfig and traceroute'
        ]
      },
      quiz: {
        id: 'network-basics-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What is the primary function of the TCP protocol?',
            options: [
              'Sending email over a network',
              'Routing IP addresses',
              'Providing reliable, ordered, and error-checked delivery of data',
              'Encrypting web traffic'
            ],
            correctAnswer: 2,
            explanation: 'TCP ensures reliable and ordered communication.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'footprinting-and-reconnaissance',
      title: 'Footprinting and Reconnaissance',
      description: 'Gather information about a target system or network',
      icon: '🔍',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'What is Footprinting in Ethical Hacking? (15 min)',
          'Active vs Passive Reconnaissance – Explained (12 min)'
        ],
        articles: [
          'Footprinting Techniques – Simplilearn',
          'Top Reconnaissance Tools'
        ],
        exercises: [
          'Use whois lookup to gather domain information',
          'Perform passive information gathering using public sources'
        ]
      },
      quiz: {
        id: 'recon-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which of the following is a passive reconnaissance technique?',
            options: [
              'Scanning open ports',
              'Using Nmap',
              'Searching Google for leaked credentials',
              'Sending phishing emails'
            ],
            correctAnswer: 2,
            explanation: 'Searching online sources is passive; scanning is active.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'scanning-and-enumeration',
      title: 'Scanning and Enumeration',
      description: 'Identify live systems, ports, and services on a network',
      icon: '📡',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Network Scanning with Nmap – Demo (20 min)',
          'Enumeration Techniques in Penetration Testing (15 min)'
        ],
        articles: [
          'What is Enumeration in Hacking?',
          'Top Scanning Tools – Nmap, Netcat, Angry IP Scanner'
        ],
        exercises: [
          'Use Nmap to perform a basic network scan',
          'Enumerate open ports and running services on localhost'
        ]
      },
      quiz: {
        id: 'scanning-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What tool is commonly used for network scanning?',
            options: ['Wireshark', 'Metasploit', 'Nmap', 'Burp Suite'],
            correctAnswer: 2,
            explanation: 'Nmap is widely used for scanning networks and ports.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'vulnerability-analysis',
      title: 'Vulnerability Analysis',
      description: 'Identify and analyze known vulnerabilities in systems',
      icon: '⚠️',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Vulnerability Assessment Basics (14 min)',
          'Using Nessus and OpenVAS (18 min)'
        ],
        articles: [
          'Common Vulnerability Enumeration (CVE)',
          'How to Perform Vulnerability Scans'
        ],
        exercises: [
          'Use Nessus/OpenVAS to scan your machine',
          'Research top 3 vulnerabilities in CVE database'
        ]
      },
      quiz: {
        id: 'vuln-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which database contains publicly disclosed vulnerabilities?',
            options: ['Nmap DB', 'DNSSEC', 'CVE', 'HTTPS'],
            correctAnswer: 2,
            explanation: 'CVE (Common Vulnerabilities and Exposures) is the standard.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'exploitation-basics',
      title: 'Exploitation Basics',
      description: 'Learn how hackers exploit vulnerabilities to gain access',
      icon: '💣',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'How Exploits Work – Buffer Overflow Example (15 min)',
          'Metasploit Demo for Beginners (20 min)'
        ],
        articles: [
          'Introduction to Exploits – Cybrary',
          'Buffer Overflow Basics'
        ],
        exercises: [
          'Set up a test environment using Metasploitable',
          'Perform a basic exploit using Metasploit'
        ]
      },
      quiz: {
        id: 'exploit-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What is the Metasploit Framework used for?',
            options: ['Firewall setup', 'Intrusion detection', 'Exploitation and payload delivery', 'Antivirus scanning'],
            correctAnswer: 2,
            explanation: 'Metasploit helps automate the exploitation of vulnerabilities.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'web-application-hacking',
      title: 'Web Application Hacking',
      description: 'Test websites for common vulnerabilities like XSS, SQLi, CSRF',
      icon: '🌐',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'OWASP Top 10 Explained (15 min)',
          'SQL Injection Demo (20 min)',
          'Cross-site Scripting (XSS) Basics (10 min)'
        ],
        articles: [
          'Web Application Vulnerabilities – OWASP Top 10',
          'What is SQL Injection? – PortSwigger'
        ],
        exercises: [
          'Use DVWA (Damn Vulnerable Web App) to test a SQL injection',
          'Write and detect a reflected XSS payload'
        ]
      },
      quiz: {
        id: 'web-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which vulnerability allows attackers to inject malicious scripts into websites?',
            options: ['SQL Injection', 'CSRF', 'XSS', 'Buffer Overflow'],
            correctAnswer: 2,
            explanation: 'XSS (Cross-site scripting) is used to inject scripts.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'reporting-and-defense',
      title: 'Reporting and Defense Strategies',
      description: 'Learn how to document findings and recommend defense measures',
      icon: '📄',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'How to Write a Vulnerability Report (10 min)',
          'Top 10 Defense Strategies (15 min)'
        ],
        articles: [
          'Creating Effective Penetration Test Reports',
          'Cybersecurity Defense Best Practices'
        ],
        exercises: [
          'Write a sample vulnerability report based on a test scan',
          'List 5 measures to secure a web application'
        ]
      },
      quiz: {
        id: 'defense-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which of the following is a good defense strategy?',
            options: ['Leaving unused ports open', 'Hardcoding credentials', 'Using input validation', 'Disabling logging'],
            correctAnswer: 2,
            explanation: 'Input validation helps prevent many injection-based attacks.'
          }
        ]
      },
      completed: false,
      unlocked: false
    }
  ]
},
'embedded-systems-beginner-track': {
  id: 'embedded-systems-beginner-track',
  title: 'Embedded Systems Beginner Track',
  description: 'Explore the fundamentals of embedded systems, microcontrollers, and real-time applications',
  totalDuration: '8 weeks',
  difficulty: 'Beginner',
  modules: [
    {
      id: 'intro-to-embedded-systems',
      title: 'Introduction to Embedded Systems',
      description: 'Understand what embedded systems are and their applications in daily life',
      icon: '🔌',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'What is an Embedded System? (12 min)',
          'Applications of Embedded Systems (18 min)',
          'How Embedded Systems Differ from General Computers (15 min)'
        ],
        articles: [
          'Introduction to Embedded Systems – GeeksforGeeks',
          'Embedded Systems Basics – Circuit Digest',
          'Examples of Embedded Systems in Real Life'
        ],
        exercises: [
          'List five common devices that use embedded systems',
          'Compare embedded systems with general-purpose computers',
          'Write a one-paragraph explanation of why real-time operation is important'
        ]
      },
      quiz: {
        id: 'intro-embedded-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What is an embedded system?',
            options: [
              'A general-purpose desktop computer',
              'A mobile app',
              'A dedicated system designed to perform one or a few tasks within a device',
              'A server in the cloud'
            ],
            correctAnswer: 2,
            explanation: 'Embedded systems are dedicated computing systems designed for specific control functions within a device.'
          },
          {
            id: 'q2',
            question: 'Which of these is a real-world example of an embedded system?',
            options: ['Washing machine controller', 'Web browser', 'Email server', 'Game engine'],
            correctAnswer: 0,
            explanation: 'A washing machine controller is a dedicated embedded system designed to automate a specific process.'
          }
        ]
      },
      completed: false,
      unlocked: true
    },
    {
      id: 'microcontrollers-basics',
      title: 'Microcontrollers Basics',
      description: 'Learn how microcontrollers work, including their architecture and how they’re programmed',
      icon: '🧠',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Microcontroller vs Microprocessor (10 min)',
          'Inside a Microcontroller: Architecture Explained (20 min)',
          'Intro to Arduino and Embedded C (25 min)'
        ],
        articles: [
          'What is a Microcontroller? – ElectronicsHub',
          'Basic Architecture of Microcontrollers',
          'Common Microcontroller Platforms: Arduino, STM32, PIC'
        ],
        exercises: [
          'Label a microcontroller block diagram',
          'Compare a microcontroller with a CPU',
          'List three use-cases of Arduino boards'
        ]
      },
      quiz: {
        id: 'microcontrollers-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which one is a microcontroller board?',
            options: ['Arduino Uno', 'Raspberry Pi', 'Intel i5', 'NVIDIA GPU'],
            correctAnswer: 0,
            explanation: 'Arduino Uno is a popular open-source microcontroller development board.'
          },
          {
            id: 'q2',
            question: 'What component does a microcontroller typically include?',
            options: ['RAM, CPU, I/O ports, timers, and flash memory', 'GPU and SSD', 'Hard disk and HDMI', 'Wi-Fi router and display'],
            correctAnswer: 0,
            explanation: 'Microcontrollers integrate multiple components including RAM, CPU, I/O ports, timers, and flash memory.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'programming-embedded-c',
      title: 'Programming in Embedded C',
      description: 'Start writing embedded software using C and understand memory and peripheral interfacing',
      icon: '💻',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Embedded C Programming Basics (15 min)',
          'How to Blink an LED with C (12 min)',
          'Memory-Mapped I/O in C (20 min)'
        ],
        articles: [
          'Introduction to Embedded C – TutorialsPoint',
          'Writing Your First Embedded C Program',
          'Understanding Registers and Bit Manipulation'
        ],
        exercises: [
          'Write a C program to blink an LED',
          'Implement a delay function using a timer register',
          'Explain volatile keyword usage in embedded C'
        ]
      },
      quiz: {
        id: 'embedded-c-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Why is the `volatile` keyword used in embedded C?',
            options: [
              'To optimize code',
              'To prevent the compiler from optimizing accesses to the variable',
              'To declare a constant',
              'To define a pointer'
            ],
            correctAnswer: 1,
            explanation: 'Volatile tells the compiler the variable may change at any time and prevents optimization.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'sensors-and-actuators',
      title: 'Sensors and Actuators',
      description: 'Learn how embedded systems interact with the physical world using sensors and actuators',
      icon: '📟',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Types of Sensors in Embedded Systems (18 min)',
          'Using Temperature and IR Sensors (22 min)',
          'Basics of Actuators: Motors, Relays, Servos (20 min)'
        ],
        articles: [
          'Understanding Sensors – ElectronicsForYou',
          'Introduction to Actuators',
          'Sensor Interfacing Techniques'
        ],
        exercises: [
          'List five types of sensors with applications',
          'Explain the working of a servo motor',
          'Design a simple sensor-actuator loop diagram'
        ]
      },
      quiz: {
        id: 'sensors-actuators-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which of these is an output device?',
            options: ['Temperature sensor', 'Light sensor', 'Servo motor', 'Microphone'],
            correctAnswer: 2,
            explanation: 'A servo motor is an actuator that produces movement (output).'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'real-time-operating-systems',
      title: 'Real-Time Operating Systems (RTOS)',
      description: 'Understand real-time operating systems and their role in embedded applications',
      icon: '⏱️',
      duration: '1 week',
      difficulty: 'Intermediate',
      resources: {
        videos: [
          'What is RTOS? (10 min)',
          'RTOS Basics and Scheduler (15 min)',
          'RTOS vs Bare Metal (20 min)'
        ],
        articles: [
          'Real-Time Operating System Basics',
          'FreeRTOS Introduction – FreeRTOS.org',
          'RTOS Tasks, Semaphores, and Scheduling'
        ],
        exercises: [
          'Describe preemptive scheduling in RTOS',
          'List key differences between RTOS and traditional OS',
          'Draw a real-time task diagram'
        ]
      },
      quiz: {
        id: 'rtos-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What does an RTOS prioritize?',
            options: ['User Interface', 'Graphics rendering', 'Timely task completion', 'Network latency'],
            correctAnswer: 2,
            explanation: 'RTOS ensures tasks are completed within specified timing constraints.'
          }
        ]
      },
      completed: false,
      unlocked: false
    }
  ]
},
'network-engineering': {
  id: 'network-engineering',
  title: 'Network Engineering',
  description: 'Learn the fundamentals of computer networking, protocols, and infrastructure setup for reliable communication systems',
  totalDuration: '10 weeks',
  difficulty: 'Intermediate',
  modules: [
    {
      id: 'network-basics',
      title: 'Networking Fundamentals',
      description: 'Understand the basic concepts and components of networking',
      icon: '🌐',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Introduction to Networking Concepts (40 min)',
          'Network Devices: Routers, Switches, Hubs (30 min)',
          'Types of Networks: LAN, WAN, MAN (20 min)'
        ],
        articles: [
          'OSI and TCP/IP Models Explained',
          'Difference Between LAN and WAN',
          'Common Network Terminologies and Acronyms'
        ],
        exercises: [
          'Label the Layers of the OSI Model',
          'Classify Networking Devices by Function',
          'Draw a Basic Home Network Topology'
        ]
      },
      quiz: {
        id: 'network-basics-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which layer of the OSI model is responsible for routing?',
            options: ['Transport', 'Network', 'Data Link', 'Session'],
            correctAnswer: 1,
            explanation: 'The Network layer is responsible for routing packets across networks.'
          },
          {
            id: 'q2',
            question: 'What device operates at Layer 2 of the OSI model?',
            options: ['Router', 'Switch', 'Hub', 'Firewall'],
            correctAnswer: 1,
            explanation: 'Switches operate at the Data Link Layer (Layer 2) and forward data based on MAC addresses.'
          }
        ]
      },
      completed: false,
      unlocked: true
    },
    {
      id: 'ip-addressing',
      title: 'IP Addressing and Subnetting',
      description: 'Master IP addressing, subnet masks, and CIDR',
      icon: '🧮',
      duration: '2 weeks',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Understanding IPv4 and IPv6 (35 min)',
          'Subnetting Made Simple (45 min)',
          'CIDR Notation and Subnet Calculations (30 min)'
        ],
        articles: [
          'How to Subnet a Network Step-by-Step',
          'CIDR vs Subnet Mask – What’s the Difference?',
          'Private vs Public IP Addresses'
        ],
        exercises: [
          'Convert IP to Binary and Back',
          'Calculate Subnets for a Given Network',
          'Design an IP Address Plan for a Small Office'
        ]
      },
      quiz: {
        id: 'ip-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which of the following is a valid IPv4 address?',
            options: ['256.100.50.25', '192.168.1.1', '300.1.1.1', '123.456.78.90'],
            correctAnswer: 1,
            explanation: '192.168.1.1 is a valid IPv4 address. The others are either out of range or invalid.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'routing-switching',
      title: 'Routing and Switching',
      description: 'Explore how data moves through a network using routing and switching',
      icon: '🛣️',
      duration: '2 weeks',
      difficulty: 'Intermediate',
      resources: {
        videos: [
          'Static vs Dynamic Routing (40 min)',
          'Routing Protocols: RIP, OSPF, EIGRP (50 min)',
          'VLANs and Inter-VLAN Routing (45 min)'
        ],
        articles: [
          'Understanding Routing Tables and Path Selection',
          'Layer 2 vs Layer 3 Switching',
          'Configuring VLANs and Trunks'
        ],
        exercises: [
          'Design a VLAN-based Network',
          'Simulate OSPF Routing in Packet Tracer',
          'Troubleshoot a Routing Issue with Traceroute'
        ]
      },
      quiz: {
        id: 'routing-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which protocol is commonly used for dynamic routing?',
            options: ['FTP', 'RIP', 'ARP', 'NAT'],
            correctAnswer: 1,
            explanation: 'RIP (Routing Information Protocol) is a dynamic routing protocol.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'network-security',
      title: 'Network Security Basics',
      description: 'Learn essential practices to secure network infrastructure',
      icon: '🔐',
      duration: '2 weeks',
      difficulty: 'Intermediate',
      resources: {
        videos: [
          'Introduction to Firewalls and ACLs (40 min)',
          'Types of Network Attacks and Mitigation (45 min)',
          'VPNs and Secure Remote Access (35 min)'
        ],
        articles: [
          'Understanding Network Threats and Vulnerabilities',
          'Best Practices for Securing Small Networks',
          'Firewall Rules and Access Control Lists Explained'
        ],
        exercises: [
          'Configure a Basic Firewall Rule Set',
          'Analyze a Simulated DDoS Attack',
          'Set Up a VPN with Authentication'
        ]
      },
      quiz: {
        id: 'security-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What is the main purpose of a firewall?',
            options: ['Encrypt data', 'Route traffic', 'Filter traffic', 'Assign IP addresses'],
            correctAnswer: 2,
            explanation: 'A firewall filters incoming and outgoing traffic based on security rules.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'network-tools',
      title: 'Network Tools and Troubleshooting',
      description: 'Use essential tools to test, monitor, and troubleshoot network issues',
      icon: '🛠️',
      duration: '1 week',
      difficulty: 'Intermediate',
      resources: {
        videos: [
          'Ping, Traceroute, and Nslookup Explained (30 min)',
          'Wireshark Packet Analysis Basics (40 min)',
          'Network Monitoring Tools (35 min)'
        ],
        articles: [
          'Common Network Troubleshooting Techniques',
          'Top Free Network Diagnostic Tools',
          'Understanding Packet Capture and Analysis'
        ],
        exercises: [
          'Analyze Network Traffic Using Wireshark',
          'Use Ping and Traceroute to Diagnose Network Issues',
          'Document and Troubleshoot a Simulated Network Outage'
        ]
      },
      quiz: {
        id: 'tools-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which tool is used to determine the route taken by packets?',
            options: ['Ping', 'Traceroute', 'IPconfig', 'Telnet'],
            correctAnswer: 1,
            explanation: 'Traceroute shows the path packets take to reach a destination.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'network-project',
      title: 'Capstone Project',
      description: 'Apply your skills in a real-world networking scenario',
      icon: '🏁',
      duration: '2 weeks',
      difficulty: 'Intermediate',
      resources: {
        videos: [
          'Planning and Documenting Network Infrastructure (20 min)',
          'Case Study: Building a Small Business Network (30 min)'
        ],
        articles: [
          'Checklist for Network Design Projects',
          'Documentation Templates for Network Engineers'
        ],
        exercises: [
          'Design and Simulate a Complete Office Network',
          'Configure IPs, VLANs, Routing, and Firewall Rules',
          'Submit a Network Documentation Report'
        ]
      },
      quiz: {
        id: 'capstone-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What should a good network documentation include?',
            options: ['IP Schemes only', 'Just the topology diagram', 'All configurations, topology, and IPs', 'Only hardware details'],
            correctAnswer: 2,
            explanation: 'Complete network documentation includes topology, IP plans, configurations, and security settings.'
          }
        ]
      },
      completed: false,
      unlocked: false
    }
  ]
},
'database-administration': {
  id: 'database-administration',
  title: 'Database Administration',
  description: 'Learn to manage, secure, and optimize databases for high availability and performance',
  totalDuration: '10 weeks',
  difficulty: 'Intermediate',
  modules: [
    {
      id: 'db-intro',
      title: 'Introduction to Databases',
      description: 'Understand the core concepts of databases and DBMS',
      icon: '📚',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'What is a Database? Types and Examples (30 min)',
          'DBMS vs RDBMS: Key Differences (20 min)',
          'Database Architecture Overview (40 min)'
        ],
        articles: [
          'Introduction to Relational and Non-relational Databases',
          'The Role of a Database Administrator (DBA)',
          'Popular Database Systems: MySQL, PostgreSQL, MongoDB'
        ],
        exercises: [
          'Compare Relational vs NoSQL Databases',
          'Identify Components in a DBMS Diagram',
          'Explore a Sample Database with SQL'
        ]
      },
      quiz: {
        id: 'db-intro-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which of the following is a relational database?',
            options: ['MongoDB', 'MySQL', 'Redis', 'Neo4j'],
            correctAnswer: 1,
            explanation: 'MySQL is a widely used relational database management system (RDBMS).'
          }
        ]
      },
      completed: false,
      unlocked: true
    },
    {
      id: 'sql-commands',
      title: 'SQL and Query Management',
      description: 'Master SQL for database querying and manipulation',
      icon: '💾',
      duration: '2 weeks',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Basic SQL Queries: SELECT, INSERT, UPDATE, DELETE (45 min)',
          'Joins and Subqueries Explained (50 min)',
          'Advanced SQL Functions and Indexing (40 min)'
        ],
        articles: [
          'SQL Best Practices for Beginners',
          'How Indexes Improve Performance',
          'Working with Views and Stored Procedures'
        ],
        exercises: [
          'Write Complex SQL Joins on Sample Tables',
          'Create Indexes and Measure Query Speed',
          'Use Stored Procedures for Batch Updates'
        ]
      },
      quiz: {
        id: 'sql-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What is the result of a LEFT JOIN?',
            options: ['All rows from both tables', 'Only matching rows', 'All rows from the left table and matched rows from the right', 'All rows from the right table'],
            correctAnswer: 2,
            explanation: 'A LEFT JOIN returns all rows from the left table and matching rows from the right table.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'db-design',
      title: 'Database Design and Normalization',
      description: 'Design scalable databases using normalization techniques',
      icon: '🧠',
      duration: '2 weeks',
      difficulty: 'Intermediate',
      resources: {
        videos: [
          'Database Schema Design Principles (40 min)',
          'Normalization: 1NF to 3NF Explained (50 min)',
          'ER Diagrams and Relationships (30 min)'
        ],
        articles: [
          'Normalization vs Denormalization',
          'Common Mistakes in Database Design',
          'Primary Keys, Foreign Keys, and Constraints'
        ],
        exercises: [
          'Normalize a Raw Dataset to 3NF',
          'Draw an ER Diagram from Requirements',
          'Design a Database Schema for an Online Store'
        ]
      },
      quiz: {
        id: 'design-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which normal form eliminates partial dependencies?',
            options: ['1NF', '2NF', '3NF', 'BCNF'],
            correctAnswer: 1,
            explanation: '2NF removes partial dependencies from the database schema.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'db-security',
      title: 'Database Security and Backup',
      description: 'Protect your database with access controls and backup strategies',
      icon: '🔒',
      duration: '2 weeks',
      difficulty: 'Intermediate',
      resources: {
        videos: [
          'User Roles and Permissions in SQL (30 min)',
          'Backup and Recovery Best Practices (45 min)',
          'Encrypting Data at Rest and In Transit (40 min)'
        ],
        articles: [
          'SQL Injection: What It Is and How to Prevent It',
          'Automating Database Backups',
          'Disaster Recovery Planning for DBAs'
        ],
        exercises: [
          'Create Role-Based Access for a Sample Database',
          'Implement Backup Scripts for Daily Snapshots',
          'Secure Connections Using SSL'
        ]
      },
      quiz: {
        id: 'security-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What is the best defense against SQL injection?',
            options: ['Data encryption', 'Firewalls', 'Input validation and prepared statements', 'Backups'],
            correctAnswer: 2,
            explanation: 'Prepared statements and input validation help prevent SQL injection attacks.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'performance-monitoring',
      title: 'Performance Tuning and Monitoring',
      description: 'Optimize database performance and monitor for bottlenecks',
      icon: '📈',
      duration: '1 week',
      difficulty: 'Intermediate',
      resources: {
        videos: [
          'Monitoring with Performance Schema and Tools (35 min)',
          'Indexing Strategies and Query Optimization (45 min)',
          'Analyzing Execution Plans (30 min)'
        ],
        articles: [
          'Top 10 Database Performance Tips',
          'Slow Query Logs and Analysis',
          'Memory and Cache Optimization in Databases'
        ],
        exercises: [
          'Optimize Queries Using EXPLAIN',
          'Identify and Resolve a Slow Query Scenario',
          'Tune Memory Settings Based on Workload'
        ]
      },
      quiz: {
        id: 'perf-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which command shows how MySQL will execute a query?',
            options: ['SHOW STATUS', 'EXPLAIN', 'DESCRIBE', 'TRACE'],
            correctAnswer: 1,
            explanation: 'The EXPLAIN statement shows how MySQL executes a SELECT query.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'db-capstone',
      title: 'Capstone Project',
      description: 'Apply your DBA knowledge in a real-world simulation',
      icon: '🚀',
      duration: '2 weeks',
      difficulty: 'Intermediate',
      resources: {
        videos: [
          'Planning a Database Administration Project (20 min)',
          'Sample Walkthrough: E-commerce DB Deployment (30 min)'
        ],
        articles: [
          'Checklist for Database Rollout',
          'Post-Deployment Testing and Maintenance'
        ],
        exercises: [
          'Design, Secure, and Optimize a Database System',
          'Write Full Backup and Recovery Scripts',
          'Create Documentation and Monitoring Dashboard'
        ]
      },
      quiz: {
        id: 'db-capstone-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What’s the most important step before deploying a database system to production?',
            options: ['Running SQL queries', 'Testing backup', 'Testing and documenting thoroughly', 'Creating users'],
            correctAnswer: 2,
            explanation: 'Thorough testing and documentation help ensure a stable production rollout.'
          }
        ]
      },
      completed: false,
      unlocked: false
    }
  ]
},
'software-engineering': {
  id: 'software-engineering',
  title: 'Software Engineering',
  description: 'Understand the principles, methodologies, and tools used in professional software development',
  totalDuration: '10 weeks',
  difficulty: 'Intermediate',
  modules: [
    {
      id: 'software-intro',
      title: 'Introduction to Software Engineering',
      description: 'Learn the basics of software engineering and development life cycles',
      icon: '🧠',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'What is Software Engineering? (30 min)',
          'Software Development Life Cycle Models (40 min)',
          'Agile vs Waterfall (25 min)'
        ],
        articles: [
          'Roles and Responsibilities of a Software Engineer',
          'Overview of SDLC Phases',
          'Principles of Good Software Design'
        ],
        exercises: [
          'Map Out a Software Life Cycle for a Sample Project',
          'Compare Agile and Waterfall for a Use Case',
          'List Real-World Software Failures and Analyze Causes'
        ]
      },
      quiz: {
        id: 'intro-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which SDLC model allows for the most customer feedback during development?',
            options: ['Waterfall', 'V-Model', 'Agile', 'Spiral'],
            correctAnswer: 2,
            explanation: 'Agile allows continuous customer feedback through iterative development cycles.'
          }
        ]
      },
      completed: false,
      unlocked: true
    },
    {
      id: 'requirements-engineering',
      title: 'Requirements Engineering',
      description: 'Learn how to gather, analyze, and document software requirements',
      icon: '📋',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Functional vs Non-functional Requirements (30 min)',
          'Use Cases and User Stories (40 min)',
          'Requirements Validation Techniques (30 min)'
        ],
        articles: [
          'How to Write Effective Requirements',
          'Requirement Gathering Interviews and Workshops',
          'Common Pitfalls in Requirements Engineering'
        ],
        exercises: [
          'Write Use Cases for a Login System',
          'Convert User Needs into Functional Requirements',
          'Identify Non-Functional Requirements in a System'
        ]
      },
      quiz: {
        id: 'requirements-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What is a non-functional requirement?',
            options: ['What the system must do', 'How the system behaves', 'System bugs', 'User preferences'],
            correctAnswer: 1,
            explanation: 'Non-functional requirements describe how a system performs tasks, such as speed or security.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'system-design',
      title: 'System and Software Design',
      description: 'Explore architectural and component-level design principles',
      icon: '🏗️',
      duration: '2 weeks',
      difficulty: 'Intermediate',
      resources: {
        videos: [
          'Software Architecture Patterns (35 min)',
          'UML Diagrams - Class, Sequence, Use Case (45 min)',
          'Designing Scalable Systems (40 min)'
        ],
        articles: [
          'SOLID Principles in Software Design',
          'Layered Architecture and Microservices',
          'Designing for Maintainability and Reusability'
        ],
        exercises: [
          'Create UML Diagrams for a Library System',
          'Design a Layered Architecture for a Web App',
          'Apply SOLID Principles in a Refactor Task'
        ]
      },
      quiz: {
        id: 'design-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What does the “S” in SOLID stand for?',
            options: ['Single Responsibility Principle', 'Software Design', 'Software Reusability', 'Systematic Programming'],
            correctAnswer: 0,
            explanation: 'The "S" stands for the Single Responsibility Principle, where each class should have one responsibility.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'software-quality',
      title: 'Software Quality and Testing',
      description: 'Ensure quality through testing strategies and quality assurance',
      icon: '✅',
      duration: '2 weeks',
      difficulty: 'Intermediate',
      resources: {
        videos: [
          'Types of Testing: Unit, Integration, System (40 min)',
          'Test-Driven Development (TDD) Overview (30 min)',
          'Writing Effective Test Cases (35 min)'
        ],
        articles: [
          'TDD vs BDD Explained',
          'How to Write Good Unit Tests',
          'Quality Assurance Processes in Agile'
        ],
        exercises: [
          'Write Unit Tests for Sample Functions',
          'Design a QA Plan for a Web Application',
          'Apply TDD to Build a Small Module'
        ]
      },
      quiz: {
        id: 'quality-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What is the purpose of unit testing?',
            options: ['Test user interface', 'Test whole system', 'Test individual components', 'Test network speed'],
            correctAnswer: 2,
            explanation: 'Unit testing focuses on testing individual functions or components of the software.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'devops-tools',
      title: 'Version Control and DevOps Basics',
      description: 'Manage code efficiently and automate deployment pipelines',
      icon: '🔧',
      duration: '2 weeks',
      difficulty: 'Intermediate',
      resources: {
        videos: [
          'Introduction to Git and GitHub (45 min)',
          'CI/CD Pipelines Explained (35 min)',
          'Containerization with Docker Basics (40 min)'
        ],
        articles: [
          'Common Git Commands and Workflows',
          'DevOps Lifecycle and Tools Overview',
          'Benefits of Continuous Integration'
        ],
        exercises: [
          'Create a Git Repository and Use Branching',
          'Write a Simple CI/CD Pipeline using GitHub Actions',
          'Dockerize a Sample Node.js Application'
        ]
      },
      quiz: {
        id: 'devops-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which command is used to stage changes in Git?',
            options: ['git commit', 'git init', 'git add', 'git push'],
            correctAnswer: 2,
            explanation: '`git add` stages changes to be committed in a Git repository.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'software-capstone',
      title: 'Capstone Project',
      description: 'Apply your skills in a full-cycle software development simulation',
      icon: '🚀',
      duration: '2 weeks',
      difficulty: 'Intermediate',
      resources: {
        videos: [
          'Software Project Lifecycle Walkthrough (30 min)',
          'Case Study: Agile Software Project (20 min)'
        ],
        articles: [
          'How to Document a Software Project',
          'Software Delivery and Post-Mortem Tips'
        ],
        exercises: [
          'Plan and Execute a Mini Software Project',
          'Document Requirements, Design, Code, Tests',
          'Deploy and Present Final Working App'
        ]
      },
      quiz: {
        id: 'capstone-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What is the final step in a typical SDLC?',
            options: ['Testing', 'Requirement Gathering', 'Maintenance', 'Coding'],
            correctAnswer: 2,
            explanation: 'After deployment, software enters the maintenance phase where bugs are fixed and enhancements are made.'
          }
        ]
      },
      completed: false,
      unlocked: false
    }
  ]
},
'firmware-development': {
  id: 'firmware-development',
  title: 'Firmware Development',
  description: 'Learn how to develop low-level software that directly controls hardware devices',
  totalDuration: '10 weeks',
  difficulty: 'Intermediate',
  modules: [
    {
      id: 'firmware-basics',
      title: 'Introduction to Firmware',
      description: 'Understand what firmware is and how it interacts with hardware',
      icon: '⚙️',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'What is Firmware? Types and Uses (30 min)',
          'Embedded vs Application Software (25 min)',
          'Microcontrollers and Firmware Roles (40 min)'
        ],
        articles: [
          'Differences Between BIOS, Firmware, and Drivers',
          'Common Microcontroller Architectures (ARM, AVR)',
          'Lifecycle of Firmware in a Device'
        ],
        exercises: [
          'Classify Embedded Systems by Use Case',
          'Identify Firmware in Common Devices',
          'Diagram the Role of Firmware in Hardware Systems'
        ]
      },
      quiz: {
        id: 'firmware-intro-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Firmware is typically stored in:',
            options: ['RAM', 'Hard Disk', 'ROM or Flash Memory', 'Cache'],
            correctAnswer: 2,
            explanation: 'Firmware is stored in ROM or Flash so it remains after power is removed.'
          }
        ]
      },
      completed: false,
      unlocked: true
    },
    {
      id: 'embedded-c',
      title: 'Embedded C Programming',
      description: 'Write efficient and low-level code to control hardware',
      icon: '💻',
      duration: '2 weeks',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Getting Started with Embedded C (40 min)',
          'Bitwise Operations and Memory Mapping (30 min)',
          'Using Registers and Direct I/O (35 min)'
        ],
        articles: [
          'Pointers in Embedded C',
          'Memory Segmentation in Microcontrollers',
          'Interrupts and ISRs in C'
        ],
        exercises: [
          'Write LED Blink Code for a Microcontroller',
          'Implement a Timer Using Registers',
          'Use Bit Masking for Peripheral Control'
        ]
      },
      quiz: {
        id: 'embedded-c-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which operator is used for bit masking?',
            options: ['&', '+', '/', '%'],
            correctAnswer: 0,
            explanation: 'The & (AND) operator is commonly used in bit masking operations.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'microcontroller-programming',
      title: 'Microcontroller Programming',
      description: 'Program microcontrollers like AVR, ARM, or PIC',
      icon: '🔌',
      duration: '2 weeks',
      difficulty: 'Intermediate',
      resources: {
        videos: [
          'Understanding GPIO, ADC, PWM (45 min)',
          'Programming STM32 or Arduino Basics (40 min)',
          'Serial Communication: UART, SPI, I2C (35 min)'
        ],
        articles: [
          'Datasheets and Register-Level Programming',
          'Using IDEs like Keil, MPLAB, or PlatformIO',
          'Debugging and Flashing Microcontrollers'
        ],
        exercises: [
          'Blink LED Using PWM',
          'Read Sensor Values Using ADC',
          'Transmit Data Over UART to Serial Monitor'
        ]
      },
      quiz: {
        id: 'microcontroller-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What is the role of ADC in a microcontroller?',
            options: ['Digital Signal Output', 'Analog to Digital Conversion', 'Power Supply Regulation', 'Reset Function'],
            correctAnswer: 1,
            explanation: 'ADC converts analog signals (like voltage) to digital values readable by the microcontroller.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'realtime-systems',
      title: 'Real-Time Systems and RTOS',
      description: 'Implement real-time behaviors using embedded operating systems',
      icon: '⏱️',
      duration: '2 weeks',
      difficulty: 'Intermediate',
      resources: {
        videos: [
          'Introduction to Real-Time Systems (30 min)',
          'FreeRTOS Architecture and Scheduling (45 min)',
          'Task Management and Synchronization (40 min)'
        ],
        articles: [
          'Preemptive vs Cooperative Scheduling',
          'RTOS vs Bare Metal Programming',
          'Using Semaphores and Queues in FreeRTOS'
        ],
        exercises: [
          'Create a Blinking Task with Delay in FreeRTOS',
          'Implement Inter-Task Communication',
          'Use a Mutex to Protect Shared Resources'
        ]
      },
      quiz: {
        id: 'rtos-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which RTOS feature helps avoid race conditions?',
            options: ['Multithreading', 'Scheduler', 'Mutex', 'Queue'],
            correctAnswer: 2,
            explanation: 'A mutex is used to protect shared resources and avoid race conditions.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'firmware-debugging',
      title: 'Firmware Debugging and Testing',
      description: 'Learn techniques to debug and test embedded systems',
      icon: '🧪',
      duration: '1 week',
      difficulty: 'Intermediate',
      resources: {
        videos: [
          'Using Serial Output for Debugging (25 min)',
          'JTAG and SWD Debugging Techniques (40 min)',
          'Unit Testing in Embedded C (30 min)'
        ],
        articles: [
          'Best Practices for Embedded Debugging',
          'Simulators and Emulators for Firmware Testing',
          'Common Bugs in Firmware and How to Fix Them'
        ],
        exercises: [
          'Set Up UART Logging for Your Code',
          'Use a Debugger to Step Through Code',
          'Write Unit Tests for Sensor Input Logic'
        ]
      },
      quiz: {
        id: 'firmware-debug-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which interface is used for low-level debugging in microcontrollers?',
            options: ['UART', 'I2C', 'SPI', 'JTAG'],
            correctAnswer: 3,
            explanation: 'JTAG is a standard interface for low-level debugging and programming.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'firmware-project',
      title: 'Capstone Firmware Project',
      description: 'Design, program, and test a complete firmware application',
      icon: '🚀',
      duration: '2 weeks',
      difficulty: 'Intermediate',
      resources: {
        videos: [
          'Firmware Development Workflow and Integration (30 min)',
          'Case Study: Embedded System Project Build (25 min)'
        ],
        articles: [
          'Checklist for Production-Ready Firmware',
          'Documentation and Safety Standards for Embedded Code'
        ],
        exercises: [
          'Build a Complete Sensor Data Logger',
          'Integrate Inputs, Outputs, and Communication',
          'Document, Test, and Present the Project Build'
        ]
      },
      quiz: {
        id: 'firmware-capstone-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Why is watchdog timer important in firmware?',
            options: ['To save power', 'To manage memory', 'To recover from system hangs', 'To control LEDs'],
            correctAnswer: 2,
            explanation: 'The watchdog timer helps automatically reset the system in case of hangs or software faults.'
          }
        ]
      },
      completed: false,
      unlocked: false
    }
  ]
},
'ai-prompt-engineering-beginner-track': {
  id: 'ai-prompt-engineering-beginner-track',
  title: 'AI Prompt Engineering Beginner Track',
  description: 'Learn how to craft effective prompts to harness the power of AI models like ChatGPT, DALL·E, and more',
  totalDuration: '6 weeks',
  difficulty: 'Beginner',
  modules: [
    {
      id: 'intro-to-prompting',
      title: 'Introduction to Prompt Engineering',
      description: 'Understand what prompt engineering is and why it matters in AI applications',
      icon: '🧠',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'What is Prompt Engineering? (12 min)',
          'How Language Models Interpret Prompts (18 min)'
        ],
        articles: [
          'Prompt Engineering Basics - LearnPrompting.org',
          'How GPT Models Work - OpenAI Blog'
        ],
        exercises: [
          'Write a simple instruction-based prompt',
          'Compare vague vs specific prompts',
          'Describe the purpose of prompt clarity'
        ]
      },
      quiz: {
        id: 'prompting-intro-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Prompt engineering is primarily used to:',
            options: ['Train models', 'Design AI hardware', 'Control model outputs with input phrasing', 'Optimize GPU usage'],
            correctAnswer: 2,
            explanation: 'Prompt engineering shapes how AI models respond by crafting precise inputs.'
          }
        ]
      },
      completed: false,
      unlocked: true
    },
    {
      id: 'types-of-prompts',
      title: 'Types of Prompts',
      description: 'Explore zero-shot, one-shot, few-shot, and chain-of-thought prompting techniques',
      icon: '🛠️',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Prompting Techniques Explained (15 min)',
          'Few-shot vs Zero-shot Prompts (20 min)'
        ],
        articles: [
          'Understanding Prompt Formats',
          'Few-Shot Learning with GPT Models'
        ],
        exercises: [
          'Create one-shot and few-shot examples',
          'Use chain-of-thought to solve a math problem',
          'Test the same prompt with different structures'
        ]
      },
      quiz: {
        id: 'prompt-types-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What distinguishes a few-shot prompt from a zero-shot prompt?',
            options: ['It uses only questions', 'It includes examples of desired behavior', 'It is more vague', 'It requires internet access'],
            correctAnswer: 1,
            explanation: 'Few-shot prompts provide sample inputs/outputs to guide the model.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'prompt-patterns',
      title: 'Prompt Patterns & Best Practices',
      description: 'Learn reusable prompt structures like summarization, rewriting, extraction, etc.',
      icon: '🧩',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Prompt Patterns in Practice (25 min)',
          'Designing Consistent Prompts (20 min)'
        ],
        articles: [
          'OpenAI Prompt Engineering Guide',
          'Common Prompt Templates for Tasks'
        ],
        exercises: [
          'Write prompts for summarization',
          'Design a prompt for text classification',
          'Test rewriting prompts using different tones'
        ]
      },
      quiz: {
        id: 'prompt-patterns-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which is an example of a summarization prompt?',
            options: ['Translate this to French', 'List the steps for...', 'Summarize this article in 3 sentences', 'Write a creative story'],
            correctAnswer: 2,
            explanation: 'Summarization prompts ask the model to condense input into fewer words.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'multimodal-prompts',
      title: 'Prompting for Images, Code & Audio',
      description: 'Use prompts for tools like DALL·E, Whisper, and Code Interpreter',
      icon: '🖼️',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Prompting for DALL·E and Whisper (22 min)',
          'Image Prompt Engineering (15 min)'
        ],
        articles: [
          'DALL·E Prompting Guide',
          'How to Write Prompts for Code Interpreter'
        ],
        exercises: [
          'Write a visual prompt for DALL·E',
          'Use Whisper to transcribe a short audio file',
          'Create a code prompt to generate a calculator'
        ]
      },
      quiz: {
        id: 'multimodal-prompts-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'DALL·E is designed to generate:',
            options: ['Text summaries', 'Speech commands', 'Code snippets', 'Images from text prompts'],
            correctAnswer: 3,
            explanation: 'DALL·E generates images from natural language prompts.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'hands-on-lab',
      title: 'Prompt Engineering Lab',
      description: 'Practice crafting, refining, and evaluating AI prompts with real-world challenges',
      icon: '🧪',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'How to Iterate and Refine Prompts (18 min)',
          'Live Prompt Engineering Session (20 min)'
        ],
        articles: [
          'Prompt Engineering Techniques in Action',
          'Evaluating Prompt Effectiveness'
        ],
        exercises: [
          'Redesign prompts for improved accuracy',
          'Create a prompt to simulate a customer support agent',
          'Test prompts in different temperature settings'
        ]
      },
      quiz: {
        id: 'prompt-lab-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What does a higher temperature setting in a model do?',
            options: ['Reduces token limit', 'Makes output more deterministic', 'Makes output more creative/random', 'Speeds up inference'],
            correctAnswer: 2,
            explanation: 'Higher temperature increases randomness and creativity in outputs.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'prompt-capstone',
      title: 'Capstone Project & Quiz',
      description: 'Build a mini AI app powered by structured prompt engineering',
      icon: '🚀',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Building a Prompt-Based Tool (20 min)',
          'Case Study: Prompt-Driven Assistant (15 min)'
        ],
        articles: [
          'Prompt Engineering Case Studies',
          'Best Practices for Prompt Documentation'
        ],
        exercises: [
          'Build a Resume Review Assistant with Prompts',
          'Design a Prompt for Quiz Generation',
          'Test Prompt Accuracy with Real Users'
        ]
      },
      quiz: {
        id: 'prompt-capstone-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Why is documenting your prompt logic useful?',
            options: ['To speed up hardware', 'To avoid memory leaks', 'To make behavior reproducible and maintainable', 'To increase model size'],
            correctAnswer: 2,
            explanation: 'Well-documented prompts help teams understand and improve system behavior.'
          }
        ]
      },
      completed: false,
      unlocked: false
    }
  ]
},
'chatbot-development-beginner-track': {
  id: 'chatbot-development-beginner-track',
  title: 'Chatbot Development Beginner Track',
  description: 'Learn how to design, develop, and deploy chatbots using rule-based and AI-driven techniques',
  totalDuration: '6 weeks',
  difficulty: 'Beginner',
  modules: [
    {
      id: 'intro-to-chatbots',
      title: 'Introduction to Chatbots',
      description: 'Understand the basics of chatbots, types, and their applications across industries',
      icon: '💬',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'What is a Chatbot? (10 min)',
          'Chatbot Use Cases (15 min)'
        ],
        articles: [
          'Beginner Guide to Chatbots - Chatbot Magazine',
          'History and Evolution of Chatbots'
        ],
        exercises: [
          'List 5 chatbot applications in daily life',
          'Differentiate between rule-based and AI-based bots',
          'Design a flowchart for a basic FAQ bot'
        ]
      },
      quiz: {
        id: 'chatbot-intro-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which of the following is an AI-based chatbot?',
            options: ['ELIZA', 'ChatGPT', 'Simple menu bot', 'IVR system'],
            correctAnswer: 1,
            explanation: 'ChatGPT is a modern AI-driven chatbot using NLP.'
          }
        ]
      },
      completed: false,
      unlocked: true
    },
    {
      id: 'chatbot-platforms-tools',
      title: 'Platforms and Tools for Chatbots',
      description: 'Explore chatbot frameworks like Dialogflow, Rasa, Microsoft Bot Framework, and ChatGPT API',
      icon: '🛠️',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Overview of Popular Chatbot Platforms (18 min)',
          'Intro to Rasa and Dialogflow (15 min)'
        ],
        articles: [
          'Comparison of Chatbot Development Platforms',
          'Getting Started with Rasa'
        ],
        exercises: [
          'Create a Dialogflow bot',
          'Test chatbot responses in sandbox mode',
          'Explore chatbot APIs with Postman'
        ]
      },
      quiz: {
        id: 'chatbot-platforms-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which platform allows local NLP training and customization?',
            options: ['Dialogflow', 'Rasa', 'Microsoft Bot Framework', 'Chatfuel'],
            correctAnswer: 1,
            explanation: 'Rasa is open-source and supports on-premise NLP customization.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'nlp-for-chatbots',
      title: 'Natural Language Processing for Chatbots',
      description: 'Learn how NLP helps chatbots understand and respond in human-like ways',
      icon: '🧠',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'NLP Basics for Chatbots (20 min)',
          'Entity and Intent Recognition (15 min)'
        ],
        articles: [
          'Understanding Intents and Entities',
          'NLU vs NLP in Chatbots'
        ],
        exercises: [
          'Define intents and entities for a restaurant bot',
          'Use spaCy or NLTK for tokenizing a user input',
          'Map user inputs to correct intents manually'
        ]
      },
      quiz: {
        id: 'nlp-chatbots-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What is the purpose of intent recognition?',
            options: ['Detect spelling mistakes', 'Understand user goal', 'Increase chatbot speed', 'Log user data'],
            correctAnswer: 1,
            explanation: 'Intent recognition determines what the user wants from their message.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'chatbot-conversations',
      title: 'Designing Chatbot Conversations',
      description: 'Craft conversational flows, fallback strategies, and context-aware dialogue',
      icon: '🗨️',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Designing Dialog Flows (18 min)',
          'Best Practices for Conversational UX (20 min)'
        ],
        articles: [
          'Chatbot Flow Design Guidelines',
          'Handling Fallbacks Gracefully'
        ],
        exercises: [
          'Create a conversation map for booking a cab',
          'Design fallback messages for wrong inputs',
          'Use context to continue multi-turn dialogues'
        ]
      },
      quiz: {
        id: 'conversation-design-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What’s a fallback response used for?',
            options: ['Welcome user', 'Repeat last response', 'Handle unknown inputs', 'Log user IP'],
            correctAnswer: 2,
            explanation: 'Fallbacks are shown when chatbot doesn’t understand the user input.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'chatbot-integration',
      title: 'Deploying and Integrating Chatbots',
      description: 'Learn how to integrate bots with websites, messaging apps, and APIs',
      icon: '🔗',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Deploying Chatbots on Websites (15 min)',
          'Integrating with WhatsApp and Telegram (20 min)'
        ],
        articles: [
          'Chatbot Integration with APIs',
          'Deployment Checklist for Production Bots'
        ],
        exercises: [
          'Deploy a bot to your website using iframe or script',
          'Test chatbot on Telegram',
          'Connect bot to a weather API'
        ]
      },
      quiz: {
        id: 'chatbot-integration-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which method can be used to integrate a bot with a website?',
            options: ['Socket programming', 'HTML iframe/script', 'SQL database', 'SMTP server'],
            correctAnswer: 1,
            explanation: 'Bots are embedded into websites using iframe/script tags.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'chatbot-capstone',
      title: 'Capstone Project & Quiz',
      description: 'Build and deploy a simple functional chatbot solving a real-world use case',
      icon: '🚀',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Live Chatbot Build Walkthrough (20 min)',
          'Case Study: Helpdesk Bot (15 min)'
        ],
        articles: [
          'End-to-End Chatbot Project Guide',
          'Common Mistakes in Chatbot Deployment'
        ],
        exercises: [
          'Build a chatbot for food ordering',
          'Test chatbot with multiple user scenarios',
          'Deploy it live using Dialogflow or Rasa'
        ]
      },
      quiz: {
        id: 'chatbot-capstone-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Why is user testing important before launching a bot?',
            options: ['To test server load', 'To avoid UI design issues', 'To find logical and conversational flaws', 'To increase traffic'],
            correctAnswer: 2,
            explanation: 'User testing helps ensure the chatbot performs as expected in real use.'
          }
        ]
      },
      completed: false,
      unlocked: false
    }
  ]
},
'chatbot--development-beginner-track': {
  id: 'chatbot-development-beginner-track',
  title: 'Chatbot Development Beginner Track',
  description: 'Learn how to design, develop, and deploy chatbots using rule-based and AI-driven techniques',
  totalDuration: '6 weeks',
  difficulty: 'Beginner',
  modules: [
    {
      id: 'intro-to-chatbots',
      title: 'Introduction to Chatbots',
      description: 'Understand the basics of chatbots, types, and their applications across industries',
      icon: '💬',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'What is a Chatbot? (10 min)',
          'Chatbot Use Cases (15 min)'
        ],
        articles: [
          'Beginner Guide to Chatbots - Chatbot Magazine',
          'History and Evolution of Chatbots'
        ],
        exercises: [
          'List 5 chatbot applications in daily life',
          'Differentiate between rule-based and AI-based bots',
          'Design a flowchart for a basic FAQ bot'
        ]
      },
      quiz: {
        id: 'chatbot-intro-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which of the following is an AI-based chatbot?',
            options: ['ELIZA', 'ChatGPT', 'Simple menu bot', 'IVR system'],
            correctAnswer: 1,
            explanation: 'ChatGPT is a modern AI-driven chatbot using NLP.'
          }
        ]
      },
      completed: false,
      unlocked: true
    },
    {
      id: 'chatbot-platforms-tools',
      title: 'Platforms and Tools for Chatbots',
      description: 'Explore chatbot frameworks like Dialogflow, Rasa, Microsoft Bot Framework, and ChatGPT API',
      icon: '🛠️',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Overview of Popular Chatbot Platforms (18 min)',
          'Intro to Rasa and Dialogflow (15 min)'
        ],
        articles: [
          'Comparison of Chatbot Development Platforms',
          'Getting Started with Rasa'
        ],
        exercises: [
          'Create a Dialogflow bot',
          'Test chatbot responses in sandbox mode',
          'Explore chatbot APIs with Postman'
        ]
      },
      quiz: {
        id: 'chatbot-platforms-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which platform allows local NLP training and customization?',
            options: ['Dialogflow', 'Rasa', 'Microsoft Bot Framework', 'Chatfuel'],
            correctAnswer: 1,
            explanation: 'Rasa is open-source and supports on-premise NLP customization.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'nlp-for-chatbots',
      title: 'Natural Language Processing for Chatbots',
      description: 'Learn how NLP helps chatbots understand and respond in human-like ways',
      icon: '🧠',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'NLP Basics for Chatbots (20 min)',
          'Entity and Intent Recognition (15 min)'
        ],
        articles: [
          'Understanding Intents and Entities',
          'NLU vs NLP in Chatbots'
        ],
        exercises: [
          'Define intents and entities for a restaurant bot',
          'Use spaCy or NLTK for tokenizing a user input',
          'Map user inputs to correct intents manually'
        ]
      },
      quiz: {
        id: 'nlp-chatbots-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What is the purpose of intent recognition?',
            options: ['Detect spelling mistakes', 'Understand user goal', 'Increase chatbot speed', 'Log user data'],
            correctAnswer: 1,
            explanation: 'Intent recognition determines what the user wants from their message.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'chatbot-conversations',
      title: 'Designing Chatbot Conversations',
      description: 'Craft conversational flows, fallback strategies, and context-aware dialogue',
      icon: '🗨️',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Designing Dialog Flows (18 min)',
          'Best Practices for Conversational UX (20 min)'
        ],
        articles: [
          'Chatbot Flow Design Guidelines',
          'Handling Fallbacks Gracefully'
        ],
        exercises: [
          'Create a conversation map for booking a cab',
          'Design fallback messages for wrong inputs',
          'Use context to continue multi-turn dialogues'
        ]
      },
      quiz: {
        id: 'conversation-design-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What’s a fallback response used for?',
            options: ['Welcome user', 'Repeat last response', 'Handle unknown inputs', 'Log user IP'],
            correctAnswer: 2,
            explanation: 'Fallbacks are shown when chatbot doesn’t understand the user input.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'chatbot-integration',
      title: 'Deploying and Integrating Chatbots',
      description: 'Learn how to integrate bots with websites, messaging apps, and APIs',
      icon: '🔗',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Deploying Chatbots on Websites (15 min)',
          'Integrating with WhatsApp and Telegram (20 min)'
        ],
        articles: [
          'Chatbot Integration with APIs',
          'Deployment Checklist for Production Bots'
        ],
        exercises: [
          'Deploy a bot to your website using iframe or script',
          'Test chatbot on Telegram',
          'Connect bot to a weather API'
        ]
      },
      quiz: {
        id: 'chatbot-integration-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which method can be used to integrate a bot with a website?',
            options: ['Socket programming', 'HTML iframe/script', 'SQL database', 'SMTP server'],
            correctAnswer: 1,
            explanation: 'Bots are embedded into websites using iframe/script tags.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'chatbot-capstone',
      title: 'Capstone Project & Quiz',
      description: 'Build and deploy a simple functional chatbot solving a real-world use case',
      icon: '🚀',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Live Chatbot Build Walkthrough (20 min)',
          'Case Study: Helpdesk Bot (15 min)'
        ],
        articles: [
          'End-to-End Chatbot Project Guide',
          'Common Mistakes in Chatbot Deployment'
        ],
        exercises: [
          'Build a chatbot for food ordering',
          'Test chatbot with multiple user scenarios',
          'Deploy it live using Dialogflow or Rasa'
        ]
      },
      quiz: {
        id: 'chatbot-capstone-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Why is user testing important before launching a bot?',
            options: ['To test server load', 'To avoid UI design issues', 'To find logical and conversational flaws', 'To increase traffic'],
            correctAnswer: 2,
            explanation: 'User testing helps ensure the chatbot performs as expected in real use.'
          }
        ]
      },
      completed: false,
      unlocked: false
    }
  ]
},
'web3-development-beginner-track': {
  id: 'web3-development-beginner-track',
  title: 'Web3 Development',
  description: 'Dive into the decentralized web with blockchain, smart contracts, and dApp development fundamentals.',
  totalDuration: '8 weeks',
  difficulty: 'Beginner',
  modules: [
    {
      id: 'blockchain-basics',
      title: 'Blockchain Fundamentals',
      description: 'Understand how blockchain technology works and its real-world applications.',
      icon: '🔗',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'What is Blockchain? (30 min)',
          'Consensus Mechanisms Explained (20 min)',
          'Public vs Private Blockchains (15 min)'
        ],
        articles: [
          'Beginner’s Guide to Blockchain - CoinDesk',
          'How Distributed Ledger Technology Works',
          'Blockchain Glossary of Key Terms'
        ],
        exercises: [
          'Write a blog post explaining how a blockchain works',
          'Draw and label the components of a blockchain block',
          'Compare Bitcoin and Ethereum blockchains'
        ]
      },
      quiz: {
        id: 'blockchain-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which characteristic makes blockchain immutable?',
            options: ['Centralization', 'Smart Contracts', 'Hashing and consensus', 'Public access'],
            correctAnswer: 2,
            explanation: 'Hashing and consensus mechanisms ensure that once data is written, it cannot be easily changed.'
          }
        ]
      },
      completed: false,
      unlocked: true
    },
    {
      id: 'ethereum-basics',
      title: 'Ethereum and Smart Contracts',
      description: 'Learn the basics of Ethereum and how to create and deploy smart contracts.',
      icon: '💠',
      duration: '2 weeks',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Intro to Ethereum and EVM (25 min)',
          'Solidity Basics and Data Types (40 min)',
          'Deploying Smart Contracts with Remix (30 min)'
        ],
        articles: [
          'What is Ethereum? - ethereum.org',
          'Solidity Official Documentation',
          'Gas Fees and How They Work'
        ],
        exercises: [
          'Write a Hello World contract in Solidity',
          'Deploy a smart contract using Remix IDE',
          'Track gas cost of simple contract functions'
        ]
      },
      quiz: {
        id: 'ethereum-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What is the Ethereum Virtual Machine (EVM)?',
            options: ['A decentralized database', 'A virtual server', 'An environment to run smart contracts', 'A web browser extension'],
            correctAnswer: 2,
            explanation: 'The EVM is a computation engine that executes smart contracts on the Ethereum network.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'solidity-dev',
      title: 'Smart Contract Development with Solidity',
      description: 'Deepen your skills in Solidity and learn best practices for secure contract development.',
      icon: '📜',
      duration: '2 weeks',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Solidity Functions and Modifiers (35 min)',
          'Events and Mappings in Solidity (30 min)',
          'Writing Secure Contracts and Avoiding Pitfalls (45 min)'
        ],
        articles: [
          'Solidity by Example - Official Site',
          'Smart Contract Security Checklist',
          'Common Vulnerabilities in Ethereum Smart Contracts'
        ],
        exercises: [
          'Build a voting contract with start/stop logic',
          'Create a contract that tracks token balances',
          'Fix vulnerabilities in a flawed contract'
        ]
      },
      quiz: {
        id: 'solidity-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which keyword is used to define a function in Solidity?',
            options: ['define', 'def', 'function', 'func'],
            correctAnswer: 2,
            explanation: 'The "function" keyword is used to declare a function in Solidity.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'dapp-dev',
      title: 'Building dApps with Web3.js',
      description: 'Connect your smart contracts to web frontends using Web3.js.',
      icon: '🌐',
      duration: '2 weeks',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'What is Web3.js and How It Works (20 min)',
          'Connecting to MetaMask and the Ethereum Network (25 min)',
          'Interacting with Contracts via Web3.js (30 min)'
        ],
        articles: [
          'Web3.js Documentation',
          'How dApps Work - Moralis Blog',
          'Connecting Frontend to Blockchain'
        ],
        exercises: [
          'Create a simple frontend to read/write a smart contract',
          'Integrate MetaMask wallet with your dApp',
          'Deploy and test your dApp on a testnet'
        ]
      },
      quiz: {
        id: 'web3js-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What is the primary use of Web3.js?',
            options: ['Deploy smart contracts', 'Compile Solidity code', 'Connect frontend to Ethereum', 'Mine Ethereum blocks'],
            correctAnswer: 2,
            explanation: 'Web3.js allows JavaScript applications to interact with the Ethereum blockchain.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'web3-wallets',
      title: 'Web3 Wallets and Security',
      description: 'Learn how wallets like MetaMask work and how to manage blockchain keys securely.',
      icon: '🔐',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Introduction to Crypto Wallets (20 min)',
          'MetaMask Setup and Use Cases (15 min)',
          'Wallet Security Best Practices (25 min)'
        ],
        articles: [
          'What is a Web3 Wallet?',
          'How to Backup and Secure Your Wallet',
          'Private Keys vs Seed Phrases Explained'
        ],
        exercises: [
          'Install MetaMask and create a test wallet',
          'Send test ETH on a testnet like Goerli',
          'Simulate a wallet recovery process'
        ]
      },
      quiz: {
        id: 'wallets-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What is the purpose of a seed phrase?',
            options: ['Encrypt your data', 'Authenticate dApps', 'Recover your wallet', 'Connect to nodes'],
            correctAnswer: 2,
            explanation: 'A seed phrase is used to restore access to a blockchain wallet.'
          }
        ]
      },
      completed: false,
      unlocked: false
    }
  ]
},
'fashion-technology-beginner-track': {
  id: 'fashion-technology-beginner-track',
  title: 'Fashion Technology',
  description: 'Blend creativity and technology by exploring digital fashion design, textiles, CAD, and smart wearables.',
  totalDuration: '8 weeks',
  difficulty: 'Beginner',
  modules: [
    {
      id: 'intro-to-fashion-tech',
      title: 'Introduction to Fashion Technology',
      description: 'Understand how technology is revolutionizing the fashion industry.',
      icon: '👗',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'What is Fashion Technology? (20 min)',
          'Digital Transformation in Fashion (30 min)',
          'History of Fashion Tech (15 min)'
        ],
        articles: [
          'Fashion Meets Technology - Overview',
          'The Rise of Digital Fashion',
          'Tech-Driven Fashion Trends'
        ],
        exercises: [
          'Create a timeline of key fashion tech milestones',
          'Compare traditional and modern fashion workflows',
          'Research one fashion brand using tech innovatively'
        ]
      },
      quiz: {
        id: 'fashion-tech-basics',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which of the following is a major focus area of fashion technology?',
            options: ['Color matching', 'Sewing techniques', 'Smart textiles', 'Runway modeling'],
            correctAnswer: 2,
            explanation: 'Fashion technology emphasizes innovations like smart textiles and digital clothing.'
          }
        ]
      },
      completed: false,
      unlocked: true
    },
    {
      id: 'textiles-and-fabrics',
      title: 'Textiles and Smart Fabrics',
      description: 'Explore traditional fabrics and emerging smart textiles used in fashion.',
      icon: '🧵',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Intro to Textiles (25 min)',
          'Wearable Smart Fabrics (30 min)',
          'Future of Fabric Tech (20 min)'
        ],
        articles: [
          'Types of Fabric and Their Uses',
          'Smart Textiles: A Beginner’s Guide',
          'The Science Behind Fabric Sensors'
        ],
        exercises: [
          'Identify natural vs synthetic fabrics',
          'List applications of smart textiles',
          'Sketch a wearable using conductive fabric'
        ]
      },
      quiz: {
        id: 'textile-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which fiber is commonly used in smart textiles for conductivity?',
            options: ['Cotton', 'Silk', 'Silver-coated thread', 'Polyester'],
            correctAnswer: 2,
            explanation: 'Silver-coated threads are often used in smart textiles for their conductivity.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'fashion-cad',
      title: 'Computer-Aided Fashion Design (CAD)',
      description: 'Learn to create digital fashion designs using CAD software.',
      icon: '💻',
      duration: '2 weeks',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Intro to Fashion CAD (20 min)',
          'Designing Garments Digitally (40 min)',
          '3D Fashion Modeling Basics (30 min)'
        ],
        articles: [
          'Best CAD Tools for Fashion Design',
          'Benefits of Digital Pattern Making',
          'Getting Started with CLO 3D'
        ],
        exercises: [
          'Install and explore a CAD tool like CLO 3D or TUKAcad',
          'Digitally draw a T-shirt pattern',
          'Create a mood board for your digital collection'
        ]
      },
      quiz: {
        id: 'cad-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What is the key benefit of using CAD in fashion design?',
            options: ['Faster sewing', 'Better fabric quality', 'Digital pattern accuracy', 'More color options'],
            correctAnswer: 2,
            explanation: 'CAD improves design precision and speeds up the prototyping process.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'wearable-tech-fashion',
      title: 'Wearable Technology in Fashion',
      description: 'Explore how fashion integrates sensors, LEDs, and connectivity for smart clothing.',
      icon: '📱',
      duration: '2 weeks',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'What is Wearable Tech in Fashion? (25 min)',
          'How Smart Clothing Works (35 min)',
          'Examples of High-Tech Fashion (30 min)'
        ],
        articles: [
          'Wearable Technology in the Apparel Industry',
          'Fashion Meets Functionality',
          'Top Smart Clothing Brands'
        ],
        exercises: [
          'Design a concept for fitness-enabled smart clothing',
          'List challenges in making wearables washable',
          'Prototype a basic circuit on fabric using Arduino'
        ]
      },
      quiz: {
        id: 'wearable-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which of these is commonly embedded in smart wearables?',
            options: ['Zippers', 'Sensors', 'Buttons', 'Dyes'],
            correctAnswer: 1,
            explanation: 'Sensors are key to enabling functionality like motion or temperature detection in smart clothes.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'fashion-innovation-lab',
      title: 'Fashion Innovation Lab',
      description: 'Combine your learning into a project-based creative showcase.',
      icon: '🧪',
      duration: '2 weeks',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'How to Plan a Fashion Tech Project (20 min)',
          'Presenting Your Work Digitally (15 min)',
          'Fashion Innovation Success Stories (25 min)'
        ],
        articles: [
          'How to Build a Fashion Portfolio',
          'Case Study: Tech-Driven Collections',
          'Turning Ideas into Products'
        ],
        exercises: [
          'Design a tech-inspired fashion piece',
          'Create a digital presentation for your concept',
          'Submit your final project with CAD files/images'
        ]
      },
      quiz: {
        id: 'project-showcase-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which tool is most suitable for showcasing digital fashion projects?',
            options: ['Excel', 'PowerPoint', 'CLO 3D', 'Notepad'],
            correctAnswer: 2,
            explanation: 'CLO 3D is a powerful platform for digital fashion visualization and prototyping.'
          }
        ]
      },
      completed: false,
      unlocked: false
    }
  ]
},
'ecommerce-management-beginner-track': {
  id: 'ecommerce-management-beginner-track',
  title: 'E-commerce Management',
  description: 'Learn the fundamentals of running and managing an online business—from product listings to customer experience and logistics.',
  totalDuration: '8 weeks',
  difficulty: 'Beginner',
  modules: [
    {
      id: 'intro-to-ecommerce',
      title: 'Introduction to E-commerce',
      description: 'Understand the e-commerce ecosystem, platforms, and business models.',
      icon: '🛒',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'What is E-commerce? (20 min)',
          'B2B vs B2C vs C2C (15 min)',
          'Trends in Online Retail (30 min)'
        ],
        articles: [
          'Overview of E-commerce Platforms',
          'History of E-commerce',
          'Benefits and Challenges of Selling Online'
        ],
        exercises: [
          'Compare different e-commerce models',
          'List five popular e-commerce platforms',
          'Identify trends in local e-commerce market'
        ]
      },
      quiz: {
        id: 'intro-ecommerce-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which of the following is an example of B2C?',
            options: ['Amazon selling to individuals', 'Alibaba to manufacturers', 'Freelancer to company', 'None of the above'],
            correctAnswer: 0,
            explanation: 'B2C stands for Business-to-Consumer, like Amazon selling directly to consumers.'
          }
        ]
      },
      completed: false,
      unlocked: true
    },
    {
      id: 'setting-up-store',
      title: 'Setting Up Your Online Store',
      description: 'Explore tools, domains, and store builders to launch an online presence.',
      icon: '🧱',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'How to Set Up a Shopify Store (25 min)',
          'Customizing Themes (20 min)',
          'Using Wix/WordPress for E-commerce (30 min)'
        ],
        articles: [
          'Buying a Domain Name for Your Store',
          'How to Choose a Website Builder',
          'Must-Have E-commerce Plugins'
        ],
        exercises: [
          'Register a test domain name',
          'Design a sample product page layout',
          'List features needed in your online store'
        ]
      },
      quiz: {
        id: 'store-setup-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which platform is known for user-friendly store setup?',
            options: ['Magento', 'Shopify', 'WooCommerce', 'OpenCart'],
            correctAnswer: 1,
            explanation: 'Shopify is widely known for its beginner-friendly store setup process.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'product-management',
      title: 'Product Management & Listings',
      description: 'Learn how to manage product inventories, descriptions, and categories effectively.',
      icon: '📦',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Writing Effective Product Descriptions (20 min)',
          'Inventory Control Basics (30 min)',
          'Product Categorization Strategies (25 min)'
        ],
        articles: [
          'Best Practices for Product Titles',
          'How to Optimize Product Listings',
          'Using SKUs and Tags Effectively'
        ],
        exercises: [
          'Write a sample product description',
          'Create a product category tree',
          'Design an inventory sheet'
        ]
      },
      quiz: {
        id: 'product-management-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Why is SKU important in e-commerce?',
            options: ['It helps in SEO', 'It’s the product name', 'It helps in inventory tracking', 'It adds visual appeal'],
            correctAnswer: 2,
            explanation: 'SKUs (Stock Keeping Units) help track inventory and manage products efficiently.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'digital-marketing-basics',
      title: 'Digital Marketing for E-commerce',
      description: 'Understand how to attract and convert customers using digital marketing strategies.',
      icon: '📢',
      duration: '2 weeks',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'SEO for Online Stores (25 min)',
          'Running Google & Facebook Ads (30 min)',
          'Email Campaigns for E-commerce (20 min)'
        ],
        articles: [
          'Basics of E-commerce SEO',
          'How to Retarget Abandoned Carts',
          'Influencer Marketing for Online Stores'
        ],
        exercises: [
          'Create an SEO keyword list for a sample store',
          'Draft a sample email campaign',
          'Design a basic social ad for a product'
        ]
      },
      quiz: {
        id: 'ecommerce-marketing-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What’s a good metric to track ad performance?',
            options: ['Color palette', 'CTR (Click Through Rate)', 'Image size', 'Theme name'],
            correctAnswer: 1,
            explanation: 'CTR helps you understand how many viewers clicked on your ad out of total impressions.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'orders-and-logistics',
      title: 'Order Fulfillment & Logistics',
      description: 'Handle orders, shipping, tracking, and returns with efficiency.',
      icon: '🚚',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Managing Orders in E-commerce (25 min)',
          'Shipping and Courier Integrations (20 min)',
          'Returns and Refunds Management (15 min)'
        ],
        articles: [
          'How to Handle Returns Gracefully',
          'Order Management System Guide',
          'Inventory vs Fulfillment Systems'
        ],
        exercises: [
          'Simulate a full order flow',
          'Compare different courier services',
          'Draft a return policy for your store'
        ]
      },
      quiz: {
        id: 'logistics-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What does a fulfillment center do?',
            options: ['Designs websites', 'Stores and ships products', 'Creates invoices', 'Handles customer chat'],
            correctAnswer: 1,
            explanation: 'Fulfillment centers handle warehousing and shipping of your products.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'analytics-and-growth',
      title: 'E-commerce Analytics & Growth',
      description: 'Use tools to analyze traffic, measure performance, and scale your store.',
      icon: '📊',
      duration: '2 weeks',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Google Analytics for E-commerce (30 min)',
          'A/B Testing for Conversions (25 min)',
          'Scaling Your Store (20 min)'
        ],
        articles: [
          'Key Metrics to Track in E-commerce',
          'How to Use Funnels to Improve Sales',
          'Analyzing Customer Behavior'
        ],
        exercises: [
          'Install Google Analytics on a test store',
          'Create a growth plan for 30 days',
          'Set up a conversion funnel diagram'
        ]
      },
      quiz: {
        id: 'analytics-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What metric measures how many visitors complete a purchase?',
            options: ['Bounce Rate', 'Conversion Rate', 'Exit Rate', 'Click Rate'],
            correctAnswer: 1,
            explanation: 'Conversion Rate is the percentage of visitors who make a purchase.'
          }
        ]
      },
      completed: false,
      unlocked: false
    }
  ]
},
'graphics-design-beginner-track': {
  id: 'graphics-design-beginner-track',
  title: 'Graphics Design',
  description: 'Learn the fundamentals of graphic design—from color theory to using tools like Photoshop and Canva for creative visual content.',
  totalDuration: '8 weeks',
  difficulty: 'Beginner',
  modules: [
    {
      id: 'intro-to-design',
      title: 'Introduction to Graphic Design',
      description: 'Understand the principles and elements of design.',
      icon: '🎨',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'What is Graphic Design? (15 min)',
          'Principles of Design (20 min)',
          'Design Thinking Overview (25 min)'
        ],
        articles: [
          'Basics of Graphic Design',
          'Understanding Composition and Layout',
          'History of Graphic Design'
        ],
        exercises: [
          'List the 7 principles of design',
          'Identify good vs poor design in examples',
          'Analyze the layout of a sample flyer'
        ]
      },
      quiz: {
        id: 'intro-design-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which of these is a design principle?',
            options: ['Kerning', 'Balance', 'Crop', 'Opacity'],
            correctAnswer: 1,
            explanation: 'Balance is one of the core principles in visual design.'
          }
        ]
      },
      completed: false,
      unlocked: true
    },
    {
      id: 'color-typography',
      title: 'Color Theory & Typography',
      description: 'Learn to use colors and typefaces effectively in design.',
      icon: '🖍️',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Color Psychology in Design (20 min)',
          'Understanding Typography (25 min)',
          'Combining Fonts (15 min)'
        ],
        articles: [
          'Color Wheels and Schemes',
          'Choosing Fonts for Readability',
          'Contrast and Accessibility'
        ],
        exercises: [
          'Create a color palette for a brand',
          'Pair 3 fonts for a landing page',
          'Design a monochrome poster'
        ]
      },
      quiz: {
        id: 'color-typography-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What type of font is best for body text?',
            options: ['Script', 'Display', 'Serif/Sans-serif', 'Stencil'],
            correctAnswer: 2,
            explanation: 'Serif and sans-serif fonts are more legible for body text.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'tools-basics',
      title: 'Design Tools: Photoshop, Canva & More',
      description: 'Get hands-on with popular graphic design software.',
      icon: '🛠️',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Photoshop Basics (30 min)',
          'Design with Canva (20 min)',
          'Intro to Figma for UI Design (25 min)'
        ],
        articles: [
          'Photoshop vs Illustrator',
          'How to Use Layers & Masks',
          'Top Free Tools for Designers'
        ],
        exercises: [
          'Design a simple poster using Canva',
          'Create a layered image in Photoshop',
          'Recreate a logo using Figma or Gravit Designer'
        ]
      },
      quiz: {
        id: 'tools-basics-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which tool is most suitable for beginners?',
            options: ['Adobe Illustrator', 'Canva', 'Figma', 'After Effects'],
            correctAnswer: 1,
            explanation: 'Canva offers a simple, drag-and-drop interface ideal for beginners.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'branding-visuals',
      title: 'Branding & Visual Identity',
      description: 'Design logos, moodboards, and visual guidelines for a brand.',
      icon: '📛',
      duration: '2 weeks',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Designing Logos That Work (25 min)',
          'Creating Brand Guidelines (20 min)',
          'Visual Consistency in Design (15 min)'
        ],
        articles: [
          'What Makes a Good Logo?',
          'Understanding Brand Identity',
          'Color & Typography in Branding'
        ],
        exercises: [
          'Design a logo for a fictional brand',
          'Create a brand style guide',
          'Assemble a brand moodboard'
        ]
      },
      quiz: {
        id: 'branding-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Why is a brand style guide important?',
            options: ['To look colorful', 'To ensure consistency', 'For copyright', 'To impress clients'],
            correctAnswer: 1,
            explanation: 'A brand guide ensures visual consistency across materials.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'print-digital-design',
      title: 'Print & Digital Media Design',
      description: 'Explore layouts for brochures, social media, posters, and web.',
      icon: '🖼️',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Designing for Social Media (20 min)',
          'Print-Ready Design Basics (25 min)',
          'Web vs Print Design Considerations (20 min)'
        ],
        articles: [
          'RGB vs CMYK Color Modes',
          'Best Practices for Flyers',
          'Social Media Design Sizes'
        ],
        exercises: [
          'Design a flyer for an event',
          'Create a carousel post for Instagram',
          'Make a business card layout'
        ]
      },
      quiz: {
        id: 'print-digital-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What’s the standard resolution for print design?',
            options: ['72 DPI', '96 DPI', '300 DPI', '1200 DPI'],
            correctAnswer: 2,
            explanation: '300 DPI (dots per inch) is standard for high-quality print output.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'portfolio-and-career',
      title: 'Creating a Portfolio & Career Tips',
      description: 'Showcase your work and prepare for design job roles.',
      icon: '📁',
      duration: '2 weeks',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Building a Design Portfolio (25 min)',
          'Presenting Your Work Professionally (20 min)',
          'Freelancing & Client Management (25 min)'
        ],
        articles: [
          'Top Sites to Host Your Portfolio',
          'Design Resume Tips',
          'Behance & Dribbble for Designers'
        ],
        exercises: [
          'Compile 5 design works in a portfolio',
          'Write a short case study for a design project',
          'Design a personal logo and brand'
        ]
      },
      quiz: {
        id: 'portfolio-career-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which platform is widely used for showcasing design portfolios?',
            options: ['LinkedIn', 'Behance', 'Twitter', 'Trello'],
            correctAnswer: 1,
            explanation: 'Behance is a popular platform for displaying creative portfolios.'
          }
        ]
      },
      completed: false,
      unlocked: false
    }
  ]
},
'supply-chain-tech-beginner-track': {
  id: 'supply-chain-tech-beginner-track',
  title: 'Supply Chain Technology',
  description: 'Explore how modern technologies optimize supply chain operations—from inventory management to blockchain and AI applications.',
  totalDuration: '8 weeks',
  difficulty: 'Beginner',
  modules: [
    {
      id: 'intro-to-supply-chain',
      title: 'Introduction to Supply Chain Management',
      description: 'Understand the basics of supply chains, logistics, and value networks.',
      icon: '🔗',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'What is a Supply Chain? (20 min)',
          'Key Components of SCM (25 min)',
          'Supply Chain Flow Examples (15 min)'
        ],
        articles: [
          'Overview of SCM Processes',
          'History and Evolution of Supply Chains',
          'Why Supply Chains Matter'
        ],
        exercises: [
          'Map a basic supply chain for a retail product',
          'Identify 5 SCM touchpoints in a real business',
          'List key SCM stakeholders'
        ]
      },
      quiz: {
        id: 'intro-scm-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which of the following is a core component of SCM?',
            options: ['Marketing', 'Procurement', 'Human Resources', 'Legal'],
            correctAnswer: 1,
            explanation: 'Procurement is a vital part of supply chain management.'
          }
        ]
      },
      completed: false,
      unlocked: true
    },
    {
      id: 'inventory-tech',
      title: 'Inventory Management Systems',
      description: 'Explore digital systems used for tracking inventory levels and movements.',
      icon: '📦',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Intro to Inventory Systems (20 min)',
          'ERP vs WMS Overview (25 min)',
          'Barcode & RFID Technology (15 min)'
        ],
        articles: [
          'How Inventory Systems Work',
          'Benefits of Real-time Inventory Tracking',
          'Popular Inventory Software'
        ],
        exercises: [
          'Simulate stock updates in a sample system',
          'Design a basic inventory sheet',
          'Compare WMS and ERP systems'
        ]
      },
      quiz: {
        id: 'inventory-tech-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which technology is commonly used for inventory tracking?',
            options: ['AI', 'Bluetooth', 'RFID', 'VPN'],
            correctAnswer: 2,
            explanation: 'RFID (Radio Frequency Identification) is used for real-time inventory tracking.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'logistics-automation',
      title: 'Logistics and Automation',
      description: 'Understand the technologies streamlining warehousing and delivery.',
      icon: '🚚',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Automated Warehouses (25 min)',
          'Last Mile Delivery Tech (20 min)',
          'Drones & Robotics in Logistics (30 min)'
        ],
        articles: [
          'How Automation Enhances Logistics',
          'Role of IoT in Transportation',
          'Benefits of Real-Time Tracking'
        ],
        exercises: [
          'Sketch a flow for automated warehouse operations',
          'Research drone delivery companies',
          'List tools for last-mile optimization'
        ]
      },
      quiz: {
        id: 'logistics-automation-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What is a key benefit of using IoT in logistics?',
            options: ['Lower packaging cost', 'Real-time shipment tracking', 'Ad campaign personalization', 'Better logos'],
            correctAnswer: 1,
            explanation: 'IoT enables real-time tracking and monitoring of goods during transit.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'ai-in-supply-chain',
      title: 'AI and Predictive Analytics',
      description: 'Use AI to forecast demand, detect anomalies, and optimize supply planning.',
      icon: '🤖',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'AI in Supply Chain (20 min)',
          'Demand Forecasting Models (25 min)',
          'Data-Driven Decision Making (20 min)'
        ],
        articles: [
          'How AI Improves Supply Chains',
          'Predictive Analytics in Logistics',
          'Benefits of Forecasting Tools'
        ],
        exercises: [
          'List 3 use-cases of AI in SCM',
          'Analyze past trends to forecast inventory',
          'Evaluate pros/cons of AI in SCM'
        ]
      },
      quiz: {
        id: 'ai-supply-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which is a common use of AI in supply chains?',
            options: ['Branding', 'Payroll', 'Demand Forecasting', 'Legal Contracts'],
            correctAnswer: 2,
            explanation: 'AI is widely used for accurate demand forecasting in supply chains.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'blockchain-scm',
      title: 'Blockchain in Supply Chain',
      description: 'Explore how blockchain ensures transparency and traceability.',
      icon: '⛓️',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Blockchain for Beginners (20 min)',
          'Blockchain Use in SCM (25 min)',
          'Smart Contracts in Logistics (15 min)'
        ],
        articles: [
          'What is Blockchain in Supply Chain?',
          'Benefits of Traceability',
          'Examples of Blockchain Use Cases'
        ],
        exercises: [
          'Draw a blockchain flow in a product supply',
          'Compare blockchain vs traditional tracking',
          'Identify 3 blockchain startups in SCM'
        ]
      },
      quiz: {
        id: 'blockchain-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Why is blockchain valuable in SCM?',
            options: ['It’s fast', 'It looks modern', 'It offers transparency and traceability', 'It reduces emails'],
            correctAnswer: 2,
            explanation: 'Blockchain ensures data transparency, security, and traceability in supply chains.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'sustainability-tech',
      title: 'Sustainability & Green Supply Chains',
      description: 'Learn how technology drives sustainable logistics and operations.',
      icon: '🌱',
      duration: '1 week',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Green Logistics (20 min)',
          'Sustainable Packaging (15 min)',
          'Tech for Reducing Carbon Footprint (25 min)'
        ],
        articles: [
          'What is a Green Supply Chain?',
          'Role of Tech in Eco-Friendly Shipping',
          'Case Studies of Sustainable Supply Chains'
        ],
        exercises: [
          'List 5 sustainable practices in SCM',
          'Design a carbon-reduced supply model',
          'Research eco-packaging alternatives'
        ]
      },
      quiz: {
        id: 'sustainability-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'Which of the following reduces environmental impact in logistics?',
            options: ['Air freight', 'Single-use packaging', 'Electric vehicles', 'Faster delivery'],
            correctAnswer: 2,
            explanation: 'Electric vehicles help reduce carbon emissions in transportation.'
          }
        ]
      },
      completed: false,
      unlocked: false
    },
    {
      id: 'future-of-supply-chain',
      title: 'The Future of Supply Chain Tech',
      description: 'Discover innovations shaping tomorrow’s supply chains.',
      icon: '🔮',
      duration: '2 weeks',
      difficulty: 'Beginner',
      resources: {
        videos: [
          'Autonomous Trucks in Logistics (25 min)',
          'Digital Twins and Simulation (20 min)',
          'Future Skills in SCM (15 min)'
        ],
        articles: [
          'Top 5 Trends in SCM Tech',
          'What’s a Digital Twin?',
          'Preparing for Supply Chain 5.0'
        ],
        exercises: [
          'Predict 3 tech trends for 2030',
          'Evaluate a futuristic supply chain model',
          'Create a short presentation on SCM innovations'
        ]
      },
      quiz: {
        id: 'future-tech-quiz',
        passingScore: 70,
        questions: [
          {
            id: 'q1',
            question: 'What does a digital twin do in SCM?',
            options: ['Track employees', 'Replicate physical systems digitally', 'Design packaging', 'Count products'],
            correctAnswer: 1,
            explanation: 'Digital twins replicate supply systems digitally for analysis and optimization.'
          }
        ]
      },
      completed: false,
      unlocked: false
    }
  ]
}


};

export function generateLearningPath(prompt: string): LearningPath | null {
  const lowercasePrompt = prompt.toLowerCase();
  
  if (lowercasePrompt.includes('full stack') || lowercasePrompt.includes('web development')) {
    return learningPaths['full-stack-development'];
  } else if (lowercasePrompt.includes('ai with python')) {
    return learningPaths['ai-with-python'];
  } else if (lowercasePrompt.includes('cyber') || lowercasePrompt.includes('security')) {
    return learningPaths['cybersecurity-beginner-track'];
  } else if (lowercasePrompt.includes('biology') || lowercasePrompt.includes('human')){
    return learningPaths['biology-beginner-track'];
  } else if (lowercasePrompt.includes('human') || lowercasePrompt.includes('botany')) {
    return learningPaths['botany-beginner-track'];
  } else if (lowercasePrompt.includes('zoology') || lowercasePrompt.includes('animals')) {
    return learningPaths['zoology-beginner-track'];
  } else if (lowercasePrompt.includes('genetics') || lowercasePrompt.includes('sex')) {
    return learningPaths['genetics-beginner-track'];
  } else if (lowercasePrompt.includes('micro biology') || lowercasePrompt.includes('microbial')) {
    return learningPaths['microbiology-beginner-track'];
  } else if (lowercasePrompt.includes('molecular biology') || lowercasePrompt.includes('molecular')) {
    return learningPaths['molecular-biology-beginner-track'];
  } else if (lowercasePrompt.includes('food science') || lowercasePrompt.includes('nutrition')) {
    return learningPaths['food-science-nutrition-beginner-track'];
  } else if (lowercasePrompt.includes('agricultural') || lowercasePrompt.includes('bio technology')) {
    return learningPaths['agricultural-biotechnology-beginner-track'];
  } else if (lowercasePrompt.includes('physics')) {
    return learningPaths['physics-beginner-track'];
  } else if (lowercasePrompt.includes('astro physics') || lowercasePrompt.includes('astro')) {
    return learningPaths['astrophysics-beginner-track'];
  } else if (lowercasePrompt.includes('astronomy') || lowercasePrompt.includes('astro')) {
    return learningPaths['astronomy-beginner-track'];
  } else if (lowercasePrompt.includes('geology') || lowercasePrompt.includes('geo')) {
    return learningPaths['geology-beginner-track'];
  } else if (lowercasePrompt.includes('geophysics') || lowercasePrompt.includes('geophy')) {
    return learningPaths['geophysics-beginner-track'];
  } else if (lowercasePrompt.includes('app development') || lowercasePrompt.includes('mobile development')) {
    return learningPaths['app-development-beginner-track'];
  } else if (lowercasePrompt.includes('backend development') || lowercasePrompt.includes('server development')) {
    return learningPaths['backend-development-beginner-track'];
  } else if (lowercasePrompt.includes('frontend development') || lowercasePrompt.includes('client development')) {
    return learningPaths['frontend-development-beginner-track'];
  } else if (lowercasePrompt.includes('devops') || lowercasePrompt.includes('dev ops')) {
    return learningPaths['devops-beginner-track'];
  } else if (lowercasePrompt.includes('geophysics') || lowercasePrompt.includes('geo physics')) {
    return learningPaths['geophysics-beginner-track'];
  } else if (lowercasePrompt.includes('data science') || lowercasePrompt.includes('data analysis')) {
    return learningPaths['data-science-beginner-track'];
  } else if (lowercasePrompt.includes('data engineering') || lowercasePrompt.includes('data pipeline')) {
    return learningPaths['data-engineering-beginner-track'];
  } else if (lowercasePrompt.includes('data visualization') || lowercasePrompt.includes('data viz')) {
    return learningPaths['data-visualization-beginner-track'];
  } else if (lowercasePrompt.includes('cloud computing') || lowercasePrompt.includes('cloud services')) {
    return learningPaths['cloud-computing-beginner-track'];
  } else if (lowercasePrompt.includes('azure') || lowercasePrompt.includes('microsoft cloud')) {
    return learningPaths['azure-beginner-track'];
  } else if (lowercasePrompt.includes('gcp') || lowercasePrompt.includes('google cloud')) {
    return learningPaths['gcp-beginner-track'];
  } else if (lowercasePrompt.includes('blockchain') || lowercasePrompt.includes('crypto')) {
    return learningPaths['blockchain-beginner-track'];
  } else if (lowercasePrompt.includes('iot') || lowercasePrompt.includes('internet of things')) {
    return learningPaths['iot-beginner-track'];
  } else if (lowercasePrompt.includes('robotics') || lowercasePrompt.includes('robots')) {
    return learningPaths['robotics-beginner-track'];
  } else if (lowercasePrompt.includes('virtual reality') || lowercasePrompt.includes('vr')) {
    return learningPaths['virtual-reality-beginner-track'];
  } else if (lowercasePrompt.includes('augmented reality')) {
    return learningPaths['augmented-reality-beginner-track'];
  } else if (lowercasePrompt.includes('ui/ux') || lowercasePrompt.includes('ui ux') || lowercasePrompt.includes('user interface') || lowercasePrompt.includes('user experience')) {
    return learningPaths['ui-ux-design-beginner-track'];
  } else if (lowercasePrompt.includes('game development') || lowercasePrompt.includes('game dev')) {
    return learningPaths['game-development-beginner-track'];
  } else if (lowercasePrompt.includes('quantum computing') || lowercasePrompt.includes('quantum')) {
    return learningPaths['quantum-computing-beginner-track'];
  } else if (lowercasePrompt.includes('nlp') || lowercasePrompt.includes('natural language processing')) {
    return learningPaths['nlp-beginner-track'];
  } else if (lowercasePrompt.includes('computer vision') || lowercasePrompt.includes('cv')) {
    return learningPaths['computer-vision-beginner-track'];
  } else if (lowercasePrompt.includes('ethical hacking') || lowercasePrompt.includes('penetration testing') || lowercasePrompt.includes('hacking')) {
    return learningPaths['ethical-hacking-beginner-track'];
  } else if (lowercasePrompt.includes('embedded systems') || lowercasePrompt.includes('embedded')) {
    return learningPaths['embedded-systems-beginner-track'];
  } else if (lowercasePrompt.includes('network engineering') || lowercasePrompt.includes('networking')) {
    return learningPaths['network-engineering'];
  } else if (lowercasePrompt.includes('database administration') || lowercasePrompt.includes('database management') || lowercasePrompt.includes('database')) {
    return learningPaths['database-administration'];
  } else if (lowercasePrompt.includes('software engineering') || lowercasePrompt.includes('software development')) {
    return learningPaths['software-engineering'];
  } else if (lowercasePrompt.includes('firmware development') || lowercasePrompt.includes('firmware')) {
    return learningPaths['firmware-development'];
  } else if (lowercasePrompt.includes('ai prompt engineering') || lowercasePrompt.includes('prompt engineering') || lowercasePrompt.includes('vibe coding')) {
    return learningPaths['ai-prompt-engineering-beginner-track'];
  } else if (lowercasePrompt.includes('chatbot development') || lowercasePrompt.includes('chatbot')) {
    return learningPaths['chatbot-development-beginner-track'];
  } else if (lowercasePrompt.includes('data analysis') || lowercasePrompt.includes('data analytics')) {
    return learningPaths['data-analysis-beginner-track'];
  } else if (lowercasePrompt.includes('data management') || lowercasePrompt.includes('data governance')) {
    return learningPaths['data-management-beginner-track'];
  } else if (lowercasePrompt.includes('data engineering') || lowercasePrompt.includes('data pipeline')) {
    return learningPaths['data-engineering-beginner-track'];
  } else if (lowercasePrompt.includes('data visualization') || lowercasePrompt.includes('data viz')) {
    return learningPaths['data-visualization-beginner-track'];
  } else if (lowercasePrompt.includes('cloud computing') || lowercasePrompt.includes('cloud services')) {
    return learningPaths['cloud-computing-beginner-track'];
  } else if (lowercasePrompt.includes('azure') || lowercasePrompt.includes('microsoft cloud')) {
    return learningPaths['azure-beginner-track'];
  } else if (lowercasePrompt.includes('gcp') || lowercasePrompt.includes('google cloud')) {
    return learningPaths['gcp-beginner-track'];
  } else if (lowercasePrompt.includes('blockchain') || lowercasePrompt.includes('crypto')) {
    return learningPaths['blockchain-beginner-track'];
  } else if (lowercasePrompt.includes('iot') || lowercasePrompt.includes('internet of things')) {
    return learningPaths['iot-beginner-track'];
  } else if (lowercasePrompt.includes('robotics') || lowercasePrompt.includes('robots')) {
    return learningPaths['robotics-beginner-track'];
  } else if (lowercasePrompt.includes('virtual reality') || lowercasePrompt.includes('vr')) {
    return learningPaths['virtual-reality-beginner-track'];
  } else if (lowercasePrompt.includes('augmented reality')) {
    return learningPaths['augmented-reality-beginner-track'];
  } else if (lowercasePrompt.includes('ui/ux') || lowercasePrompt.includes('ui ux') || lowercasePrompt.includes('user interface') || lowercasePrompt.includes('user experience')) {
    return learningPaths['ui-ux-design-beginner-track'];
  } else if (lowercasePrompt.includes('game development') || lowercasePrompt.includes('game dev')) {
    return learningPaths['game-development-beginner-track'];
  } else if (lowercasePrompt.includes('quantum computing') || lowercasePrompt.includes('quantum')) {
    return learningPaths['quantum-computing-beginner-track'];
  } else if (lowercasePrompt.includes('nlp') || lowercasePrompt.includes('natural language processing')) {
    return learningPaths['nlp-beginner-track'];
  } else if (lowercasePrompt.includes('computer vision') || lowercasePrompt.includes('cv')) {
    return learningPaths['computer-vision-beginner-track'];
  } else if (lowercasePrompt.includes('ethical hacking') || lowercasePrompt.includes('penetration testing') || lowercasePrompt.includes('hacking')) {
    return learningPaths['ethical-hacking-beginner-track'];
  } else if (lowercasePrompt.includes('embedded systems') || lowercasePrompt.includes('embedded')) {
    return learningPaths['embedded-systems-beginner-track'];
  } else if (lowercasePrompt.includes('network engineering') || lowercasePrompt.includes('networking')) {
    return learningPaths['network-engineering'];
  } else if (lowercasePrompt.includes('database administration') || lowercasePrompt.includes('database management') || lowercasePrompt.includes('database')) {
    return learningPaths['database-administration'];
  } else if (lowercasePrompt.includes('software engineering') || lowercasePrompt.includes('software development')) {
    return learningPaths['software-engineering'];
  } else if (lowercasePrompt.includes('firmware development') || lowercasePrompt.includes('firmware')) {
    return learningPaths['firmware-development'];
  } else if (lowercasePrompt.includes('ai prompt engineering') || lowercasePrompt.includes('prompt engineering') || lowercasePrompt.includes('vibe coding')) {
    return learningPaths['ai-prompt-engineering-beginner-track'];
  } else if (lowercasePrompt.includes('chatbot development') || lowercasePrompt.includes('chatbot')) {
    return learningPaths['chatbot-development-beginner-track'];
  } else if (lowercasePrompt.includes('web3 development') || lowercasePrompt.includes('web3')) {
    return learningPaths['web3-development-beginner-track'];
  } else if (lowercasePrompt.includes('fashion technology') || lowercasePrompt.includes('fashion tech')) {
    return learningPaths['fashion-technology-beginner-track'];
  } else if (lowercasePrompt.includes('ecommerce management') || lowercasePrompt.includes('ecommerce')) {
    return learningPaths['ecommerce-management-beginner-track'];
  } else if (lowercasePrompt.includes('graphics design') || lowercasePrompt.includes('graphic design')) {
    return learningPaths['graphics-design-beginner-track'];
  } else if (lowercasePrompt.includes('supply chain technology') || lowercasePrompt.includes('supply chain')) {
    return learningPaths['supply-chain-tech-beginner-track'];
  }
  return null;
}