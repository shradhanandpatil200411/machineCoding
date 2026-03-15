import React, { useContext } from "react";
import { todoContext } from "../../ContextApi/Warper";

function ShowTodo() {
  const [todo, setTodo] = useContext(todoContext);
  const handelDelete = (id) => {
    const newTodo = todo.filter((todo) => todo.id !== id);
    setTodo(newTodo);
  };

  return (
    <>
      <ul>
        {todo.map((todo) => (
          <li
            key={todo.id}
            className='w-full border mb-5 px-2 py-2 rounded text-xl font-bold flex justify-between items-center'>
            {todo.todo}
            <span
              onClick={() => handelDelete(todo.id)}
              className='text-white font-semibold px-2 py-2 rounded-xl bg-red-400 cursor-pointer'>
              Delete
            </span>
          </li>
        ))}
      </ul>
    </>
  );
}

export default React.memo(ShowTodo);
