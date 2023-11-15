import { getCategories } from "../../../../services/Data/Category";
import { getTodos } from "../../../../services/Data/Todos";
import { default as ToDo } from "../../todoItem";
export default function Index() {
  console.log();
  console.log(getTodos());
  const todos = getTodos()
    .filter((el) => el.status === "To do")
    .map((el) => (
      <ToDo
        key={el.task}
        content={el.task}
        color={
          getCategories().filter(
            (category) => category.title === el.category
          )[0].color
        }
      ></ToDo>
    ));

  return (
    <div>
      <span>To do</span>
      <div className='transition-all duration-300 bg-primary-900 w-80 h-28 rounded-2xl rounded-tl-none shadow-md hover:h-96 overflow-auto'>
        {todos}
      </div>
    </div>
  );
}
