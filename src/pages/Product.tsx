
import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Product = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">
              Transform your proposals with AI
            </h1>
            <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
              WinDeck's proprietary AI analyzes your client discovery notes and transforms them into persuasive, structured proposals that get signed.
            </p>
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <h2 className="text-3xl font-extrabold text-gray-900">
                The smarter way to create proposals
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                WinDeck analyzes your meeting notes to extract key points, identify client needs, and structure them into compelling proposals.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-green-500" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Natural language processing</h3>
                    <p className="mt-1 text-gray-500">Our AI understands context and client needs from your notes</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-green-500" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Persuasive content generation</h3>
                    <p className="mt-1 text-gray-500">Automatically creates benefit-focused content that sells your services</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <Check className="h-6 w-6 text-green-500" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">Customizable templates</h3>
                    <p className="mt-1 text-gray-500">Choose from professional templates or create your own</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <Link to="/waitlist" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-[#7F56D9] hover:bg-[#6941C6]">
                  Join the waitlist
                  <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="mt-12 lg:mt-0 lg:col-span-7">
              <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
                <img
                  src="/assets/product-screenshot.svg"
                  alt="WinDeck product interface"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              How WinDeck works
            </h2>
            <p className="mt-4 text-lg text-gray-500 max-w-3xl mx-auto">
              Our simple three-step process takes you from client conversation to polished proposal in minutes.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#7F56D9] text-2xl font-bold mb-4">01</div>
              <h3 className="text-xl font-medium text-gray-900">Upload your notes</h3>
              <p className="mt-2 text-gray-500">
                Copy and paste your meeting notes, transcripts, or client briefs into WinDeck.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#7F56D9] text-2xl font-bold mb-4">02</div>
              <h3 className="text-xl font-medium text-gray-900">Customize your proposal</h3>
              <p className="mt-2 text-gray-500">
                Choose a template, adjust brand colors, and review AI-generated content.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-[#7F56D9] text-2xl font-bold mb-4">03</div>
              <h3 className="text-xl font-medium text-gray-900">Export and share</h3>
              <p className="mt-2 text-gray-500">
                Export to your preferred format and share with clients to win their business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to transform your proposals?</span>
            <span className="block text-[#7F56D9]">Join our exclusive waitlist today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link to="/waitlist" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#7F56D9] hover:bg-[#6941C6]">
                Join the waitlist
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
