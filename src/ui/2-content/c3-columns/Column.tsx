import React from "react";
import {EditableSpan} from "../../../components/EditableSpan";
import {Cards} from "../c4-cards/Cards";

type ColumnPropsType = {
    title: string
    columnId: string
    removeColumn: () => void
    changeColumnTitle:(title: string) => void
}


export const Column = (props: ColumnPropsType) => {
    return (
        <div className={'columns'}>
            <div className={'column'}>
                <EditableSpan title={props.title} onChange={props.changeColumnTitle}/>
                <Cards id={props.columnId} />
            </div>
            <button onClick={props.removeColumn}>X</button>
        </div>
    )
}