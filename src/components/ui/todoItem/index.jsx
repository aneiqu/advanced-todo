import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// eslint-disable-next-line no-unused-vars
import possibleColors from "../../../data/colors";
export default function index({ content, color }) {
  const handleMenuOpen = (e) => {
    console.log(e.target);
  };

  return (
    <>
      <div className='w-full h-10 p-3 flex items-center justify-between'>
        <div className={`h-5 w-5 rounded-full mr-2 bg-${color}-500`} />
        <span className='w-full whitespace-nowrap text-ellipsis overflow-hidden'>
          {content}
        </span>
        <div className='group'>
          <MoreVertIcon className='group-active:scale-125' />
          <div
            className='absolute right-16 h-8 w-20 bg-primary-700 rounded-md rounded-tr-none hidden group-hover:block'
            onClick={(e) => handleMenuOpen(e)}
          >
            <span className='h-full flex  items-center justify-around'>
              Edit
              <EditIcon />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
