import { default as Category } from "./components/ui/category";
// import { default as ToDoItem } from "./components/ui/todoItem/index";
function App() {
  return (
    <>
      <div className='w-screen h-screen bg-gradient-to-br from-primary-800 to-primary-900 '>
        <div className='flex w-screen overflow-auto'>
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
    </>
  );
}

export default App;
