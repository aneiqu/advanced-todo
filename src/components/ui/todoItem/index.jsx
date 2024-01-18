import EditIcon from "@mui/icons-material/Edit";
// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import possibleColors from "../../../data/colors";
import { default as EditMenu } from "../todoEditMenu";
export default function index({ content, color }) {
  const [visible, setVisible] = useState(false);

  const handleMenuOpen = (e) => {
    console.log(e.target.parentNode.parentNode);
    setVisible(true);
  };

  return (
    <>
      <div className='w-full h-12 p-3 flex items-center justify-between'>
        <div
          className={`h-6 w-7 rounded-full mr-2 bg-${color.toLowerCase()}-500`}
        />
        <span className='w-full text-xl whitespace-nowrap text-ellipsis overflow-hidden'>
          {content}
        </span>
        <div className='group w-10 px-2'>
          <EditIcon
            fontSize='medium'
            className=' active:scale-110 active:text-slate-400'
            onClick={handleMenuOpen}
          />
        </div>
      </div>
      <div>
        <EditMenu visible={visible} closeMenu={setVisible}></EditMenu>
      </div>
    </>
  );
}
