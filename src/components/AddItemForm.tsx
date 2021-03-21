import React, {ChangeEvent, useState} from "react";

type AddItemFormPropsType = {
    addItem:(title: string) => void
}

export const AddItemForm = (props: AddItemFormPropsType) => {

    const [title, setTitle] = useState<string>('')

    const onChangeBoardTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const addItem = () => {
        props.addItem(title)
        setTitle('')
    }

    return (
        <div>
            <input value={title} onChange={onChangeBoardTitle}/>
            <button onClick={addItem}>Add board</button>
        </div>
    )
}