import { useState } from "react";
import possibleColors from "../../../../data/colors";
import { getCategories } from "../../../../services/Data/Category";
export default function Index() {
  const [taskCategory, setTaskCategory] = useState("");
  const [selectedColor, setSelectedColor] = useState("0");
  const [taskContent, setTaskContent] = useState("");
  const [taskDate, setTaskDate] = useState("");

  const groupOptions =
    getCategories("data").length > 0
      ? getCategories("data").map((category, i) => (
          <option key={i} value={i} className='bg-white text-black'>
            {category.title}
          </option>
        ))
      : false;

  const colorOptions = possibleColors
    .filter((color) => color.includes("bg"))
    .map((el, i) => {
      const colorName =
        el.split("-")[1][0].toUpperCase() + el.split("-")[1].slice(1);
      return (
        <option key={i} value={i} className={el}>
          {colorName}
        </option>
      );
    });

  function hanldeCategoryChange(e) {
    setTaskCategory(e.target.value);
  }
  function handleColorChange(e) {
    setSelectedColor(e.target.value);
  }
  return (
    <div className='flex flex-col w-screen  items-center justify-center '>
      <input
        type='text'
        className='my-4 w-80 h-10 focus:outline-none focus:scale-y-110 focus:scale-x-110 transition-all pl-1 focus:my-2 text-lg rounded-lg bg-transparent border-dashed border-primary-500 border-[1px]'
        placeholder='Task'
      ></input>
      <div className='flex flex-col'>
        <span className='-mb-2'>Category:</span>
        <select
          disabled={groupOptions ? "" : "disabled"}
          className='my-4 w-80 h-10 focus:outline-none focus:scale-y-110 focus:scale-x-110 transition-all pl-1 focus:my-2 text-lg rounded-lg bg-transparent border-dashed border-primary-500 border-[1px]'
          name='colors'
          onChange={hanldeCategoryChange}
          value={taskCategory}
        >
          {groupOptions ? (
            groupOptions
          ) : (
            <option>Create new category first!</option>
          )}
        </select>
      </div>
      <input
        type='date'
        className='my-4 w-80 h-10 focus:outline-none focus:scale-y-110 focus:scale-x-110 transition-all pl-1 focus:my-2 text-lg rounded-lg bg-transparent border-dashed border-primary-500 border-[1px]'
        placeholder='Task'
      ></input>
      <div className='flex flex-col'>
        <span className='-mb-2'>Color:</span>
        <select
          className='my-4 w-80 h-10 focus:outline-none focus:scale-y-110 focus:scale-x-110 transition-all pl-1 focus:my-2 text-lg rounded-lg bg-transparent border-dashed border-primary-500 border-[1px]'
          name='colors'
          onChange={handleColorChange}
          value={selectedColor}
        >
          {colorOptions}
        </select>
        <span className='-mt-2'>This color will override group color!</span>
      </div>
    </div>
  );
}
