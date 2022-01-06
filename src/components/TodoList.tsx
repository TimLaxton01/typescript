import React from "react";

interface TodoLiistProps {
  items: { id: string; text: string }[];
}

const TodoList: React.FC<TodoLiistProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
