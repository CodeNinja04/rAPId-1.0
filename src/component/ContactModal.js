import React from "react";
import NavBar from "./Navbar";
import { Button } from "semantic-ui-react";

const ContactModal = () => {
    return ( <
        div >
        <
        NavBar / >
        <
        div style = {
            {
                textAlign: "center",
                fontSize: "3rem",
                fontWeight: "bold",
                color: "white",
                marginTop: "5%",
                fontFamily: "NexaBold"
            }
        } > { " " }
        CONTACT US { " " } <
        /div>{" "} <
        div style = {
            { textAlign: "center", marginTop: "5%" }
        } >
        <
        Button size = "massive"
        circular color = "facebook"
        icon = "facebook" / >
        <
        Button size = "massive"
        circular color = "twitter"
        icon = "twitter" / >
        <
        Button size = "massive"
        circular color = "linkedin"
        icon = "linkedin" / >
        <
        Button size = "massive"
        circular color = "instagram"
        icon = "instagram" /
        >
        <
        /div>{" "} < /
        div >
    );
};

export default ContactModal;