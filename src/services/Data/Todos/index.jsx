import { default as ToDo } from "../../../components/ui/todoItem";
import { getCategories } from "../Category";

export function getTodos(todoList, status) {
  if (todoList.length <= 0) return;
  return JSON.parse(todoList)
    .filter((el) => (status === "all" ? el : el.status === status))
    .map((el) => (
      <ToDo
        key={`${el.task}-${el.date}`}
        content={el.task}
        date={el.date}
        color={
          el.color
            ? el.color
            : getCategories("data").filter(
                (category) => category.title === el.category
              )[0]?.color
        }
      ></ToDo>
    ));
}

export function setTodos(data) {
  const prevData = JSON.parse(localStorage.getItem("Todos")) || [];
  const newTodo = {
    category: data.taskCategory,
    task: data.taskContent,
    date: data.taskDate,
    status: "ToDo",
    color: data.selectedColor,
  };
  const newData = [...prevData, newTodo];
  localStorage.setItem("Todos", JSON.stringify(newData));
  return JSON.stringify(newData);
}
