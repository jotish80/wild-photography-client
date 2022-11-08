import React from 'react';
import './Contact.css'
import { FaMailchimp, FaPhone,FaStreetView } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="container mt-14">

	<h1 className="text-center text-3xl font-semibold mb-4"><span>Contact Me</span></h1>

	<div className="wrapper">

	 
		<div className="company-info text-xl">
			<h3>Wild Photography</h3>

			<ul>
				<li><FaStreetView /> 44 Main Street, Venice, Italy</li>
				<li><FaPhone /> (+39) 3405026825</li>
				  <li ><FaMailchimp /> sarkerjotish80@gmail.com</li>
			</ul>
		</div>
		 

		 
		<div className="contact">
			<h3>E-mail Us</h3>

			<form id="contact-form">

				<p>
					<label>Name</label>
					<input type="text" name="name" id="name" required/>
				</p>

				<p>
					<label>Company</label>
					<input type="text" name="company" id="company"/>
				</p>

				<p>
					<label>E-mail Address</label>
					<input type="email" name="email" id="email" required/>
				</p>

				<p>
					<label>Phone Number</label>
					<input type="text" name="phone" id="phone"/>
				</p>

				<p className="full">
					<label>Message</label>
					<textarea name="message" rows="5" id="message"></textarea>
				</p>

				<p className="full">
					<button type="submit">Submit</button>
				</p>

			</form>
		 
		</div>
	 

	</div>
 
</div>
 
    );
};

export default Contact;