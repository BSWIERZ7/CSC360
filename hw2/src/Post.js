import React from "react";

export default function Post({
  title,
  content,
  author,
  dateCreated,
  dateCompleted,
  complete,
  updatePost,
  index,
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
        <br />
        Date Created: {dateCreated}
        <br />
        Date Completed: {dateCompleted}
        <input type="checkbox" value={complete} onChange={handleCheckbox} />
      </div>
    );
  }
}
