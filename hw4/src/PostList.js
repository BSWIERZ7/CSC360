import React from "react";
import Post from "./Post";
import { useState } from "react";
// handleDelete = () => {
//   return {
//       deletePost: (id)
//   }
// };
//testing

export default function PostList({ posts = [], dispatch }) {
  const updatePost = (id, updatedPost) => {
    //Ternery Method: IF the current post's post ID matches the past ID what I want to do is set that particular post to updated post, otherwise, I'm just going to return the original post
    //If updatedPost MATCHES then we will return updatedPost otherwise, return original
    //ALTERNATIVE: we can also do this login INSIDE THE REDUCER ITSELF, which would make it easier
    const updatedPosts = posts.map((post) =>
      post.id === id ? updatedPost : post
    );
    console.log("updated posts:", updatedPosts);
    dispatch({ type: "TOGGLE_POST", updatedPosts });
  };

  const deletePost = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    dispatch({ type: "DELETE_POST", updatedPosts });
  };

  return (
    <div>
      {posts.map((p, i) => (
        <Post
          {...p}
          key={p.id}
          updatePost={updatePost}
          deletePost={deletePost}
        />
      ))}
    </div>
  );
}

//the above the spread operator -> {...p} gives p. to ALL items
//this makes it cleaner to read

// return (
//   <div>
//     {/* {posts.map((p, i) => (
//       <Post
//         title={p.title}
//         content={p.content}
//         author={p.author}
//         key={"post-" + i}
//         updatePost={updatePost}
//       />
//     ))} */}
//   </div>
// );
