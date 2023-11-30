import { useState } from "react";

export default function Index() {
  const [color, setColor] = useState("1");

  function handleColorChange(e) {
    setColor(e.target.value);
  }
  return (
    <div className='flex flex-col w-screen  items-center justify-center '>
      <input
        className='my-4 w-80 h-10 focus:outline-none focus:scale-y-110 focus:scale-x-110 transition-all pl-1 focus:my-2 text-lg rounded-lg bg-transparent border-dashed border-primary-500 border-[1px]'
        placeholder='Category'
      ></input>
      <div className='flex flex-col'>
        <span className='-mb-2'>Category color:</span>
        <select
          className='my-4 w-80 h-10 focus:outline-none focus:scale-y-110 focus:scale-x-110 transition-all pl-1 focus:my-2 text-lg rounded-lg bg-transparent border-dashed border-primary-500 border-[1px]'
          name='colors'
          onChange={handleColorChange}
          value={color}
          placeholder='test'
        >
          <option className='bg-red-500' value='1'>
            Red
          </option>
          <option className='bg-blue-500' value='2'>
            Blue
          </option>
          <option className='bg-green-500' value='3'>
            Green
          </option>
        </select>
      </div>
    </div>
  );
}
