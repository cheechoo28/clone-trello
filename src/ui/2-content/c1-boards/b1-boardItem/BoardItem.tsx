import React from "react";
import {useDispatch} from "react-redux";
import {deleteBoardTC, updateBoardTC} from "../../../../redux/reducers/boards-reducer";
import {EditableSpan} from "../../../../components/EditableSpan";
import {NavLink} from "react-router-dom";

type BoardPropsType = {
    id: string
    title: string
    teamId: string
}
export const BoardItem = (props: BoardPropsType) => {

    const dispatch = useDispatch()

    const changeBoardTitle = (title: string) => {
        props.id && dispatch(updateBoardTC(props.id, title, props.teamId))
    }
    const removeBoard = (id: string) => {
        dispatch(deleteBoardTC(id, props.teamId))
    }

    return (
        <div className={'board'}>
            <NavLink to={`/board/${props.id}`}>{props.title}</NavLink>
            <button onClick={() => {
                props.id && removeBoard(props.id)
            }}>X
            </button>
            <EditableSpan title={props.title} onChange={changeBoardTitle} isLink={true}/>
        </div>

    )
}



