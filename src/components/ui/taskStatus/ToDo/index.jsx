import { getTodos } from "../../../../services/Data/Todos";
export default function Index({ todos }) {
  const todoList = getTodos(todos, "ToDo");

  return (
    <div className='flex flex-col items-center w-full mt-2'>
      <span className='w-11/12 text-xl'>To do</span>
      <div className='transition-all duration-300 bg-primary-900 w-11/12 h-28 rounded-2xl rounded-tl-none shadow-md hover:h-96 overflow-auto'>
        {todoList}
      </div>
    </div>
  );
}
