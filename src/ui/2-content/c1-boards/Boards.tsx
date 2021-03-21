import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../../redux/store";
import {addBoardTC, BoardsType, getBoardsTC} from "../../../redux/reducers/boards-reducer";
import {BoardItem} from "./b1-boardItem/BoardItem";
import {NavLink} from "react-router-dom";
import {AddItemForm} from "../../../components/AddItemForm";

type BoardPropsType = {
    teamId: string
}

export const Boards = (props: BoardPropsType) => {

    const boards = useSelector<RootStateType, BoardsType>(state => state.boards)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getBoardsTC(props.teamId))
    }, [dispatch])

    const addBoard = (title: string) => {
        dispatch(addBoardTC({title, team_id: props.teamId}, props.teamId))
    }

    const boardsForTeam = boards[props.teamId]

    return (
        <div className={'container'}>
            {
                boardsForTeam && boardsForTeam.map(board => {
                    return (
                        board._id && <NavLink key={board._id} to={`/board/${board._id}`}><BoardItem id={board._id} teamId={props.teamId} title={board.title}/></NavLink>
                    )
                })
            }
            <AddItemForm addItem={addBoard}/>
        </div>
    )
}



