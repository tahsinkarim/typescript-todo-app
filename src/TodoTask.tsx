import { useState } from "react";
import { ITask } from "./Interfaces/Interfaces";

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  const [done, setDone] = useState<boolean>(false);
  const handleCheck = () => {
    setDone(!done);
  };
  return (
    <div className='flex justify-between bg-slate-300 mb-2 rounded shadow-md'>
      <div className='flex justify-between w-2/3 px-4 py-1 font-semibold'>
        <p
          className={`${done && "text-gray-500 decoration-slice line-through"}`}
        >
          {task.taskName}
        </p>
        <p
          className={`${done && "text-gray-500 decoration-slice line-through"}`}
        >
          {task.deadline}
        </p>
      </div>
      <div className='dlt-btn w-1/3 flex'>
        <button
          onClick={handleCheck}
          className='py-1 bg-[#5472ec] w-full rounded-l text-white block h-full'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            className='w-full h-6'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M4.5 12.75l6 6 9-13.5'
            />
          </svg>
        </button>
        <button
          className='py-1 bg-[#df4136] w-full rounded-r text-white block h-full'
          onClick={() => completeTask(task.taskName)}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke-width='1.5'
            stroke='currentColor'
            className='w-full h-6'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TodoTask;
