import { getTodos } from "../../../../services/Data/Todos";
export default function Index() {
  const todos = getTodos("To do");

  return (
    <div>
      <span>To do</span>
      <div className='transition-all duration-300 bg-primary-900 w-80 h-28 rounded-2xl rounded-tl-none shadow-md hover:h-96 overflow-auto'>
        {todos}
      </div>
    </div>
  );
}
