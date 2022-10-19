import { ChangeEvent, FC, useState } from "react";
import "./index.css";
import { ITask } from "./Interfaces/Interfaces";
import TodoTask from "./TodoTask";

const App: FC = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    console.log(todoList);
    setTask("");
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName != taskNameToDelete;
      })
    );
  };

  return (
    <div className='flex px-4 justify-center items-center min-h-screen bg-gradient-to-br from-[#ffece3] to-[#f0b89a]'>
      <div className='bg-[#4363ec]  rounded-2xl max-w-xs shadow-2xl'>
        <div className='flex text-white justify-end pt-2 pb-10 pr-2 gap-2'>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              className='w-5 h-5'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z'
              />
            </svg>
          </span>
          <span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              className='w-5 h-5'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5H18V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z'
              />
            </svg>
          </span>
        </div>
        <div className='input-container px-4'>
          <div>
            <h2 className='text-3xl mb-4  text-white'>Hello,</h2>
            <p className='text-3xl text-white'>My Day :</p>
            <div className='flex justify-between mx-4 mt-8'>
              <p className='text-gray-300'>
                <small>Task Name</small>
              </p>
              <p className='text-gray-300'>
                <small>Task time</small>
              </p>
            </div>
            <input
              className='pl-4 py-2 bg-[#2b49c3] rounded-l-full w-4/5 text-white shadow-lg'
              name='task'
              type='text'
              placeholder='Task...'
              value={task}
              onChange={handleChange}
              required
            />
            <input
              className='w-1/5 pl-2 bg-[#2b49c3] py-2 rounded-r-full text-white shadow-lg'
              name='deadline'
              type='number'
              value={deadline}
              placeholder='Deadline (in Days)'
              onChange={handleChange}
            />
          </div>
          <div className='flex justify-end'>
            <button
              className='py-1 px-3 my-2 rounded-full text-white bg-[#ff7f54]'
              onClick={addTask}
            >
              Add Task
            </button>
          </div>
        </div>
        <div className='min-h-[100px] mt-2 rounded-t-3xl rounded-b-2xl bg-white'>
          <div className='px-6 py-6 w-full'>
            {todoList.map((task: ITask, key: number) => {
              return (
                <TodoTask key={key} task={task} completeTask={completeTask} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
