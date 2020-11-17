// add useContext
import React, { useContext } from "react";
import { firebaseAuth } from "../provider/AuthProvider";
import { Link } from "react-router-dom";

import Google from "./Google";

import "./Signin.css";
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Sidebar,
    Visibility,
    Form,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import Signup from "./Signup";

const Signin = () => {
    const { handleSignin, inputs, setInputs, errors } = useContext(firebaseAuth);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("handleSubmit");
        handleSignin();
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(inputs);
        setInputs((prev) => ({...prev, [name]: value }));
    };

    return ( <
        div className = "main" >
        <
        Header inverted textAlign = "center"
        style = {
            {
                paddingTop: "25px",
                fontSize: "70px",
                color: "white",
                fontFamily: "NexaBold",
            }
        }
        className = "heading" > { " " }
        rAPId 1.0 { " " } <
        /Header>{" "} <
        Grid textAlign = "center"
        style = {
            { height: "90vh" }
        }
        verticalAlign = "middle" >
        <
        Grid.Column style = {
            { maxWidth: 500, maxHeight: 450, fontFamily: "NexaBold" }
        } >
        <
        Segment inverted padded style = {
            { padding: "45px" }
        } >
        <
        Header style = {
            { fontSize: "2rem", fontFamily: "NexaBold" }
        } > { " " }
        LOG IN HERE { " " } <
        /Header>{" "} <
        Form onSubmit = { handleSubmit }
        size = "big"
        inverted padded >
        <
        Form.Field required fluid >
        <
        Form.Input placeholder = "Email"
        name = "email"
        icon = "user"
        iconPosition = "left"
        value = { inputs.email }
        onChange = { handleChange }
        />{" "} < /
        Form.Field > { " " } <
        Form.Field required fluid >
        <
        Form.Input placeholder = "password"
        name = "password"
        icon = "lock"
        iconPosition = "left"
        type = "password"
        value = { inputs.password }
        onChange = { handleChange }
        />{" "} < /
        Form.Field > { " " } <
        Button content = "Submit" / >
        <
        div style = {
            { marginTop: "2%" }
        } >
        New to us ? < Link to = "/Signup" > Signup < /Link>{" "} < /
        div > { " " } <
        div > < /div>{" "} < /
        Form > { " " } <
        /Segment>{" "} < /
        Grid.Column > { " " } <
        /Grid>{" "} {
        errors.length > 0 ?
        errors.map((error) => < p style = {
                { color: "red" }
            } > { error } < /p>): null
        } { " " } <
        p > < /p> <div> </div > { " " } <
        /div>
    );
};

export default Signin;