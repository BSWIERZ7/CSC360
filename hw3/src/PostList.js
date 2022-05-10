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
  const [id, setId] = useState(0);

  function handleDelete(id) {
    const newPostList = posts.filter((post) => id !== post.id);
    //sending a parameter that is an object(newPostList), this case we pass it the follwing:
    console.log("PostList: inside handleDelete");
    dispatch({ type: "DELETE_POST", newPostList });
    console.log("PostList: Post has been deleted.");
    // dispatch({ type: "DELETE_POST" });
    // dispatch(postReducer({ type: "DELETE_POST", id: id }));
  }

  function handleToggle(id) {
    const togglePost = posts.filter((post) => id === post.id);
    console.log("togglePosts = ", togglePost);
    const newPost = {
      title: togglePost.title,
      content: togglePost.content,
      author: togglePost.author,
      dateCreated: togglePost.dateCreated,
      dateCompleted: Date.now(),
      completed: id.target.checked,
    };
    console.log("newPost = ", newPost);
    updatePost(index, newPost);
    // updatePost(id, newPost);

    console.log("PostList: inside handleToggle");
    dispatch({ type: "TOGGLE_POST", newPost });
  }

  function handleId(id) {
    setId(id.target.value);
    console.log("PostList: inside handleId");
  }

  return (
    <div>
      {
        posts.map((p, i) => (
          <Post
            title={p.title}
            content={p.content}
            author={p.author}
            key={"post-" + i}
            // id={handleId}
            id={p.id}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        ))
        // <button onClick={handleDelete}>Delete</button>
      }
    </div>
  );
}
{
  /* <Post {...p} updatePost={updatePost} index={i} key={"post-" + i} />; */
}
// we have to dispatch ({Type:'DELETE_POST', id: id}) because we pass the type to reducers AND id to match if its the post in particular we want to delete
