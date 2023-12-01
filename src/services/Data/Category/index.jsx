import { default as Category } from "../../../components/ui/category";
import { getTodos } from "../Todos";
export function getCategories(type) {
  const data = localStorage.getItem("Categories");
  if (data == null) return [];
  const parsedData = JSON.parse(data);
  return type === "data"
    ? parsedData
    : parsedData.map((data) => {
        return (
          <Category
            key={data.title}
            category={data.title}
            color={data.color}
            loaded={true}
            tasks={getTodos("", "data").filter(
              (el) => el.category === data.title
            )}
          ></Category>
        );
      });
}
