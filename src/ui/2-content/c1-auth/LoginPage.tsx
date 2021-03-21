import React from 'react';
import {Field, Form, Formik} from 'formik';
import {useDispatch} from "react-redux";
import {loginTC} from "../../../redux/reducers/auth-reducer";

export const LoginPage = () => {

    const dispatch = useDispatch()

    return (
        <div className={'loginPage'}>
            <h1>Sign In</h1>
            <Formik
                initialValues={{
                    password: '',
                    email: '',
                    rememberMe: false
                }}
                onSubmit={ (values) => {
                    dispatch(loginTC(values))
                }}
            >
                <Form>
                    <Field type="password" name="password" placeholder="password" />

                    <Field
                        name="email"
                        placeholder="email"
                        type="email"
                    />
                    <button type="submit">Login</button>
                </Form>
            </Formik>
        </div>
    );
};
