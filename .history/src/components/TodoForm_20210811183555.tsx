import React, {useRef} from 'react'

interface TodoFormProps{
    onAdd(title:string): void
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
    // const [title, setTitle] = useState<string>('')
    const ref = useRef<HTMLInputElement>(null)

    // const ChangeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value)
    // }

    const keyPressHandler = (event:React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            props.onAdd(ref.current!.value)
            ref.current!.value=''
            // console.log(title)
            // setTitle('')
        }
    } 

    return (
        <div className="imput-field mt2">
            <label htmlFor="title" className="active">
                Введите название дела
            </label>
            <input
                // onChange={ChangeHandler}
                // value={title}
                ref={ref}
                type="text" 
                id="title" 
                placeholder="Введите название дела"
                onKeyPress={keyPressHandler}
            />
            
        </div>
    )
}