import React from 'react';

const ContactUs = () => {

    return (
        <div className="ContactUs">
            <h1>Contact Us</h1>
            <p>Phone: xxxxxxxxxx</p>
            <p>Email: contact@futuresports.com</p>
            <p>Address: 16 Example Street, Melbourne VIC 3000</p>
            <h4>or fill out the form below:</h4>
            <form>
                <label>Name: </label>
                <input type='text' name='name' placeholder='Enter your name'></input><br></br>
                <label>Email: </label>
                <input type='email' name='email' placeholder='Enter your email'></input><br></br>
                <label>Send us a photo: </label>
                <input type='file' name='photo'></input><br></br>
                <label>Send us a message: </label><br></br>
                <textarea name='tInput' rows={5} cols={40} placeholder='Enter your message'></textarea><br></br>
                <button type="submit" value="click">Send</button>
            </form>
        </div>
    );
};

export default ContactUs;