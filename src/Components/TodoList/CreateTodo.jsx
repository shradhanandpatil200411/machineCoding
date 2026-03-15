import { useContext } from "react";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import { todoContext } from "../../ContextApi/Warper";

function CreateTodo() {
  const [todo, setTodo] = useContext(todoContext);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandle = (data) => {
    data.id = uuidv4();
    data.isCompleted = false;
    let copyTodo = [...todo];
    copyTodo.push(data);
    setTodo(copyTodo);
    reset();
  };
  return (
    <form onSubmit={handleSubmit(submitHandle)}>
      <div className='flex flex-col'>
        <input
          {...register("todo", { required: "todo can be empty" })}
          className='border px-2 py-2 text-lg rounded-xl outline-none '
          type='text'
          placeholder='create todo list'
        />
        <small className='text-red-400 font-thin'>
          {errors?.todo?.message}
        </small>
      </div>
      <button className='text-lg font-semibold px-4 py-2 bg-green-700 rounded-lg cursor-pointer my-4'>
        Create Todo
      </button>
    </form>
  );
}

export default CreateTodo;
