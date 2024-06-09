import React from 'react';
import { Post as PostType } from '../fetchPosts';
import Link from 'next/link';

interface PostProps {
  post: PostType;
  index: number;
}

const getBackgroundImage = (index: number) => {
  const images = [
    '/images/image0.png',
    '/images/image1.png',
    '/images/image2.png',
    '/images/image3.png',
    '/images/image4.png',
    '/images/image5.png',
    '/images/image6.png',
    '/images/image7.png',
    '/images/image8.png',
  ];
  return images[index % images.length];
};

const Post: React.FC<PostProps> = ({ post }) => {
  const backgroundImage = getBackgroundImage(post.id);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
      <title>Diana's blog app</title>
      <div className="flex-shrink-0">
        <img className="h-48 w-full object-cover md:w-48" src={backgroundImage} alt="Post image" />
      </div>
      <div className="p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-center text-sm text-gray-500 mb-2">
            <img className="h-8 w-8 rounded-full mr-2" src="/images/image.png" alt="Author" />
            <span>Author #{post.userId} in {post.title} • post #{post.id}</span>
          </div>
          <Link href={`/${post.id}`}>
            <div className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{post.title}</div>
          </Link>
          <p className="mt-2 text-gray-500">{post.body}</p>
        </div>
        <div className="mt-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {post.tags.join(', ')}
          </span>
          <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            {post.views} views
          </span>
          <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            {post.reactions.likes} likes
          </span>
          <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-500">
            • Selected for you
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
