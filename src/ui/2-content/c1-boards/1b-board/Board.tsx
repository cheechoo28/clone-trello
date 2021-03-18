import {useDispatch} from "react-redux";
import {deleteBoardTC, updateBoardTC} from "../../../../redux/reducers/boards-reducer";
import React from "react";
import {EditableSpan} from "../../../../components/EditableSpan";

type BoardPropsType = {
    id: string
    title: string
}
export const Board = (props: BoardPropsType) => {

    const dispatch = useDispatch()

    const changeBoardTitle = (title: string) => {
        props.id && dispatch(updateBoardTC(props.id, title))
    }
    const removeBoard = (id: string) => {
        dispatch(deleteBoardTC(id))
    }

    return (
        <div className={'board'}>
            <button onClick={() => {
                props.id && removeBoard(props.id)
            }}>X
            </button>
            <EditableSpan title={props.title} onChange={changeBoardTitle}/>
        </div>

    )
}



