import React from "react";

class Contact extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = this.state;
    const formUrl =
      "https://docs.google.com/forms/d/e/your-form-url-goes-here/formResponse";
    const formData = new FormData();
    formData.append("entry.your-form-entry-id-for-name", name);
    formData.append("entry.your-form-entry-id-for-email", email);
    formData.append("entry.your-form-entry-id-for-message", message);
    fetch(formUrl, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    })
      .then((response) => {
        // Handle successful form submission
        console.log("Form submitted successfully");
      })
      .catch((error) => {
        // Handle form submission error
        console.error("Form submission error:", error);
      });
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { name, email, message } = this.state;
    return (
      <div>
        <h2>Contact Us</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={message}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Contact;
