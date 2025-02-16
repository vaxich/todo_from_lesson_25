import { ChangeEvent, KeyboardEvent, useState } from "react"
import { FilterValueType, TasksType } from "./App"
import { Button } from "./Button"
import { log } from "console"

type TodolistItemProps = {
    title: string
    tasks: TasksType[]
    creatTask: (newTaskTitle: string) => void
    deleteTask: (taskId: string) => void
    changeFilter: (newFilterValue: FilterValueType) => void
}

export const TodolistItem = (props: TodolistItemProps) => {

    const [] = useState("")

    const { title, tasks, deleteTask, changeFilter, creatTask } = props

    const [newTaskTitle, setNewTaskTitle] = useState("")

    const createTaskHandler = () => {
        creatTask(newTaskTitle)
        setNewTaskTitle("")
    }

    const changeTaskTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(event.currentTarget.value)
    }

    const createTaskOnEnterHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
          createTaskHandler()
        }
      }

    return (
        <div>
            {tasks.length === 0 ? (
                <p>Тасок нет</p>
            ) : (
                <div>
                    <h3>{title}</h3>
                    <div>
                        <input value={newTaskTitle} 
                        onChange={changeTaskTitleHandler} 
                        onKeyDown={createTaskOnEnterHandler}
                        />

                        <Button title='+' onClick={createTaskHandler} />
                    </div>
                    <ul>
                        {tasks.map(task => {

                            const deleteTaskHandler = () => {
                                deleteTask(task.id)}
                                
                            return (
                                <li key={task.id}>
                                    <input type="checkbox" checked={task.isDone} />
                                    <span>{task.title}</span>
                                    <Button title='X' onClick={deleteTaskHandler} />
                                    {/* <button onClick={ () => {deleteTask(task.id)}}>X</button> */}
                                </li>
                            )
                        })}
                    </ul>
                    <div>
                        <Button title='All' onClick={() => { changeFilter("All") }} />
                        <Button title='Active' onClick={() => { changeFilter("Active") }} />
                        <Button title='Completed' onClick={() => { changeFilter("Completed") }} />
                    </div>

                </div>
            )}

        </div>
    )
}