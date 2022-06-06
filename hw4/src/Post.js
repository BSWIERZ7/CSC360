import React from "react";
import { Link } from "react-navi";

function Post({ title, content, author, id, short = false }) {
  let processedContent = content;

  //displays a shortened version of content
  if (short) {
    if (content.length > 30) {
      processedContent = content.substring(0, 30) + "...";
    }
  }

  return (
    <div>
      <Link href={`/post/${id}`}>
        <h3>{title}</h3>
      </Link>

      <div>{processedContent}</div>
      <br />
      <i>
        Written by <b>{author}</b>
      </i>
      {short && (
        <div>
          <br />
          <Link href={`/post/${id}`}>View full post</Link>
        </div>
      )}
    </div>
  );
}

//This export with memoization allows us to not have to re-render this component; performance increase if certain component is re-rendered dozens of times in a big-scale program.
export default React.memo(Post);

{
  /* 
To Achieve a link, we do the below inside our return:
This also creates each title as a blue hyperlink text, we can click on these and IF the id is linked, then it will display when clicked. If ID is not defined for this post then we will see "Loading..." when we click on post link text.
<Link href={`/post/${id}`}>View full post</Link>
 
*/
}
