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
    //sending a parameter that is an object, this case we pass it the follwing:
    console.log("testing");
    console.log("inside handleDelete");
    // dispatch(postReducer({ type: "DELETE_POST", id: id }));
    dispatch({ type: "DELETE_POST", newPostList });
    // dispatch({ type: "DELETE_POST" });
    // dispatch(postReducer({ type: "DELETE_POST", id: id }));
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
          />
        ))
        // <button onClick={handleDelete}>Delete</button>
      }
      {/* <div>Hello</div> */}
      {/* <button onClick={() => handleDelete}>Delete</button> */}
      {/* <span>
        <button onClick={dispatch({ type: "DELETE_POST" })}>Delete</button>
      </span> */}
    </div>
  );
}
{
  /* <Post {...p} updatePost={updatePost} index={i} key={"post-" + i} />; */
}
// we have to dispatch ({Type:'DELETE_POST', id: id}) because we pass the type to reducers AND id to match if its the post in particular we want to delete
