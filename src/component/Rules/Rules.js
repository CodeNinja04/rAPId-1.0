import React, { Component } from "react";
import { Message, Header, List } from "semantic-ui-react";
import Navbar from "../Navbar";
import "./Rules.css";
class Rules extends Component {
    state = {};
    render() {
        return ( <
            div >
            <
            Navbar / >

            <
            Header > RULES < /Header>{" "} <
            List ordered >
            <
            List.Item > One < /List.Item> <List.Item> Two </List.Item > { " " } <
            List.Item > Three < /List.Item>{" "} < /
            List > { " " } { " " } <
            /div>
        );
    }
}

export default Rules;