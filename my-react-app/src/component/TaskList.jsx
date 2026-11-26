function TaskList(){
    const tasks = [
        {
            id:1,
            name:"task1",
            message:"this is task1",
            age:20,
        },
        {
            id:2,
            name:"task2",
            message:"this is task2",
            age:30,
        },
        {
            id:3,
            name:"task3",
            message:"this is task3",
            age:40,
        }
    ];
    return(
        <>
        <h1>Task List</h1>
        {tasks.map((task) => (
            <TaskCard 
                key={task.id}
                name={task.name}
                message={task.message}
                age={task.age}
            />
        ))}
        </>
    );
}