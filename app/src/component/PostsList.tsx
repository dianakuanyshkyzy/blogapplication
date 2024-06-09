// src/components/PostsList.tsx
import React from 'react';
import Post from './Post';
import { Post as PostType } from '../fetchPosts';

interface PostsListProps {
  posts: PostType[];
}

const PostsList: React.FC<PostsListProps> = ({ posts }) => {
  return (
    
    <div className="grid gap-8">
      {posts.map((post, index) => (
        <Post key={post.id} post={post} index={index} />
      ))}
    </div>
  );
};

export default PostsList;
