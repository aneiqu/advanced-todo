import { default as Completed } from "./Completed";
import { default as InProgress } from "./InProgress";
import { default as Pending } from "./Pending";
import { default as ToDo } from "./ToDo";
import { default as Todays } from "./Today";

export default function Index({ todos }) {
  return (
    <div className='flex flex-col items-center lg:flex-row w-screen lg:w-screen justify-around text-lg font-light'>
      <Todays todos={todos} />
      <ToDo todos={todos} />
      <InProgress todos={todos} />
      <Pending todos={todos} />
      <Completed todos={todos} />
    </div>
  );
}
