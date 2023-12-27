// import React from "react";
// import { IoIosArrowDropdown } from "react-icons/io";

// const Test = () => {
//   return (
//     <div className="container">
//
//       <div className="w-64 h-16 flex   justify-center   items-center   ">
//         <div>
//           <div className="flex justify-between  items-center rounded-xl  px-4 py-2  bg-zinc-200">
//
//             Search Now
//             <IoIosArrowDropdown size={20} />
//           </div>
//           <ul className="bg-zinc-200 mt-2 px-4 py-2 ">
//             <li className="hover:bg-teal-500 p-2">sample</li>
//             <li className="hover:bg-teal-500 p-2">sample</li>
//             <li className="hover:bg-teal-500 p-2">sample</li>
//             <li className="hover:bg-teal-500 p-2">sample</li>
//           </ul>
//         </div>
//         <div>e</div>
//       </div>
//     </div>
//   );
// };

// export default Test;

"use client";
import React, { useEffect, useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

const Test = () => {
  const [countries, setCountries] = useState(null);
  const [inputValue,setInputValue]=useState(null);
  const [open,setOpen]=useState(false)
  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div className="w-64 h-16  container     ">
      <div>
        {" "}
        <div  onClick={()=>setOpen(!open)} className={`   flex justify-between  items-center rounded-xl  px-2 py-2  bg-zinc-200`}>
          Search Now
          <IoIosArrowDropdown size={20} onClick={()=>setOpen(!false)} className={` ${open &&" rotate-180" }` }/>
        </div>
        <ul className={`bg-zinc-200  mt-2 px-4 py-2 h-40 overflow-auto ${open?"max-h-60" : "max-h-0"} `}>
         <div className=" flex    items-center px-2 sticky top-0 bg-white ">
        <div className="bg-zinc-200"> <CiSearch size={10} className="bg-zinc-200"/></div>
        <div> <input onChange={((e)=>{setInputValue(e.target.value)})}
            className="placeholder:  bg-zinc-200 outline-none p-2 "
            placeholder="Enter"
          ></input></div>
         </div>
         {inputValue}

          {countries?.map((country, index) => {
            return <li  key={index}>{country.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Test;
