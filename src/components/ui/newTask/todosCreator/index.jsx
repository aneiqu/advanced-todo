import { useState } from "react";
import { getCategories } from "../../../../services/Data/Category";

export default function Index() {
  const [taskCategory, setTaskCategory] = useState("1");

  const options =
    getCategories("data").length > 0
      ? getCategories("data").map((category, i) => (
          <option key={i} value={i}>
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
        className='pl-1 bg-gradient-to-tr from-primary-800 to-primary-900 w-80 h-10 text-xl text-white shadow-lg border-primary-900 rounded-lg my-2'
        placeholder='Task'
      ></input>
      <div className='flex flex-col'>
        <span className='-mb-2'>Category:</span>
        <select
          disabled={options ? "" : "disabled"}
          className='bg-gradient-to-tr from-primary-800  to-primary-900 w-80 h-10 text-xl text-white shadow-lg  border-primary-900 rounded-lg my-2'
          name='colors'
          onChange={hanldeCategoryChange}
          value={taskCategory}
        >
          {options ? options : <option>Create new category first!</option>}
        </select>
      </div>
      <input
        type='date'
        className=' p-2 bg-gradient-to-tr from-primary-800 to-primary-900 w-80 h-10 text-xl text-white shadow-lg border-primary-900 rounded-lg my-2'
        placeholder='Task'
      ></input>
      <div className='flex flex-col'>
        <span className='-mb-2'>Color:</span>
        <select
          disabled={options ? "" : "disabled"}
          className='bg-gradient-to-tr from-primary-800  to-primary-900 w-80 h-10 text-xl text-white shadow-lg  border-primary-900 rounded-lg my-2'
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
