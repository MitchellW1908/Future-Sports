// undefinedVariable used to test error boundary

import React from "react";

export default function Footer() {
  return (
    <div className="Footer">
        <ul className="FooterUl">
          <li>Privacy Statement</li>
          <li>Careers</li>
          <li>Terms and Conditions</li>
        </ul>
        {/* {undefinedVariable} */}
        <small>&copy; 2023 Simplicity Designs</small>
    </div>
  ); 
} 