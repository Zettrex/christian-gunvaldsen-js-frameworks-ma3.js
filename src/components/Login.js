import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Heading from "./Heading";

const schema = yup.object().shape({
    userName:  yup
        .string()
        .required("please enter a valid username")
        .min(4, "username is to short")
        .max(25, "username is to long"),
    password: yup
        .string()
        .required("please enter a valid password")
        .min(7, "password to short")
});

export default function (props) {
    const { register, handleSubmit, errors } = useForm({
        validationSchema: schema
    });
    function onSubmit(data) {

    }
    return(
        <div>
            <Heading content="Login"/>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control name="userName" placeholder="please enter username"/>
                    {errors.userName && <p>please enter a valid username</p>}
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" placeholder="Please enter your Password"/>
                    {errors.password && <p>please enter a valid password</p>}
                </Form.Group>
                <Button type="submit">Log in</Button>
            </Form>
        </div>
    )
}