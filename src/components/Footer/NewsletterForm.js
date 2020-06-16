import React from "react";

export default function NewsletterForm() {
  const [formData, setFormData] = React.useState({
    email: "",
    firstName: "",
  });

  function handleChange(event) {
    const targetValue = event.target.value;
    const targetId = event.target.id;
    let newformData = { ...formData };
    newformData[targetId] = targetValue;
    console.log(newformData);
    setFormData(newformData);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Thanks! The newsletter will be sent to: " + formData.email);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="email"
        value={formData.email}
        placeholder="email"
        onChange={handleChange}
        type="text"
      />
      <input
        id="firstName"
        value={formData.firstName}
        placeholder="Name"
        onChange={handleChange}
        type="text"
      />
      <button type="submit">submit</button>
    </form>
  );
}
