
import React from 'react';
import { Link } from 'react-router-dom';
import BlogPreviewCard from '../components/BlogPreviewCard';

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
  },
  {
    slug: "proposal-design-tips",
    title: "5 Design Tips for More Persuasive Proposals",
    excerpt: "Simple design improvements that can dramatically increase your proposal conversion rates.",
    date: "March 20, 2025",
    readTime: "4 min read"
  },
  {
    slug: "pricing-strategies",
    title: "Pricing Strategies to Win More Clients",
    excerpt: "How to present your pricing in a way that communicates value and overcomes objections.",
    date: "March 15, 2025",
    readTime: "6 min read"
  },
  {
    slug: "follow-up-techniques",
    title: "The Art of the Proposal Follow-up",
    excerpt: "How to follow up on your proposals without being annoying or desperate.",
    date: "March 10, 2025",
    readTime: "5 min read"
  },
  {
    slug: "client-discovery-questions",
    title: "10 Essential Client Discovery Questions",
    excerpt: "Ask these questions to gather the information you need for a winning proposal.",
    date: "March 5, 2025",
    readTime: "8 min read"
  }
];

const Blog = () => {
  return (
    <div className="bg-gray-50">
      {/* Header */}
      <section className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              WinDeck Blog
            </h1>
            <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
              Resources to help you create better proposals and win more clients.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogPreviewCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#7F56D9] rounded-2xl py-10 px-6 md:py-16 md:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-white">
                Get proposal tips in your inbox
              </h2>
              <p className="mt-4 text-lg text-white opacity-90">
                Join our newsletter to receive monthly tips, trends, and insights on creating winning proposals.
              </p>
              <form className="mt-8 sm:flex sm:justify-center">
                <div className="w-full sm:max-w-md">
                  <label htmlFor="email" className="sr-only">Email address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#7F56D9] rounded-md"
                    placeholder="Your email address"
                  />
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-[#7F56D9] bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#7F56D9]"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
