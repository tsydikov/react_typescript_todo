import React from 'react'

export const TodoForm: React.FC = () => {

    return (
        <div className="imput-field mt2">
            <input type="text" id="title" />
            <label htmlFor="title" className="active">
                Введите название дела
            </label>
        </div>
    )
}