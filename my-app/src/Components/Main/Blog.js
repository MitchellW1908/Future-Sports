import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1>Blog</h1>
            <div className='BlogContainer'>
                <div className="LeftBlogColumn">
                    <h2>Coach's corner</h2>
                    <h5>Match review, November 6, 2023</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>

                <div className="RightBlogColumn">
                    <h2>Coach's corner</h2>
                    <h5>Match preview, November 11, 2023</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;

// import React from "react";
// import { useState } from "react";

// function Blog (props) {

//   const maxChars = 35;

//   const [hidden, setHidden] = useState(true);

//   if (props.text.length <= maxChars) {
//     return (
//       <span>{props.text}</span>
//     );
//   }

//   return (
//     <span>
//       {hidden ? `${props.text.substr(0, maxChars).trim()} ...` : props.text}
//       {hidden ? (
//         <button onClick={() => setHidden(false)}> show more</button>
//       ) : (
//         <button onClick={() => setHidden(true)}> show less</button>
//       )}
//     </span>
//   );

// }

// export default Blog;