import React from 'react';
import { ArrowLeft, Brain, Code, Database, TrendingUp } from 'lucide-react';

interface AIPythonPageProps {
  onBack: () => void;
}

export function AIPythonPage({ onBack }: AIPythonPageProps) {
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
            <Brain className="w-8 h-8 text-white" />
            <h1 className="text-3xl font-bold">AI with Python</h1>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <section className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Brain className="w-6 h-6 mr-2" />
              Introduction to AI with Python
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Artificial Intelligence (AI) with Python combines the power of machine learning algorithms with Python's 
              simplicity and extensive ecosystem. Python has become the de facto language for AI development due to its 
              readable syntax, powerful libraries, and strong community support.
            </p>
            <p className="text-gray-300 leading-relaxed">
              This field encompasses machine learning, deep learning, natural language processing, computer vision, and 
              robotics. Python's libraries like TensorFlow, PyTorch, scikit-learn, and pandas make it accessible for 
              both beginners and experts to build intelligent systems that can learn, reason, and make decisions.
            </p>
          </section>

          {/* Python Fundamentals for AI */}
          <section className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Code className="w-6 h-6 mr-2" />
              Python Fundamentals for AI
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">NumPy - Numerical Computing</h3>
                <p className="text-gray-300 leading-relaxed">
                  NumPy provides support for large, multi-dimensional arrays and matrices, along with mathematical functions 
                  to operate on them. It's the foundation for most AI libraries in Python, offering efficient array operations, 
                  broadcasting, and linear algebra functions essential for machine learning algorithms.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Pandas - Data Manipulation</h3>
                <p className="text-gray-300 leading-relaxed">
                  Pandas excels at data manipulation and analysis, providing data structures like DataFrames for handling 
                  structured data. It offers tools for reading/writing data, cleaning datasets, handling missing values, 
                  and performing complex data transformations - crucial skills for preparing data for AI models.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Matplotlib & Seaborn - Data Visualization</h3>
                <p className="text-gray-300 leading-relaxed">
                  Visualization libraries help understand data patterns and model performance. Matplotlib provides low-level 
                  plotting capabilities, while Seaborn offers high-level statistical visualizations. These tools are essential 
                  for exploratory data analysis and communicating AI insights effectively.
                </p>
              </div>
            </div>
          </section>

          {/* Machine Learning */}
          <section className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <TrendingUp className="w-6 h-6 mr-2" />
              Machine Learning Concepts
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Supervised Learning</h3>
                <p className="text-gray-300 leading-relaxed">
                  Supervised learning uses labeled training data to learn patterns and make predictions. Classification 
                  algorithms like Random Forest and Support Vector Machines predict categories, while regression algorithms 
                  like Linear Regression predict continuous values. Scikit-learn provides implementations of these algorithms 
                  with consistent APIs.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Unsupervised Learning</h3>
                <p className="text-gray-300 leading-relaxed">
                  Unsupervised learning finds hidden patterns in data without labeled examples. Clustering algorithms like 
                  K-means group similar data points, while dimensionality reduction techniques like PCA simplify complex 
                  datasets. These methods are valuable for data exploration and feature engineering.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Model Evaluation</h3>
                <p className="text-gray-300 leading-relaxed">
                  Proper model evaluation prevents overfitting and ensures generalization. Techniques include cross-validation, 
                  train-test splits, and metrics like accuracy, precision, recall, and F1-score. Understanding bias-variance 
                  tradeoff and regularization helps build robust models that perform well on unseen data.
                </p>
              </div>
            </div>
          </section>

          {/* Deep Learning */}
          <section className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4">Deep Learning Frameworks</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">TensorFlow & Keras</h3>
                <p className="text-gray-300 leading-relaxed">
                  TensorFlow is Google's open-source deep learning framework, with Keras as its high-level API. They enable 
                  building neural networks for image recognition, natural language processing, and time series analysis. 
                  TensorFlow's ecosystem includes tools for model deployment, visualization, and production scaling.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">PyTorch</h3>
                <p className="text-gray-300 leading-relaxed">
                  PyTorch, developed by Facebook, offers dynamic computational graphs and intuitive debugging. It's popular 
                  in research communities for its flexibility and ease of use. PyTorch Lightning provides structure for 
                  organizing PyTorch code, while torchvision offers pre-trained models for computer vision tasks.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Neural Network Architectures</h3>
                <p className="text-gray-300 leading-relaxed">
                  Understanding different architectures is crucial: Convolutional Neural Networks (CNNs) excel at image 
                  processing, Recurrent Neural Networks (RNNs) handle sequential data, and Transformers revolutionize 
                  natural language processing. Each architecture solves specific types of problems effectively.
                </p>
              </div>
            </div>
          </section>

          {/* Specialized AI Domains */}
          <section className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4">Specialized AI Domains</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Natural Language Processing (NLP)</h3>
                <p className="text-gray-300 leading-relaxed">
                  NLP enables computers to understand and generate human language. Libraries like NLTK, spaCy, and Hugging 
                  Face Transformers provide tools for text preprocessing, sentiment analysis, named entity recognition, and 
                  language translation. Modern NLP relies heavily on transformer models like BERT and GPT.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Computer Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  Computer vision teaches machines to interpret visual information. OpenCV provides traditional image processing 
                  tools, while deep learning frameworks enable object detection, facial recognition, and image generation. 
                  Applications range from medical imaging to autonomous vehicles and augmented reality.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Reinforcement Learning</h3>
                <p className="text-gray-300 leading-relaxed">
                  Reinforcement learning trains agents to make decisions through trial and error, maximizing cumulative rewards. 
                  Libraries like OpenAI Gym provide environments for testing algorithms. This approach has achieved breakthroughs 
                  in game playing, robotics, and autonomous systems.
                </p>
              </div>
            </div>
          </section>

          {/* Career Opportunities */}
          <section className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4">Career Paths in AI</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              AI with Python opens doors to exciting career opportunities:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Machine Learning Engineer - Building and deploying ML models</li>
              <li>Data Scientist - Extracting insights from complex datasets</li>
              <li>AI Research Scientist - Advancing the field through research</li>
              <li>Computer Vision Engineer - Developing visual AI systems</li>
              <li>NLP Engineer - Creating language understanding systems</li>
              <li>AI Product Manager - Leading AI-powered product development</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              The AI field is rapidly growing, with applications in healthcare, finance, entertainment, and virtually every 
              industry. Python's role as the primary AI language ensures strong job prospects and competitive salaries for 
              skilled practitioners.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}