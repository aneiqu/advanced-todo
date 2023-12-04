import { getTodos } from "../../../services/Data/Todos";

export default function Index() {
  const todos = getTodos("", "data");
  const todayTodos = todos.filter((el) => {
    const todaysDate = [
      new Date().getDate(),
      new Date().getMonth() + 1,
      new Date().getFullYear(),
    ].join(".");

    return el.date === todaysDate;
  });

  return (
    <div className='flex flex-col w-80 py-2'>
      <h1 className='text-lg font-ligh'>Welcome User</h1>
      <h1 className='text-2xl font-medium'>
        You&apos;ve got
        {todayTodos.length === 1
          ? ` ${todayTodos.length} task `
          : ` ${todayTodos.length} tasks `}
        today
      </h1>
    </div>
  );
}
