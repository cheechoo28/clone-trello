import React, {useEffect} from 'react';
import './App.css';
import {Header} from "./ui/1-header/Header";
import {Content} from "./ui/2-content/Content";
import {useDispatch, useSelector} from "react-redux";
import {authMeTC} from "./redux/reducers/auth-reducer";
import {RootStateType} from "./redux/store";

function App() {

    const dispatch = useDispatch()
    const isAuth = useSelector<RootStateType, boolean>(state => state.auth.isAuth)

    useEffect(() => {
        !isAuth &&
        dispatch(authMeTC())
    },[])


  return (
    <div className="App">
      <Header/>
      <Content/>
    </div>
  );
}

export default App;
