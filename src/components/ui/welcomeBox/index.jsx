import { getTodos } from "../../../services/Data/Todos";

export default function Index({ todos }) {
  const todoList = getTodos(todos, "all") || [];
  const todayTodos = todoList.filter((el) => {
    const todaysDate = [
      new Date().getFullYear(),
      new Date().getMonth() + 1,
      new Date().getDate().toString().padStart(2, "0"),
    ].join("-");

    return el.props.date.split(" ")[0] === todaysDate;
  });

  return (
    <div className='flex flex-col w-80 py-2'>
      <h1 className='text-2xl font-ligh'>Welcome User</h1>
      <h1 className='text-3xl font-medium'>
        You&apos;ve got
        {todayTodos.length === 1
          ? ` ${todayTodos.length} task `
          : ` ${todayTodos.length} tasks `}
        today
      </h1>
    </div>
  );
}
