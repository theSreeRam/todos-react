import { TodoItem } from "./TodoItem";

const TodoList = ({
  todos,
  toggleTodo,
  deleteTodo,
}: {
  todos: { id: string; title: string; completed: boolean }[];
  toggleTodo: (id: string, completed: boolean) => void;
  deleteTodo: (id: string) => void;
}) => {
  return (
    <>
      <ul className="list">
        {todos.map((todo) => {
          return (
            <TodoItem
              {...todo}
              key={todo.id}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    </>
  );
};

export default TodoList;
