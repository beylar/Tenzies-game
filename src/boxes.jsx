import React from "react";

const Box = ({ size, backgroundColor }) => {
    const style = {
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: backgroundColor,
    };
  
    return <div style={style}>Box</div>;
  };


  
// export default function Dices({ num, color }) {
//     return (
//         <button 
//             className={`p-4 border ${color}`} 
//             key={num}
//         >
//             {num}
//         </button>
//     );
// }



// const [count, setCount] = useState(0);

// function handleClick() {
//   setCount(count + 1);
// }

// return (
//   <button onClick={handleClick}>
//     Clicked {count} times
//   </button>
// )