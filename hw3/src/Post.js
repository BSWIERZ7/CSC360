import React from "react";
import appReducer from "./reducers";
import postReducer from "./reducers";

export default function Post({
  title,
  content,
  author,
  dateCreated,
  dateCompleted,
  complete,
  updatePost,
  index,
  id,
  dispatch,
}) {
  // function handleCheckbox(event) {
  //   console.log("checkbox clicked"); //check inside console to see if event is firing and event is invoked

  //   const newPost = {
  //     title,
  //     content,
  //     author,
  //     dateCreated,
  //     dateCompleted: Date.now(),
  //     completed: event.target.checked,
  //   };

  //   updatePost(index, newPost);
  // }

  function handleDelete(id) {
    console.log("delete button clicked"); //check inside console to
    // posts: postReducer(state.post, action);
    // postReducer(dispatch({ type: "DELETE_POST", id: id }));
    // postReducer(dispatch({ type: "DELETE_POST", id: id }));
    // dispatch({ type: "DELETE_POST", id: id });
    dispatch(postReducer({ type: "DELETE_POST", id }));
  }

  {
    return (
      <div>
        <h3>{title}</h3>
        <div>{content}</div>
        <br />
        <i>
          Written by <b>{author}</b>
        </i>
        <br />
        Completed: {complete}
        <br />
        Date Created: {dateCreated}
        <br />
        Date Completed: {dateCompleted}
        {/* <br />
        Post ID: {id} */}
        <br />
        Post ID: {id}
        {/* <input type="checkbox" value={complete} onChange={handleCheckbox} /> */}
        {/* <input type="checkbox" value={DELETE_POST} onchange={} /> */}
        {/* <input type="checkbox" dispatch={type: "DELETE_POST"} /> */}
        {/* <div>
          <button onClick={() => handleDelete({ TYPE: "DELETE_POST" })}>
            Delete Post
          </button>
        </div> */}
        {/* <div>
          <button onClick={() => handleDelete}>Delete Post</button>
        </div> */}
        {/* <div>
          <button onClick={dispatch({ type: "DELETE_POST" })}>
            Delete Post
          </button>
        </div> */}
        {/* <div>
          <button
            key={Post.id}
            onClick={() => dispatch({ type: "DELETE_POST", id: id })}
          >
            Delete Post
          </button>
        </div> */}
        <div>
          <button
            key={Post.id}
            value={id}
            onClick={() => handleDelete(Post.id)}
          >
            Delete Post
          </button>
        </div>
        {/* <div>
          <button key={Post.id} onClick={() => handleDelete(Post.id)}>
            Delete Post
          </button>
        </div> */}
      </div>
    );
  }
}

//============================================================================================
//This is the previous setup used for HW3 - May need to change to this

// export default function Post({ title, content, author }) {

//   return (
//     <div>
//       <h3>{title}</h3>
//       <div>{content}</div>
//       <br />
//       <i>
//         Written by <b>{author}</b>
//       </i>
//     </div>
//   );
// }
