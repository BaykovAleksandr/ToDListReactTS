import { TaskType } from "../App";
import { Button } from "./Button";
type TodolistItemPropsType = {
  title: string;
  tasks: TaskType[];
  date?: string;
};

export const TodolistItem = ({ tasks, title, date }: TodolistItemPropsType) => {
  const tasksList =
    tasks.length < 1 ? (
      <span>Your taskslist is empty</span>
    ) : (
      <ul>
        {tasks.map((t: TaskType) => {
          return (
            <li key={crypto.randomUUID()}>
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
        <Button description={"+"} />
      </div>
      {tasksList}
      <span>{date}</span>
      <div>
        <Button description={"All"} />
        <Button description={"Active"} />
        <Button description={"Completed"} />
      </div>
    </div>
  );
};
