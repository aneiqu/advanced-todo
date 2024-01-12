import { default as Category } from "../../../components/ui/category";

export function getCategories(categoryList) {
  if (categoryList.length <= 0) return [];
  const parsedData = JSON.parse(categoryList);
  return parsedData.map((data) => {
    return (
      <Category
        key={data.title}
        category={data.title}
        color={data.color}
        loaded={true}
        tasks={JSON.parse(localStorage.getItem("Todos"))?.filter(
          (el) => el.category === data.title
        )}
      ></Category>
    );
  });
}

export function setCategories(data) {
  const prevData = JSON.parse(localStorage.getItem("Categories")) || [];
  const newTodo = {
    title: data.categoryTitle,
    color: data.categoryColor,
  };
  const newData = [...prevData, newTodo];
  localStorage.setItem("Categories", JSON.stringify(newData));
  return JSON.stringify(newData);
}
