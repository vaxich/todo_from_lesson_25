import { ChangeEvent, KeyboardEvent, useState } from "react"
import { FilterValueType, TasksType } from "./App"
import { Button } from "./Button"
import { log } from "console"

type TodolistItemProps = {
    title: string
    filter: FilterValueType
    tasks: TasksType[]
    creatTask: (newTaskTitle: string) => void
    deleteTask: (taskId: string) => void
    changeFilter: (newFilterValue: FilterValueType) => void
    changeTaskStatus: (taskId: string, isDone: boolean) => void
}

export const TodolistItem = (props: TodolistItemProps) => {

    const [] = useState("")

    const { title, filter, tasks, deleteTask, changeFilter, creatTask, changeTaskStatus } = props

    const [newTaskTitle, setNewTaskTitle] = useState("");
    const [error, setError] = useState<string | null>(null)

    const createTaskHandler = () => {
        const trimmedTitle = newTaskTitle.trim()
        if (trimmedTitle !== "") {
            creatTask(trimmedTitle)
            setNewTaskTitle("")
        } else {
            setError('Title is required')
        }

    }

    const changeTaskTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNewTaskTitle(event.currentTarget.value)
        setError(null)
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
                        <input
                            className={error ? 'error' : ''}
                            value={newTaskTitle}
                            onChange={changeTaskTitleHandler}
                            onKeyDown={createTaskOnEnterHandler}
                        />

                        <Button title='+' onClick={createTaskHandler} />
                        {error && <div className={'error-massage'}>{error}</div>}
                    </div>
                    <ul>
                        {tasks.map(task => {

                            const deleteTaskHandler = () => {
                                deleteTask(task.id)
                            }

                            const changeTaskStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
                                const newStatusValue = e.currentTarget.checked
                                changeTaskStatus(task.id, newStatusValue)
                            }

                            return (
                                <li key={task.id} className={ task.isDone ? 'is-done' : ''}>
                                    <input
                                        type="checkbox"
                                        checked={task.isDone}
                                        onChange={changeTaskStatusHandler}
                                    />
                                    <span>{task.title}</span>
                                    <Button title='X' onClick={deleteTaskHandler} />
                                    {/* <button onClick={ () => {deleteTask(task.id)}}>X</button> */}
                                </li>
                            )
                        })}
                    </ul>
                    <div>
                        <Button className={ filter === 'All' ? 'active-filter' : ''} title='All' onClick={() => { changeFilter("All") }} />
                        <Button className={ filter === 'Active' ? 'active-filter' : ''} title='Active' onClick={() => { changeFilter("Active") }} />
                        <Button className={ filter === 'Completed' ? 'active-filter' : ''} title='Completed' onClick={() => { changeFilter("Completed") }} />
                    </div>

                </div>
            )}

        </div>
    )
}