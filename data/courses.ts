import { Course } from './types';

export const courses: Course[] = [
  // --- IBM AI / Generative AI ---
  { id: 'introduction-to-artificial-intelligence', title: 'Introduction to Artificial Intelligence (AI)', institution: 'IBM', grade: 100, completed: true, certificateUrl: 'https://www.coursera.org/account/accomplishments/certificate/VKQPS5EWFY65' },
  { id: 'generative-ai-introduction-and-applications', title: 'Generative AI: Introduction and Applications', institution: 'IBM', grade: 100, completed: true, certificateUrl: 'https://www.coursera.org/verify/6I3MTIDMECJX' },
  { id: 'generative-ai-prompt-engineering-basics', title: 'Generative AI: Prompt Engineering Basics', institution: 'IBM', grade: 93.75, completed: true, certificateUrl: 'https://www.coursera.org/verify/AJ8BNCG7KLUX' },
  { id: 'building-ai-powered-chatbots-without-programming', title: 'Building AI Powered Chatbots Without Programming', institution: 'IBM', completed: false },
  { id: 'generative-ai-foundation-models-and-platforms', title: 'Generative AI: Foundation Models and Platforms', institution: 'IBM', completed: false },
  { id: 'generative-ai-impact-considerations-and-ethical-issues', title: 'Generative AI: Impact, Considerations, and Ethical Issues', institution: 'IBM', completed: false },
  { id: 'generative-ai-business-transformation-and-career-growth', title: 'Generative AI: Business Transformation and Career Growth', institution: 'IBM', completed: false },
  { id: 'generative-ai-elevate-your-data-science-career', title: 'Generative AI: Elevate Your Data Science Career', institution: 'IBM', grade: 95, completed: true, certificateUrl: 'https://www.coursera.org/verify/C7DKW3LVVNAA' },
  { id: 'generative-ai-elevate-your-software-development-career', title: 'Generative AI: Elevate your Software Development Career', institution: 'IBM', completed: false },
  { id: 'generative-ai-elevate-your-data-engineering-career', title: 'Generative AI: Elevate your Data Engineering Career', institution: 'IBM', completed: false },

  // --- IBM LLM / Engineering ---
  { id: 'generative-ai-and-llms-architecture-and-data-preparation', title: 'Generative AI and LLMs: Architecture and Data Preparation', institution: 'IBM', completed: false },
  { id: 'gen-ai-foundational-models-for-nlp-and-language-understanding', title: 'Gen AI Foundational Models for NLP & Language Understanding', institution: 'IBM', completed: false },
  { id: 'generative-ai-language-modeling-with-transformers', title: 'Generative AI Language Modeling with Transformers', institution: 'IBM', completed: false },
  { id: 'generative-ai-engineering-and-fine-tuning-transformers', title: 'Generative AI Engineering and Fine-Tuning Transformers', institution: 'IBM', completed: false },
  { id: 'generative-ai-advance-fine-tuning-for-llms', title: 'Generative AI Advance Fine-Tuning for LLMs', institution: 'IBM', completed: false },
  { id: 'fundamentals-of-ai-agents-using-rag-and-langchain', title: 'Fundamentals of AI Agents Using RAG and LangChain', institution: 'IBM', completed: false },
  { id: 'project-generative-ai-applications-with-rag-and-langchain', title: 'Project: Generative AI Applications with RAG and LangChain', institution: 'IBM', completed: false },

  // --- RAG / Agentic ---
  { id: 'develop-generative-ai-applications-get-started', title: 'Develop Generative AI Applications: Get Started', institution: 'IBM', completed: false },
  { id: 'build-rag-applications-get-started', title: 'Build RAG Applications: Get Started', institution: 'IBM', completed: false },
  { id: 'vector-databases-for-rag-an-introduction', title: 'Vector Databases for RAG: An Introduction', institution: 'IBM', completed: false },
  { id: 'advanced-rag-with-vector-databases-and-retrievers', title: 'Advanced RAG with Vector Databases and Retrievers', institution: 'IBM', completed: false },
  { id: 'build-multimodal-generative-ai-applications', title: 'Build Multimodal Generative AI Applications', institution: 'IBM', completed: false },
  { id: 'fundamentals-of-building-ai-agents', title: 'Fundamentals of Building AI Agents', institution: 'IBM', completed: false },
  { id: 'agentic-ai-with-langchain-and-langgraph', title: 'Agentic AI with LangChain and LangGraph', institution: 'IBM', completed: false },
  { id: 'agentic-ai-with-langgraph-crewai-autogen-and-beeai', title: 'Agentic AI with LangGraph, CrewAI, AutoGen and BeeAI', institution: 'IBM', completed: false },
  { id: 'build-ai-agents-using-mcp', title: 'Build AI Agents using MCP', institution: 'IBM', completed: false },

  // --- AI Workflow ---
  { id: 'ai-workflow-business-priorities-and-data-ingestion', title: 'AI Workflow: Business Priorities and Data Ingestion', institution: 'IBM', completed: false },
  { id: 'ai-workflow-data-analysis-and-hypothesis-testing', title: 'AI Workflow: Data Analysis and Hypothesis Testing', institution: 'IBM', completed: false },
  { id: 'ai-workflow-feature-engineering-and-bias-detection', title: 'AI Workflow: Feature Engineering and Bias Detection', institution: 'IBM', completed: false },
  { id: 'ai-workflow-machine-learning-visual-recognition-and-nlp', title: 'AI Workflow: Machine Learning, Visual Recognition and NLP', institution: 'IBM', completed: false },
  { id: 'ai-workflow-enterprise-model-deployment', title: 'AI Workflow: Enterprise Model Deployment', institution: 'IBM', completed: false },
  { id: 'ai-workflow-ai-in-production', title: 'AI Workflow: AI in Production', institution: 'IBM', completed: false },

  // --- IBM AI Foundations for Business ---
  { id: 'what-is-data-science', title: 'What is Data Science?', institution: 'IBM', grade: 100, completed: true, certificateUrl: 'https://www.coursera.org/account/accomplishments/certificate/KKZLAVXVG9Q7' },
  { id: 'the-ai-ladder-a-framework-for-deploying-ai-in-your-enterprise', title: 'The AI Ladder: A Framework for Deploying AI in your Enterprise', institution: 'IBM', grade: 100, completed: true, certificateUrl: 'https://www.coursera.org/account/accomplishments/certificate/9VNLLNUV47TV' },

  // --- Data Science core ---
  { id: 'tools-for-data-science', title: 'Tools for Data Science', institution: 'IBM', grade: 100, completed: true, certificateUrl: 'https://www.coursera.org/account/accomplishments/certificate/EX79Y4HEUE2B' },
  { id: 'data-science-methodology', title: 'Data Science Methodology', institution: 'IBM', grade: 100, completed: true, certificateUrl: 'https://www.coursera.org/account/accomplishments/certificate/DFGDYLS5HNNX' },
  { id: 'python-for-data-science-ai-and-development', title: 'Python for Data Science, AI & Development', institution: 'IBM', grade: 100, completed: true, certificateUrl: 'https://www.coursera.org/account/accomplishments/certificate/T46JKDPK8BUL' },
  { id: 'python-project-for-data-science', title: 'Python Project for Data Science', institution: 'IBM', grade: 100, completed: true, certificateUrl: 'https://www.coursera.org/account/accomplishments/certificate/2GQXSKT2WTFY' },
  { id: 'databases-and-sql-for-data-science-with-python', title: 'Databases and SQL for Data Science with Python', institution: 'IBM', grade: 100, completed: true, certificateUrl: 'https://www.coursera.org/account/accomplishments/certificate/NJT85D68P8DV' },
  { id: 'data-analysis-with-python', title: 'Data Analysis with Python', institution: 'IBM', grade: 99.5, completed: true, certificateUrl: 'https://www.coursera.org/account/accomplishments/certificate/KEDXNKXZBPAW' },
  { id: 'data-visualization-with-python', title: 'Data Visualization with Python', institution: 'IBM', grade: 100, completed: true, certificateUrl: 'https://www.coursera.org/account/accomplishments/certificate/5KF9AH3Y5LJA' },
  { id: 'machine-learning-with-python', title: 'Machine Learning with Python', institution: 'IBM', grade: 96.5, completed: true, certificateUrl: 'https://www.coursera.org/account/accomplishments/certificate/XMHAB8BSPAY9' },
  { id: 'applied-data-science-capstone', title: 'Applied Data Science Capstone', institution: 'IBM', grade: 98, completed: true, certificateUrl: 'https://www.coursera.org/account/accomplishments/certificate/L6QAD7HD624T' },
  { id: 'data-scientist-career-guide-and-interview-preparation', title: 'Data Scientist Career Guide and Interview Preparation', institution: 'IBM', completed: false },

  // --- Machine Learning ---
  { id: 'exploratory-data-analysis-for-machine-learning', title: 'Exploratory Data Analysis for Machine Learning', institution: 'IBM', grade: 100, completed: true, certificateUrl: 'https://www.coursera.org/account/accomplishments/records/CB996DX8D6PX' },
  { id: 'supervised-machine-learning-regression', title: 'Supervised Machine Learning: Regression', institution: 'IBM', grade: 88, completed: true, certificateUrl: 'https://www.coursera.org/account/accomplishments/records/BG8LR3WKAMN2' },
  { id: 'supervised-machine-learning-classification', title: 'Supervised Machine Learning: Classification', institution: 'IBM', grade: 99, completed: true, certificateUrl: 'https://www.coursera.org/account/accomplishments/records/355N8M8V4DXF' },
  { id: 'unsupervised-machine-learning', title: 'Unsupervised Machine Learning', institution: 'IBM', grade: 100, completed: true, certificateUrl: 'https://www.coursera.org/account/accomplishments/records/AX2KCSSWNGKK' },
  { id: 'deep-learning-and-reinforcement-learning', title: 'Deep Learning and Reinforcement Learning', institution: 'IBM', grade: 100, completed: true, certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/7QZ3ZLU6NECA' },
  { id: 'machine-learning-capstone', title: 'Machine Learning Capstone', institution: 'IBM', grade: 100, completed: true, certificateUrl: 'https://www.coursera.org/account/accomplishments/verify/XB4KK4H978Q5' },

  // --- Deep Learning ---
  { id: 'introduction-to-deep-learning-and-neural-networks-with-keras', title: 'Introduction to Deep Learning & Neural Networks with Keras', institution: 'IBM', grade: 100, completed: true, certificateUrl: 'https://www.coursera.org/account/accomplishments/certificate/NS2UPGLCP2EV' },
  { id: 'deep-learning-with-keras-and-tensorflow', title: 'Deep Learning with Keras and Tensorflow', institution: 'IBM', grade: 100, completed: true, certificateUrl: 'https://www.coursera.org/account/accomplishments/certificate/526UY7R2ZN8T' },
  { id: 'introduction-to-neural-networks-and-pytorch', title: 'Introduction to Neural Networks and PyTorch', institution: 'IBM', grade: 97.25, completed: true, certificateUrl: 'https://www.coursera.org/account/accomplishments/certificate/UXN2AEQNBYD3' },
  { id: 'deep-learning-with-pytorch', title: 'Deep Learning with PyTorch', institution: 'IBM', completed: false },
  { id: 'ai-capstone-project-with-deep-learning', title: 'AI Capstone Project with Deep Learning', institution: 'IBM', grade: 100, completed: true, certificateUrl: 'https://www.coursera.org/account/accomplishments/certificate/SX76BC97CHWK' },

  // --- IBM AI Developer ---
  { id: 'introduction-to-software-engineering', title: 'Introduction to Software Engineering', institution: 'IBM', completed: false },
  { id: 'introduction-to-html-css-and-javascript', title: 'Introduction to HTML, CSS, & JavaScript', institution: 'IBM', completed: false },
  { id: 'developing-ai-applications-with-python-and-flask', title: 'Developing AI Applications with Python and Flask', institution: 'IBM', completed: false },
  { id: 'building-generative-ai-powered-applications-with-python', title: 'Building Generative AI-Powered Applications with Python', institution: 'IBM', completed: false },
  { id: 'software-developer-career-guide-and-interview-preparation', title: 'Software Developer Career Guide and Interview Preparation', institution: 'IBM', completed: false },

  // --- Data Engineering ---
  { id: 'introduction-to-data-engineering', title: 'Introduction to Data Engineering', institution: 'IBM', completed: false },
  { id: 'python-project-for-data-engineering', title: 'Python Project for Data Engineering', institution: 'IBM', completed: false },
  { id: 'introduction-to-relational-databases-rdbms', title: 'Introduction to Relational Databases (RDBMS)', institution: 'IBM', completed: false },
  { id: 'hands-on-introduction-to-linux-commands-and-shell-scripting', title: 'Hands-on Introduction to Linux Commands and Shell Scripting', institution: 'IBM', completed: false },
  { id: 'relational-database-administration-dba', title: 'Relational Database Administration (DBA)', institution: 'IBM', completed: false },
  { id: 'etl-and-data-pipelines-with-shell-airflow-and-kafka', title: 'ETL and Data Pipelines with Shell, Airflow and Kafka', institution: 'IBM', completed: false },
  { id: 'data-warehouse-fundamentals', title: 'Data Warehouse Fundamentals', institution: 'IBM', completed: false },
  { id: 'bi-dashboards-with-ibm-cognos-analytics-and-google-looker', title: 'BI Dashboards with IBM Cognos Analytics and Google Looker', institution: 'IBM', completed: false },
  { id: 'introduction-to-nosql-databases', title: 'Introduction to NoSQL Databases', institution: 'IBM', completed: false },
  { id: 'introduction-to-big-data-with-spark-and-hadoop', title: 'Introduction to Big Data with Spark and Hadoop', institution: 'IBM', completed: false },
  { id: 'machine-learning-with-apache-spark', title: 'Machine Learning with Apache Spark', institution: 'IBM', completed: false },
  { id: 'data-engineering-capstone-project', title: 'Data Engineering Capstone Project', institution: 'IBM', completed: false },
  { id: 'data-engineering-career-guide-and-interview-preparation', title: 'Data Engineering Career Guide and Interview Preparation', institution: 'IBM', completed: false },

  // --- Key Technologies for Business ---
  { id: 'introduction-to-cloud-computing', title: 'Introduction to Cloud Computing', institution: 'IBM', grade: 96, completed: true, certificateUrl: 'https://www.coursera.org/account/accomplishments/certificate/JNM8LFXUA4TD' },

  // --- Computer Vision ---
  { id: 'introduction-to-computer-vision-and-image-processing', title: 'Introduction to Computer Vision and Image Processing', institution: 'IBM', grade: 97, completed: true, certificateUrl: 'https://www.coursera.org/account/accomplishments/certificate/JPV7VBWZ9WSF' },

  // --- HKUST Full-Stack ---
  { id: 'front-end-web-ui-frameworks-and-tools-bootstrap-4', title: 'Front-End Web UI Frameworks and Tools: Bootstrap 4', institution: 'HKUST', grade: 100, completed: true, certificateUrl: 'https://www.coursera.org/account/accomplishments/certificate/FQVS9PREEXR8' },
  { id: 'front-end-web-development-with-react', title: 'Front-End Web Development with React', institution: 'HKUST', grade: 100, completed: true, certificateUrl: 'https://www.coursera.org/account/accomplishments/certificate/VGTCJKAMXE79' },
  { id: 'server-side-development-with-nodejs-express-and-mongodb', title: 'Server-side Development with NodeJS, Express and MongoDB', institution: 'HKUST', grade: 100, completed: true, certificateUrl: 'https://www.coursera.org/account/accomplishments/certificate/D54L8UN9LEBA' },

  // --- Other ---
  { id: 'crash-course-on-python', title: 'Crash Course on Python', institution: 'Google', grade: 100, completed: true, certificateUrl: 'https://www.coursera.org/account/accomplishments/certificate/DZ44UBQ5BHCJ' },
  { id: 'understanding-research-methods', title: 'Understanding Research Methods', institution: 'University of London / SOAS', grade: 100, completed: true },
];

export const courseMap = new Map(courses.map(c => [c.id, c]));
