import React from 'react';
import { ArrowLeft, Mail } from 'lucide-react';

interface PrivacyPolicyProps {
  onNavigateHome: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onNavigateHome }) => {
  return (
    <div className="min-h-screen bg-background text-text-black">
      {/* Navigation */}
      <nav className="bg-surface/95 backdrop-blur-sm border-b border-gray-300 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-text-black">PeregrineOne</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={onNavigateHome}
                className="text-gray-600 hover:text-text-black transition-colors flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </button>
              <a 
                href="https://app.peregrineone.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-accent hover:bg-accent/90 text-text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Launch App
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-surface backdrop-blur-sm border border-gray-300 rounded-3xl p-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-text-black mb-4">Introduction</h2>
                <p className="mb-4">
                  Welcome to PeregrineOne ("we," "our," or "us"). We are committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
                </p>
                <p>
                  By accessing or using PeregrineOne, you agree to the practices described in this Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-black mb-4">Information We Collect</h2>
                <p className="mb-4">We collect information that you provide directly to us, including:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Account Information:</strong> Name, email address, company details, role/title</li>
                  <li><strong>Profile and Preferences:</strong> Lead targeting criteria, industry focus, outreach preferences</li>
                  <li><strong>Communications:</strong> Messages, feedback, call notes, and interactions with our platform or agents</li>
                  <li><strong>Activity Data:</strong> Call activity, scheduling history, and lead engagement outcomes</li>
                </ul>
                <p className="mb-4">We also collect certain information automatically, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Device and Usage Data:</strong> IP address, browser type, operating system, device identifiers, and usage patterns</li>
                  <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar technologies to improve user experience and understand platform engagement</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-black mb-4">How We Use Your Information</h2>
                <p className="mb-4">We use your information to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide and operate the PeregrineOne platform</li>
                  <li>Identify and suggest high-quality B2B leads</li>
                  <li>Schedule meetings between you and prospective leads</li>
                  <li>Personalize agent outreach workflows based on your preferences</li>
                  <li>Send technical updates, security alerts, and administrative messages</li>
                  <li>Analyze usage trends and improve our product</li>
                  <li>Ensure platform integrity and prevent fraudulent or harmful activity</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-black mb-4">Sharing Your Information</h2>
                <p className="mb-4">We may share your information in the following cases:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>With Leads and Prospects:</strong> Based on your outreach preferences and with your explicit direction</li>
                  <li><strong>With Service Providers:</strong> Who help us with hosting, analytics, communications, and outreach infrastructure</li>
                  <li><strong>Legal Requirements:</strong> If required by law, court order, or legal process</li>
                  <li><strong>Business Transactions:</strong> If PeregrineOne is involved in a merger, acquisition, or sale of assets</li>
                  <li><strong>With Consent:</strong> In any situation where you have given explicit permission</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-black mb-4">Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-black mb-4">Your Rights</h2>
                <p className="mb-4">Depending on your jurisdiction, you may have the right to:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Access the personal data we hold about you</li>
                  <li>Correct or update your information</li>
                  <li>Request deletion of your data</li>
                  <li>Restrict or object to certain processing activities</li>
                  <li>Request a copy of your data in a portable format</li>
                </ul>
                <p>To exercise these rights, please email us at team@peregrineone.ai.</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-black mb-4">Data Retention</h2>
                <p>
                  We retain your personal data for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. You may request deletion of your account at any time.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-black mb-4">Children's Privacy</h2>
                <p>
                  PeregrineOne is not intended for use by individuals under the age of 18. We do not knowingly collect personal data from children. If you believe we have inadvertently collected such data, please contact us.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-black mb-4">Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. If material changes are made, we will notify you through the platform or via email. Continued use of PeregrineOne after such updates constitutes your acceptance of the new terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-text-black mb-4">Contact Us</h2>
                <p className="flex items-center gap-2">
                  If you have any questions or concerns about this Privacy Policy or how we handle your data, please reach out to us at:
                  <Mail className="h-4 w-4" />
                  <a href="mailto:team@peregrineone.ai" className="text-accent hover:text-accent/80 transition-colors">
                    team@peregrineone.ai
                  </a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;