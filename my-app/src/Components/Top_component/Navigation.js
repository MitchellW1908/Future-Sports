import React,  { useState } from "react";

// const Navigation = () => {
//     return (
//         <div className="Navigation">
//             <h3>Navigation</h3>
//         </div>
//     );
// };

const Navigation = () => {
    const [selectedNavItem, setSelectedNavItem] = useState("welcome");
    const navItems = [
        { id: 1, title: "Home", name: "Welcome" },
        { id: 2, title: "About", name: "WelcomeParagraph" },
        { id: 3, title: "Gallery", name: "Gallery" },
        { id: 4, title: "News", name: "News" },
        { id: 5, title: "Matches", name: "Matches" },
        { id: 6, title: "Contact Us", name: "Contact Us"},
    ];

    return (
        <div className="Navigation">
            <ul className="NavigationList">
                {navItems.map((item) => {
                    return (
                        <li
                            key={item.id}
                            onClick={() => setSelectedNavItem(item.name)}
                            className={selectedNavItem ===item.name ? `activeNavItem` : ""}
                        >
                            <a href={`#${item.name}`} className="Link">{item.title}</a>
                        </li>
                    );
                })}
                <input type="text" placeholder="Search..." />
            </ul>
        </div>
    );
};

export default Navigation;