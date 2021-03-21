import React, {ChangeEvent, useState} from "react";

type EditableSpanPropsType = {
    title: string
    onChange:(title: string) => void
    isLink?: boolean
}

export const EditableSpan = (props: EditableSpanPropsType) => {

    const [newTitle, setNewTitle] = useState<string>('')
    const [isShowEditInput, setIsShowEditInput] = useState<boolean>(false)

    const editInputOn = () => {
        setNewTitle(props.title)
        setIsShowEditInput(true)
    }

    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }

    const editInputOff = () => {
        setIsShowEditInput(false)
        props.onChange(newTitle)
    }

    return (
        <div>
            {
                isShowEditInput ?
                    <input value={newTitle} onChange={changeTitle} onBlur={editInputOff} autoFocus/>
                    :
                    <span onDoubleClick={editInputOn}>{props.title}</span>
            }
        </div>
    );
};
