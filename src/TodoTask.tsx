import { ITask } from "./Interfaces/Interfaces";

interface Props {
  task: ITask;
  completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, completeTask }: Props) => {
  return (
    <div className='task'>
      <div className='content'>
        <p>{task.taskName}</p>
        <p>{task.deadline}</p>
      </div>
      <div className='dlt-btn'>
        <button onClick={() => completeTask(task.taskName)}>X</button>
      </div>
    </div>
  );
};

export default TodoTask;
