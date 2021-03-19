import React from "react";
import { Route } from "react-router-dom";
import {Boards} from "./c1-boards/Boards";
import {Board} from "./c2-board/Board";
import {RegisterPage} from "./c1-auth/RegisterPage";
import {LoginPage} from "./c1-auth/LoginPage";

export const Content = () => {
    return (
        <div className={'content'}>
            <div >
                <Route exact path='/' render={() => <Boards/>}/>
                <Route path='/board/:boardId' render={() => <Board/>}/>
                <Route path='/register' render={() => <RegisterPage/>}/>
                <Route path='/login' render={() => <LoginPage/>}/>
            </div>
        </div>
    )
}