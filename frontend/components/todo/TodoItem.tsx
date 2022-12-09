import { TodoProps } from "./types";

export const TodoItem = ({
  todo: { id, content, isCompleted },
  handleCheckTodo,
}: TodoProps) => {
  return (
    <div className="shadow rounded-lg border border-slate-400/20 py-3 px-3.5 p-3 mt-4 bg-slate-300/5 flex justify-between">
      <div className="flex items-center">
        <input
          id={"todo-" + id}
          type="checkbox"
          checked={isCompleted}
          onChange={() => handleCheckTodo(id)}
        />{" "}
        <label
          htmlFor={"todo-" + id}
          className="ml-3 font-medium text-slate-900 text-sm"
        >
          {content}
        </label>
      </div>
    </div>
  );
};
