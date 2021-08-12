import React from 'react'

export const TodoForm: React.FC = () => {

    return (
        <div className="imput-field mt2">
            <label htmlFor="title" className="active">
                Введите название дела
            </label>
            <input type="text" id="title" placeholder="Введите название дела" />
            
        </div>
    )
}