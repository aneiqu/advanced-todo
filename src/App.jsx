import { default as Category } from "./components/ui/category";
import { default as CreateTask } from "./components/ui/newTask";
import { default as Statuses } from "./components/ui/taskStatus";
import { default as Welcome } from "./components/ui/welcomeBox";
// import { default as ToDoItem } from "./components/ui/todoItem/index";
function App() {
  return (
    <div className='min-h-screen '>
      <div className=' p-2 flex flex-col items-center'>
        <Welcome />
        <Statuses />
        <div className='flex w-80 overflow-auto'>
          <Category tasks={[1, 2, 3]} category={"Work"} color='red' />
          <Category tasks={[1, 2]} category={"Home"} color='blue' />
          <Category
            tasks={[1, 2, 3, 4, 5, 6]}
            category={"School"}
            color='purple'
          />
          <Category tasks={[1]} category={"Pets"} color='orange' />
        </div>
      </div>
      <CreateTask />
    </div>
  );
}

export default App;
