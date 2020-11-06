import React from "react";

const Contact = () => {

  const handleSubmit = e => {
    e.preventDefault()
    alert("Sent")
  }
  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="contact-details">
          <h2>Lets works on your next project &rarr; </h2>
          <a href="mailto:elinekamaleo@gmail.com">elinekamaleo@gmail.com</a>
        </div>
        <div className="contact-form">
          <form onSubmit={e => handleSubmit(e)}>
            <div className="form-group">
              <label> Name</label>
              <input type="text" name="name" />
            </div>
            <div className="form-group">
              <label> Email</label>
              <input type="email" name="email" />
            </div>
            <div className="form-group">
              <label> Subject</label>
              <input type="text" name="subject" />
            </div>
            <div className="form-control">
              <label> Message</label>
              <textarea id="message" cols="30" rows="5"></textarea>
            </div>
            <div className="btns">
              <button className="btn-primary">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
