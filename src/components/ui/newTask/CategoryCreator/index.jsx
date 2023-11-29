import { useState } from "react";

export default function Index() {
  const [color, setColor] = useState("1");

  function handleColorChange(e) {
    setColor(e.target.value);
  }
  return (
    <div className='flex flex-col w-screen  items-center justify-center '>
      <input
        className='pl-1 bg-gradient-to-tr from-primary-800 to-primary-900 w-80 h-10 text-xl text-white shadow-lg border-primary-900 rounded-lg my-2'
        placeholder='Category'
      ></input>
      <div className='flex flex-col'>
        <span className='-mb-2'>Category color:</span>
        <select
          className='bg-gradient-to-tr from-primary-800  to-primary-900 w-80 h-10 text-xl text-white shadow-lg  border-primary-900 rounded-lg my-2'
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
