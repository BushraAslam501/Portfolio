import React from "react";
import "./Contact.css";
import theme from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

const Contact = () => {
const onSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  formData.append("access_key", "d4a40c5c-7ec2-408f-98e6-a5c3b83d6f75");

  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    });

    const res = await response.json();
    console.log("Web3Forms response:", res);

    if (res.success) {
      alert("Message sent successfully!");
      event.target.reset(); // Clear the form
    } else {
      alert("Submission failed. Please try again.");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("An error occurred. Please try again later.");
  }
};

  return (
    <div id= 'contact' className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme} alt="" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects and collaborations.
            Whether you have a creative idea, a business challenge, or just want
            to explore possibilities—feel free to reach out. I’d love to hear
            from you and see how we can work together!
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="email" loading="lazy" />
              <p>aslambushra92@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="call-me" loading="lazy" />
              <p>+923256986885</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="loca" loading="lazy" />
              <p>Lahore, Pakistan</p>
            </div>
          </div>
        </div>

        <form  onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text"  placeholder="Enter your name" name="name"/>

          <label htmlFor="">Your Email</label>
          <input type="email" placeholder="Enter your email" name="email"/>

          <label htmlFor="message">Write your message here</label>
          <textarea name="message" rows="8" placeholder="Write your message here" />

          <button type="submit" className="contact-submit">Submit Now</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
