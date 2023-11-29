import { getTodos } from "../../../services/Data/Todos";

export default function Index() {
  const todos = getTodos("", "data");
  return (
    <div className='flex flex-col w-80 py-2'>
      <h1 className='text-lg font-ligh'>Welcome User</h1>
      <h1 className='text-2xl font-medium'>
        You&apos;ve got
        {todos.length === 1
          ? ` ${todos.length} task `
          : ` ${todos.length} tasks `}
        today
      </h1>
    </div>
  );
}
