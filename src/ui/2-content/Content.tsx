import React from "react";
import { Route } from "react-router-dom";
import {Boards} from "./c1-boards/Boards";
import {Board} from "./c2-board/Board";

export const Content = () => {
    return (
        <div className={'content'}>
            <div >
                <Route exact path='/' render={() => <Boards/>}/>
                <Route path='/board/:boardId' render={() => <Board/>}/>
            </div>
        </div>
    )
}