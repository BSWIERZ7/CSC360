import React from "react";
import { useState } from "react";

export default function Post({
  title,
  content,
  author,
  dateCreated,
  dateCompleted,
  completed,
  id,
  updatePost,
  deletePost,
}) {
  //maintain the state of the checkbox
  const [checked, updateChecked] = useState(false);

  //handles our ToggleTodo
  const handleToggleEvent = (event) => {
    console.log("in handleToggle");
    updateChecked(event.target.checked);

    //update post call with 2 parameters, 1 is ID of post I want to update
    //2nd is the UPDATED OBJECT, essentially declaring an object literal containing title, content, author, dataCreated, etc. Once
    //we get to the dateCompleted, we set the Date to Date.now()
    //when we get to completed, we set it to its inverse of completed.
    const updatedPost = {
      title,
      content,
      author,
      dateCreated,
      id,
      dateCompleted: Date.now(),
      completed: !completed,
    };
    console.log("updatedPost:", updatedPost);
    updatePost(id, updatedPost);
  };

  {
    return (
      <div>
        <h3>{title}</h3>
        <div>{content}</div>
        <br />
        <i>
          Written by <b>{author}</b>
        </i>
        <div>Date Created: {new Date(dateCreated).toDateString()}</div>
        <div>
          Date Completed:{" "}
          {completed
            ? new Date(dateCompleted).toDateString()
            : "Not yet completed"}
        </div>
        <input type="checkbox" value={checked} onClick={handleToggleEvent} />
        <input
          type="button"
          value="Delete this post"
          onClick={() => deletePost(id)}
        />
      </div>
    );
  }
}
