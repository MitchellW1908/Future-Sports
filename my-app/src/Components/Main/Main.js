// undefinedVariable used to test error boundary

import React from "react";
import Gallery from "./Gallery";
import News from "./News";
import Matches from "./Matches";
import Blog from "./Blog";
import ContactUs from "./ContactUs";

const Main = () => {
    return (
        <div className="Main">
            <Gallery />
            <News />
            <Matches />
            <Blog />
            <ContactUs />
            {/* {undefinedVariable} */}
        </div>
    );
};

export default Main;