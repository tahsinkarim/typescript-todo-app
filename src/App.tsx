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
    <div className='app-container'>
      <div className='app'>
        <div className='input-container'>
          <div className='input'>
            <input
              name='task'
              type='text'
              placeholder='Task...'
              value={task}
              onChange={handleChange}
            />
            <input
              name='deadline'
              type='number'
              value={deadline}
              placeholder='Deadline (in Days)'
              onChange={handleChange}
            />
          </div>
          <div className='button'>
            <button onClick={addTask}>Add Task</button>
          </div>
        </div>
        <div className='todo'>
          {todoList.map((task: ITask, key: number) => {
            return (
              <TodoTask key={key} task={task} completeTask={completeTask} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
