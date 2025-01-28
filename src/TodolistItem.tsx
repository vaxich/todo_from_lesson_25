import { TasksType } from "./App"
import { Button } from "./Button"

type TodolistItemProps = {
    title: string
    tasks: TasksType[]
    date?: string
}

export const TodolistItem = (props: TodolistItemProps) => {

    const { title, tasks, date } = props

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
                                </li>
                            )
                        })}
                    </ul>
                    <div>
                        <Button title='All' />
                        <Button title='Active' />
                        <Button title='Completed' />
                    </div>
                    <div>{date}</div>
                </div>
            )}

        </div>
    )
}