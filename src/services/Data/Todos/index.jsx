import { default as ToDo } from "../../../components/ui/todoItem";
import { getCategories } from "../Category";

export function getTodos(todoList, status) {
  return JSON.parse(todoList)
    .filter((el) => (status === "all" ? el : el.status === status))
    .map((el) => {
      return (
        <ToDo
          key={el.iKey}
          iKey={el.iKey}
          content={el.task}
          date={el.date}
          color={
            el.color
              ? el.color
              : getCategories(localStorage.getItem("Categories")).filter(
                  (category) => category.props.category === el.category
                )[0]?.props.color
          }
        ></ToDo>
      );
    });
}

export function setTodos(data) {
  const highestKey = JSON.parse(localStorage.getItem("Todos"))
    ? JSON.parse(localStorage.getItem("Todos"))
        .map((el) => el.iKey)
        .reduce((a, b) => Math.max(a, b), 0)
    : 0;

  const prevData = JSON.parse(localStorage.getItem("Todos")) || [];
  const newTodo = {
    category: data.taskCategory,
    task: data.taskContent,
    date: data.taskDate,
    status: "ToDo",
    color: data.taskColor,
    key: highestKey + 1,
    iKey: highestKey + 1,
  };
  const newData = [...prevData, newTodo];
  localStorage.setItem("Todos", JSON.stringify(newData));
  return JSON.stringify(newData);
}

// export function removeTodo(data) {}
