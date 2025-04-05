
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

interface BlogPreviewCardProps {
  post: BlogPost;
}

const BlogPreviewCard = ({ post }: BlogPreviewCardProps) => {
  return (
    <div className="bg-white overflow-hidden shadow-sm rounded-lg">
      <Link to={`/resources/blog/${post.slug}`}>
        <img
          className="w-full h-48 object-cover"
          src={`/assets/blog/${post.slug}.jpg`}
          alt={post.title}
        />
      </Link>
      <div className="p-6">
        <div className="flex text-sm text-gray-500 items-center">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime}</span>
        </div>
        <Link to={`/resources/blog/${post.slug}`} className="block mt-2">
          <h3 className="text-xl font-semibold text-gray-900 hover:text-[#7F56D9]">{post.title}</h3>
          <p className="mt-3 text-base text-gray-500">{post.excerpt}</p>
        </Link>
        <div className="mt-4">
          <Link
            to={`/resources/blog/${post.slug}`}
            className="text-[#7F56D9] hover:text-[#6941C6] inline-flex items-center"
          >
            Read more
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPreviewCard;
