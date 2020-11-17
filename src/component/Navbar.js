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
    Modal,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import ContactModal from "./ContactModal";
import React, { useContext } from "react";
import { firebaseAuth } from "../provider/AuthProvider";

import { Link } from "react-router-dom";

import logo from "./pic2.png";

export default class NavBar extends React.Component {
    state = { activeItem: "" };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    getComponent = (event) => {
        return <ContactModal / > ;
    };

    render() {
        const { activeItem } = this.state;

        return ( <
            Segment inverted >
            <
            Menu inverted secondary borderless > { " " } <
            Menu.Item fitted = "vertically"
            name = "RULES"
            as = { Link }
            to = "Rules"
            active = { activeItem === "contact" }
            onClick = { this.handleItemClick }
            />{" "} <
            Menu.Item fitted = "vertically"
            name = "CONTACT US"
            active = { activeItem === "contact" }
            onClick = { this.handleItemClick }
            as = { Link }
            to = "Contact" /
            >
            { " " } <
            Menu.Item fitted = "vertically" > { " " } <
            Image floated = "right"
            src = { logo }
            size = "small"
            style = {
                { marginLeft: "250%" }
            }
            />{" "} < /
            Menu.Item > { " " } <
            Menu.Item position = "right" >
            <
            Button as = "a"
            inverted primary size = "huge"
            onClick = { this.handleSignout } >
            LOG OUT { " " } <
            /Button>{" "} < /
            Menu.Item > { " " } <
            /Menu>{" "} < /
            Segment >
        );
    }
}

/*
<h1
            className="title"
            style={{
              Color: "#89d4cf",
              marginTop: ".5%",
              marginLeft: "20%",
              fontSize: "2.5rem",
            }}
          >
            rAPId 1.0{" "}
          </h1>
          */