import React, {ChangeEvent, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {
    addColumnTC,
    ColumnType,
    deleteColumnTC,
    getColumnsTC,
    setColumnTitleAC
} from "../../../redux/reducers/column-reducer";
import {RootStateType} from "../../../redux/store";

export const Board = () => {

    const dispatch = useDispatch()
    const columns = useSelector<RootStateType, Array<ColumnType>>(state => state.columns.columns)
    const title = useSelector<RootStateType, string>(state => state.columns.title)

    const {boardId} = useParams<any>()

    useEffect(() => {
        dispatch(getColumnsTC(boardId))
    }, [dispatch])

    const changeColumnTitle = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setColumnTitleAC(e.currentTarget.value))
    }

    const addColumn = () => {
        dispatch(addColumnTC(title, boardId))
        dispatch(setColumnTitleAC(''))
    }

    return (
        <div className={'columns'}>
            {columns.map(column => {
                const removeColumn = () => {
                    dispatch(deleteColumnTC(column._id, boardId))
                }

                return (
                    <div className={'column'}>{column.title}
                        <button onClick={removeColumn}>X</button>
                    </div>
                )
            })}
            <input value={title} onChange={changeColumnTitle}/>
            <button onClick={addColumn}>add column</button>
        </div>
    );
};

