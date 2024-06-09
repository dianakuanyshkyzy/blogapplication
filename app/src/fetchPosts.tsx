"use client";

import axios from 'axios';
import { useEffect, useState } from 'react';

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number; 
  tags:string; 
  views:number;
  reactions:[
    likes:number, 
    dislikes:number,
  ]; 
}

const useFetchPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/posts');
        setPosts(response.data.posts);
      } catch (err) {
        setError('Failed to fetch posts.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
};

export default useFetchPosts;
