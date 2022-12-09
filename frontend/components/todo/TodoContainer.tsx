import { ChangeEvent, FormEvent, useState } from "react";
import { TodoForm } from "./TodoForm";
import { TodoItem } from "./TodoItem";
import { Todo } from "./types";

export const TodoContainer = () => {
  const [todoes, setTodoes] = useState<Todo[]>([]);
  const [text, setText] = useState<string>("");

  const addTodo = (e: FormEvent) => {
    e.preventDefault();

    text &&
      setTodoes([
        ...todoes,
        {
          id: todoes.length + 1,
          content: text,
          isCompleted: false,
        },
      ]);

    setText("");
  };

  const checkTodo = (id: number) => {
    setTodoes(
      todoes.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const handleTextInput = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    setText(value);
  };

  const pendingTodoes = todoes
    ?.filter(({ isCompleted }) => !isCompleted)
    .reverse();

  const completedTodoes = todoes?.filter(({ isCompleted }) => isCompleted);

  return (
    <div className="py-6 sm:px-6 lg:px-8 h-screen flex items-center flex-col justify-center">
      <div className="max-w-xl w-full p-3 bg-white shadow-xl shadow-black/5 ring-1 ring-slate-700/10 overflow-hidden sm:rounded-lg">
        <TodoForm
          handleAddTodo={addTodo}
          handleChange={handleTextInput}
          text={text}
        />

        <div className="overflow-x-hidden overflow-y-auto ">
          {pendingTodoes.length > 0 && (
            <div className="mt-5">
              
              {pendingTodoes.map((todo) => (
                <TodoItem
                  key={todo.id}
                  handleCheckTodo={checkTodo}
                  todo={todo}
                />
              ))}
            </div>
          )}

          {completedTodoes.length > 0 && (
            <div className=" border-t border-slate-400/20">
              <h2 className="text-2xl font-bold text-gray-700 mt-10">Completed</h2>

              {completedTodoes.map((todo) => (
                <TodoItem
                  key={todo.id}
                  handleCheckTodo={checkTodo}
                  todo={todo}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
