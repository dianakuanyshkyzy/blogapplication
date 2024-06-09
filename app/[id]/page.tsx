'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  views: number;
  reactions: {
    likes: number;
  };
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



const PostPage = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      const fetchPost = async () => {
        try {
          const response = await axios.get(`https://dummyjson.com/posts/${id}`);
          setPost(response.data);
        } catch (error) {
          console.error(`Failed to fetch post with id ${id}:`, error);
        } finally {
          setLoading(false);
        }
      };

      fetchPost();
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  const backgroundImage = getBackgroundImage(post.id);
  
  return (
    
    <div className="mt-20 container mx-auto p-4 bg-zinc-50">
    <title>Blog # {post.id}</title>
       <Link href="/" className="text-gray-500 hover:underline ml-20">
        ← Back to main page
      </Link>
      <div className='flex flex-col md:flex-row mt-10 ml-20 mr-20'><img className="h-8 w-8 rounded-full mr-2" src="/images/image.png" alt="Author" /> Author #{post.userId}</div>
      <h1 className="text-4xl font-bold mb-10 mt-10 ml-20 mr-20">{post.title}</h1>
      <img className="h-48 w-full md:h-64 md:w-64 lg:h-80 lg:w-80 object-cover ml-20 mt-10" src={backgroundImage} alt="Post image"/>
      <p className="text-gray-800 font-semibold ml-20 mr-20 mt-10 mb-10">{post.body}</p>
      <div className="mt-4 flex flex-col md:flex-row">
        <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 ml-20 flex flex-col md:flex-row">
        <img className="h-5 w-5 rounded-full mr-2" src="/images/views.png" alt="views" />{post.views} 
        </span>
        <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 ml-10 flex flex-col md:flex-row">
        <img className="h-5 w-5 rounded-full mr-2" src="/images/heart.png" alt="likes" />{post.reactions.likes} 
        </span>
        <div className="text-gray-600 font-semibold inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 ml-10">
          Tags: {post.tags.join(', ')}
        </div>
      </div>
    </div>
  );
};

export default PostPage;
