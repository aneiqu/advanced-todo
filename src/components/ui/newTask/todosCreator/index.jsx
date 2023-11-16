import { Input, MenuItem, Select } from "@mui/material";
import { useState } from "react";

export default function Index() {
  const [taskCategory, setTaskCategory] = useState("1");

  function hanldeCategoryChange(e) {
    setTaskCategory(e.target.value);
  }
  return (
    <div className='flex flex-col w-screen  items-center justify-center '>
      <Input
        className='w-80 h-10 text-1xl p-2 my-2 text-white bg-primary-900 border-[1px] border-primary-700 rounded-md'
        placeholder='Task'
      />
      <Select
        className='w-80 h-10 text-1xl p-2 pl-0 my-2 text-white bg-primary-900 border-[1px] border-primary-700 rounded-md'
        value={taskCategory}
        onChange={hanldeCategoryChange}
      >
        <MenuItem value={1}>Cat1</MenuItem>
        <MenuItem value={2}>Cat2</MenuItem>
        <MenuItem value={3}>Cat3</MenuItem>
        <MenuItem value={4}>Cat4</MenuItem>
      </Select>
      <Input
        type='date'
        className='w-80 h-10 text-1xl p-2 my-2 text-white bg-primary-900 border-[1px] border-primary-700 rounded-md  '
        sx={{ svg: "red" }}
      />
    </div>
  );
}
