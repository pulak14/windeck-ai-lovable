
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const solutions = [
  {
    title: "Freelance Consultants",
    description: "Create professional proposals that help you close more clients and look more established than your competition.",
    icon: "👩‍💼",
    benefits: [
      "Win more clients with professional-looking proposals",
      "Save 3-5 hours on every new client proposal",
      "Scale your business without hiring design help"
    ]
  },
  {
    title: "Design Agencies",
    description: "Standardize your agency's proposal process and ensure consistent quality across all client communications.",
    icon: "🎨",
    benefits: [
      "Maintain brand consistency across team members",
      "Turn around client proposals faster",
      "Free up designers for billable client work"
    ]
  },
  {
    title: "Marketing Consultants",
    description: "Transform strategy discussions into compelling visual plans that clearly communicate value to clients.",
    icon: "📊",
    benefits: [
      "Visualize complex strategies more effectively",
      "Show clear ROI projections that win buy-in",
      "Stand out from other marketing consultants"
    ]
  },
  {
    title: "Web Development Studios",
    description: "Create detailed technical proposals that explain complex concepts in client-friendly language and visuals.",
    icon: "💻",
    benefits: [
      "Break down technical concepts with easy visuals",
      "Clarify project scope and deliverables",
      "Reduce revision cycles with clearer communication"
    ]
  }
];

const Solutions = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
              Solutions for every service business
            </h1>
            <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
              No matter what service you provide, WinDeck helps you create proposals that win more clients.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {solutions.map((solution) => (
              <div key={solution.title} className="bg-gray-50 p-8 rounded-lg">
                <div className="text-3xl mb-4">{solution.icon}</div>
                <h3 className="text-xl font-medium text-gray-900">{solution.title}</h3>
                <p className="mt-4 text-gray-500">{solution.description}</p>
                
                <ul className="mt-6 space-y-2">
                  {solution.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 text-[#7F56D9]">•</div>
                      <span className="ml-2 text-sm text-gray-500">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6">
                  <Link to="/waitlist" className="text-[#7F56D9] hover:text-[#6941C6] font-medium flex items-center">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Success story: Design agency saves 15+ hours per week
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                See how a small design studio used WinDeck to streamline their client proposal process and win 30% more projects.
              </p>
              
              <blockquote className="mt-8 border-l-4 border-[#7F56D9] pl-4 italic text-gray-500">
                "WinDeck transformed our business development process. What used to take us days now takes minutes, and our close rate has improved dramatically because we respond to leads faster with better proposals."
              </blockquote>
              <p className="mt-2 text-sm text-gray-500">— Sarah J., Founder, PixelPerfect Design</p>
              
              <div className="mt-10">
                <Link to="/waitlist" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#7F56D9] hover:bg-[#6941C6]">
                  Try WinDeck for your business
                  <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
                </Link>
              </div>
            </div>
            
            <div className="mt-12 lg:mt-0 lg:col-span-7">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/assets/case-study.svg"
                  alt="Design agency case study"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Calculate your ROI
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              See how much time and money WinDeck can save your business.
            </p>
          </div>

          <div className="mt-12 bg-gray-50 p-8 rounded-lg max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-xl font-medium text-gray-900">Based on industry averages:</h3>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <p className="text-gray-500 text-sm">Time saved per proposal</p>
                  <p className="text-3xl font-bold text-[#7F56D9]">3-5 hours</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <p className="text-gray-500 text-sm">Increased close rate</p>
                  <p className="text-3xl font-bold text-[#7F56D9]">+25%</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <p className="text-gray-500 text-sm">Monthly time savings</p>
                  <p className="text-3xl font-bold text-[#7F56D9]">15+ hours</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <p className="text-gray-500 text-sm">Avg. annual ROI</p>
                  <p className="text-3xl font-bold text-[#7F56D9]">710%</p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link to="/waitlist" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#7F56D9] hover:bg-[#6941C6]">
                Calculate your specific ROI
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#7F56D9]">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to transform your proposals?</span>
            <span className="block text-white">Join our exclusive waitlist today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link to="/waitlist" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-[#7F56D9] bg-white hover:bg-gray-50">
                Join the waitlist
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
