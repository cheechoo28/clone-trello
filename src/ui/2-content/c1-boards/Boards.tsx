import React, {ChangeEvent, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../../redux/store";
import {addBoardTC, BoardType, getBoardsTC, setBoardTitlesAC} from "../../../redux/reducers/boards-reducer";
import {BoardItem} from "./b1-boardItem/BoardItem";
import {NavLink} from "react-router-dom";

export const Boards = () => {

    const boards = useSelector<RootStateType, Array<BoardType>>(state => state.boards.boards)
    const title = useSelector<RootStateType, string>(state => state.boards.title)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getBoardsTC())
    }, [dispatch])

    const addBoard = () => {
        dispatch(addBoardTC({title, author_id: '1'}))
        dispatch(setBoardTitlesAC(''))
    }

    const onChangeBoardTitle = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setBoardTitlesAC(e.currentTarget.value))
    }

    return (
        <div className={'container'}>
            {
                boards.map(board => {
                    return (
                        board._id && <NavLink to={`/board/${board._id}`}><BoardItem key={board._id} id={board._id} title={board.title}/></NavLink>
                    )
                })
            }
            <input value={title} onChange={onChangeBoardTitle}/>
            <button onClick={addBoard}>Add board</button>
        </div>
    )
}


