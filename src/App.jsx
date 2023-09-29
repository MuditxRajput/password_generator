import React, { useCallback, useEffect, useState } from 'react';
import './index.css';
const App = ()=>{
    const [length, setLength] = useState(8);
    const[numberAllowed , setNumberAllowed] = useState(false);
    const[characterAllowed, setCharacterAllowed] = useState(false);
    const[password, setPassword]= useState()
    // Password generator
    const passwordGenerator = useCallback(()=>{
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if(numberAllowed)
        {
            str = str + "1234567890"
        }
        if(characterAllowed) str+= "@#$%^&*(){}!"

        for(let i= 0;i<=length;i++)
        {
             let char = Math.floor(Math.random()*str.length)
             pass = pass + str.charAt(char);

        }
        setPassword(pass);

    },[length,numberAllowed,characterAllowed,setPassword])
 useEffect(()=>{
  passwordGenerator();
 },[length,numberAllowed,characterAllowed,passwordGenerator])
    return(
        <>
        <h1 className="text-4xl font-bold text-white text-center mt-14  ">
        Password Generator
        </h1>
        <div className=' bg-slate-600 h-24 w-2/5 mx-auto shadow-md rounded-lg px-4 my-8 flex  '>
        <div className='w-full h-10 max-w-md mx-auto rounded-lg mt-6  text-orange-600 bg-orange-600 '>
         <input type="text"  value={password} className='outline-none w-full rounded-md py-2 px-3  ' placeholder='Password' />
         {/* <button type="button">copy</button> */}
         <div className='flex flex-row gap-3 mt-2'>
         <input 
         type="range" 
         value={length} 
         max={100} min={8}
         onChange={(e)=>{setLength(e.target.value)}}
         />
         <label >Length:{length}</label>
         <input type="checkbox" name="" id="" 
          onChange={(e)=>setNumberAllowed(e.target.checked)}
         />
         <label >Number </label>
         <input type="checkbox" name="" id="" 
         onChange={(e)=>setCharacterAllowed(e.target.checked)}
         />
         <label >Character</label>
         </div>
        </div>

        </div>
    </>
    )
}
export default App;