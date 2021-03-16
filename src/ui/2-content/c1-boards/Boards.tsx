import React, {ChangeEvent, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../../redux/store";
import {
    addBoardTC,
    BoardType,
    deleteBoardTC,
    getBoardsTC,
    setBoardTitlesAC
} from "../../../redux/reducers/boards-reducer";


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
            {boards.map(b => {
                const removeBoard = (id: string) => {
                    dispatch(deleteBoardTC(id))
                }
                return (
                    <div key={b._id} className={'board'}>{b.title}
                        <button onClick={() => {b._id && removeBoard(b._id)}}>X
                        </button>
                    </div>
                )
            })}
            <input value={title} onChange={onChangeBoardTitle}/>
            <button onClick={addBoard}>Add board</button>
        </div>
    )
}