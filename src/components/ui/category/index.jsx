import MoreVertIcon from "@mui/icons-material/MoreVert";
import { LinearProgress, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
// eslint-disable-next-line
import possibleColors from "../../../data/colors";
export default function Index({ category, tasks = [], color, loaded }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [loaded]);
  return (
    <div className='mt-4 mr-2 pb-2'>
      {loading ? (
        <div className='bg-primary-800 w-48 h-28 rounded-2xl p-4 shadow-md flex flex-col justify-around animate-pulse'>
          <Skeleton width='30%' />
          <Skeleton width='80%' />
          <Skeleton width='65%' />
        </div>
      ) : (
        <div className='bg-primary-900 w-48 h-28 rounded-2xl p-4 shadow-md flex flex-col justify-around'>
          <div className='flex flex-row justify-between'>
            <span className='text-sm text-primary-500'>
              {tasks.length === 1
                ? `${tasks.length} Task`
                : `${tasks.length} Tasks`}
            </span>
            <MoreVertIcon className='hover:text-primary-400 cursor-pointer' />
          </div>
          <span className='text-lg'>{category}</span>
          <LinearProgress
            className={`text-${color.toLowerCase()}-500`}
            variant='determinate'
            color='inherit'
            value={
              (tasks.filter((el) => el.status === "Completed").length /
                (tasks.length ? tasks.length : 1)) *
              100
            }
          />
        </div>
      )}
    </div>
  );
}
