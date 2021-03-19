import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getTeamsTC, TeamType} from "../../../redux/reducers/teams-reducer";
import {RootStateType} from "../../../redux/store";

export const Teams = () => {

    const dispatch = useDispatch()
    const teams = useSelector<RootStateType, Array<TeamType>>(state => state.teams.teams)


    useEffect(() => {
        dispatch(getTeamsTC('6050c4b0665e18194c7709b1'))
    },[dispatch])

    return (
        <div>
            {teams.map(team => <div>{team.name}</div>)}
        </div>
    );
};
