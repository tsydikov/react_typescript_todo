import React, {useState} from 'react'

export const TodoForm: React.FC = () => {
    const [title, setTitle] = useState<string>('')

    const ChangeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const keyPressHandler = (event:React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            console.log(title)
            setTitle('')
        }
    } 

    return (
        <div className="imput-field mt2">
            <label htmlFor="title" className="active">
                Введите название дела
            </label>
            <input
                onChange={ChangeHandler}
                value={title} 
                type="text" 
                id="title" 
                placeholder="Введите название дела"
                onKeyPress={keyPressHandler}
            />
            
        </div>
    )
}