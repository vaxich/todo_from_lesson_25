import { FilterValueType, TasksType } from "./App"
import { Button } from "./Button"

type TodolistItemProps = {
    title: string
    tasks: TasksType[]
    deleteTask: (taskId: string) => void
    changeFilter : (newFilterValue: FilterValueType) => void
}

export const TodolistItem = (props: TodolistItemProps) => {

    const { title, tasks, deleteTask , changeFilter} = props

    return (
        <div>
            {tasks.length === 0 ? (
                <p>Тасок нет</p>
            ) : (
                <div>
                    <h3>{title}</h3>
                    <div>
                        <input />
                        <button>+</button>
                    </div>
                    <ul>
                        {tasks.map(task => {
                            return (
                                <li key={task.id}>
                                    <input type="checkbox" checked={task.isDone} />
                                    <span>{task.title}</span>
                                    <Button title = 'X' onClick = { () => {deleteTask(task.id)}}/>
                                    {/* <button onClick={ () => {deleteTask(task.id)}}>X</button> */}
                                </li>
                            )
                        })}
                    </ul>
                    <div>
                        <Button title='All' onClick  = { () => {changeFilter("All")}}/>
                        <Button title='Active' onClick  = { () => {changeFilter("Active")}} />
                        <Button title='Completed' onClick  = { () => {changeFilter("Completed")}} />
                    </div>
                    
                </div>
            )}

        </div>
    )
}