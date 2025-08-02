import React from 'react';
import AnimatedQuery from './components/AnimatedQuery';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';
import { 
  Zap, 
  Clock, 
  Users, 
  Search, 
  Bot, 
  Calendar,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Mail,
  Phone,
  Target,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = React.useState<'home' | 'pricing' | 'terms' | 'privacy'>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  if (currentPage === 'pricing') {
    return <Pricing onNavigateHome={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'terms') {
    return <TermsOfService onNavigateHome={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'privacy') {
    return <PrivacyPolicy onNavigateHome={() => setCurrentPage('home')} />;
  }

  return (
    <div className="min-h-screen bg-background text-text-black">
      {/* Navigation */}
      <nav className="bg-surface/95 backdrop-blur-sm border-b border-gray-300 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <a href="https://peregrineone.ai/" className="flex items-center space-x-3">
              <img src="/swallow.svg" alt="PeregrineOne" className="h-8 w-8" />
              <span className="text-xl font-bold text-text-black">PeregrineOne</span>
            </a>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#solution" className="text-gray-600 hover:text-text-black transition-colors">Solution</a>
              <a href="#features" className="text-gray-600 hover:text-text-black transition-colors">Features</a>
              <a href="#customers" className="text-gray-600 hover:text-text-black transition-colors">Customers</a>
              <a href="#pricing" className="text-gray-600 hover:text-text-black transition-colors">Pricing</a>
              <a 
                href="https://app.peregrineone.ai/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-accent hover:bg-accent/90 text-text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Launch App
              </a>
              <a 
                href="https://cal.com/peregrineone/intro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-accent hover:bg-accent/90 text-text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Book Intro Call
              </a>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-text-black hover:text-accent transition-colors"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-300 py-4">
              <div className="flex flex-col space-y-4">
                <a 
                  href="#solution" 
                  className="text-gray-600 hover:text-text-black transition-colors px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Solution
                </a>
                <a 
                  href="#features" 
                  className="text-gray-600 hover:text-text-black transition-colors px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Features
                </a>
                <a 
                  href="#customers" 
                  className="text-gray-600 hover:text-text-black transition-colors px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Customers
                </a>
                <a 
                  href="#pricing" 
                  className="text-gray-600 hover:text-text-black transition-colors px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Pricing
                </a>
                <a 
                  href="https://app.peregrineone.ai/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-accent hover:bg-accent/90 text-text-white px-4 py-2 rounded-lg font-medium transition-colors mx-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Launch App
                </a>
                <a 
                  href="https://cal.com/peregrineone/intro" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-accent hover:bg-accent/90 text-text-white px-4 py-2 rounded-lg font-medium transition-colors mx-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book Intro Call
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-12 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-surface backdrop-blur-sm border border-gray-300 rounded-3xl p-12 text-center min-h-[400px] flex flex-col justify-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-accent">
              AI-Powered Lead Discovery
            </h1>
            <div className="mb-8 max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-700 mb-4 leading-relaxed">
                The Fastest Way to Book Sales Calls with Newly Registered Businesses
              </p>
              <p className="text-lg md:text-xl text-gray-600 text-center">
                Powered by AI Agents
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-surface backdrop-blur-sm border border-gray-300 rounded-3xl p-12 min-h-[400px] flex flex-col justify-center">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Sales Teams Are Missing Out</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Most B2B sales teams lose high-intent customers due to outdated processes and delayed outreach
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/50 p-8 rounded-xl border border-gray-300">
                <Clock className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-3">Too Late to Market</h3>
                <p className="text-gray-700">By the time sales teams reach prospects, they've already chosen another vendor</p>
              </div>
              
              <div className="bg-white/50 p-8 rounded-xl border border-gray-300">
                <Search className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-3">Outdated Lead Sources</h3>
                <p className="text-gray-700">Hours spent searching spreadsheets only to find unusable, stale data</p>
              </div>
              
              <div className="bg-white/50 p-8 rounded-xl border border-gray-300">
                <Target className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-3">Unqualified Prospects</h3>
                <p className="text-gray-700">Having contacts doesn't guarantee interest - most leads are just guesswork</p>
              </div>
              
              <div className="bg-white/50 p-8 rounded-xl border border-gray-300">
                <Zap className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-3">Slow Manual Process</h3>
                <p className="text-gray-700">Fragmented tools create friction from initial targeting to final meeting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-surface backdrop-blur-sm border border-gray-300 rounded-3xl p-12 min-h-[400px] flex flex-col justify-center">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">The PeregrineOne Solution</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                From "Show me restaurants in New York registered last week" to booked meetings - all automated with human oversight
              </p>
            </div>

            <div className="grid lg:grid-cols-4 gap-8">
              <div className="bg-white/50 p-8 rounded-xl border border-gray-300">
                <div className="bg-accent p-3 rounded-lg w-fit mb-4">
                  <Search className="h-6 w-6 text-text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">1. Query Registration Data</h3>
                <p className="text-gray-700">Real-time access to new business registrations with natural language search</p>
              </div>

              <div className="bg-white/50 p-8 rounded-xl border border-gray-300">
                <div className="bg-accent p-3 rounded-lg w-fit mb-4">
                  <Users className="h-6 w-6 text-text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">2. Identify Prospects</h3>
                <p className="text-gray-700">AI identifies relevant businesses and finds verified contact information</p>
              </div>

              <div className="bg-white/50 p-8 rounded-xl border border-gray-300">
                <div className="bg-accent p-3 rounded-lg w-fit mb-4">
                  <Bot className="h-6 w-6 text-text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">3. AI-Powered Outreach</h3>
                <p className="text-gray-700">Customized conversation flows with intelligent follow-up sequences</p>
              </div>

              <div className="bg-white/50 p-8 rounded-xl border border-gray-300">
                <div className="bg-accent p-3 rounded-lg w-fit mb-4">
                  <Calendar className="h-6 w-6 text-text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">4. Automatic Scheduling</h3>
                <p className="text-gray-700">Qualified leads automatically scheduled directly into your calendar</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-surface backdrop-blur-sm border border-gray-300 rounded-3xl p-12 min-h-[400px] flex flex-col justify-center">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Why PeregrineOne Wins</h2>
              <p className="text-xl text-gray-700">Speed, precision, and simplicity in one platform</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Natural Language Search</h3>
                      <p className="text-gray-700">No complex filters - just describe what you're looking for in plain English</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">End-to-End Automation</h3>
                      <p className="text-gray-700">From lead discovery to booked meeting - one seamless workflow</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">First-Mover Advantage</h3>
                      <p className="text-gray-700">Real-time data means you contact prospects before your competition</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Human-in-the-Loop</h3>
                      <p className="text-gray-700">Full control and customization at every stage of the process</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/50 p-8 rounded-2xl border border-gray-300">
                <div className="text-center">
                  <TrendingUp className="h-16 w-16 text-accent mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-4 text-text-black">Convert More Leads</h3>
                  <p className="text-gray-700 mb-6">Early engagement leads to higher conversion rates and better customer relationships</p>
                  <AnimatedQuery />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Customers */}
      <section id="customers" className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-surface backdrop-blur-sm border border-gray-300 rounded-3xl p-12 min-h-[400px] flex flex-col justify-center">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Built for Any B2B Sales Team</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Perfect for any B2B company that needs to reach new businesses quickly. 
                From insurance to fintech, marketing to manufacturing - if you sell to businesses, we help you get there first.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/50 p-8 rounded-xl border border-gray-300 text-center">
                <div className="bg-accent p-4 rounded-full w-fit mx-auto mb-6">
                  <Users className="h-8 w-8 text-text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Insurance Agents</h3>
                <p className="text-gray-700">Commercial line insurance agents who need to reach new businesses quickly</p>
              </div>

              <div className="bg-white/50 p-8 rounded-xl border border-gray-300 text-center">
                <div className="bg-accent p-4 rounded-full w-fit mx-auto mb-6">
                  <Zap className="h-8 w-8 text-text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Payment Processors</h3>
                <p className="text-gray-700">Companies offering payment solutions to newly registered businesses</p>
              </div>

              <div className="bg-white/50 p-8 rounded-xl border border-gray-300 text-center">
                <div className="bg-accent p-4 rounded-full w-fit mx-auto mb-6">
                  <TrendingUp className="h-8 w-8 text-text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">And Many More</h3>
                <p className="text-gray-700">Any B2B company in fragmented industries seeking qualified leads and first-mover advantage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-surface backdrop-blur-sm border border-gray-300 rounded-3xl p-12 min-h-[400px] flex flex-col justify-center">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-700">Enterprise solutions built for your success</p>
            </div>

            <div className="max-w-md mx-auto">
            <div className="max-w-lg mx-auto">
              <div className="bg-white/70 p-10 rounded-3xl shadow-2xl border border-gray-300">
                {/* Top Section */}
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-text-black mb-3 font-sans">Enterprise Plan</h3>
                  <p className="text-gray-700 text-lg font-light">Tailored solutions for high-volume teams</p>
                </div>
                
                {/* Divider */}
                <div className="w-full h-px bg-gray-300 mb-8"></div>
                
                {/* Middle Section - Features */}
                <div className="space-y-5 mb-10">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-text-white" />
                    </div>
                    <span className="text-text-black text-lg font-medium">Built-for-you AI workflows</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-text-white" />
                    </div>
                    <span className="text-text-black text-lg font-medium">24/7 white-glove support</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-text-white" />
                    </div>
                    <span className="text-text-black text-lg font-medium">Volume-based pricing discounts</span>
                  </div>
                </div>
                
                {/* Bottom Section - CTA */}
                <div className="text-center">
                  <a 
                    href="https://cal.com/peregrineone/build" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full bg-accent hover:bg-accent/90 text-text-white font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-200 shadow-lg transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  >
                    Let's Build Your Plan
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-accent/10 backdrop-blur-sm border border-accent rounded-3xl p-12 min-h-[400px] flex flex-col justify-center">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get There First?</h2>
              <p className="text-xl text-gray-700 mb-8">
                Join the sales teams that are winning with AI-powered lead discovery
              </p>
              <a 
                href="https://cal.com/peregrineone/intro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-accent hover:bg-accent/90 text-text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 mx-auto"
              >
                Book Intro Call
                <Calendar className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-surface border-t border-gray-300 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <a href="https://peregrineone.ai/" className="flex items-center space-x-3 mb-4 md:mb-0">
              <img src="/swallow.svg" alt="PeregrineOne" className="h-6 w-6" />
              <span className="text-xl font-bold text-text-black">PeregrineOne</span>
            </a>
            <div className="flex items-center space-x-6">
              <a href="mailto:team@peregrineone.com" className="text-gray-600 hover:text-text-black transition-colors flex items-center gap-2">
                <Mail className="h-4 w-4" />
                team@peregrineone.com
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t border-gray-300">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <a 
                href="https://peregrineone.ai" 
                className="text-gray-600 hover:text-text-black transition-colors"
              >
                Home
              </a>
              <a 
                href="/tos.html" 
                className="text-gray-600 hover:text-text-black transition-colors"
              >
                Terms of Service
              </a>
              <a 
                href="/privacy.html" 
                className="text-gray-600 hover:text-text-black transition-colors"
              >
                Privacy Policy
              </a>
            </div>
            <div className="text-gray-600">
              <p>&copy; 2025 PeregrineOne. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Pricing({ onNavigateHome }: { onNavigateHome: () => void }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-background text-text-black">
      <nav className="bg-surface/95 backdrop-blur-sm border-b border-gray-300 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <img src="/swallow.svg" alt="PeregrineOne" className="h-8 w-8" />
              <span className="text-xl font-bold text-text-black">PeregrineOne</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={onNavigateHome}
                className="text-gray-600 hover:text-text-black transition-colors"
              >
                Home
              </button>
              <a 
                href="https://app.peregrineone.ai/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-accent hover:bg-accent/90 text-text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Launch App
              </a>
              <a 
                href="https://cal.com/peregrineone/intro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-accent hover:bg-accent/90 text-text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Book Intro Call
              </a>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-text-black hover:text-accent transition-colors"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-300 py-4">
              <div className="flex flex-col space-y-4">
                <button 
                  onClick={() => {
                    onNavigateHome();
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-gray-600 hover:text-text-black transition-colors px-4 py-2 text-left"
                >
                  Home
                </button>
                <a 
                  href="https://app.peregrineone.ai/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-accent hover:bg-accent/90 text-text-white px-4 py-2 rounded-lg font-medium transition-colors mx-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Launch App
                </a>
                <a 
                  href="https://cal.com/peregrineone/intro" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-accent hover:bg-accent/90 text-text-white px-4 py-2 rounded-lg font-medium transition-colors mx-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Book Intro Call
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>
      
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Pricing</h1>
          <p className="text-xl text-gray-700 mb-12">Custom pricing tailored to your needs</p>
          
          <div className="bg-surface p-8 rounded-2xl border border-gray-300">
            <h2 className="text-3xl font-bold mb-4">Enterprise Solution</h2>
            <div className="text-4xl font-bold mb-6">Let's Talk</div>
            <p className="text-gray-700 mb-8">
              Custom pricing and features tailored specifically to your sales team's needs and volume requirements.
            </p>
            <button className="bg-accent hover:bg-accent/90 text-text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Contact Us for Pricing
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;