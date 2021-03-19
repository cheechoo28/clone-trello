import React, {ChangeEvent, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {
    addColumnTC,
    ColumnType,
    deleteColumnTC,
    getColumnsTC,
    setColumnTitleAC,
    updateColumnTC
} from "../../../redux/reducers/column-reducer";
import {RootStateType} from "../../../redux/store";
import {Column} from "../c3-columns/Column";

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
            {columns && columns.map(column => {
                const removeColumn = () => {
                    dispatch(deleteColumnTC(column._id, boardId))
                }

                const changeColumnTitle = (title: string) => {
                    dispatch(updateColumnTC(column._id, title, boardId))
                }

                return (
                    <Column key={column._id} title={column.title} columnId={column._id} removeColumn={removeColumn} changeColumnTitle={changeColumnTitle}/>
                )
            })}
            <input value={title} onChange={changeColumnTitle}/>
            <button onClick={addColumn}>add column</button>
        </div>
    );
};





