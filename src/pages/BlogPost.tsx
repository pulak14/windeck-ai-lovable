
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Share2, Calendar, Clock } from 'lucide-react';
import blogPosts from '../data/blogPosts';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  // Find the post that matches the current slug
  const post = blogPosts.find(post => post.slug === slug);
  
  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <p className="mt-4">The blog post you're looking for doesn't exist.</p>
        <Link to="/resources/blog" className="mt-6 inline-flex items-center text-[#7F56D9] hover:text-[#6941C6]">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to blog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Back link */}
        <Link to="/resources/blog" className="inline-flex items-center text-[#7F56D9] hover:text-[#6941C6] mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to blog
        </Link>
        
        {/* Post header */}
        <h1 className="text-3xl font-extrabold text-gray-900 md:text-4xl">{post.title}</h1>
        
        {/* Post meta */}
        <div className="mt-4 flex items-center text-sm text-gray-500">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{post.date}</span>
          </div>
          <span className="mx-2">•</span>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{post.readTime}</span>
          </div>
        </div>
        
        {/* Featured image */}
        <div className="mt-8 relative">
          <img
            src={`/assets/blog/${post.slug}.jpg`}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg"
          />
        </div>
        
        {/* Post content */}
        <div className="mt-8 prose prose-lg prose-[#7F56D9] max-w-none">
          {post.content}
        </div>
        
        {/* Share */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-sm font-medium text-gray-900">Share this post</h2>
              <div className="mt-2 flex space-x-2">
                <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
                  <Share2 className="h-4 w-4 text-gray-600" />
                </button>
                {/* Add other share buttons as needed */}
              </div>
            </div>
            <Link to="/waitlist" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#7F56D9] hover:bg-[#6941C6]">
              Join WinDeck Waitlist
            </Link>
          </div>
        </div>
        
        {/* Related posts */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Related posts</h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            {blogPosts.filter(p => p.slug !== slug).slice(0, 2).map((relatedPost) => (
              <div key={relatedPost.slug} className="border border-gray-200 rounded-lg overflow-hidden">
                <Link to={`/resources/blog/${relatedPost.slug}`}>
                  <img
                    src={`/assets/blog/${relatedPost.slug}.jpg`}
                    alt={relatedPost.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900">{relatedPost.title}</h3>
                    <p className="mt-2 text-sm text-gray-500">{relatedPost.excerpt}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
