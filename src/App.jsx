import "./App.css";
import Main from "./pages";

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;

// import React, { useState } from "react";

// export default function App() {
//   const [count, setCount] = useState(0);
//   const [fruits, setFruits] = useState(["apple", "banana"]);
//   // const [{ name, age }, setPerson] = useState({ name: "dwi", age: 10 });
//   const [person, setPerson] = useState({ name: "dwi", age: 10 });

//   const addCount = () => {
//     // hanya menambah 1x meskipun fungsi dipanggil 2x
//     setCount(count + 1);
//     setCount(count + 1);
//     // menambah 2x
//     // setCount((prev) => prev + 1);
//     // setCount((prev) => prev + 1);
//   };
//   return (
//     <div>
//       <h1>Hello Devsaurus</h1>
//       <p>{count}</p>
//       <button onClick={addCount}>Add</button>
//       {fruits.map((fruit) => (
//         <p>{fruit}</p>
//       ))}
//       <p>{person.name}</p>
//       <p>{person.age}</p>
//       {/* <p>{name}</p>
//       <p>{age}</p> */}
//     </div>
//   );
// }
