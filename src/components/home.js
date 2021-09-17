import React from "react";
import LoginForm from "./form";
import Navigation from "./navigation";
import Header from "./header";

export default class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <Header />
                <Navigation />
                <LoginForm />
            </div>
        );
    }
}