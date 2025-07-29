import React from 'react';
import { ArrowLeft, Code, Database, Globe, Server } from 'lucide-react';

interface FullStackPageProps {
  onBack: () => void;
}

export function FullStackPage({ onBack }: FullStackPageProps) {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors mr-4"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex items-center space-x-3">
            <Globe className="w-8 h-8 text-white" />
            <h1 className="text-3xl font-bold">Full Stack Development</h1>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <section className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Code className="w-6 h-6 mr-2" />
              What is Full Stack Development?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Full Stack Development refers to the practice of working on both the front-end (client-side) and back-end (server-side) 
              portions of web applications. A full stack developer is proficient in multiple programming languages and frameworks, 
              capable of handling databases, servers, systems engineering, and clients.
            </p>
            <p className="text-gray-300 leading-relaxed">
              This comprehensive approach allows developers to understand the complete web development process, from user interface 
              design to server architecture and database management. Full stack developers are highly valued in the industry for 
              their versatility and ability to work across different layers of application development.
            </p>
          </section>

          {/* Frontend Technologies */}
          <section className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4">Frontend Technologies</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">HTML (HyperText Markup Language)</h3>
                <p className="text-gray-300 leading-relaxed">
                  HTML is the foundation of web development, providing the structure and content of web pages. It uses markup tags 
                  to define elements like headings, paragraphs, links, images, and forms. Modern HTML5 introduces semantic elements 
                  that improve accessibility and SEO, making web content more meaningful and structured.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">CSS (Cascading Style Sheets)</h3>
                <p className="text-gray-300 leading-relaxed">
                  CSS controls the visual presentation of HTML elements, including layout, colors, fonts, and animations. Modern CSS 
                  features like Flexbox and Grid provide powerful layout capabilities, while CSS preprocessors like Sass and Less 
                  enhance development workflow with variables, mixins, and nested rules.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">JavaScript</h3>
                <p className="text-gray-300 leading-relaxed">
                  JavaScript brings interactivity to web pages, handling user events, manipulating the DOM, and communicating with 
                  servers. ES6+ features like arrow functions, destructuring, and modules have modernized JavaScript development. 
                  Popular frameworks like React, Vue, and Angular build upon JavaScript to create complex user interfaces.
                </p>
              </div>
            </div>
          </section>

          {/* Backend Technologies */}
          <section className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Server className="w-6 h-6 mr-2" />
              Backend Technologies
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Node.js</h3>
                <p className="text-gray-300 leading-relaxed">
                  Node.js enables JavaScript to run on the server side, creating a unified development experience. It's built on 
                  Chrome's V8 engine and uses an event-driven, non-blocking I/O model that makes it efficient for data-intensive 
                  real-time applications. Express.js is a popular framework that simplifies Node.js web application development.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Python (Django/Flask)</h3>
                <p className="text-gray-300 leading-relaxed">
                  Python offers robust web frameworks like Django and Flask. Django follows the "batteries included" philosophy, 
                  providing an ORM, admin interface, and security features out of the box. Flask is more lightweight and flexible, 
                  allowing developers to choose their components and structure their applications as needed.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">API Development</h3>
                <p className="text-gray-300 leading-relaxed">
                  RESTful APIs and GraphQL are essential for modern web applications. REST APIs use HTTP methods to perform CRUD 
                  operations, while GraphQL provides a more flexible query language. Understanding authentication, rate limiting, 
                  and API documentation is crucial for building secure and maintainable backend services.
                </p>
              </div>
            </div>
          </section>

          {/* Database Management */}
          <section className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Database className="w-6 h-6 mr-2" />
              Database Management
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">SQL Databases</h3>
                <p className="text-gray-300 leading-relaxed">
                  Relational databases like PostgreSQL, MySQL, and SQLite use structured query language (SQL) to manage data. 
                  They enforce ACID properties and use schemas to define data structure. Understanding joins, indexes, and 
                  normalization is essential for efficient database design and query optimization.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">NoSQL Databases</h3>
                <p className="text-gray-300 leading-relaxed">
                  NoSQL databases like MongoDB, Redis, and Cassandra offer flexible data models for different use cases. 
                  Document databases store JSON-like documents, key-value stores provide fast lookups, and graph databases 
                  excel at relationship-heavy data. Choosing the right database depends on your application's specific requirements.
                </p>
              </div>
            </div>
          </section>

          {/* DevOps and Deployment */}
          <section className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4">DevOps and Deployment</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Version Control</h3>
                <p className="text-gray-300 leading-relaxed">
                  Git is the industry standard for version control, enabling collaboration and code history tracking. Platforms 
                  like GitHub, GitLab, and Bitbucket provide hosting and additional features like pull requests, issue tracking, 
                  and CI/CD pipelines. Understanding branching strategies and merge conflicts is essential for team development.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Cloud Deployment</h3>
                <p className="text-gray-300 leading-relaxed">
                  Modern applications are deployed on cloud platforms like AWS, Google Cloud, and Azure. Understanding containers 
                  (Docker), orchestration (Kubernetes), and serverless functions enables scalable and maintainable deployments. 
                  CI/CD pipelines automate testing and deployment processes, ensuring reliable software delivery.
                </p>
              </div>
            </div>
          </section>

          {/* Career Path */}
          <section className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4">Career Opportunities</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Full stack developers are in high demand across industries. Career paths include:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Full Stack Developer at startups and established companies</li>
              <li>Technical Lead or Engineering Manager roles</li>
              <li>Freelance web development consultant</li>
              <li>Product Manager with technical background</li>
              <li>Entrepreneur building your own web applications</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              The versatility of full stack skills makes developers valuable assets who can contribute to all aspects of 
              web application development, from initial concept to production deployment.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}