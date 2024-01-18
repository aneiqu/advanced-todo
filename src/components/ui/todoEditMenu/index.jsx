import EditIcon from "@mui/icons-material/Edit";
// eslint-disable-next-line no-unused-vars
import possibleColors from "../../../data/colors";
export default function index({ visible, content }) {
  return (
    <div
      className={`${
        visible ? "" : "hidden"
      } absolute left-0 top-0 w-full h-full flex items-center justify-center`}
    >
      <div className='bg-gradient-to-br from-primary-800 to-primary-900 w-screen h-screen fixed overflow-hidden flex flex-col items-center'>
        <span> Editing $TASK_NAME</span>
        <div className='flex flex-col w-screen  items-center justify-center '>
          <input
            type='text'
            className='my-4 w-80 h-10 focus:outline-none focus:scale-y-110 focus:scale-x-110 transition-all pl-1 focus:my-2 text-lg rounded-lg bg-transparent border-dashed border-primary-500 border-[1px]'
            placeholder='Task'
            // onChange={(e) => handleContentChange(e.target.value)}
          ></input>
          <div className='flex flex-col'>
            <span className='-mb-2'>Category:</span>
            <select
              // disabled={groupOptions ? "" : "disabled"}
              className='my-4 w-80 h-10 focus:outline-none focus:scale-y-110 focus:scale-x-110 transition-all pl-1 focus:my-2 text-lg rounded-lg bg-transparent border-dashed border-primary-500 border-[1px]'
              name='colors'
              // onChange={hanldeCategoryChange}
            >
              {/* {groupOptions ? (
                groupOptions
              ) : (
                <option>Create new category first!</option>
              )} */}
            </select>
          </div>
          <input
            type='date'
            min={`${new Date().toISOString().split("T")[0]}`}
            className='my-4 w-80 h-10 focus:outline-none focus:scale-y-110 focus:scale-x-110 transition-all pl-1 focus:my-2 text-lg rounded-lg bg-transparent border-dashed border-primary-500 border-[1px]'
            placeholder='Task'
            // onChange={(e) => handleDateChange(e.target.value)}
          ></input>
          <div className='flex flex-col'>
            <span className='-mb-2'>Color:</span>
            <select
              className='my-4 w-80 h-10 focus:outline-none focus:scale-y-110 focus:scale-x-110 transition-all pl-1 focus:my-2 text-lg rounded-lg bg-transparent border-dashed border-primary-500 border-[1px]'
              name='colors'
              // onChange={handleColorChange}
              // value={selectedColor}
            >
              <option value={-1} className='text-black'>
                None
              </option>
              {/* {colorOptions} */}
            </select>
            <span className='-mt-2'>This color will override group color!</span>
          </div>
        </div>
      </div>
    </div>
  );
}
