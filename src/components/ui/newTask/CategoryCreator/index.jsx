import { useState } from "react";
import possibleColors from "../../../../data/colors";
export default function Index({ setData }) {
  const [selectedColor, setSelectedColor] = useState("-1");

  const handleContentChange = (e) => {
    setData((prev) => ({
      ...prev,
      categoryTitle: e,
    }));
  };

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);

    setData((prev) => ({
      ...prev,
      categoryColor: e.target[parseInt(e.target.value) + 1].textContent,
    }));
  };

  const colorOptions = possibleColors
    .filter((color) => color.includes("bg"))
    .map((el, i) => {
      const colorName =
        el.split("-")[1][0].toUpperCase() + el.split("-")[1].slice(1);
      return (
        <option key={i} value={i} className={`${el} text-black`}>
          {colorName}
        </option>
      );
    });
  return (
    <div className='flex flex-col w-screen  items-center justify-center '>
      <input
        className='my-4 w-80 h-10 focus:outline-none focus:scale-y-110 focus:scale-x-110 transition-all pl-1 focus:my-2 text-lg rounded-lg bg-transparent border-dashed border-primary-500 border-[1px]'
        placeholder='Category'
        onChange={(e) => handleContentChange(e.target.value)}
      ></input>
      <div className='flex flex-col'>
        <span className='-mb-2'>Category color:</span>
        <select
          className='my-4 w-80 h-10 focus:outline-none focus:scale-y-110 focus:scale-x-110 transition-all pl-1 focus:my-2 text-lg rounded-lg bg-transparent border-dashed border-primary-500 border-[1px]'
          name='colors'
          onChange={handleColorChange}
          value={selectedColor}
        >
          <option value={-1} className='text-black'>
            None
          </option>
          {colorOptions}
        </select>
      </div>
    </div>
  );
}
