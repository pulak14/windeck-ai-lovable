
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const features = [
  {
    name: "AI-powered content generation",
    description: "Our advanced AI analyzes your notes and creates compelling copy that addresses client needs and showcases your value proposition.",
    icon: "✨"
  },
  {
    name: "Beautiful slide designs",
    description: "Choose from dozens of professionally designed templates or customize your own to match your brand identity.",
    icon: "🎨"
  },
  {
    name: "Easy customization",
    description: "Modify colors, fonts, and layouts with a simple drag-and-drop interface. No design skills required.",
    icon: "🧩"
  },
  {
    name: "Multi-format export",
    description: "Export your proposal as a PDF, Google Slides presentation, or Notion document with a single click.",
    icon: "📤"
  },
  {
    name: "Collaboration tools",
    description: "Share drafts with team members, collect feedback, and make revisions before sending to clients.",
    icon: "👥"
  },
  {
    name: "Template library",
    description: "Access industry-specific templates designed to win business in your particular field.",
    icon: "📚"
  }
];

const Features = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
              Features that make proposals effortless
            </h1>
            <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
              Everything you need to create persuasive, professional proposals that win more clients and save you hours.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="bg-gray-50 p-8 rounded-lg">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-medium text-gray-900">{feature.name}</h3>
                <p className="mt-4 text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight Feature */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Save hours on every proposal
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                WinDeck transforms your client discovery process by automatically generating 
                proposal content from your conversation notes, saving you hours of work.
              </p>
              
              <ul className="mt-8 space-y-4 text-gray-500">
                <li className="flex">
                  <div className="flex-shrink-0 text-[#7F56D9]">•</div>
                  <span className="ml-3">Reduce proposal creation time by up to 80%</span>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 text-[#7F56D9]">•</div>
                  <span className="ml-3">Maintain consistent quality across all client communications</span>
                </li>
                <li className="flex">
                  <div className="flex-shrink-0 text-[#7F56D9]">•</div>
                  <span className="ml-3">Focus on client relationships instead of formatting slides</span>
                </li>
              </ul>
              
              <div className="mt-10">
                <Link to="/waitlist" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#7F56D9] hover:bg-[#6941C6]">
                  Join the waitlist
                  <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
                </Link>
              </div>
            </div>
            
            <div className="mt-12 lg:mt-0 lg:col-span-7">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/assets/feature-highlight.svg"
                  alt="WinDeck time-saving feature"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              How WinDeck compares
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              See how WinDeck stacks up against traditional proposal methods.
            </p>
          </div>

          <div className="mt-12 overflow-hidden">
            <div className="relative">
              <div className="max-w-full overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th scope="col" className="py-3.5 px-4 text-left text-sm font-semibold text-gray-900 sm:px-6">
                        Feature
                      </th>
                      <th scope="col" className="py-3.5 px-4 text-left text-sm font-semibold text-gray-900 sm:px-6">
                        WinDeck
                      </th>
                      <th scope="col" className="py-3.5 px-4 text-left text-sm font-semibold text-gray-900 sm:px-6">
                        Manual process
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-4 px-4 text-sm text-gray-900 sm:px-6">Creation time</td>
                      <td className="py-4 px-4 text-sm text-gray-900 sm:px-6">Minutes</td>
                      <td className="py-4 px-4 text-sm text-gray-500 sm:px-6">Hours to days</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 text-sm text-gray-900 sm:px-6">Design quality</td>
                      <td className="py-4 px-4 text-sm text-gray-900 sm:px-6">Professional templates</td>
                      <td className="py-4 px-4 text-sm text-gray-500 sm:px-6">Varies with skill</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 text-sm text-gray-900 sm:px-6">Content extraction</td>
                      <td className="py-4 px-4 text-sm text-gray-900 sm:px-6">AI-powered</td>
                      <td className="py-4 px-4 text-sm text-gray-500 sm:px-6">Manual</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 text-sm text-gray-900 sm:px-6">Brand consistency</td>
                      <td className="py-4 px-4 text-sm text-gray-900 sm:px-6">Automatic</td>
                      <td className="py-4 px-4 text-sm text-gray-500 sm:px-6">Requires effort</td>
                    </tr>
                  </tbody>
                </table>
              </div>
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

export default Features;
