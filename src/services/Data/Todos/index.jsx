import { default as ToDo } from "../../../components/ui/todoItem";
import { getCategories } from "../Category";
export function getTodos(status, type) {
  const data = localStorage.getItem("Todos");
  const parsedData = status
    ? JSON.parse(data).filter((el) => el.status === status)
    : JSON.parse(data);

  return type === "data"
    ? parsedData
    : parsedData.map((el) => (
        <ToDo
          key={el.task}
          content={el.task}
          color={
            el.color
              ? el.color
              : getCategories("data").filter(
                  (category) => category.title === el.category
                )[0]?.color
          }
        ></ToDo>
      ));

  // return JSON.parse(data)) || [];
}

export function setTodos() {}
