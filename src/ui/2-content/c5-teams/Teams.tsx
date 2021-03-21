import React, {ChangeEvent, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {
    addTeamTC,
    getTeamsTC,
    setTeamDescriptionAC,
    setTeamNameAC,
    TeamType
} from "../../../redux/reducers/teams-reducer";
import {RootStateType} from "../../../redux/store";
import {Boards} from "../c1-boards/Boards";

export const Teams = () => {

    const dispatch = useDispatch()
    const teams = useSelector<RootStateType, Array<TeamType>>(state => state.teams.teams)
    const name = useSelector<RootStateType, string>(state => state.teams.name)
    const description = useSelector<RootStateType, string>(state => state.teams.description)


    useEffect(() => {
        dispatch(getTeamsTC('6050c4b0665e18194c7709b1'))
    },[dispatch])

    const changeTeamName = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setTeamNameAC(e.currentTarget.value))
    }

    const changeTeamDescription = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setTeamDescriptionAC(e.currentTarget.value))
    }

    const addTeam = () => {
        dispatch(addTeamTC({user_id: '6050c4b0665e18194c7709b1', name, description}, '6050c4b0665e18194c7709b1'))
        dispatch(setTeamNameAC(''))
        dispatch(setTeamDescriptionAC(''))
    }

    return (
        <div>
            {teams.map(team => {
                return (
                    <div key={team._id}>
                        <div>{team.name}</div>
                        <Boards teamId={team._id}/>
                    </div>
                    )
            })}
            <div>
                Name: <input value={name} onChange={changeTeamName}/>
                Description: <input value={description} onChange={changeTeamDescription}/>
                <button onClick={addTeam}>creat team</button>
            </div>

        </div>
    );
};
