import React from "react";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {logoutTC} from "../../redux/reducers/auth-reducer";

export const Header = () => {

    const dispatch = useDispatch()

    const logOut = () => {
          dispatch(logoutTC())
    }

    return (
        <div className={'header'}>
            <NavLink to='/'>Boards</NavLink>
            <NavLink to='/register'>Sign up</NavLink>
            <NavLink to='/login'>Sign in</NavLink>
            <NavLink to='/logout' onClick={logOut}>Exit</NavLink>
            <NavLink to='/teams' >My teams</NavLink>
        </div>
    )
}