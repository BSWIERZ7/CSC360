import React from "react";

export default function Todo({ title, content, author }) {
  return (
    <div>
      <h3>{title}</h3>
      <div>{content}</div>
      <br />
      <i>
        Written by <b>{author}</b>
      </i>

      <div>
        <h3>Posted Date:</h3>
        {/* <div></div> */}
        <p id="date"></p>
        <script>
          {
            //  document.getElementById("date").innerHTML = date_current.getDate();
            (document.getElementById("date").innerHTML = Date())
            // date.now()
          }
        </script>
      </div>
    </div>
  );
}

//OLD Post layout
// export default function Todo({ title, content, author }) {
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
