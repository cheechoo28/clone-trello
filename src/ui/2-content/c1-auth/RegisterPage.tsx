import {Field, Form, Formik } from 'formik';
import React from 'react';
import {useDispatch} from "react-redux";
import {registerTC} from "../../../redux/reducers/auth-reducer";

export const RegisterPage = () => {

    const dispatch = useDispatch()

    return (
        <div className={'loginPage'}>
            <h1>Sign Up</h1>
            <Formik
                initialValues={{
                    password: '',
                    email: '',
                }}
                onSubmit={ (values) => {
                    dispatch(registerTC(values))
                }}
            >
                <Form>
                    <Field type="password" name="password" placeholder="password" />

                    <Field
                        name="email"
                        placeholder="email"
                        type="email"
                    />
                    <button type="submit">Register</button>
                </Form>
            </Formik>
        </div>
    );
};
