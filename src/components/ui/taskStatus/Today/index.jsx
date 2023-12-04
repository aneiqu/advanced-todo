import { getTodos } from "../../../../services/Data/Todos";

export default function Index() {
  const todos = getTodos("");

  const todayTodos = todos.filter((el) => {
    const todaysDate = [
      new Date().getDate(),
      new Date().getMonth() + 1,
      new Date().getFullYear(),
    ].join("-");

    return el.props.date === todaysDate;
  });

  return (
    <div className='flex flex-col items-center w-full mt-2'>
      <span className='w-11/12 text-xl'>Today&apos;s tasks</span>
      <div className='transition-all duration-300 bg-primary-900 w-11/12 h-28 rounded-2xl rounded-tl-none shadow-md hover:h-96 overflow-auto'>
        {todayTodos}
      </div>
    </div>
  );
}
