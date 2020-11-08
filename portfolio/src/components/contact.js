import React, { useState } from "react"

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const emailReg = RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
)

const Contact = () => {
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Subject: "",
    msg: "",
  })

  const [loading, setLoading] = useState(false)

  const { Email } = formData

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")
    setMessage("")
    if (!Email.match(emailReg)) {
      setError("Please enter a valid Email Address")
      setMessage("")
    } else {
      setLoading(true)
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData }),
      })
        .then(() => {
          setMessage("Success")
          setError("")
          setLoading(false)
        })
        .catch((error) => {
          setLoading(false)
          setMessage("Error")
        })
    }
  }
  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="contact-details">
          <h2>Lets works on your next project &rarr; </h2>
          <a href="mailto:elinekamaleo@gmail.com">elinekamaleo@gmail.com</a>
        </div>
        <div className="contact-form">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group">
              <label> Name</label>
              <input
                type="text"
                name="Name"
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            <div className="form-group">
              <label> Email</label>
              <input
                type="email"
                name="Email"
                onChange={(e) => handleChange(e)}
                required
              />
            </div>
            <div className="form-group">
              <label> Subject</label>
              <input
                type="text"
                name="Subject"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="form-control">
              <label> Message</label>
              <textarea
                id="message"
                cols="30"
                rows="5"
                name="msg"
                onChange={(e) => handleChange(e)}
              />
            </div>
            {message && (
              <p
                className={
                  message === "Success" ? "alert success" : "alert error"
                }
                id="alert"
              >
                {message === "Success"
                  ? "Your message was sent successful, will get back to you ASAP"
                  : "Error while submitting you message, please try again"}
              </p>
            )}
            {error && (
              <p className="alert error" id="alert">
                {error}
              </p>
            )}
            <div className="btns">
              <button className="btn-primary">
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
