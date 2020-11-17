// add useContext
import React, { useContext } from "react";
import { firebaseAuth } from "../provider/AuthProvider";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
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

const Signup = (props) => {
        const { handleSignup, inputs, setInputs, errors } = useContext(firebaseAuth);

        const handleSubmit = async(e) => {
            e.preventDefault();
            console.log("handleSubmit");
            //wait to signup
            await handleSignup();
            //push home
            props.history.push("/");
        };
        const handleChange = (e) => {
            const { name, value } = e.target;
            console.log(inputs);
            setInputs((prev) => ({...prev, [name]: value }));
        };

        return ( <
            div className = "main" >
            <
            Header textAlign = "center"
            style = {
                { paddingTop: "25px", fontSize: "70px", color: "white" } } >
            { " " }
            rAPId 1.0 { " " } <
            /Header>{" "} <
            Grid textAlign = "center"
            style = {
                { height: "90vh" } }
            verticalAlign = "middle" >
            <
            Grid.Column style = {
                { maxWidth: 500, maxHeight: 450 } } >
            <
            Segment inverted padded style = {
                { padding: "45px" } } >
            <
            Header style = {
                { fontSize: "2rem" } } > SIGN UP < /Header>{" "} <
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
            />{" "} <
            /Form.Field>{" "} <
            Form.Field required fluid >
            <
            Form.Input placeholder = "password"
            name = "password"
            icon = "lock"
            iconPosition = "left"
            type = "password"
            value = { inputs.password }
            onChange = { handleChange }
            />{" "} <
            /Form.Field>{" "} <
            Button content = "Submit" / >
            <
            /Form>{" "} <
            /Segment>{" "} <
            /Grid.Column>{" "} <
            /Grid>{" "} {
                errors.length > 0 ?
                    errors.map((error) => < p style = {
                            { color: "red" } } > { error } < /p>): null
                    } { " " } <
                    p > < /p>{" "} <
                    /div>
            );
        };

        export default withRouter(Signup);

        /*

                        <form onSubmit={handleSubmit}>
                              Signup
                              <input
                                onChange={handleChange}
                                name="email"
                                placeholder="email"
                                value={inputs.email}
                              />{" "}
                              <input
                                onChange={handleChange}
                                name="password"
                                placeholder="password"
                                value={inputs.password}
                              />{" "}
                              <button> signup </button>{" "}
                              {errors.length > 0
                                ? errors.map((error) => <p style={{ color: "red" }}> {error} </p>)
                                : null}{" "}
                            </form>

                            */