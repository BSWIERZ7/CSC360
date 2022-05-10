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
  handleDelete,
  handleToggle,
}) {
  function handleCheckbox(event) {
    console.log("checkbox clicked"); //check inside console to see if event is firing and event is invoked

    const newPost = {
      title,
      content,
      author,
      dateCreated,
      dateCompleted: Date.now(),
      completed: event.target.checked,
    };

    updatePost(index, newPost);
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
        <input type="checkbox" value={complete} onChange={complete} />
        {/*Our complete toggle here*/}
        <br />
        {/* Date Created: {dateCreated} */}
        Date Created: {Date.now()}
        <br />
        {/* Date Completed: {dateCompleted} 
        Have complete button give output of (Date.now()) when clicked, find it by using post's ID*/}
        Date Completed: {Date.now()}
        {/* Date Completed: handleToggle returns => {Date.now()} */}
        <br />
        Post ID: {id}
        <div>
          <button key={Post.id} value={id} onClick={() => handleDelete(id)}>
            Delete Post
          </button>
        </div>
        <div>
          <button
            key={Post.id}
            value={id}
            // onClick={() => handleToggle(id)}
            onClick={(complete) => Date.now()}
            // onChange={(complete) => Date.now()}
          >
            Completed
          </button>
        </div>
      </div>
    );
  }
}
