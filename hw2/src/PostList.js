import React from "react";
import Post from "./Post";

export default function PostList({ posts = [], setPosts }) {
  function updatePost(index, newPost) {
    const updatedState = [...posts];
    updatedState[index] = newPost;

    setPosts(updatedState);
  }

  return (
    <div>
      {posts.map((p, i) => (
        // <Post title={p.title} content={p.content} author={p.author} key={"post-" + i} />
        //key={} should have a UNIQUE key value to each post
        //{...p} Is equal to this section: title={p.title} content={p.content} author={p.author}
        <Post {...p} updatePost={updatePost} index={i} key={"post-" + i} /> //alternative syntax to the above <post/> format
      ))}
    </div>
  );
}
