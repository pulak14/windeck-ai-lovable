
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import BlogPreviewCard from "../components/BlogPreviewCard";

const features = [
  {
    title: "Call to Deck",
    description: "Turn discovery call notes into beautiful slide decks in minutes.",
    icon: "✨"
  },
  {
    title: "Brand Alignment",
    description: "Match your client's brand with customizable colors and styles.",
    icon: "🎨"
  },
  {
    title: "Multi-format Export",
    description: "Export to Notion, Google Slides, or PDF with one click.",
    icon: "📤"
  }
];

const useCases = [
  {
    title: "Freelance Consultants",
    description: "Create professional proposals that win more clients and save hours of design time.",
    icon: "👩‍💼"
  },
  {
    title: "Small Agencies",
    description: "Standardize your team's proposal process and maintain brand consistency.",
    icon: "🏢"
  },
  {
    title: "Client Services",
    description: "Turn discovery meetings into actionable proposals faster than ever before.",
    icon: "🤝"
  }
];

const blogPosts = [
  {
    slug: "how-to-write-a-proposal-in-2025",
    title: "How to Write a Proposal in 2025",
    excerpt: "The landscape of client proposals has changed. Here's how to adapt and thrive.",
    date: "April 2, 2025",
    readTime: "5 min read"
  },
  {
    slug: "ai-tools-for-freelancers",
    title: "Top AI Tools for Freelancers in 2025",
    excerpt: "Discover how AI can transform your freelance workflow and save you hours each week.",
    date: "March 28, 2025",
    readTime: "7 min read"
  }
];

const Index = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
                Turn client discovery notes into polished proposals.
              </h1>
              <p className="mt-6 text-xl text-gray-500">
                WinDeck helps freelancers and agencies create persuasive proposal decks in minutes — powered by AI.
              </p>
              <div className="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
                <Link to="/waitlist" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#7F56D9] hover:bg-[#6941C6] transition-all">
                  Join the waitlist
                  <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <div className="relative block w-full bg-white sm:rounded-lg overflow-hidden">
                  <img
                    className="w-full"
                    src="/assets/hero-image.svg"
                    alt="WinDeck proposal generator"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-[#7F56D9] font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to win more clients
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              WinDeck transforms your client conversations into compelling proposals that get signed.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {features.map((feature) => (
                <div key={feature.title} className="relative">
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-[#7F56D9] text-white">
                      <span className="text-xl">{feature.icon}</span>
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.title}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-[#7F56D9] font-semibold tracking-wide uppercase">Use Cases</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Designed for service professionals
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              WinDeck is perfect for anyone who needs to create professional client proposals.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {useCases.map((useCase) => (
                <div key={useCase.title} className="relative bg-white p-6 rounded-lg shadow-sm">
                  <dt>
                    <div className="text-3xl mb-4">{useCase.icon}</div>
                    <p className="text-lg leading-6 font-medium text-gray-900">{useCase.title}</p>
                  </dt>
                  <dd className="mt-2 text-base text-gray-500">{useCase.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Blog Teasers */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-[#7F56D9] font-semibold tracking-wide uppercase">Resources</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Latest from our blog
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Tips and tricks to improve your proposal game and win more clients.
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {blogPosts.map((post) => (
              <BlogPreviewCard key={post.slug} post={post} />
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <Link to="/resources/blog" className="inline-flex items-center px-4 py-2 text-base font-medium text-[#7F56D9] hover:text-[#6941C6]">
              View all articles
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
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

export default Index;
