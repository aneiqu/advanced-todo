import MoreVertIcon from "@mui/icons-material/MoreVert";
// eslint-disable-next-line no-unused-vars
import possibleColors from "../../../data/colors";
export default function index({ content, color }) {
  return (
    <div className='w-full h-10  p-2 flex items-center justify-between'>
      <div className={`h-4 w-4 rounded-full mr-2 bg-${color}-500`} />
      <span className='w-full whitespace-nowrap text-ellipsis overflow-hidden'>
        {content}
      </span>
      <MoreVertIcon />
    </div>
  );
}
