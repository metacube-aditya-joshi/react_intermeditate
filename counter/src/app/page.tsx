"use client";
import { useState } from "react";
export default function Home() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if(count>0)
    setCount(count - 1);
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-blue-800">
      <div className="p-4 text-white border-2 m-3 px-10 rounded-md">{count}</div>
      <div className="flex  gap-10 text-white">
        <button onClick={handleIncrement} className="border-2 border-white rounded-md p-2">Increment</button>
        <button onClick={handleDecrement} className="border-2 border-white rounded-md p-2">Decrement</button>
      </div>
    </div>
  );
}
