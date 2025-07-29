import React from 'react';
import { ArrowLeft, Shield, Lock, AlertTriangle, Eye } from 'lucide-react';

interface CybersecurityPageProps {
  onBack: () => void;
}

export function CybersecurityPage({ onBack }: CybersecurityPageProps) {
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
            <Shield className="w-8 h-8 text-white" />
            <h1 className="text-3xl font-bold">Cybersecurity Beginner Track</h1>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-8">
          {/* Introduction */}
          <section className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Shield className="w-6 h-6 mr-2" />
              Introduction to Cybersecurity
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These attacks 
              are usually aimed at accessing, changing, or destroying sensitive information, extorting money from users, or 
              interrupting normal business processes.
            </p>
            <p className="text-gray-300 leading-relaxed">
              As our world becomes increasingly digital, cybersecurity has become one of the most critical fields in technology. 
              From protecting personal data to securing national infrastructure, cybersecurity professionals play a vital role 
              in maintaining the safety and integrity of our digital ecosystem.
            </p>
          </section>

          {/* Fundamentals */}
          <section className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4">Cybersecurity Fundamentals</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">The CIA Triad</h3>
                <p className="text-gray-300 leading-relaxed">
                  The foundation of cybersecurity rests on three pillars: Confidentiality (ensuring information is accessible 
                  only to authorized individuals), Integrity (maintaining accuracy and completeness of data), and Availability 
                  (ensuring authorized users have access when needed). These principles guide all security decisions and implementations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Risk Management</h3>
                <p className="text-gray-300 leading-relaxed">
                  Risk management involves identifying, assessing, and prioritizing security risks, then implementing controls 
                  to minimize their impact. This includes threat modeling, vulnerability assessments, and developing incident 
                  response plans. Understanding risk helps organizations allocate security resources effectively.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Defense in Depth</h3>
                <p className="text-gray-300 leading-relaxed">
                  This strategy implements multiple layers of security controls throughout an IT system. If one layer fails, 
                  others continue to provide protection. Layers include physical security, network security, endpoint protection, 
                  application security, and user education - creating a comprehensive security posture.
                </p>
              </div>
            </div>
          </section>

          {/* Common Threats */}
          <section className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <AlertTriangle className="w-6 h-6 mr-2" />
              Common Cyber Threats
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Malware</h3>
                <p className="text-gray-300 leading-relaxed">
                  Malicious software includes viruses, worms, trojans, ransomware, and spyware. Each type has different 
                  propagation methods and objectives. Modern malware often uses sophisticated techniques like polymorphism 
                  and encryption to evade detection. Understanding malware behavior is crucial for developing effective defenses.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Social Engineering</h3>
                <p className="text-gray-300 leading-relaxed">
                  These attacks manipulate human psychology rather than technical vulnerabilities. Phishing emails, pretexting, 
                  baiting, and tailgating are common techniques. Social engineering often serves as the initial attack vector 
                  for more complex breaches, making user awareness and training essential components of security programs.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Network Attacks</h3>
                <p className="text-gray-300 leading-relaxed">
                  Network-based attacks include man-in-the-middle attacks, DDoS attacks, packet sniffing, and session hijacking. 
                  These attacks exploit vulnerabilities in network protocols and infrastructure. Understanding network security 
                  principles and implementing proper network segmentation helps mitigate these threats.
                </p>
              </div>
            </div>
          </section>

          {/* Security Technologies */}
          <section className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Lock className="w-6 h-6 mr-2" />
              Security Technologies
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Cryptography</h3>
                <p className="text-gray-300 leading-relaxed">
                  Cryptography protects information through encryption, hashing, and digital signatures. Symmetric encryption 
                  uses the same key for encryption and decryption, while asymmetric encryption uses key pairs. Hash functions 
                  ensure data integrity, and digital signatures provide authentication and non-repudiation.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Firewalls and IDS/IPS</h3>
                <p className="text-gray-300 leading-relaxed">
                  Firewalls control network traffic based on predetermined security rules, acting as barriers between trusted 
                  and untrusted networks. Intrusion Detection Systems (IDS) monitor for malicious activity, while Intrusion 
                  Prevention Systems (IPS) can automatically block detected threats. These tools form the backbone of network security.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Identity and Access Management</h3>
                <p className="text-gray-300 leading-relaxed">
                  IAM systems control who has access to what resources and under what circumstances. This includes authentication 
                  (verifying identity), authorization (granting permissions), and accounting (tracking access). Multi-factor 
                  authentication, single sign-on, and privileged access management are key IAM components.
                </p>
              </div>
            </div>
          </section>

          {/* Security Operations */}
          <section className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Eye className="w-6 h-6 mr-2" />
              Security Operations
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Security Monitoring</h3>
                <p className="text-gray-300 leading-relaxed">
                  Continuous monitoring involves collecting and analyzing security events from various sources like logs, 
                  network traffic, and system activities. Security Information and Event Management (SIEM) systems aggregate 
                  and correlate this data to identify potential threats and security incidents in real-time.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Incident Response</h3>
                <p className="text-gray-300 leading-relaxed">
                  When security incidents occur, having a well-defined response process is crucial. This includes preparation, 
                  identification, containment, eradication, recovery, and lessons learned. Incident response teams must be 
                  trained and equipped to handle various types of security breaches effectively.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Vulnerability Management</h3>
                <p className="text-gray-300 leading-relaxed">
                  Regular vulnerability assessments and penetration testing help identify security weaknesses before attackers 
                  can exploit them. This process includes vulnerability scanning, risk assessment, patch management, and 
                  remediation tracking. Staying current with security patches and updates is essential for maintaining security.
                </p>
              </div>
            </div>
          </section>

          {/* Career Paths */}
          <section className="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <h2 className="text-2xl font-bold mb-4">Cybersecurity Career Paths</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Cybersecurity offers diverse career opportunities across various specializations:
            </p>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Security Analyst - Monitoring and analyzing security events</li>
              <li>Penetration Tester - Ethical hacking to find vulnerabilities</li>
              <li>Security Architect - Designing secure systems and networks</li>
              <li>Incident Response Specialist - Managing security breaches</li>
              <li>Compliance Officer - Ensuring regulatory compliance</li>
              <li>Chief Information Security Officer (CISO) - Leading security strategy</li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              The cybersecurity field is experiencing rapid growth due to increasing digital threats and regulatory requirements. 
              Professional certifications like CISSP, CEH, and CompTIA Security+ can help advance your career. The field offers 
              excellent job security, competitive salaries, and the satisfaction of protecting organizations and individuals 
              from cyber threats.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}