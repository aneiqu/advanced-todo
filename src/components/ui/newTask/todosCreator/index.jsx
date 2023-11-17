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
        className=' p-2 bg-gradient-to-tr from-primary-800 to-primary-900 w-80 h-10 text-xl text-white shadow-lg border-primary-900 rounded-lg my-2'
        placeholder='Task'
        disableUnderline
      ></Input>
      <Select
        defaultValue='1'
        value={taskCategory}
        variant='standard'
        className=' p-2 bg-gradient-to-tr from-primary-800 to-primary-900 w-80 h-10 text-xl text-white shadow-lg  border-primary-900 rounded-lg my-2 '
        disableUnderline
        onChange={hanldeCategoryChange}
      >
        <MenuItem value={1}>Cat1</MenuItem>
        <MenuItem value={2}>Cat2</MenuItem>
        <MenuItem value={3}>Cat3</MenuItem>
        <MenuItem value={4}>Cat4</MenuItem>
      </Select>
      <Input
        type='date'
        className=' p-2 bg-gradient-to-tr from-primary-800 to-primary-900 w-80 h-10 text-xl text-white shadow-lg border-primary-900 rounded-lg my-2'
        placeholder='Task'
        disableUnderline
      ></Input>
    </div>
  );
}
