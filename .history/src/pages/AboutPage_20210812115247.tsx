import React from 'react'
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
    const history = useHistory()
    return (
        <>
            <h1>Страница Информации</h1>
            <p>Веб приложение "Лист дел". Написано для демонстрации умения использования Typescript.</p>
            <button className="btn" onClick={() => history.push('/')} >Обратно к списку дел</button>
        </>
    )
}