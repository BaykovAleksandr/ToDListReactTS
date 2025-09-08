import { TaskType } from "./App"
import { Button } from './Button';

type TodolistItemPropsType = {
  title: string;
  tasks: TaskType[];
};


export const TodolistItem = ({ tasks, title }: TodolistItemPropsType) => {
  const tasksList =
    tasks.length === 0 ? (
      <span>Your taskslist is empty</span>
    ) : (
      <ul>
        {tasks.map((t: TaskType) => {
          return (
            <li>
              <input type="checkbox" checked={t.isDone} />
              <span>{t.title}</span>
            </li>
          );
        })}
      </ul>
    );
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      {tasksList}
      <div>
        <Button description={"All"} />
        <Button description={"Active"} />
        <Button description={"Completed"} />
      </div>
    </div>
  );
};