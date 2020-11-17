import React, { Component } from "react";
import NavBar from "../Navbar";
import "./Question.css";
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
    Card,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const src = "https://static.getpostman.com/assets/pm-logo-1.svg";

function Que1() {
    return ( <
        div >
        <
        NavBar / >
        <
        div className = "main" >
        <
        Grid columns = { 2 } >
        <
        Grid.Column textAlign = "center" >
        <
        container style = {
            { fontSize: "2rem" } } > { " " }
        QUE1: Create a backend
        for TODO list { " " } <
        /container>{" "} <
        /Grid.Column>{" "} <
        Grid.Column floated = "right"
        largeScreen = { 4 } >
        <
        Card style = {
            {
                backgroundColor: "#3eadcf",
            }
        }
        image = { src }
        href = "https://www.postman.com/"
        header = "POSTMAN"
        description = "Postman is a collaboration platform for API development. Postman's features simplify each step of building an API and streamline collaboration so you can create better APIs—faster." /
        > { " " } <
        /Grid.Column>{" "} <
        /Grid>{" "} <
        /div>{" "} <
        /div>
    );
}

export default Que1;

/*
<Card
            image={src}
            href="https://www.postman.com/"
            header="POSTMAN"
            meta="API Platform"
            description="Postman is a collaboration platform for API development. Postman's features simplify each step of building an API and streamline collaboration so you can create better APIs—faster."
          />
          */