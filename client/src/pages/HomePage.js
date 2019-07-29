import React, { Component } from "react";
import { Container } from "../components/Grid";
import { Link } from "react-router-dom";
import "./style.css";

class Home extends Component {

    render() {
        return (
            <Container>
            <div className="container-fluid styleHomePage">
                <p> &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;Cooking has become a stressful task that the average Canadian would prefer to spend more money on quick ready-to-eat meals as opposed to home-cooked meals. <i>According to statistics Canada 54 percent of Canadians eat out at least once a week</i>, while 40 percent of them say they either don't have any time to cook or don't know how to cook what they want to eat. Our team wanted to create an application that motivates the average Canadian make easy homemade meals and cut down the extra cost on food spent annually. And most importantly prevent cross-contamination in the kitchen while cooking. </p>
                <p> &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;Recipe Recite is an interactive way to follow instructions for recipes. A way in which the user does not have to physically touch their phone or laptop to move from step to step. This interactive interface is command-driven. Commands like “pause” and “play” prompt the application to navigate through the steps as desired by the user. This application is geared towards people of all ages and genders of all people. From the middles aged mom who wants to sharpen her cooking skills and broaden her recipe book. To the millennials who aspire to be chefs. To the single dads who now have the responsibility to provide food on the table for their kids.</p>
                <h6 style={{textAlign: "center"}}><b>Recipe Recite is an application that truly meets a need.</b></h6>

                <Link to={"/Search"}>
                    <div className="container-fluid stylePgLink">Click here to begin</div>
                </Link>
            </div>
            </Container>
        )
    }
}

export default Home;