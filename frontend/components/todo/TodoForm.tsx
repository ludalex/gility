import { AddTodoProps } from "./types";

export const TodoForm = ({
  handleAddTodo,
  text,
  handleChange,
}: AddTodoProps) => {
  return (
    <form onSubmit={handleAddTodo} className="flex">
      <input
        placeholder="Buy something..."
        className="block w-full rounded-tl-lg rounded-bl-lg px-3 py-3 h-12 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-orange-500 sm:text-sm focus:ring-1"
        type="text"
        name="task"
        value={text}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="h-12 px-5 py-2 text-sm font-semibold text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-300 active:bg-orange-700 leading-5 rounded-tr-lg rounded-br-lg"
      >
        Add
      </button>
    </form>
  );
};
