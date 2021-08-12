import React, {useState} from 'react'

export const TodoForm: React.FC = () => {
    const [title, setTitle] = useState('')

    return (
        <div className="imput-field mt2">
            <label htmlFor="title" className="active">
                Введите название дела
            </label>
            <input type="text" id="title" placeholder="Введите название дела" />
            
        </div>
    )
}