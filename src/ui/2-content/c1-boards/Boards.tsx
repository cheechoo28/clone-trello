import React, {ChangeEvent, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../../redux/store";
import {addBoardTC, BoardType, getBoardsTC, setBoardTitlesAC} from "../../../redux/reducers/boards-reducer";
import {Board} from "./1b-board/Board";

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
                        board._id && <Board id={board._id} title={board.title}/>
                    )
                })
            }
            <input value={title} onChange={onChangeBoardTitle}/>
            <button onClick={addBoard}>Add board</button>
        </div>
    )
}


