import React, { useContext, useState } from "react";
import { firebaseAuth } from "../../provider/AuthProvider";
import Countdown from "../Countdown/Countdown";
import ContactModal from "../ContactModal";
import "semantic-ui-css/semantic.min.css";
import ReactPlayer from "react-player";
import NavBar from "../Navbar";
import { fadeIn } from "react-animations";
import Typical from "react-typical";
import styled, { keyframes } from "styled-components";

import Player from "./Player";
import "./Home.css";
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
    Card,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const FadeInAnimation = keyframes `${fadeIn}`;
const FadeInDiv = styled.div `
  animation: infinite 10s ${FadeInAnimation};
`;

const Home = (props) => {
    const { handleSignout } = useContext(firebaseAuth);
    const [inHover, setHover] = useState(false);

    const { token, user } = useContext(firebaseAuth);
    console.log(token);
    console.log("home");
    console.log(user);

    var ReactRotatingText = require("react-rotating-text");

    return ( <
        div className = "main" >
        <
        div className = "navbar" >
        <
        NavBar / >
        <
        /div>{" "} <
        div className = "countdown"
        onMouseEnter = {
            () => setHover(true)
        }
        onMouseLeave = {
            () => setHover(false)
        } > { " " } <
        FadeInDiv > { " " } {
            !inHover && ( <
                Countdown timeTillDate = "11 09 2020, 6:00 am"
                timeFormat = "MM DD YYYY, h:mm a" /
                >
            )
        } { " " } { inHover && < Player / > } { " " } <
        /FadeInDiv>{" "} < /
        div > { " " } <
        div className = "segment" >
        <
        p >
        <
        ReactRotatingText style = {
            {
                color: "white",
                alignSelf: "center",
                display: "flex",
                paddingTop: "20px",
                fontSize: "3rem",
                justifyContent: "center",
            }
        }
        items = {
            [
                'HELLO ', { user },
                "Welcome to rAPId 1.0!! ",
                "we have two questions for you",
                "ALL THE BEST!!",
            ]
        }
        />{" "} < /
        p > { " " } <
        Divider hidden / >
        <
        Segment padded size = "huge"
        style = {
            { backgroundColor: "black" }
        } > { " " } <
        Grid columns = { 2 } >
        <
        Grid.Column >
        <
        Card fluid link href = "/Que1" >
        <
        Card.Content >
        <
        Card.Header style = {
            {
                color: "#4EC5F1",
                textAlign: "start",
            }
        } > { " " }
        TODO LIST { " " } <
        /Card.Header>{" "} <
        Card.Meta textAlign = "right" > 50 POINTS < /Card.Meta>{" "} <
        Card.Description >
        <
        p style = {
            { color: "black" }
        } > { " " }
        Create a TODO SYSTEM list backend using any preffered langauge { " " } <
        /p>{" "} < /
        Card.Description > { " " } <
        /Card.Content>{" "} < /
        Card > { " " } <
        /Grid.Column>{" "} <
        Grid.Column > { " " } <
        Card fluid link href = "/Que2" >
        <
        Card.Content >
        <
        Card.Header textAlign = "left"
        style = {
            { color: "#4EC5F1" }
        } > { " " }
        BLOG SYSTEM { " " } <
        /Card.Header>{" "} <
        Card.Meta textAlign = "right" > 100 POINTS < /Card.Meta>{" "} <
        Card.Description >
        <
        p style = {
            { color: "black" }
        } > { " " }
        Create a BLOG system backend using any preffered langauge { " " } <
        /p>{" "} < /
        Card.Description > { " " } <
        /Card.Content>{" "} < /
        Card > { " " } <
        /Grid.Column>{" "} < /
        Grid > { " " } <
        /Segment>{" "} < /
        div > { " " } <
        /div>
    );
};

export default Home;