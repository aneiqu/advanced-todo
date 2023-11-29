import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function index({ content, color }) {
  // eslint-disable-next-line
  const possible = [
    "text-red-500",
    "text-green-500",
    "text-blue-500",
    "text-orange-500",
    "text-purple-500",
    "text-gray-500",
  ];

  return (
    <div className='w-full h-10  p-2 flex items-center justify-between'>
      <div className={`h-4 w-4 rounded-full bg-${color}-500 mr-2`} />
      <span className='w-full whitespace-nowrap text-ellipsis overflow-hidden'>
        {content}
      </span>
      <MoreVertIcon />
    </div>
  );
}
