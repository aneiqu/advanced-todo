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
      <div className='w-full h-12 p-3 flex items-center justify-between'>
        <div className={`h-6 w-7 rounded-full mr-2 bg-${color}-500`} />
        <span className='w-full text-xl whitespace-nowrap text-ellipsis overflow-hidden'>
          {content}
        </span>
        <div className='group w-10'>
          <MoreVertIcon fontSize='large' className=' group-active:scale-110' />
          <div
            className='absolute right-12 h-10 w-24 bg-primary-700 rounded-md rounded-tr-none lg:rounded-tl-none hidden lg:right-auto lg:rounded-tr-md lg:ml-6 group-hover:block'
            // className='absolute right-12 h-10 w-24 bg-primary-700 rounded-md rounded-tr-none hidden group-hover:block'
            onClick={(e) => handleMenuOpen(e)}
          >
            <span className='h-full flex  items-center justify-around text-lg'>
              Edit
              <EditIcon />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
