// undefinedVariable used to test error boundary

import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";
import Welcome from "./Welcome"

const TopComponent = () => {
    return (
        <div className="TopComponent">
            <Header />
            <Navigation />
            <Welcome />
            {/* {undefinedVariable} */}
        </div>
    );
};

export default TopComponent;