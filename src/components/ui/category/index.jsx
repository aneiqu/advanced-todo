import { LinearProgress } from "@mui/material";

export default function Index({ category, tasks = [], color }) {
  const possible = [
    "text-red-500",
    "text-green-500",
    "text-blue-500",
    "text-orange-500",
    "text-purple-500",
    "text-yellow-500",
  ];
  //   const [loading, setLoading] = useState(true);
  setTimeout(() => {
    // setLoading(false);
  }, 5000);
  return (
    <div className='m-2'>
      <div className='bg-primary-900 w-48 h-28 rounded-2xl p-4 shadow-md flex flex-col justify-around'>
        <span className='text-sm text-primary-500'>
          {tasks.length === 1
            ? `${tasks.length} Task`
            : `${tasks.length} Tasks`}
        </span>
        <span className='text-lg'>{category}</span>
        <LinearProgress
          className={`text-${color}-500`}
          variant='determinate'
          color='inherit'
          value={20}
        />
      </div>

      {/* <div className='min-w-[384px] w-96 min-h-[70px] mb-2'>
        {loading ? (
          <Skeleton variant='rectangular' width='100%' height='100%' />
        ) : (
          "Loaded!"
        )}
      </div>
      <div className='min-w-[384px] w-96 min-h-[180px] '>
        {loading ? (
          <Skeleton variant='rectangular' width='100%' height='100%' />
        ) : (
          "Loaded!"
        )}
      </div> */}
    </div>
  );
}
