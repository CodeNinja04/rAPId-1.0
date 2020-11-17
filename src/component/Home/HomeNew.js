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
import "./HomeNew.css";
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

const HomeNew = (props) => {
    const { handleSignout } = useContext(firebaseAuth);
    const [inHover, setHover] = useState(false);

    var ReactRotatingText = require("react-rotating-text");

    return ( <
        div className = "main" >
        <
        div className = "navbar" >
        <
        NavBar / >
        <
        /div>{" "} <
        div className = "text" >
        <
        ReactRotatingText items = {
            [
                "Hello USER",
                "Welcome to rAPId 1.0!! ",
                "we have two questions for you",
                "ALL THE BEST!!",
            ]
        }
        />{" "} <
        /div>{" "} <
        div className = "segment" > { " " } <
        Grid columns = { 2 }
        relaxed = "very" >
        <
        Grid.Column >
        <
        p >
        <
        Countdown timeTillDate = "11 09 2020, 6:00 am"
        timeFormat = "MM DD YYYY, h:mm a" /
        >
        <
        /p>{" "} <
        /Grid.Column>{" "} <
        Grid.Column >
        <
        p >
        <
        Segment padded size = "huge" >
        <
        Grid columns = { 1 } >
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
        } >
        { " " }
        TODO LIST { " " } <
        /Card.Header>{" "} <
        Card.Meta textAlign = "right" > { " " }
        50 POINTS { " " } <
        /Card.Meta>{" "} <
        Card.Description >
        <
        p style = {
            { color: "black" } } > { " " }
        Create a TODO SYSTEM list backend using any preffered langauge { " " } <
        /p>{" "} <
        /Card.Description>{" "} <
        /Card.Content>{" "} <
        /Card>{" "} <
        /Grid.Column>{" "} <
        Grid.Column > { " " } <
        Card fluid link href = "/Que2" >
        <
        Card.Content >
        <
        Card.Header textAlign = "left"
        style = {
            { color: "#4EC5F1" } } >
        { " " }
        BLOG SYSTEM { " " } <
        /Card.Header>{" "} <
        Card.Meta textAlign = "right" > { " " }
        100 POINTS { " " } <
        /Card.Meta>{" "} <
        Card.Description >
        <
        p style = {
            { color: "black" } } > { " " }
        Create a BLOG system backend using any preffered langauge { " " } <
        /p>{" "} <
        /Card.Description>{" "} <
        /Card.Content>{" "} <
        /Card>{" "} <
        /Grid.Column>{" "} <
        /Grid>{" "} <
        /Segment>{" "} <
        /p>{" "} <
        /Grid.Column>{" "} <
        /Grid>{" "} <
        Divider vertical hidden > { " " } <
        /Divider>{" "} <
        /div>{" "} <
        /div>
    );
};

export default HomeNew;