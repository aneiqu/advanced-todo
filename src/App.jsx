import { default as Category } from "./components/ui/category";
import { default as CreateTask } from "./components/ui/newTask";
import { default as SearchBar } from "./components/ui/searchBar";
import { default as Statuses } from "./components/ui/taskStatus";
import { default as Welcome } from "./components/ui/welcomeBox";
import { getCategories } from "./services/Data/Category";
import { getTodos } from "./services/Data/Todos";

const Categories = getCategories().map((data) => {
  return (
    <Category
      key={data.title}
      category={data.title}
      color={data.color}
      loaded={true}
      tasks={getTodos().filter((el) => el.category === data.title)}
    ></Category>
  );
});

function App() {
  return (
    <>
      <div className='flex flex-col items-center'>
        <Welcome />
        <SearchBar />
        <div className='flex w-80 lg:w-screen overflow-auto'>{Categories}</div>
        <Statuses />
        <CreateTask />
      </div>
    </>
  );
}

export default App;
