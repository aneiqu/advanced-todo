import { default as Completed } from "./Completed";
import { default as InProgress } from "./InProgress";
import { default as Pending } from "./Pending";
import { default as ToDo } from "./ToDo";
import { default as Todays } from "./Today";

export default function Index() {
  return (
    <div className='flex flex-col lg:flex-row lg:w-screen justify-around text-lg font-light'>
      <Todays />
      <ToDo />
      <InProgress />
      <Pending />
      <Completed />
    </div>
  );
}
