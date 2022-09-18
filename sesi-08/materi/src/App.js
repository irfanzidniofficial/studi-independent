// import "./App.css";
import React from "react";

// => Inline CSS

// function App() {
//   return (
//     <div
//       style={{
//         backgroundColor: "#eeeeee",
//         padding: "30px",
//         fontfamily: "Arial",
//       }}
//     >
//       <h1>Hello Inline CSS</h1>
//     </div>
//   );
// }

//=> Styling component

// Object Variabel CSS

// const divStyle = {
//   backgroundColor: "#eeeeee",
//   padding: "30px",
//   fontFamily: "Arial",
// };

// function App() {
//   return (
//     <div style={divStyle}>
//       <h1>Hello Word 2022</h1>
//     </div>
//   );
// }

// => 3. External CSS

// function App() {
//   return (
//     <div className="container">
//       <h1>Hello Word</h1>
//     </div>
//   );
// }

// => 4. External CSS  MOdule

// import styles from "./App.module.css";

// function App() {
//   return (
//     <div className={styles.container}>
//       <h1>Hello Word 2022</h1>
//     </div>
//   );
// }

// => 5. External Object Variabel CSS

import divStyle from "./AppStyle";

function App() {
  return (
    <div style={divStyle}>
      <h1>Hello Word 2022</h1>
    </div>
  );
}
export default App;

// => 6. Styled Component
// Install first => npm install --save styled-components
// import styled from "styled-components";

// const Div = styled.div`
//   background-color: #faf1e6;
//   padding: 30px;
//   font-family: "Arial";
// `;

// function App() {
//   return (
//     <Div>
//       <h1>Hello Word 2022</h1>
//     </Div>
//   );
// }

// export default App;

// => 7. CSS in JS Libraries

// => 8. UI Framework
