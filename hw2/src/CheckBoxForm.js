import { useState } from "react";
// export default function CheckBoxForm() {
// const [checked, setChecked] = useState(false);

//   return (
//     <form>
//       <input type="checkbox" checked={checked} />
//     </form>
//   );
// }

// import { useState } from "react";

// function toggle(value) {
//   return !value;
// }

// const [checked, setChecked] = useState(false);

// export default function CheckBoxForm() {
//   // render();
//   return (
//     <form>
//       <input
//         type="checkbox"
//         name="complete"
//         checked={checked}
//         onChange={() => setChecked(toggle)}
//         // onChange={(e) => setChecked(e.target.checked)}
//       />
//     </form>
//   );
// }

{
  /* <div>
  <input type="checkbox" name="complete" checked />
</div>; */
}

export default function CheckBoxForm() {
  const [checked, setChecked] = useState(false);
  return (
    <form>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    </form>
  );
}

{
  /* <fieldset>
  <div>
    <input type="checkbox" id="scales" name="scales" checked />

    <label for="scales">Scales</label>
  </div>
</fieldset>; */
}
