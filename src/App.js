import React, { useContext } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import Signup from "./component/Signup";
import Signin from "./component/Signin";
import Home from "./component/Home/Home";

import Page404 from "./component/Error/Page404";
import Page500 from "./component/Error/Page500";
import Rules from "./component/Rules/Rules";
import Que1 from "./component/Question/Que1";
import Que2 from "./component/Question/Que2";

import "./App.css";
import { firebaseAuth } from "./provider/AuthProvider";
import ContactModal from "./component/ContactModal";

function App() {
    const { token } = useContext(firebaseAuth);
    console.log(token);
    return ( <
        >
        { " " } { /* switch allows switching which components render.  */ } { " " } <
        Switch > { " " } { /* route allows you to render by url path */ } { " " } <
        Route exact path = "/"
        render = {
            (rProps) => (token === null ? < Signin / > : < Home / > )
        }
        />{" "} <
        Route exact path = "/signup"
        component = { Signup }
        />{" "} <
        Route exact path = "/Page404"
        component = { Page404 }
        />{" "} <
        Route exact path = "/Page500"
        component = { Page500 }
        />{" "} <
        Route exact path = "/Rules"
        component = { Rules }
        />{" "} <
        Route exact path = "/Que1"
        component = { Que1 }
        />{" "} <
        Route exact path = "/Que2"
        component = { Que2 }
        />{" "} <
        Route exact path = "/Contact"
        component = { ContactModal }
        />{" "} < /
        Switch > { " " } <
        />
    );
}

export default App;