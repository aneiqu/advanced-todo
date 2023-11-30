import { Tab } from "@mui/base/Tab";
import { TabPanel } from "@mui/base/TabPanel";
import { Tabs } from "@mui/base/Tabs";
import { TabsList } from "@mui/base/TabsList";
import { Button } from "@mui/material";
import { useState } from "react";

import AddIcon from "@mui/icons-material/Add";

import { default as CategoryForm } from "./CategoryCreator";
import { default as TodoForm } from "./todosCreator";

export default function Index() {
  const [enabled, setEnabled] = useState(false);

  return (
    <>
      <div
        className={`${
          enabled ? "" : "hidden"
        }  absolute flex w-screen h-screen z-20`}
      >
        <div className='bg-gradient-to-br from-primary-800 to-primary-900 w-screen h-screen fixed overflow-hidden flex flex-col justify-between'>
          <Tabs defaultValue={1} className='flex flex-col items-center'>
            <TabsList className='mb-4 rounded-xl bg-gradient-to-lt shadow-md shadow-primary-900 from-primary-800 to-primary-900  flex w-96  items-center justify-center content-between mt-2'>
              <Tab
                slotProps={{
                  root: ({ selected }) => ({
                    className: `${
                      selected
                        ? "text-primary-900 bg-white"
                        : "text-white bg-transparent focus:text-white hover:bg-primary-700"
                    } text-sm font-bold w-full p-2 m-1.5 border-0 rounded-lg flex justify-center focus:outline-0 `,
                  }),
                }}
                value={1}
              >
                Todo
              </Tab>
              <Tab
                slotProps={{
                  root: ({ selected }) => ({
                    className: `${
                      selected
                        ? "text-primary-900 bg-white"
                        : "text-white bg-transparent focus:text-white hover:bg-primary-700"
                    }  text-sm font-bold w-full p-2 m-1.5 border-0 rounded-lg flex justify-center focus:outline-0`,
                  }),
                }}
                value={2}
              >
                Category
              </Tab>
            </TabsList>
            <TabPanel value={1}>
              <TodoForm />
            </TabPanel>
            <TabPanel value={2}>
              <CategoryForm />
            </TabPanel>
          </Tabs>
          <div className='flex w-full items-end justify-end p-1'>
            <Button
              variant='outlined'
              className='bg-transparent text-white border-primary-500 border-dashed'
              size='medium'
              sx={{ margin: "2px" }}
              onClick={() => setEnabled(false)}
            >
              Cancel
            </Button>
            <Button
              variant='outlined'
              className='bg-transparent text-white border-primary-500 border-dashed'
              size='medium'
              sx={{ margin: "2px" }}
            >
              Add
            </Button>
          </div>
        </div>
      </div>
      <div
        className='transparent fixed bottom-3 right-3 text-black'
        onClick={() => setEnabled(true)}
      >
        <div className='bg-white w-14 h-14 justify-center items-center flex rounded-full'>
          <AddIcon />
        </div>
      </div>
    </>
  );
}
