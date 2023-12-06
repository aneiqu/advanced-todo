import { useState } from "react";
import { default as CreateTask } from "./components/ui/newTask";
import { default as SearchBar } from "./components/ui/searchBar";
import { default as Statuses } from "./components/ui/taskStatus";
import { default as Welcome } from "./components/ui/welcomeBox";
import { getCategories } from "./services/Data/Category";
import { setTodos } from "./services/Data/Todos";

// if (!localStorage.getItem("Todos")) localStorage.setItem("Todos", "[]");

const Categories = getCategories();
function App() {
  const [todoList, setTodoList] = useState(localStorage.getItem("Todos") || []);
  const [categoryList, setCategoryList] = useState(
    localStorage.getItem("Categories") || []
  );

  const returnNewTodoList = (e) => {
    setTodoList(e);
  };
  const returnNewCategoryList = (e) => {
    setCategoryList(e);
  };
  return (
    <>
      <div className='flex flex-col w-screen items-center'>
        <Welcome todos={todoList} />
        <SearchBar />
        <div className='flex w-11/12 lg:w-screen overflow-auto'>
          {Categories}
        </div>
        <Statuses todos={todoList} />
        <CreateTask returnTodos={returnNewTodoList} />
      </div>
    </>
  );
}

export default App;
