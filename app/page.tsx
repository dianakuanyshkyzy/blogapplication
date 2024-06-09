'use client';

import React from 'react';
import useFetchPosts from './src/fetchPosts';
import PostsList from './src/component/PostsList';
import Login from './src/component/Login';
import { AuthProvider, useAuth } from './src/contexts/AuthContext';
import './globals.css';

const BlogPage: React.FC = () => {
  const { posts, loading, error } = useFetchPosts();

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div className="flex justify-center items-center h-screen">{error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center my-8 text-slate-900">Blogs🧡</h1>
      <PostsList posts={posts}/>
    </div>
  );
};

const Page: React.FC = () => {
  const { token } = useAuth();

  return token ? <BlogPage /> : <Login />;
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Page />
    </AuthProvider>
  );
};

export default App;
