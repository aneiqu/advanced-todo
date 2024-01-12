import { useEffect, useState } from "react";

import AddIcon from "@mui/icons-material/Add";

import { setCategories } from "../../../services/Data/Category";
import { setTodos } from "../../../services/Data/Todos";
import { default as CategoryForm } from "./CategoryCreator";
import { default as TodoForm } from "./todosCreator";
export default function Index({ returnTodos, returnCategories, categories }) {
  const [enabled, setEnabled] = useState(false);
  const [currentlyCreating, setCurrentlyCreating] = useState("todo");

  const [newTodoData, setNewTodoData] = useState({
    taskCategory: JSON.parse(categories)[0]?.title,
    taskContent: "",
    taskDate: ``,
    taskColor: "",
  });
  const [newCategoryData, setNewCategoryData] = useState({
    categoryTitle: "",
    categoryColor: "",
  });

  const addHandler = () => {
    currentlyCreating === "todo" ? addTodo() : addCategory();
  };

  const addTodo = () => {
    if (
      !(
        newTodoData.taskCategory &&
        newTodoData.taskContent &&
        newTodoData.taskDate
      )
    )
      return;
    console.log("test");
    return returnTodos(setTodos(newTodoData));
  };

  const addCategory = () => {
    if (!(newCategoryData.categoryTitle && newCategoryData.categoryColor))
      return;
    returnCategories(setCategories(newCategoryData));
    setEnabled(false);
  };

  return (
    <>
      <div
        className={`${
          enabled ? "" : "hidden "
        }absolute flex w-screen h-screen z-20`}
      >
        <div className='bg-gradient-to-br from-primary-800 to-primary-900 w-screen h-screen fixed overflow-hidden flex flex-col items-center'>
          <div className='mb-4 rounded-xl bg-gradient-to-lt shadow-md shadow-primary-900 from-primary-800 to-primary-900  flex w-96  items-center justify-center content-between mt-2'>
            <div
              className={`h-10 flex items-center justify-center text-xl font-semibold m-2 w-40 rounded-md bg-transparent ${
                currentlyCreating === "todo"
                  ? "bg-white text-black"
                  : "text-white"
              } `}
              onClick={() => setCurrentlyCreating("todo")}
            >
              Todo
            </div>
            <div
              className={`h-10 flex items-center justify-center text-xl font-semibold m-2  w-40 rounded-md bg-transparent ${
                currentlyCreating === "category"
                  ? "bg-white text-black"
                  : "text-white"
              }`}
              onClick={() => setCurrentlyCreating("category")}
            >
              Category
            </div>
          </div>
          <div>
            {currentlyCreating === "todo" ? (
              <TodoForm setData={setNewTodoData} categories={categories} />
            ) : (
              <CategoryForm setData={setNewCategoryData} />
            )}
          </div>

          <div className='flex w-full  justify-end p-1'>
            <button
              className='w-24 h-10 mx-1 bg-transparent text-white text-lg border-primary-500 border-[1px] border-dashed rounded-md'
              onClick={() => setEnabled(false)}
            >
              Cancel
            </button>
            <button
              onClick={addHandler}
              className='w-14 h-10 mx-1 bg-transparent text-white text-lg border-primary-500 border-[1px] border-dashed rounded-md'
            >
              Add
            </button>
          </div>
        </div>
      </div>
      <div
        className='transparent fixed bottom-3 right-3 text-black'
        onClick={() => setEnabled(true)}
      >
        <div className='bg-white w-14 h-14 justify-center items-center flex rounded-full '>
          <AddIcon />
        </div>
      </div>
    </>
  );
}
