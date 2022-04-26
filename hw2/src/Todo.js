import React from "react";
// import CheckBox from "./CheckBoxForm";

export default function Todo({ title, content, author, CheckBox }) {
  return (
    <div>
      <h3>{title}</h3>
      <div>{content}</div>
      <br />
      <i>
        Written by <b>{author}</b>
      </i>

      {/* <CheckBox /> */}
      <div>
        <h3>Posted Date:</h3>
        <div></div>
        <p id="date"></p>
        <script>
          {
            //  document.getElementById("date").innerHTML = date_current.getDate();
            (document.getElementById("date").innerHTML = Date())
            // const element = <script>Date()</script>
            // date.now();
            // date_create: moment().format("DD-MM-YYYY hh:mm:ss")
            // {let Date().toLocaleString() + ""}
          }
        </script>
      </div>
    </div>
  );
}

//PREVIOUS
// export default function Todo({ title, content, author }) {
//   return (
//     <div>
//       <h3>{title}</h3>
//       <div>{content}</div>
//       <br />
//       <i>
//         Written by <b>{author}</b>
//       </i>

//       <div>
//         <h3>Posted Date:</h3>
//         {/* <div></div> */}
//         <p id="date"></p>
//         <script>
//           {
//             //  document.getElementById("date").innerHTML = date_current.getDate();
//             // const element = <script>Date()</script>
//             // date.now()
//             // date_create: moment().format("DD-MM-YYYY hh:mm:ss")
//             // {let Date().toLocaleString() + ""}
//           }
//         </script>
//       </div>
//     </div>
//   );
// }

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
