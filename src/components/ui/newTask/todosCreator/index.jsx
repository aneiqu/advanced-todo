import { useState } from "react";
import { getCategories } from "../../../../services/Data/Category";

export default function Index() {
  const [taskCategory, setTaskCategory] = useState("1");

  const options =
    getCategories("data").length > 0
      ? getCategories("data").map((category, i) => (
          <option key={i} value={i} className='bg-white text-black'>
            {category.title}
          </option>
        ))
      : false;

  function hanldeCategoryChange(e) {
    setTaskCategory(e.target.value);
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
          disabled={options ? "" : "disabled"}
          className='my-4 w-80 h-10 focus:outline-none focus:scale-y-110 focus:scale-x-110 transition-all pl-1 focus:my-2 text-lg rounded-lg bg-transparent border-dashed border-primary-500 border-[1px]'
          name='colors'
          onChange={hanldeCategoryChange}
          value={taskCategory}
        >
          {options ? options : <option>Create new category first!</option>}
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
          disabled={options ? "" : "disabled"}
          className='my-4 w-80 h-10 focus:outline-none focus:scale-y-110 focus:scale-x-110 transition-all pl-1 focus:my-2 text-lg rounded-lg bg-transparent border-dashed border-primary-500 border-[1px]'
          name='colors'
          onChange={hanldeCategoryChange}
          value={taskCategory}
        >
          {options ? options : <option>Create new category first!</option>}
        </select>
      </div>
    </div>
  );
}
