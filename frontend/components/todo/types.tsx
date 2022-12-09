import { FormEvent, ChangeEvent } from "react";

export type Todo = {
  id: number;
  isCompleted: boolean;
  content: string;
};

export type TodoProps = {
  todo: Todo;
  handleCheckTodo: (id: number) => void;
};

export type AddTodoProps = {
  text: string;
  handleAddTodo: (e: FormEvent) => void;
  handleChange: (e: ChangeEvent) => void;
};
