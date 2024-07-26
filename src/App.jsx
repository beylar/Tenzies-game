  import React from "react"
  import Dices from "./boxes.jsx"
  import dices from "./box.js"

  export default function App() {
      // const diceElements = dices.map(el => 
      // <Dices
      //   key={el.id}
      //   num= {el.num}
      // />);    
    return (  
      <>
        <div className="w-[500px] flex h-[540px] bg-[#2B283A] mx-auto mt-5">
          <div className="w-[450px] h-[480px] bg-[#F5F5F5] mx-auto my-auto rounded-xl">
            <h1 className="text-[#2B283A] pt-14 text-center text-[26px] font-bold font-karla">Tenzies</h1>
            <p className="text-[#4A4E74] text-[13px] w-[350px] mx-auto">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            {/* <div className="px-10">{diceElements}</div> */}
            <div className="mx-10">
      <Dices size={100} backgroundColor="red"  />
      <Dices size={200} backgroundColor="green" />
      <Dices size={300} backgroundColor="blue" />
    </div>
          </div>
        </div>
      </>
    )
  }

