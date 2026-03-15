import CreateTodo from "../Components/TodoList/CreateTodo"
import ShowTodo from "../Components/TodoList/ShowTodo"



function TodoList() {

    return (
        <div><div className='mx-auto w-8/12  pt-20'>
            <div className='flex gap-10'>
                <h1 className='text-5xl w-1/2  my-10'>
                    Set <span className='text-red-800 font-thin'>Reminder</span> to the
                    tasks{" "}
                </h1>
                <h1 className='text-5xl  my-10 w-1/2'>
                    <span>Pending Todos</span>
                </h1>
            </div>
            <div className='flex w-full  gap-5'>
                <div className='w-1/2'>
                    <CreateTodo />
                </div>
                <div className='w-1/2'>
                    <ShowTodo />
                </div>
            </div>
        </div></div>
    )
}

export default TodoList